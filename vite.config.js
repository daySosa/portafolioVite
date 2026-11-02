import { defineConfig } from "vite";

export default defineConfig({
    // Rutas relativas: funciona en GitHub Pages sin importar el nombre del repo
    base: "./",
    build: {
        outDir: "dist",
        minify: true,     // JS minificado
        cssMinify: true,  // CSS minificado
    },
});
