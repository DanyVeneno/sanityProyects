import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "rk7cbron",
  dataset: "production",
  title: "Yehiibhii Estudio",
  apiVersion: "2023-04-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
