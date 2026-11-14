import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectsGallery from "../components/ProjectsGallery";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <Nav />

      <main id="home" className="bg-gray-50 text-gray-900">
        {/* Hero / Intro */}
        <section id="about" className="pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 header-title">
                Code. Create. Deliver.
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Transforming ideas into scalable, dynamic, and user-friendly
                platforms.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold">
                  Hi, my name is Garry,
                </h2>
                <p className="text-2xl text-indigo-800 font-medium">
                  Full Stack Developer
                </p>
                <hr className="my-4" />
                <p className="text-base text-gray-600">
                  I specialize in developing custom dynamic web-based
                  applications designed to meet the unique needs of businesses
                  of all sizes—from small local companies to enterprise-level
                  organizations. Leveraging my expertise in React, NEXT.js,
                  Node.js, Express, MySQL, PostgreSQL, PHP, and Python, combined
                  with modern front-end tools like Bootstrap, Tailwind CSS,
                  LiquidJS, and jQuery, I create solutions that are not only
                  visually polished but also secure, scalable, and optimized for
                  performance.
                </p>

                <div className="mt-4">
                  <a
                    href="#connect"
                    className="inline-block px-4 py-2 bg-indigo-800 text-white font-semibold rounded-lg mr-2"
                  >
                    Let's talk
                  </a>
                  <a
                    href="#projects"
                    className="inline-block px-4 py-2 border border-gray-300 font-semibold rounded-lg"
                  >
                    See projects
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/webmaster.webp"
                alt="Webmaster"
                sizes="(min-width: auto) 50vw, 100vw"
                preload
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Skills / Tools */}
        <section id="techstack" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">
              Tech Stack: My Tools of the Trade
            </h3>
            <p className="text-base text-gray-600 mb-8">
              These are some of the tools, technologies, and frameworks that
              shape my development workflow.
            </p>

            <TechStack />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <ProjectsGallery />
        </section>

        {/* Contact */}
        <section id="connect" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-base text-gray-600 mb-4">
              Stuck on what to do next? Let's connect and create something
              amazing together.
            </p>

            <div className="space-y-2">
              <p>San Pablo, Santo Tomas City, Batangas</p>
              <p>
                <a
                  href="mailto:greencloud@linuxmail.org"
                  className="text-indigo-600"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
