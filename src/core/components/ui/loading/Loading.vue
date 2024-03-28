<script setup lang="ts">

</script>

<template>
  <div
      v-bind="$attrs"
      class="flex items-center justify-center w-full mx-auto align-middle"
      role="status"
      aria-hidden="true"
  >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-center animate-spin spinner-border spinner-border-sm"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: currentColor; "
    >
      <path
          d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
      ></path>
    </svg>
  </div>
</template>


<style scoped>

</style>