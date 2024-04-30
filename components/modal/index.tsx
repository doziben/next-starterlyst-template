import { Fragment } from "react";
import ModalBackDrop from "./Backdrop";
import ModalWrapper from "./ModalWrapper";
import { ModalProps } from "../../types/components";
import ModalHeader from "./ModalHeader";

export default function Modal({
  children,
  disableClose,
  onClose,
  title,
  icon,
  description,
  ...otherProps
}: ModalProps) {
  return (
    <Fragment>
      <ModalWrapper {...otherProps}>
        {!!title && (
          <ModalHeader
            {...{ title, disableClose, onClose, icon, description }}
          />
        )}
        {children}
      </ModalWrapper>
      <ModalBackDrop />
    </Fragment>
  );
}
