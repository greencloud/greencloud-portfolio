export interface ProjectItem {
  id: number;
  title: string;
  summary: string;
  caption: string;
  image: string;     // large
  thumbnail: string; // small
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Malera Official Website",
    summary: "Short project summary or tech stack used. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.",
    caption: "This is a detailed caption displayed inside the Lightbox. The quick brown fox jumps over the lazy dog.",
    image: "/projects/malera.webp",
    thumbnail: "/projects/malera-sm.webp",
  },
  {
    id: 2,
    title: "AlbumTrato E-commerce Platform",
    summary: "Short project summary or tech stack used.",
    caption: "More info about the project displayed in Lightbox.",
    image: "/projects/albumtrato.webp",
    thumbnail: "/projects/albumtrato-sm.webp",
  },
  {
    id: 3,
    title: "Savona Hygiene Solutions",
    summary: "Short project summary or tech stack used.",
    caption: "Lightbox caption for project three.",
    image: "/projects/savona.webp",
    thumbnail: "/projects/savona-sm.webp",
  },
  {
    id: 1,
    title: "Dem Skill Industries",
    summary: "Short project summary or tech stack used. The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.",
    caption: "This is a detailed caption displayed inside the Lightbox. The quick brown fox jumps over the lazy dog.",
    image: "/projects/demskill.webp",
    thumbnail: "/projects/demskill-sm.webp",
  },
  {
    id: 2,
    title: "Sector-Z Labs Portfolio",
    summary: "Short project summary or tech stack used.",
    caption: "More info about the project displayed in Lightbox.",
    image: "/projects/sectorzlabs.webp",
    thumbnail: "/projects/sectorzlabs-sm.webp",
  },
  {
    id: 3,
    title: "Diamond Precise Toolings",
    summary: "Short project summary or tech stack used.",
    caption: "Lightbox caption for project three.",
    image: "/projects/dptphils.webp",
    thumbnail: "/projects/dptphils-sm.webp",
  },
  {
    id: 2,
    title: "Malera Systems (IMS)",
    summary: "Short project summary or tech stack used.",
    caption: "More info about the project displayed in Lightbox.",
    image: "/projects/malera-app.webp",
    thumbnail: "/projects/malera-app-sm.webp",
  },
  {
    id: 3,
    title: "Academy for Creating Enterprise",
    summary: "Short project summary or tech stack used.",
    caption: "Lightbox caption for project three.",
    image: "/projects/acephils.webp",
    thumbnail: "/projects/acephils-sm.webp",
  }
  // add more...
];
