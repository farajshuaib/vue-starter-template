import locales from '@/assets/locales'
import { createI18n } from 'vue-i18n'
import { EAppLocales } from '../constant/EAppLocales'

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en', // set locale
  fallbackLocale: localStorage.getItem('locale') || 'en', // set fallback locale
  messages: locales, // set locale messages
  globalInjection: true,
  legacy: false
})

export const t = i18n.global.t

export const getCurrentLocale = () => i18n.global.locale.value

export function setLocale(newLocale: EAppLocales) {
  localStorage.setItem('locale', newLocale)
  document.title = newLocale === EAppLocales.EN ? 'Vue3 Boilerplate' : 'قالب بويلرپلیت ویو 3'
  document.documentElement.setAttribute('dir', newLocale === EAppLocales.AR ? 'rtl' : 'ltr')
  document.body.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', newLocale)
  document.body.setAttribute('lang', newLocale)

  document.documentElement.style.setProperty(
    'font-family',
    newLocale === 'ar' ? "'Almarai', sans-serif" : "'Poppins', sans-serif"
  )
  document.body.style.setProperty(
    'font-family',
    newLocale === 'ar' ? "'Almarai', sans-serif" : "'Poppins', sans-serif"
  )
}

export default i18n
