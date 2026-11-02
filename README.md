# Portafolio — Dayana Sosa

Portafolio hecho con HTML, JavaScript y estilos en **LESS**, empaquetado con **Vite**.

- CSS generado desde `src/styles.less`
- En producción el CSS se **purga** (PurgeCSS) y se **minifica**, igual que el JS

## Comandos

```bash
npm install
npm run dev      # desarrollo
npm run build    # genera dist/ minificado y purgado
npm run preview  # probar el build
```

El despliegue a GitHub Pages es automático con cada push a `main` (`.github/workflows/deploy.yml`).
