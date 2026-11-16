const assert = require("node:assert/strict");
const { test } = require("node:test");
const { loadSource } = require("./helpers/load-source.cjs");
const { resolveLocale, localeFromLanguage } = loadSource("src/i18n/locale.ts");
const { dictionaries } = loadSource("src/i18n/dictionaries.ts");
const { projects } = loadSource("src/app/data/projects.tsx");

for (const [language, expected] of [
  ["en", "en"],
  ["en-US", "en"],
  ["es", "es"],
  ["es-MX", "es"],
  ["ES-es", "es"],
  ["zh", "zh"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh"],
  ["zh-Hans-SG", "zh"],
  ["cmn-Hans", "zh"],
  ["fr", "en"],
  ["ja", "en"],
  ["", "en"],
]) {
  test(`language tag ${JSON.stringify(language)} resolves to ${expected}`, () => {
    assert.equal(localeFromLanguage(language), expected);
  });
}

for (const [header, expected] of [
  [null, "en"],
  ["", "en"],
  ["es-MX,es;q=0.9,en;q=0.8", "es"],
  ["zh-CN,zh;q=0.9", "zh"],
  ["fr-FR,es;q=0.8", "en"],
  ["en;q=0.2,es;q=0.9", "es"],
  ["zh;q=0,es;q=0.8", "es"],
  ["es;q=invalid,zh;q=0.9", "zh"],
  ["es;q=2,en;q=0.5", "en"],
  ["*", "en"],
]) {
  test(`browser preferences ${JSON.stringify(header)}`, () => {
    assert.equal(resolveLocale(header, null), expected);
  });
}

test("explicit selection overrides browser preferences; invalid cookies fall back safely", () => {
  assert.equal(resolveLocale("es", "portfolio-language=en"), "en");
  assert.equal(
    resolveLocale("en", "other=value; portfolio-language=zh; extra=1"),
    "zh",
  );
  assert.equal(resolveLocale("zh", "portfolio-language=es"), "es");
  assert.equal(resolveLocale("es", "portfolio-language=fr"), "es");
  assert.equal(resolveLocale(null, "portfolio-language=%3Cscript%3E"), "en");
  assert.equal(resolveLocale("es", "fake-portfolio-language=zh"), "es");
});

function leafPaths(value, prefix = "") {
  if (typeof value === "string") {
    assert.ok(value.trim(), prefix);
    return [prefix];
  }
  return Object.entries(value)
    .flatMap(([key, child]) => leafPaths(child, `${prefix}.${key}`))
    .sort();
}

for (const locale of ["en", "es", "zh"]) {
  test(`${locale}: dictionary is complete, with all projects, tools and placeholders`, () => {
    const t = dictionaries[locale];
    assert.deepEqual(leafPaths(t), leafPaths(dictionaries.en));
    assert.equal(t.skills.tools.length, 30);
    assert.equal(t.gallery.projects.length, projects.length);
    assert.ok(t.skills.details.includes("{tool}"));
    assert.ok(t.gallery.labels["{index} of {total}"].includes("{index}"));
    assert.ok(t.gallery.labels["{index} of {total}"].includes("{total}"));
    assert.ok(t.nav.logo.includes("meaPERITIA"));
    if (locale !== "en") {
      for (const section of ["hero", "contact", "metadata"])
        assert.notDeepEqual(t[section], dictionaries.en[section]);
      for (let i = 0; i < 30; i++)
        assert.notEqual(
          t.skills.tools[i].description,
          dictionaries.en.skills.tools[i].description,
        );
      for (let i = 0; i < projects.length; i++)
        assert.notEqual(
          t.gallery.projects[i].summary,
          dictionaries.en.gallery.projects[i].summary,
        );
    }
  });

  test(`${locale}: server HTML language, provider and metadata use the same locale`, async () => {
    const font = () => ({ variable: "font-variable" });
    const layout = loadSource("src/app/layout.tsx", {
      "next/font/google": { Geist: font, Geist_Mono: font, Rajdhani: font },
      "next/headers": {
        headers: async () =>
          new Headers({ "accept-language": locale, "x-nonce": "test-nonce" }),
      },
      "./globals.css": {},
    });
    const tree = await layout.default({ children: "content" });
    assert.equal(tree.props.lang, locale === "zh" ? "zh-CN" : locale);
    const body = tree.props.children.find((node) => node.type === "body");
    assert.equal(body.props.children[0].props.initialLocale, locale);
    const metadata = await layout.generateMetadata();
    assert.equal(metadata.title, "meaPERITIA — Garry Molleno Jr.");
    assert.equal(
      metadata.description,
      dictionaries[locale].metadata.description,
    );
    assert.equal(
      metadata.openGraph.locale,
      dictionaries[locale].metadata.locale,
    );
  });
}
