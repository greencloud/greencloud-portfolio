"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    let previousScrollY = Math.max(0, window.scrollY);
    function handleScroll() {
      const currentScrollY = Math.max(0, window.scrollY);
      if (currentScrollY > previousScrollY) setMenuOpen(false);
      previousScrollY = currentScrollY;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    closeOnDesktop();
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-x-4">
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
          ref={toggleRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
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
            if (event.key === "Enter") setMenuOpen(false);
          }}
          ref={menuRef}
          data-open={menuOpen}
          className="mobile-navigation w-full text-base lg:w-auto"
        >
          <div className="mobile-navigation-content">
            <div className="flex flex-col gap-x-6 gap-y-3 pt-4 lg:flex-row lg:pt-0">
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
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
