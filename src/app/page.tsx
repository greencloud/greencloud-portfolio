"use client";
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
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
                  <a href="#connect" className="inline-block px-4 py-2 bg-indigo-800 text-white rounded-lg mr-2">Let's talk</a>
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
        <section id="techstack" className="py-12 bg-white">
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
                'HTML 5','CSS 3','SASS/SCSS','Tailwind CSS','Bootstrap','C Programming','PHP','Python',
                'Bash Scripting','JavaScript','TypeScript','ReactJS','Next.js','Node.js','jQuery',
                'Electron','WordPress','CodeIgniter','Laravel','MySQL','PostgreSQL','AWS','Vercel',
                'Git/Github','VS Code','Inkscape','Blender 3D','GNU/Linux','FreeBSD','Cybersecurity'
              ];
              const images = [
                'icon_html5.svg','icon_css3.svg','icon_sass.svg','icon_tailwind.svg','icon_bootstrap.svg','icon_c.svg',
                'icon_php.svg','icon_python.svg','icon_bash.svg','icon_javascript.svg','icon_typescript.svg',
                'icon_reactjs.svg','icon_nextjs.svg','icon_nodejs.svg','icon_jquery.svg',
                'icon_electron.svg','icon_wordpress.svg','icon_codeigniter.svg',
                'icon_laravel.svg','icon_mysql.svg','icon_postgresql.svg','icon_aws.svg','icon_vercel.svg','icon_github.svg',
                'icon_vscode.svg','icon_inkscape.svg','icon_blender.svg','icon_linux.svg','icon_freebsd.svg',
                'icon_cybersecurity.svg'
              ];
              // Modal state
              const [modalOpen, setModalOpen] = useState(false);
              const [modalIdx, setModalIdx] = useState<number|null>(null);

              // Modal content (can be expanded with more info per tool)
              const toolDescriptions: Record<string, string> = {
                'HTML 5': 'Markup language for structuring web content. HTML 5 is the backbone of web development, providing the essential structure for web pages and applications.',
                'CSS 3': 'Styling language for web pages. CSS 3 introduces advanced styling features like animations, transitions, and flexbox layouts. It is the cornerstone for creating visually appealing and responsive web designs.',
                'SASS/SCSS': 'CSS preprocessor for advanced styling. SASS/SCSS enhances CSS with features like variables, nested rules, and mixins, making it easier to manage complex stylesheets in large projects.',
                'Tailwind CSS': 'Utility-first CSS framework for rapid UI development. Tailwind CSS provides a set of pre-defined classes that enable developers to build custom designs quickly without writing extensive custom CSS.',
                'Bootstrap': 'Popular CSS framework for responsive design. Bootstrap provides a collection of pre-designed components and a responsive grid system, allowing developers to quickly build mobile-first websites and applications.',
                'C Programming': 'General-purpose programming language. C is widely used for system programming, embedded systems, and performance-critical applications. I use C for low-level programming and understanding core computing concepts. C is my favorite progamming language of all time.',
                'PHP': 'Server-side scripting language for web development. I used PHP mainly when I am working with WordPress and other CMS platforms.',
                'Python': 'Versatile programming language for web, data, and more. Python is particularly useful for backend development, automation, and data analysis tasks. I use it extensively especially for image processing and data manipulation.',
                'Bash Scripting': 'Unix shell and command language. Bash is essential for scripting and automating tasks in Unix-like operating systems. I use Bash for writing scripts to automate development workflows and system administration tasks.',
                'JavaScript': 'Core scripting language for web interactivity. JavaScript enables dynamic content and interactive features on websites, making it an essential tool for modern web development.',
                'TypeScript': 'Typed superset of JavaScript for scalable apps. TypeScript adds static types to JavaScript, improving code quality and maintainability, especially in large-scale applications.',
                'ReactJS': 'JavaScript library for building user interfaces. ReactJS allows developers to create reusable UI components and manage application state efficiently, making it ideal for building complex web applications.',
                'Next.js': 'React framework for server-side rendering and static sites. Next.js enhances React applications with features like server-side rendering, static site generation, and API routes, improving performance and SEO. I use Next.js mainly as my go to for frontend development while pairing it with various backend technologies such as Node.js/Express, Python, and others.',
                'Node.js': 'JavaScript runtime for backend development. Node.js enables server-side scripting with JavaScript, allowing developers to build scalable network applications and APIs.',
                'jQuery': 'JavaScript library for DOM manipulation. jQuery simplifies tasks like event handling, animation, and AJAX interactions, making it easier to work with HTML documents.',
                'Electron': 'Framework for building desktop apps with web tech. Electron allows developers to create cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.',
                'WordPress': 'Popular CMS for websites and blogs. WordPress is a flexible content management system that powers a significant portion of the web, allowing users to create and manage websites with ease.',
                'CodeIgniter': 'PHP framework for rapid web development. CodeIgniter is a lightweight PHP framework that provides a simple and elegant toolkit for building web applications quickly.',
                'Laravel': 'Modern PHP framework for web applications. Laravel offers a robust set of tools and features for building scalable and maintainable web applications, including an expressive syntax, ORM, and built-in authentication.',
                'MySQL': 'Relational database management system. MySQL is a widely used open-source database system that provides reliable data storage and retrieval for web applications.',
                'PostgreSQL': 'Advanced open-source relational database. PostgreSQL offers powerful features like advanced indexing, full-text search, and support for complex queries, making it suitable for large-scale applications. This is my go to RDBMS for most of my projects.',
                'AWS': 'Comprehensive cloud computing services. Amazon Web Services (AWS) provides a wide range of cloud-based services, including computing power, storage, and databases, enabling developers to build and deploy applications in the cloud. I use various AWS services such as EC2, S3, RDS, and Lambda for hosting and managing web applications.',
                'Vercel': 'Cloud platform for static sites and serverless functions. Vercel is optimized for frontend frameworks like Next.js, providing seamless deployment and scalability for web applications. I use Vercel mainly for deploying my Next.js applications due to its ease of use and performance optimizations.',
                'Git/Github': 'Version control and code hosting platform. Git is a distributed version control system that helps developers track changes in their codebase, while GitHub provides a collaborative platform for hosting and sharing code repositories. Very useful for CI/CD workflows via GitHub Actions.',
                'VS Code': 'Popular code editor by Microsoft. VS Code is a lightweight yet powerful code editor that supports a wide range of programming languages and extensions, enhancing developer productivity.',
                'Inkscape': 'Open-source vector graphics editor. Inkscape is a powerful tool for creating and editing vector images, making it ideal for designing logos, icons, and other scalable graphics.',
                'Blender 3D': 'Open-source 3D creation suite. Blender 3D is a comprehensive tool for 3D modeling, animation, rendering, and more. I use it mainly for creating 3D assets and visualizations.',
                'GNU/Linux': 'I began tinkering with Linux (Debian) back in 1996, and I have been using Arch Linux as my daily driver since 2005. Linux offers a stable, highly customizable environment for development, supported by a rich ecosystem of open-source tools and software.',
                'FreeBSD': 'UNIX-like operating system, FreeBSD is known for its performance, security, and advanced networking features. I use FreeBSD mainly for server deployments and network services. As well as some othe extra curricular activities like pfSense firewall, FreeNAS storage server, and others.',
                'Cybersecurity': 'Practices and tools for securing systems. Cybersecurity involves protecting computer systems and networks from threats and vulnerabilities. I apply cybersecurity best practices to ensure the integrity, confidentiality, and availability of applications and data.',
              };

              // Modal component
              const Modal = ({ idx }: { idx: number }) => (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                  onClick={() => setModalOpen(false)}
                  aria-modal="true"
                  role="dialog"
                >
                  <div
                    className="bg-white rounded-lg shadow-lg p-8 max-w-[500px] w-full relative flex flex-col items-center mx-1.5 mt-[100px] mb-[100px]"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                      onClick={() => setModalOpen(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <Image
                      src={`/icons/${images[idx]}`}
                      alt={tools[idx]}
                      width={64}
                      height={64}
                      style={{ objectFit: 'contain' }}
                      className="mb-4"
                    />
                    <h4 className="text-xl font-bold mb-2 text-center">{tools[idx]}</h4>
                    <p className="text-gray-700 text-center mb-2">{toolDescriptions[tools[idx]]}</p>
                  </div>
                </div>
              );

              return (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {tools.map((tool, idx) => (
                      <button
                        key={tool}
                        className="flex flex-col items-center p-4 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        type="button"
                        onClick={() => { setModalOpen(true); setModalIdx(idx); }}
                        aria-label={`Show details for ${tool}`}
                      >
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
                      </button>
                    ))}
                  </div>
                  {modalOpen && modalIdx !== null && <Modal idx={modalIdx} />}
                </>
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
