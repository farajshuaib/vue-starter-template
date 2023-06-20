import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        disableDevLogs: true,
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
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
});
