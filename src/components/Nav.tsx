"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
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
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-gray-800 lg:hidden"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path
              d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M3 6h18M3 12h18M3 18h18"}
            />
          </svg>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              document
                .querySelector<HTMLButtonElement>(
                  "[aria-controls='main-navigation']",
                )
                ?.focus();
            }
          }}
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-x-6 gap-y-3 text-base lg:flex lg:w-auto lg:flex-row`}
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
