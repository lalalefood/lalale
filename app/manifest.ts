import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/admin",
    name: "LALALE Admin",
    short_name: "LALALE",
    description: "Inventory and purchasing operations for LALALE Foods.",
    start_url: "/admin",
    scope: "/admin",
    display: "standalone",
    background_color: "#F3E8DE",
    theme_color: "#3B1B02",
    lang: "en-GB",
    categories: ["business", "productivity", "food"],
    icons: [
      {
        src: "/pwa-icon/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-icon/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/pwa-icon/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-icon/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Inventory",
        short_name: "Inventory",
        url: "/admin",
        icons: [{ src: "/pwa-icon/192", sizes: "192x192" }],
      },
      {
        name: "Shopping list",
        short_name: "Shopping",
        url: "/admin/shopping-list",
        icons: [{ src: "/pwa-icon/192", sizes: "192x192" }],
      },
    ],
  };
}
