import { useToast } from "vue-toast-notification";
const toast = useToast();

export function toastError(error) {
  console.log(error);
  return toast.error(
    error.response
      ? error.response.data.message
      : "Internal Server Error",
    {
      dismissible: true,
      position: "top-right",
      duration: 2000,
      queue: true,
    }
  );
}