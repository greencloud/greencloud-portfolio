import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProjectsGallery from '../components/ProjectsGallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>meaPERITIA — Garry Molleno Jr.</title>
        <meta name="description" content="Explore the portfolio of Garry Molleno Jr., a web developer specializing in custom dynamic web-based applications. Discover expertise in modern web technologies, recent projects, and professional digital solutions tailored for businesses of any scale." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main id="home" className="bg-gray-50 text-gray-900">
        {/* Hero / Intro */}
        <section className="pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 header-title">Code. Create. Deliver.</h1>
              <p className="text-lg text-gray-700 mb-6">Transforming ideas into scalable, dynamic, and user-friendly platforms.</p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold">Hi, my name is Garry,</h2>
                <p className="text-2xl text-indigo-800 font-medium">Full Stack Developer</p>
                <hr className="my-4" />
                <p className="text-sm text-gray-600">I specialize in developing custom dynamic web-based applications designed to meet the unique needs of businesses of all sizes—from small local companies to enterprise-level organizations. Leveraging my expertise in React, NEXT.js, Node.js, Express, MySQL, PostgreSQL, PHP, and Python, combined with modern front-end tools like Bootstrap, Tailwind CSS, LiquidJS, and jQuery, I create solutions that are not only visually polished but also secure, scalable, and optimized for performance.</p>

                <div className="mt-4">
                  <a href="#connect" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg mr-2">Let's talk</a>
                  <a href="#projects" className="inline-block px-4 py-2 border border-gray-300 rounded-lg">See projects</a>
                </div>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden bg-gray-200">
              {/*
                The original site uses images from portfolio.sectorzlabs.com.
                Example remote image path used here — replace with a real image path or local image if necessary.
              */}
              <Image src="/webmaster.webp"
                     alt="Webmaster" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Skills / Tools */}
        <section id="skills" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">Tech Stack: My Tools of the Trade</h3>
            <p className="text-sm text-gray-600 mb-8">These are some of the tools, technologies, and frameworks that shape my development workflow.</p>

            {/* Define tools and corresponding images */}
            {/*
              The order of images should match the order of tools.
              Example: ['icon_html5.svg', 'icon_css3.svg', ...]
            */}
            {(() => {
              const tools = [
                'HTML 5','CSS 3','SASS/SCSS','Bootstrap','PHP','Python','JavaScript','TypeScript',
                'ReactJS','Next.js','Node.js','jQuery','Electron','WordPress','CodeIgniter','Laravel',
                'MySQL','PostgreSQL','Git/Github','VS Code','Blender 3D','GNU/Linux','FreeBSD','Cybersecurity'
              ];
              const images = [
                'icon_html5.svg','icon_css3.svg','icon_sass.svg','icon_bootstrap.svg','icon_php.svg',
                'icon_python.svg','icon_javascript.svg','icon_typescript.svg','icon_reactjs.svg','icon_nextjs.svg',
                'icon_nodejs.svg','icon_jquery.svg','icon_electron.svg','icon_wordpress.svg','icon_codeigniter.svg',
                'icon_laravel.svg','icon_mysql.svg','icon_postgresql.svg','icon_github.svg','icon_vscode.svg',
                'icon_blender.svg','icon_linux.svg','icon_freebsd.svg','icon_cybersecurity.svg'
              ];
              return (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                  {tools.map((tool, idx) => (
                    <div key={tool} className="flex flex-col items-center p-4 border border-gray-200 rounded">
                      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                        <Image
                          src={`/icons/${images[idx]}`}
                          alt={tool}
                          width={48}
                          height={48}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <div className="mt-3 text-sm text-center">{tool}</div>
                    </div>
                  ))}
                </div>
              );
            })()}
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
            <p className="text-sm text-gray-600 mb-4">Stuck on what to do next? Let's connect and create something amazing together.</p>

            <div className="space-y-2">
              <p>San Pablo, Santo Tomas City, Batangas</p>
              <p><a href="mailto:greencloud@linuxmail.org" className="text-indigo-600">greencloud@linuxmail.org</a></p>
              <p>(+63) 939-738-1182</p>
              <p><a href="https://m.me/aureliusrasmus" className="hover:underline">m.me/aureliusrasmus</a> &bull; <a href="https://t.me/SectorZLabs" className="hover:underline">t.me/SectorZLabs</a></p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
