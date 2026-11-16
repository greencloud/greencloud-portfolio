"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageProvider";
import Nav from "../components/Nav";
import ProjectsGallery from "../components/ProjectsGallery";
import TechStack from "../components/TechStack";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Nav />

      <main
        id="home"
        className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      >
        {/* Hero / Intro */}
        <section id="about" className="pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="hero-copy min-w-0">
              <h1 className="mb-4 header-title">{t.hero.title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t.hero.intro}
              </p>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold">{t.hero.greeting}</h2>
                <p className="text-2xl text-indigo-800 dark:text-indigo-300 font-medium">
                  {t.hero.role}
                </p>
                <hr className="my-4" />
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {t.hero.bio}
                </p>

                <div className="mt-4">
                  <a
                    href="#connect"
                    className="inline-block px-4 py-2 bg-indigo-800 text-white font-semibold rounded-lg mr-2"
                  >
                    {t.hero.talk}
                  </a>
                  <a
                    href="#projects"
                    className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 font-semibold rounded-lg"
                  >
                    {t.hero.projects}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                src="/webmaster.webp"
                alt={t.hero.portrait}
                sizes="(min-width: 768px) 50vw, 100vw"
                preload
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Skills / Tools */}
        <section id="techstack" className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">{t.skills.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
              {t.skills.intro}
            </p>

            <TechStack />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <ProjectsGallery />
        </section>

        {/* Contact */}
        <section id="connect" className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{t.contact.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              {t.contact.intro}
            </p>

            <div className="space-y-2">
              <p>{t.contact.address}</p>
              <p>
                <a
                  href="mailto:greencloud@linuxmail.org"
                  className="text-indigo-600 dark:text-indigo-400"
                >
                  greencloud@linuxmail.org
                </a>
              </p>
              <p>
                <a href="tel:+639397381182">(+63) 939-738-1182</a>
              </p>
              <p>
                <a
                  href="https://m.me/aureliusrasmus"
                  className="hover:underline"
                >
                  m.me/aureliusrasmus
                </a>{" "}
                &bull;{" "}
                <a href="https://t.me/SectorZLabs" className="hover:underline">
                  t.me/SectorZLabs
                </a>
              </p>
            </div>
            <ThemeToggle />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
