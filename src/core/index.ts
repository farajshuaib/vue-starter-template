import router from "@/router";
import { createPinia } from "pinia";
import type { App } from "vue";
import Toast, { POSITION } from "vue-toastification";

import "@/assets/index.css";
import "@/core/styles/index.scss";
import "vue-toastification/dist/index.css";

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
  rtl: true,
  hideProgressBar: true,
  closeOnClick: true,
  toastDefaults: {
    success: {
      toastClassName: "bg-success text-white text-sm",
    },
    error: {
      toastClassName: "bg-danger text-white text-sm",
    },
    warning: {
      toastClassName: "bg-warning text-white text-sm",
    },
  },
};

function initializeApp(app: App) {
  app.use(Toast, toastOptions);
  app.use(createPinia());
  app.use(router);
  app.mount("#app");

  // const firebaseApp = initFirebaseApp(config.firebaseConfig);
  // getAnalytics(firebaseApp);

  // Global error handler
  app.config.errorHandler = (err, instance, info) => {
    // Handle the error globally
    console.error("Global error:", err);
    console.log("Vue instance:", instance);
    console.log("Error info:", info);
  };
}

export default initializeApp;
