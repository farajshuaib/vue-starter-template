<template>
  <form @submit="onSearch" class="flex items-center xl:w-[360px] mb-5">
    <input
      type="search"
      v-model="searchValue"
      placeholder="search..."
      class="w-full px-4 py-3 border rounded-l-lg focus:outline-none focus:border-primary"
    />

    <button
      type="submit"
      class="flex items-center justify-center px-4 py-3 border rounded-r-lg bg-primary text-primary-foreground focus:outline-none border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.994"
        height="24"
        viewBox="0 0 23.994 24"
      >
        <path
          id="Icon_ionic-ios-search"
          data-name="Icon ionic-ios-search"
          d="M28.213,26.756,21.539,20.02A9.51,9.51,0,1,0,20.1,21.482l6.63,6.692a1.027,1.027,0,0,0,1.45.037A1.034,1.034,0,0,0,28.213,26.756ZM14.066,21.564a7.509,7.509,0,1,1,5.311-2.2A7.463,7.463,0,0,1,14.066,21.564Z"
          transform="translate(-4.5 -4.493)"
          fill="currentColor"
        />
      </svg>
    </button>
  </form>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps<{
  initValue: string;
}>();

const searchValue = ref("");

const emit = defineEmits(["submit"]);

onMounted(() => {
  searchValue.value = props.initValue || "";
});

const onSearch = (e: Event) => {
  e.preventDefault();
  emit("submit", searchValue.value);
};
</script>
