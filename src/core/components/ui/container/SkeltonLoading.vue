<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center justify-between gap-2">
      <Skeleton class="w-1/3 h-[20px] rounded-full bg-gray-200" />
      <Skeleton class="w-[80px] h-[20px] rounded-full bg-gray-200" />
    </div>
    <Skeleton class="w-1/2 h-[30px] rounded-full bg-gray-200" />
    <Skeleton class="w-full h-[30px] rounded-lg bg-gray-200" />
    <Skeleton class="w-full h-[300px] rounded-lg bg-gray-200" />
  </div>
</template>
<script setup lang="ts">
import Skeleton from "@/core/components/ui/skeleton/Skeleton.vue";
</script>
