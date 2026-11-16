"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import { useLanguage } from "./LanguageProvider";

export default function TechStack() {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPointerDown = useRef(false);
  const [closing, setClosing] = useState(false);

  function closeModal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialogRef.current?.close();
      return;
    }
    setClosing(true);
  }

  function isOutsideDialog(clientX: number, clientY: number) {
    const bounds = dialogRef.current?.getBoundingClientRect();
    return (
      bounds &&
      (clientX < bounds.left ||
        clientX > bounds.right ||
        clientY < bounds.top ||
        clientY > bounds.bottom)
    );
  }

  const tools = t.skills.tools;
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

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {tools.map((tool, idx) => (
          <button
            key={images[idx]}
            className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="button"
            onClick={() => {
              setClosing(false);
              setModalIdx(idx);
              dialogRef.current?.showModal();
            }}
            aria-label={t.skills.details.replace("{tool}", tool.name)}
          >
            <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer">
              <Image
                src={`/icons/${images[idx]}`}
                alt={tool.name}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="mt-3 text-sm text-center">{tool.name}</div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="tool-title"
        data-closing={closing || undefined}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeModal();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeModal();
        }}
        onPointerDown={(event) => {
          backdropPointerDown.current = Boolean(
            isOutsideDialog(event.clientX, event.clientY),
          );
        }}
        onClick={(event) => {
          if (
            backdropPointerDown.current &&
            isOutsideDialog(event.clientX, event.clientY)
          ) {
            closeModal();
          }
          backdropPointerDown.current = false;
        }}
        onAnimationEnd={(event) => {
          if (
            event.target === event.currentTarget &&
            event.animationName === "tech-stack-dialog-exit"
          ) {
            dialogRef.current?.close();
            setClosing(false);
          }
        }}
        className="tech-stack-dialog m-auto max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-125 w-[calc(100%-3rem)] backdrop:bg-black/60"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl mr-2 cursor-pointer"
          type="button"
          onClick={closeModal}
          aria-label={t.skills.close}
        >
          &times;
        </button>
        <Image
          src={`/icons/${images[modalIdx ?? 0]}`}
          alt={tools[modalIdx].name}
          width={64}
          height={64}
          style={{ objectFit: "contain" }}
          className="mx-auto mb-4 rounded-md bg-gray-100 p-2"
        />
        <h4 id="tool-title" className="text-xl font-bold mb-2 text-center">
          {tools[modalIdx].name}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
          {tools[modalIdx].description}
        </p>
      </dialog>
    </>
  );
}
