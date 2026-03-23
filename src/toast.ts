import { addToast, removeToast } from "./store";

export const toast = (message: string) => {
  const id = crypto.randomUUID();

  addToast({ id, message });

  setTimeout(() => removeToast(id), 3000);
};

toast.success = (msg: string) => toast(msg);
toast.error = (msg: string) => toast(msg);

toast.dismiss = (id: string) => removeToast(id);