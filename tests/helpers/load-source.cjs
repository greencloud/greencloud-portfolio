const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Compile real TypeScript in memory, with optional mocks at framework boundaries.
function loadSource(relativePath, mocks = {}, cache = new Map()) {
  const filename = path.resolve(relativePath);
  if (cache.has(filename)) return cache.get(filename).exports;
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  cache.set(filename, loaded);
  const originalRequire = loaded.require.bind(loaded);
  loaded.require = (id) => {
    if (Object.hasOwn(mocks, id)) return mocks[id];
    if (id.startsWith(".")) {
      const source = [".ts", ".tsx"]
        .map((extension) =>
          path.resolve(path.dirname(filename), id + extension),
        )
        .find((candidate) => fs.existsSync(candidate));
      if (source) return loadSource(source, mocks, cache);
    }
    return originalRequire(id);
  };
  loaded._compile(compiled, filename);
  return loaded.exports;
}

module.exports = { loadSource };
