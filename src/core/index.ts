import router from '@/router'
import { createPinia } from 'pinia'
import initGlobalComponents from '@/core/components'
import i18n from './i18n'
import Toast, { type PluginOptions, POSITION } from 'vue-toastification'
import { getCurrentLocale } from './i18n'
import type { App } from 'vue'

import '@/core/extensions'

// init css
import 'vue-slider-component/theme/default.css'
import 'vue-toastification/dist/index.css'
import '@/core/styles/index.css'
import { AppLocales } from './constant'

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  rtl: getCurrentLocale() === AppLocales.AR,
  toastDefaults: {
    success: {
      toastClassName: 'bg-success text-white text-sm'
    },
    error: {
      toastClassName: 'bg-danger text-white text-sm'
    },
    warning: {
      toastClassName: 'bg-warning text-white text-sm'
    }
  }
}

function initializeApp(app: App) {
  // Initialize global Components
  initGlobalComponents(app)


  app.use(Toast, toastOptions)
  app.use(createPinia())
  app.use(router)
  app.use(i18n)
  app.mount('#app')
}

export default initializeApp
