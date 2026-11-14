import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "meaPERITIA — Garry Molleno Jr.",
    short_name: "meaPERITIA",
    start_url: "/",
    display: "browser",
    icons: [192, 512].map((size) => ({
      src: `/favicon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
      purpose: "any",
    })),
  };
}
