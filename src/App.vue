<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { setLocale } from "./core/i18n";
import { EAppLocales } from "./core/enums";

onMounted(() => {
  setLocale(
    localStorage.getItem("locale") == EAppLocales.AR
      ? EAppLocales.AR
      : EAppLocales.EN
  );
});
</script>

<template>
  <RouterView />
</template>
