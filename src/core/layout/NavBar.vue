<template>
  <nav class="px-4 shadow header bg-background">
    <div
        class="flex items-center justify-between px-12 py-3 mx-auto lg:justify-end"
    >
      <button class="lg:hidden" @click="$emit('toggleSidebar')">
        <i class="text-3xl bx bx-menu text-primary"></i>
      </button>

      <div class="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <i class='bx bxs-adjust'></i>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>theme</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem
                @click="() => setTheme(Theme.DARK)"
                class="flex items-center gap-2"
            >
              <i class='bx bx-moon'></i>
              <span>Dark</span>
              <span
                  class="ml-auto text-xs text-muted-foreground"
                  v-if="currentTheme === Theme.DARK"
              >
                active
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem
                @click="() => setTheme(Theme.LIGHT)"
                class="flex items-center gap-2"
            >
              <i class='bx bx-sun'></i>
              <span>Light</span>
              <span
                  class="ml-auto text-xs text-muted-foreground"
                  v-if="currentTheme === Theme.LIGHT && hasStoredPreference"
              >
                active
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem
                @click="resetThemePreference"
                class="flex items-center gap-2"
            >
              <i class='bx bx-desktop'></i>
              <span>System default</span>
              <span
                  class="ml-auto text-xs text-muted-foreground"
                  v-if="!hasStoredPreference"
              >
                auto
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu v-if="auth.user">
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage :src="''" alt="@radix-vue"/>
              <AvatarFallback>user</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger
          >
          <DropdownMenuContent>
            <DropdownMenuLabel>settings</DropdownMenuLabel>
            <DropdownMenuSeparator/>


            <DropdownMenuItem
                @click="auth.logout"
                class="flex items-center gap-2"
            >
              <i class="bx bx-exit"></i>
              <span>  logout </span></DropdownMenuItem
            >
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


    </div>
  </nav>
</template>
<script lang="ts" setup>
import {useAuth} from "@/features/Auth/controllers/auth.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/core/components/ui/dropdown-menu";
import {
  Avatar, AvatarFallback, AvatarImage
} from "@/core/components/ui/avatar";
import {Theme} from "@/core/constant/Theme.ts";
import { useTheme } from "@/core/composables/useTheme";

const auth = useAuth();

const { setTheme, resetThemePreference, currentTheme, hasStoredPreference } =
    useTheme();
</script>
