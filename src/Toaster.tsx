import { createPortal } from "react-dom";
import { useToasts } from "./useToast";

export function Toaster() {
  const toasts = useToasts();

  return createPortal(
    <div style={{
      position: "fixed",
      top: 20,
      right: 20
    }}>
      {toasts.map((t: any) => (
        <div key={t.id} style={{
          background: "black",
          color: "white",
          padding: "10px",
          marginBottom: "8px",
          borderRadius: "5px"
        }}>
          {t.message}
        </div>
      ))}
    </div>,
    document.body
  );
}