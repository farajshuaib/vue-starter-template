import { defineStore } from "pinia";
import { computed, ref } from "vue";
import AuthService from "../services/AuthService";
import { UserData, LoginRequestDTO } from "../DTOs/auth";
import Container from "typedi";

export const AuthController = defineStore("AuthStore", () => {
  const _repo = Container.get(AuthService);
  //
  const user = ref<UserData | null>(null);
  const is_loading = ref(false);

  const login = async (credentials: LoginRequestDTO) => {
    try {
      is_loading.value = true;
      const { data } = await _repo.login(credentials);
      if (data.content.token) {
        localStorage.setItem("token", data.content.token);
      }
      user.value = data.content.user;
      return data;
    } catch (e) {
      throw e;
    } finally {
      is_loading.value = false;
    }
  };

  const getProfile = async () => {
    is_loading.value = true;
    try {
      const { data } = await _repo.getProfile();
      user.value = data;
      return data;
    } catch (e) {
      throw e;
    } finally {
      is_loading.value = false;
    }
  };

  const logout = async () => {
    is_loading.value = true;
    await _repo
      .logOut()
      .then(() => {
        localStorage.clear();
        location.href = "/auth/login";
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        is_loading.value = false;
      });
  };

  return {
    user,
    login,
    logout,
    getProfile,
    is_loading,
  } as const;
});
