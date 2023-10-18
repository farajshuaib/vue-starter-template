<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { setLocale } from "./core/i18n";
import { AppLocales } from "./core/constant";

onMounted(() => {
  setLocale(
    localStorage.getItem("locale") == AppLocales.AR
      ? AppLocales.AR
      : AppLocales.EN
  );
});
</script>

<template>
  <RouterView />
</template>
