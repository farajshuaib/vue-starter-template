<template>
  <div class="flex flex-row w-full h-screen bg-primary-foreground">
    <SideBar :is_active="is_active" @toggleSidebar="toggleSidebar"/>
    <main
        class="flex flex-col flex-grow w-full transition-all duration-150 ease-in main"
    >
      <Navbar @toggleSidebar="toggleSidebar"/>
      <Breadcrumb/>

      <!-- content area -->
      <section
          class="container relative h-full p-8 mx-auto overflow-x-hidden overflow-y-auto hiddenScrollbar"
      >
        <RouterView/>
      </section>
      <footer class="p-5 py-5 text-center bg-primary/5">
        <p>
          <span class="text-primary">Vite app</span> ©
          {{ new Date().getFullYear() }}
        </p>
      </footer>
    </main>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "./SideBar.vue";
import {ref} from "vue";
import Breadcrumb from "./Breadcrumb.vue";
import Navbar from "./NavBar.vue";


const is_active = ref(true);

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


</script>

<style></style>
