// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://jodieaddis.github.io/space-tourism",
  base: "/space-tourism/",
});
