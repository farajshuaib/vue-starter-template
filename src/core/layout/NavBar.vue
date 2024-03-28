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
              <i class='bx bx-moon'></i> <span>  Dark  </span>
            </DropdownMenuItem>
            <DropdownMenuItem
                @click="() => setTheme(Theme.LIGHT)"
                class="flex items-center gap-2"
            >
              <i class='bx bx-sun'></i> <span>  Light  </span>
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

const auth = useAuth();


const setTheme = (theme: Theme) => {
  localStorage.theme = theme

  if (theme === Theme.DARK) {
    document.documentElement.classList.add(Theme.DARK)
  } else {
    document.documentElement.classList.remove(Theme.DARK)
  }
}


</script>
