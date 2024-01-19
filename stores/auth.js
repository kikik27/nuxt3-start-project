import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    isLoading: false,
    userData: [],
    isAuthenticated: false,
  }),
  actions: () => ({
    login() {
      
    },

    logout() {
      return new Promise(async (resolve) => {
        useCookie("token").value = "";
        this.isAuthenticated = false;
        this.userData = {};
        resolve();
        return navigateTo("/auth/login");
      });
    },
    setLoading(){
      this.isLoading = false
    }
  }),
});
