import { useEffect, useState } from "react";
import { subscribe } from "./store";
type Toast = {
  id: string;
  message: string;
  type?: "success" | "error";
};
export function useToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    return subscribe(setToasts);
  }, []);

  return toasts;
}