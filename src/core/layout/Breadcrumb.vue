<template>
  <section
    v-if="breadcrumb && breadcrumb.length > 0"
    class="w-full bg-primary/5 relative py-2 px-5 z-10 bg-tertiary border-b-[1px]  flex items-center"
  >
    <div class="container px-5 mx-auto">
      <ul class="flex items-center justify-start gap-2">
        <li v-for="(item, index) in breadcrumb" :key="index">
          <router-link
            :to="{ name: item.router_name }"
            :class="item.router_name == route.name && 'underline !'"
            class="text-xs font-normal hover:underline"
          >
            <span>
              {{ item.text }}
            </span>
            <span v-if="index < breadcrumb.length - 1"> > </span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import {Breadcrumb} from "@/core/constant/Breadcrumb.ts";
const route = useRoute();

const breadcrumb = ref<Breadcrumb[]>(route.meta.breadcrumb as Breadcrumb[]);

watch(route, (route) => {
  breadcrumb.value = route.meta.breadcrumb as Breadcrumb[];
});
</script>
