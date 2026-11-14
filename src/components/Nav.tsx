import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="meaPERITIA logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-contain"
          />
          <Link href="/">
            <span className="text-2xl font-semibold">meaPERITIA</span>
          </Link>
        </div>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-base"
        >
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#techstack" className="hover:underline">
            Tech Stack
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#connect" className="hover:underline">
            Let's Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
