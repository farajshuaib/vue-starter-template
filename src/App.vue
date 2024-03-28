<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { setLocale } from "@/core/i18n";
import { Theme } from "@/core/constant/Theme.ts";
import { EAppLocales } from '@/core/constant/EAppLocales';

onMounted(() => {
  setLocale(
    localStorage.getItem("locale") == EAppLocales.AR
      ? EAppLocales.AR
      : EAppLocales.EN
  );
});


onMounted(() => {
  if (localStorage.theme === Theme.DARK || !("theme" in localStorage)) {
    document.documentElement.classList.add(Theme.DARK);
  } else {
    document.documentElement.classList.remove(Theme.LIGHT);
  }
});
</script>

<template>
  <RouterView />
</template>
