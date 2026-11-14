"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { projects } from "../app/data/projects";

export default function ProjectsGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox slides (large images + captions)
  const slides = projects.map((p) => ({
    src: p.image,
    title: p.title,
    description: p.caption,
  }));

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
      <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
        Below are some of my selected projects I built from ground up. Click a
        project to view details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <button
            type="button"
            key={p.id}
            className="block border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-left rounded overflow-hidden hover:shadow-lg cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className="relative h-58 bg-gray-200 dark:bg-gray-800">
              <Image
                src={p.thumbnail}
                alt={p.title}
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {p.summary}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom, Captions]}
      />
    </div>
  );
}
