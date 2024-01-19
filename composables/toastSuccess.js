import { useToast } from "vue-toast-notification";
const toast = useToast();

export function toastSuccess(error) {
  return toast.success(error, {
    dismissible: true,
    position: "top-right",
    duration: 2000,
    queue: true,
  });
}
