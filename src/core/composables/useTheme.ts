import { computed, ref, watch } from "vue";
import { usePreferredDark } from "@vueuse/core";
import { Theme } from "@/core/constant/Theme";

const STORAGE_KEY = "theme";
const storedPreference = ref<Theme | null>(null);

if (typeof window !== "undefined") {
  const persisted = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (persisted && Object.values(Theme).includes(persisted as Theme)) {
    storedPreference.value = persisted as Theme;
  }
}

const setStoredPreference = (theme: Theme | null) => {
  storedPreference.value = theme;

  if (typeof window === "undefined") {
    return;
  }

  if (theme) {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
};

const applyThemeToDocument = (theme: Theme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle(Theme.DARK, theme === Theme.DARK);
};

export function useTheme() {
  const prefersDark = usePreferredDark();

  const currentTheme = computed<Theme>(() => {
    return storedPreference.value ?? (prefersDark.value ? Theme.DARK : Theme.LIGHT);
  });

  watch(
    currentTheme,
    (theme) => {
      applyThemeToDocument(theme);
    },
    { immediate: true }
  );

  const setTheme = (theme: Theme) => {
    setStoredPreference(theme);
  };

  const toggleTheme = () => {
    setTheme(currentTheme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  const resetThemePreference = () => {
    setStoredPreference(null);
  };

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    resetThemePreference,
    hasStoredPreference: computed(() => storedPreference.value !== null),
  };
}
