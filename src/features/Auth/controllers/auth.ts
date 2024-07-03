import { defineStore } from "pinia";
import { ref } from "vue";
import AuthService from "@/features/Auth/services/auth.ts";
import { LoginRequestDTO } from "@/features/Auth/models/LoginRequestDTO.ts";
import { UserData } from "@/features/Auth/models/UserData.ts";
import { jwtDecode } from "@/core/helpers/jwtDecode";
import { ServiceProvider } from "di-injectable";
import { useRouter } from "vue-router";
import { ERoutesName } from "@/core/constant/ERoutesName";

export const useAuth = defineStore("AuthStore", () => {
  const router = useRouter();
  const _repo = new ServiceProvider().resolve<AuthService>(AuthService);
  //
  const user = ref<UserData | null>();
  const is_loading = ref(false);

  const login = async (credentials: LoginRequestDTO) => {
    try {
      is_loading.value = true;
      const response = await _repo.login(credentials);
      user.value = response.data.content;
      localStorage.setItem("token", response.data.content.token);
      localStorage.setItem("refreshToken", response.data.content.refreshToken);
      return response.data;
    } catch (e) {
      throw e;
    } finally {
      is_loading.value = false;
    }
  };

  const getProfile = async () => {
    is_loading.value = true;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const data = jwtDecode(token);
      user.value = data;
    } catch (e) {
    } finally {
      is_loading.value = false;
    }
  };

  const logout = async () => {
    localStorage.clear();
    router.push(ERoutesName.LOGIN);
  };

  return {
    user,
    login,
    logout,
    getProfile,
    is_loading,
  } as const;
});
