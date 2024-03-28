<script lang="ts" setup>

import Button from "@/core/components/ui/button/Button.vue";

defineProps<{
  button_placeholder?: string;
  title: string;
  sub_title: string;
}>();

defineEmits(["actionClicked"]);


</script>

<template>
  <div v-bind="$attrs" class="flex flex-wrap items-center justify-between gap-5 pb-5">
    <div class="flex items-center gap-3 whitespace-nowrap">
      <h1 class="font-medium md:text-xl xl:text-2xl text-primary">
        {{ title }}
      </h1>
      <p
          class="px-3 py-2 !text-sm font-normal align-middle rounded-3xl bg-secondary"
      >
        {{ sub_title }}
      </p>
    </div>
    <div>
      <Button
          v-if="button_placeholder"
          @click="() => $emit('actionClicked')"
          class="flex items-center gap-3 "
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
          <path
              id="add_FILL0_wght200_GRAD0_opsz48"
              d="M20.423,31V21.577H11V20.423h9.423V11h1.154v9.423H31v1.154H21.577V31Z"
              transform="translate(-11 -11)"
              fill="currentColor"
          />
        </svg>

        <span class="text-sm">
            {{ button_placeholder }}
          </span>
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>