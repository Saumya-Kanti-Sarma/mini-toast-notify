type Toast = {
  id: string;
  message: string;
  type?: "success" | "error";
};

let toasts: Toast[] = [];
let listeners: ((t: Toast[]) => void)[] = [];

export const subscribe = (fn: (t: Toast[]) => void) => {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter(l => l !== fn);
  };
};

const notify = () => listeners.forEach(l => l(toasts));

export const addToast = (toast: Toast) => {
  toasts = [...toasts, toast];
  notify();
};

export const removeToast = (id: string) => {
  toasts = toasts.filter(t => t.id !== id);
  notify();
};