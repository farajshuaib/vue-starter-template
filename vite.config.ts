import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

const isPWAEnabled = process.env.VITE_ENABLE_PWA !== "false";
const pwaMode =
  (process.env.VITE_PWA_MODE as "development" | "production" | undefined) ??
  "development";
const shouldMinifyPWA = pwaMode === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    VitePWA({
      disable: !isPWAEnabled,
      mode: pwaMode,
      registerType: "autoUpdate",
      injectRegister: "auto",
      minify: shouldMinifyPWA,
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        disableDevLogs: true,
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: false,
        disableRuntimeConfig: true,
      },
      manifest: {
        name: "App",
        short_name: "App",
        description: "App",
        theme_color: "#3A3A3A",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"),    },
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
});
