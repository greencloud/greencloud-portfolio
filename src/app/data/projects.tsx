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
    thumbnail: "/projects/malera-sm.webp",
  },
  {
    id: 2,
    title: "AlbumTrato E-commerce Platform",
    summary: "AlbumTrato is an online store offering hand-crafted, customizable photo albums and keepsake boxes — including wedding albums, coffee-table photo books, and more.",
    caption: "AlbumTrato is an online store offering hand-crafted, customizable photo albums and keepsake boxes — including wedding albums, coffee-table photo books, and more.",
    image: "/projects/albumtrato.webp",
    thumbnail: "/projects/albumtrato-sm.webp",
  },
  {
    id: 3,
    title: "Savona Hygiene Solutions",
    summary: "A corporate website of a company supplying industrial hygiene and process-equipment solutions, especially to food, beverage, and pharmaceutical producers.",
    caption: "A corporate website of a company supplying industrial hygiene and process-equipment solutions, especially to food, beverage, and pharmaceutical producers.",
    image: "/projects/savona.webp",
    thumbnail: "/projects/savona-sm.webp",
  },
  {
    id: 4,
    title: "Dem Skill Industries",
    summary: "It's an IT-services and consulting firm that helps businesses with digital transformation by offering software development, infrastructure, cloud, data analytics, and near-shore outsourcing services.",
    caption: "It's an IT-services and consulting firm that helps businesses with digital transformation by offering software development, infrastructure, cloud, data analytics, and near-shore outsourcing services.",
    image: "/projects/demskill.webp",
    thumbnail: "/projects/demskill-sm.webp",
  },
  {
    id: 5,
    title: "Sector-Z Labs Services",
    summary: "Sector-Z Labs is an IT & technology-services website offering computing, network, and software-development services.",
    caption: "Sector-Z Labs is an IT & technology-services website offering computing, network, and software-development services.",
    image: "/projects/sectorzlabs.webp",
    thumbnail: "/projects/sectorzlabs-sm.webp",
  },
  {
    id: 6,
    title: "Diamond Precise Toolings",
    summary: "An industrial-engineering / manufacturing-supply company site offering solid-liquid separation filtration equipment and related consumables.",
    caption: "An industrial-engineering / manufacturing-supply company site offering solid-liquid separation filtration equipment and related consumables.",
    image: "/projects/dptphils.webp",
    thumbnail: "/projects/dptphils-sm.webp",
  },
  {
    id: 7,
    title: "Malera Systems (IMS)",
    summary: "Intenal Management System for Malera to manage clients, projects, and services.",
    caption: "Intenal Management System for Malera to manage clients, projects, and services.",
    image: "/projects/malera-app.webp",
    thumbnail: "/projects/malera-app-sm.webp",
  },
  {
    id: 8,
    title: "Academy for Creating Enterprise (IMS)",
    summary: "Internal Management System for ACE to manage students, courses, and enrollments.",
    caption: "Internal Management System for ACE to manage students, courses, and enrollments.",
    image: "/projects/acephils.webp",
    thumbnail: "/projects/acephils-sm.webp",
  }
];
