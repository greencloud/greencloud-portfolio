export interface ProjectItem {
  id: number;
  image: string; // large
  thumbnail: string; // small
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    image: "/projects/malera.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/malera-sm_zkq1wy.webp",
  },
  {
    id: 2,
    image: "/projects/albumtrato.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472988/albumtrato-sm_esyijo.webp",
  },
  {
    id: 3,
    image: "/projects/savona.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472991/savona-sm_btfyhj.webp",
  },
  {
    id: 4,
    image: "/projects/demskill.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/demskill-sm_p23hqp.webp",
  },
  {
    id: 5,
    image: "/projects/sectorzlabs.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/sectorzlabs-sm_zetg3k.webp",
  },
  {
    id: 6,
    image: "/projects/dptphils.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472989/dptphils-sm_re3bdo.webp",
  },
  {
    id: 7,
    image: "/projects/malera-app.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758539666/malera-app-sm_igwc71.webp",
  },
  {
    id: 8,
    image: "/projects/acephils.webp",
    thumbnail:
      "https://res.cloudinary.com/sectorzlabs/image/upload/v1758540173/acephils-sm_u9ds8x.webp",
  },
];
