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
    summary: "MALERA delivers eco-friendly, compact sewage treatment systems for homes and businesses with reliable, low-maintenance performance.",
    caption: "MALERA delivers eco-friendly, compact sewage treatment systems for homes and businesses with reliable, low-maintenance performance.",
    image: "/projects/malera.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/malera-sm_zkq1wy.webp",
  },
  {
    id: 2,
    title: "AlbumTrato E-commerce Platform",
    summary: "AlbumTrato is an online store offering hand-crafted, customizable photo albums and keepsake boxes — including wedding albums, coffee-table photo books, and more.",
    caption: "AlbumTrato is an online store offering hand-crafted, customizable photo albums and keepsake boxes — including wedding albums, coffee-table photo books, and more.",
    image: "/projects/albumtrato.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472988/albumtrato-sm_esyijo.webp",
  },
  {
    id: 3,
    title: "Savona Hygiene Solutions",
    summary: "A corporate website of a company supplying industrial hygiene and process-equipment solutions, especially to food, beverage, and pharmaceutical producers.",
    caption: "A corporate website of a company supplying industrial hygiene and process-equipment solutions, especially to food, beverage, and pharmaceutical producers.",
    image: "/projects/savona.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472991/savona-sm_btfyhj.webp",
  },
  {
    id: 4,
    title: "Dem Skill Industries",
    summary: "It's an IT-services and consulting firm that helps businesses with digital transformation by offering software development, infrastructure, cloud, data analytics, and near-shore outsourcing services.",
    caption: "It's an IT-services and consulting firm that helps businesses with digital transformation by offering software development, infrastructure, cloud, data analytics, and near-shore outsourcing services.",
    image: "/projects/demskill.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/demskill-sm_p23hqp.webp",
  },
  {
    id: 5,
    title: "Sector-Z Labs Services",
    summary: "Sector-Z Labs is an IT & technology-services website offering computing, network, and software-development services.",
    caption: "Sector-Z Labs is an IT & technology-services website offering computing, network, and software-development services.",
    image: "/projects/sectorzlabs.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472990/sectorzlabs-sm_zetg3k.webp",
  },
  {
    id: 6,
    title: "Diamond Precise Toolings",
    summary: "An industrial-engineering / manufacturing-supply company site offering solid-liquid separation filtration equipment and related consumables.",
    caption: "An industrial-engineering / manufacturing-supply company site offering solid-liquid separation filtration equipment and related consumables.",
    image: "/projects/dptphils.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758472989/dptphils-sm_re3bdo.webp",
  },
  {
    id: 7,
    title: "Malera Systems (IMS)",
    summary: "Intenal Management System for Malera to manage clients, projects, and services.",
    caption: "Intenal Management System for Malera to manage clients, projects, and services.",
    image: "/projects/malera-app.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758539666/malera-app-sm_igwc71.webp",
  },
  {
    id: 8,
    title: "Academy for Creating Enterprise (IMS)",
    summary: "Internal Management System for ACE to manage students, courses, and enrollments.",
    caption: "Internal Management System for ACE to manage students, courses, and enrollments.",
    image: "/projects/acephils.webp",
    thumbnail: "https://res.cloudinary.com/sectorzlabs/image/upload/v1758540173/acephils-sm_u9ds8x.webp",
  }
];
