<template>
  <div class="flex flex-col h-screen">
    <nav class="flex items-center justify-between px-3 py-2">
      <img src="/logo.svg" alt="" loading="lazy" class="h-12" />
    </nav>
    <div class="relative flex items-start w-full h-full flex-gorw">
      <SideBar :is_active="is_active" @toggleSidebar="toggleSidebar" />
      <main
        role="main"
        class="flex flex-col justify-between flex-grow h-full gap-2 overflow-y-auto scrollbar-hidden"
      >
        <!-- breadcrumbs -->
        <section
          class="w-full relative py-2 px-5 z-10 bg-tertiary border-b-[1px] border-tertiary flex items-center"
        >
          <div class="container px-5 mx-auto">
            <ul class="flex items-center justify-start gap-2">
              <li v-for="(item, index) in breadcrumb" :key="index">
                <router-link
                  :to="{ name: item.routeName }"
                  :class="
                    item.routeName == router.name &&
                    'underline !text-primaryDark'
                  "
                  class="text-xs font-normal text-primary hover:underline"
                >
                  <span>
                    {{ item.title }}
                  </span>
                  <span v-if="index < breadcrumb.length - 1"> > </span>
                </router-link>
              </li>
            </ul>
          </div>
        </section>
        <!-- content area -->
        <section class="container relative h-full p-8 mx-auto">
          <RouterView />
        </section>

        <footer className="py-5 text-white bg-gray-800 drop-shadow-lg">
          <div
            className="container flex items-center justify-start px-5 mx-auto md:px-8"
          >
            <p
              className="flex items-center justify-center gap-1 text-sm text-gray-100 md:text-lg"
            >
              <i className="bx bx-code-alt"></i>
              <span className="">with</span>
              <i className="text-red-600 bx bxs-heart beating"></i>
              <span className="">by</span>
              <strong className="underline"> Faraj Shuaib </strong>
              <span className=""
                >team &copy; {{ new Date().getFullYear() }}</span
              >
            </p>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "./SideBar.vue";
import { watch, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();

const breadcrumb = ref<Breadcrumb[]>(router.meta.breadcrumb as Breadcrumb[]);
const is_active = ref(false);

const toggleSidebar = () => {
  is_active.value = !is_active.value;
};

const handleResize = () => {
  if (window.innerWidth > 1024) {
    is_active.value = true;
  } else {
    is_active.value = false;
  }
};

window.addEventListener("resize", handleResize);

watch(router, (router) => {
  breadcrumb.value = router.meta.breadcrumb as Breadcrumb[];
});
</script>

<style></style>
