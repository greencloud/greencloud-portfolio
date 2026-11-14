"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function TechStack() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tools = [
    "HTML 5",
    "CSS 3",
    "SASS/SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "C Programming",
    "PHP",
    "Python",
    "Bash Scripting",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "jQuery",
    "Electron",
    "WordPress",
    "CodeIgniter",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Git/Github",
    "VS Code",
    "Inkscape",
    "Blender 3D",
    "GNU/Linux",
    "FreeBSD",
    "Cybersecurity",
  ];
  const images = [
    "icon_html5.svg",
    "icon_css3.svg",
    "icon_sass.svg",
    "icon_tailwind.svg",
    "icon_bootstrap.svg",
    "icon_c.svg",
    "icon_php.svg",
    "icon_python.svg",
    "icon_bash.svg",
    "icon_javascript.svg",
    "icon_typescript.svg",
    "icon_reactjs.svg",
    "icon_nextjs.svg",
    "icon_nodejs.svg",
    "icon_jquery.svg",
    "icon_electron.svg",
    "icon_wordpress.svg",
    "icon_codeigniter.svg",
    "icon_laravel.svg",
    "icon_mysql.svg",
    "icon_postgresql.svg",
    "icon_aws.svg",
    "icon_vercel.svg",
    "icon_github.svg",
    "icon_vscode.svg",
    "icon_inkscape.svg",
    "icon_blender.svg",
    "icon_linux.svg",
    "icon_freebsd.svg",
    "icon_cybersecurity.svg",
  ];
  // Modal state
  const [modalIdx, setModalIdx] = useState(0);

  // Modal content (can be expanded with more info per tool)
  const toolDescriptions: Record<string, string> = {
    "HTML 5":
      "Markup language for structuring web content. HTML 5 is the backbone of web development, providing the essential structure for web pages and applications.",
    "CSS 3":
      "Styling language for web pages. CSS 3 introduces advanced styling features like animations, transitions, and flexbox layouts. It is the cornerstone for creating visually appealing and responsive web designs.",
    "SASS/SCSS":
      "CSS preprocessor for advanced styling. SASS/SCSS enhances CSS with features like variables, nested rules, and mixins, making it easier to manage complex stylesheets in large projects.",
    "Tailwind CSS":
      "Utility-first CSS framework for rapid UI development. Tailwind CSS provides a set of pre-defined classes that enable developers to build custom designs quickly without writing extensive custom CSS.",
    Bootstrap:
      "Popular CSS framework for responsive design. Bootstrap provides a collection of pre-designed components and a responsive grid system, allowing developers to quickly build mobile-first websites and applications.",
    "C Programming":
      "General-purpose programming language. C is widely used for system programming, embedded systems, and performance-critical applications. I use C for low-level programming and understanding core computing concepts. C is my favorite progamming language of all time.",
    PHP: "Server-side scripting language for web development. I used PHP mainly when I am working with WordPress and other CMS platforms.",
    Python:
      "Versatile programming language for web, data, and more. Python is particularly useful for backend development, automation, and data analysis tasks. I use it extensively especially for image processing and data manipulation.",
    "Bash Scripting":
      "Unix shell and command language. Bash is essential for scripting and automating tasks in Unix-like operating systems. I use Bash for writing scripts to automate development workflows and system administration tasks.",
    JavaScript:
      "Core scripting language for web interactivity. JavaScript enables dynamic content and interactive features on websites, making it an essential tool for modern web development.",
    TypeScript:
      "Typed superset of JavaScript for scalable apps. TypeScript adds static types to JavaScript, improving code quality and maintainability, especially in large-scale applications.",
    React:
      "JavaScript library for building user interfaces. React allows developers to create reusable UI components and manage application state efficiently, making it ideal for building complex web applications.",
    "Next.js":
      "React framework for server-side rendering and static sites. Next.js enhances React applications with features like server-side rendering, static site generation, and API routes, improving performance and SEO. I use Next.js mainly as my go to for frontend development while pairing it with various backend technologies such as Node.js/Express, Python, and others.",
    "Node.js":
      "JavaScript runtime for backend development. Node.js enables server-side scripting with JavaScript, allowing developers to build scalable network applications and APIs.",
    jQuery:
      "JavaScript library for DOM manipulation. jQuery simplifies tasks like event handling, animation, and AJAX interactions, making it easier to work with HTML documents.",
    Electron:
      "Framework for building desktop apps with web tech. Electron allows developers to create cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.",
    WordPress:
      "Popular CMS for websites and blogs. WordPress is a flexible content management system that powers a significant portion of the web, allowing users to create and manage websites with ease.",
    CodeIgniter:
      "PHP framework for rapid web development. CodeIgniter is a lightweight PHP framework that provides a simple and elegant toolkit for building web applications quickly.",
    Laravel:
      "Modern PHP framework for web applications. Laravel offers a robust set of tools and features for building scalable and maintainable web applications, including an expressive syntax, ORM, and built-in authentication.",
    MySQL:
      "Relational database management system. MySQL is a widely used open-source database system that provides reliable data storage and retrieval for web applications.",
    PostgreSQL:
      "Advanced open-source relational database. PostgreSQL offers powerful features like advanced indexing, full-text search, and support for complex queries, making it suitable for large-scale applications. This is my go to RDBMS for most of my projects.",
    AWS: "Comprehensive cloud computing services. Amazon Web Services (AWS) provides a wide range of cloud-based services, including computing power, storage, and databases, enabling developers to build and deploy applications in the cloud. I use various AWS services such as EC2, S3, RDS, CloudFront, and Lambda for hosting and managing web applications.",
    Vercel:
      "Cloud platform for static sites and serverless functions. Vercel is optimized for frontend frameworks like Next.js, providing seamless deployment and scalability for web applications. I use Vercel mainly for deploying my Next.js applications due to its ease of use and performance optimizations.",
    "Git/Github":
      "Version control and code hosting platform. Git is a distributed version control system that helps developers track changes in their codebase, while GitHub provides a collaborative platform for hosting and sharing code repositories. Very useful for CI/CD workflows via GitHub Actions.",
    "VS Code":
      "Popular code editor by Microsoft. VS Code is a lightweight yet powerful code editor that supports a wide range of programming languages and extensions, enhancing developer productivity.",
    Inkscape:
      "Open-source vector graphics editor. Inkscape is a powerful tool for creating and editing vector images, making it ideal for designing logos, icons, and other scalable graphics.",
    "Blender 3D":
      "Open-source 3D creation suite. Blender 3D is a comprehensive tool for 3D modeling, animation, rendering, and more. I use it mainly for creating 3D assets and visualizations.",
    "GNU/Linux":
      "I began tinkering with Linux (Debian) back in 1996, and I have been using Arch Linux as my daily driver since 2005. Linux offers a stable, highly customizable environment for development, supported by a rich ecosystem of open-source tools and software.",
    FreeBSD:
      "UNIX-like operating system, FreeBSD is known for its performance, security, and advanced networking features. I use FreeBSD mainly for server deployments and network services. As well as some othe extra curricular activities like pfSense firewall, FreeNAS storage server, and others.",
    Cybersecurity:
      "Practices and tools for securing systems. Cybersecurity involves protecting computer systems and networks from threats and vulnerabilities. I apply cybersecurity best practices to ensure the integrity, confidentiality, and availability of applications and data.",
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {tools.map((tool, idx) => (
          <button
            key={tool}
            className="flex flex-col items-center p-4 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="button"
            onClick={() => {
              setModalIdx(idx);
              dialogRef.current?.showModal();
            }}
            aria-label={`Show details for ${tool}`}
          >
            <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
              <Image
                src={`/icons/${images[idx]}`}
                alt={tool}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="mt-3 text-sm text-center">{tool}</div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="tool-title"
        className="m-auto max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-lg p-8 max-w-125 w-[calc(100%-3rem)] backdrop:bg-black/60"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl mr-2 cursor-pointer"
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
        >
          &times;
        </button>
        <Image
          src={`/icons/${images[modalIdx ?? 0]}`}
          alt={tools[modalIdx ?? 0]}
          width={64}
          height={64}
          style={{ objectFit: "contain" }}
          className="mb-4"
        />
        <h4 id="tool-title" className="text-xl font-bold mb-2 text-center">
          {tools[modalIdx ?? 0]}
        </h4>
        <p className="text-gray-700 text-center mb-2">
          {toolDescriptions[tools[modalIdx ?? 0]]}
        </p>
      </dialog>
    </>
  );
}
