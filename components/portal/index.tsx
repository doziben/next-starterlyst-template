import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "../../types/components";

export default function Portal({ children, isOpen }: PortalProps) {
  return isOpen ? (
    createPortal(children, document.getElementById("modal") as Element)
  ) : (
    <></>
  );
}
