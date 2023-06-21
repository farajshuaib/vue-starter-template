<template>
  <nav
    id="sidebar"
    role="sidebar"
    :class="
      is_active ? 'rtl:right-0 ltr:left-0' : 'rtl:-right-3/4 ltr:-left-3/4'
    "
    class="absolute z-20 w-3/4 h-full overflow-y-scroll bg-white shadow-md lg:w-fit scrollbar-hidden lg:static"
  >
    <ul class="flex flex-col gap-4 my-5">
      <li
        v-for="(route, index) in dashboardRoutes.children"
        :key="index"
        class="w-full"
      >
        <div v-if="route.children && !route.children.isEmpty()">
          <button
            @click="
              () => {
                toggleMenu = toggleMenu === route.path ? '' : route.path;
              }
            "
            :class="
              router.currentRoute.value.fullPath.includes(route.path)
                ? 'border-l-4 border-primary text-primary font-medium'
                : 'text-gray800'
            "
            class="flex items-center justify-between w-full px-4 py-3 text-lg"
          >
            <div className="flex items-center">
              <span
                :class="
                  router.currentRoute.value.fullPath.includes(route.path)
                    ? 'text-primary'
                    : 'text-gray600'
                "
              >
              </span>
              <span className="mx-2"> {{ route.name }}</span>
            </div>
            <i
              :class="toggleMenu === route.path ? 'rotate-180' : ''"
              class="text-xl transition-all duration-300 transform bx bx-chevron-down text-gray700"
            ></i>
          </button>
          <ul
            v-if="toggleMenu === route.path"
            class="overflow-hidden transition-all border-l-2 border-gray800 ms-5 duration-30"
          >
            <li
              v-for="(subroute, innerIndex) in route.children"
              :key="innerIndex"
            >
              <router-link
                :to="{ name: subroute.name }"
                class="flex items-center w-full px-4 py-3 text-gray-600"
                active-class="font-medium border-l-4 border-primary !text-primary"
              >
                {{ subroute.meta?.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <router-link
          v-else
          :to="{ name: route.name }"
          class="flex items-center w-full px-4 py-3 text-lg text-gray-600"
          active-class="font-medium border-l-4 border-primary !text-primary"
        >
          {{ route.meta?.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import { ref, onMounted, type Ref } from "vue";
import { RouteRecordRaw, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { dashboardRoutes } from "@/router";

defineProps<{
  is_active: boolean;
}>();

const emit = defineEmits(["toggleSidebar"]);
const router = useRouter();
const toggleMenu = ref("");

const toggleSidebar = () => {
  emit("toggleSidebar");
};
</script>
