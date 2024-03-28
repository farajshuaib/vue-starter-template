<template>
  <transition name="slide-fade">
    <div
      id="Container"
      v-if="init"
      class="p-5 border rounded-lg bg-background shadow-primary"
    >
      <template v-if="coreContentstate.status == CoreContentStatus.pure">
      </template>
      <template v-if="coreContentstate.status == CoreContentStatus.loading">
        <SkeltonLoading />
      </template>
      <template v-if="coreContentstate.status == CoreContentStatus.failure">
        <div class="h-full">
          <Error />
        </div>
      </template>
      <template v-if="coreContentstate.status == CoreContentStatus.success">
        <div class="h-full">
          <slot name="content"></slot>
        </div>
      </template>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import SkeltonLoading from "@/core/components/ui/container/SkeltonLoading.vue";
import Error from "@/core/components/ui/container/Error.vue";
import {
  CoreContentState,
  ICoreContentState,
} from "@/core/constant/CoreContentState";
import { CoreContentStatus } from "@/core/constant/CoreContentStatus";

const init = ref(false);

onMounted(() => {
  init.value = true;
});

defineProps<{
  coreContentstate: ICoreContentState;
}>();
</script>
