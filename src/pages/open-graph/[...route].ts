import { OGImageRoute } from "astro-og-canvas";

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: async (_, { data, slug }) => {
    return {
      title: data.title,
      description: data.description,
      dir: data.isArabic ? "rtl" : "ltr",
      border: { color: [114, 221, 64], width: 20, side: "inline-start" },
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      logo: {
        path: "./src/logo.png",
        size: [500],
      },
    };
  },
});
