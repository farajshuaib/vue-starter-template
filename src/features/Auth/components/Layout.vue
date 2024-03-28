<template>
  <div class="flex items-center justify-center h-screen bg-secondary">
    <div
      class="relative z-50 w-11/12 p-5 border shadow-sm bg-background sm:w-3/4 md:w-1/2 xl:w-1/3 rounded-2xl backdrop-filter backdrop-blur-sm "
    >
      <div
        class="flex items-center justify-center w-24 h-24 p-5 mx-auto -mb-12 overflow-hidden transform -translate-y-16 border border-gray-100 rounded-full shadow-lg backdrop-filter backdrop-blur-xl bg-primary/10 shadow-primary/10 "
      >
        <img
          src="/logo.svg"
          class="object-contain w-full h-full "
          alt=""
          loading="lazy"
        />
      </div>
      <RouterView />
    </div>
  </div>
  <div
    class="absolute inset-0 flex items-center justify-center h-screen overflow-hidden"
  >
    <span
      class="block -translate-x-1/2 translate-y-1/2 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"
    ></span>
    
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
