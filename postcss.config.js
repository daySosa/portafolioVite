import purgecss from "@fullhuman/postcss-purgecss";

// Vite compila primero el .less y luego pasa el CSS por PostCSS.
// La purga solo se aplica en producción (npm run build).
const isProd = process.env.NODE_ENV === "production";

export default {
    plugins: [
        isProd &&
            purgecss({
                // Se lee también el JS porque las tarjetas de proyectos
                // y las clases .open / .show se crean desde main.js
                content: ["./index.html", "./src/**/*.js"],
            }),
    ].filter(Boolean),
};
