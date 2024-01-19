import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    dismissible: true,
    position: "top-right",
    duration: 2000,
    queue: true
  };
  nuxtApp.vueApp.use(ToastPlugin, options);
});
