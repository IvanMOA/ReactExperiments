import React, { createContext, useRef, useState } from "react";
import { Dialog, DialogProps } from "@material-ui/core";
import { ReactNode } from "react";

// For now i'll use this instead of Omit<DialogProps, 'open'> since it causes
// a loss of the rest of the interface. DO NOT pass open as a prop in the argument
type DialogOptions = Partial<DialogProps>;
export const ModalContext = createContext({
  openModalWith: (c: ReactNode, props?: DialogOptions) => {},
  closeModal: () => {},
  isOn: false,
});

export const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const close = () => setOpen(false);
  const [dialogProps, setDialogProps] = useState<DialogOptions>({});
  const openModal = (n: ReactNode, props: DialogOptions = {}) => {
    setContent(n);
    setDialogProps(props);
    setOpen(true);
  };
  return (
    <ModalContext.Provider
      value={{ closeModal: close, openModalWith: openModal, isOn: open }}
    >
      <Dialog {...dialogProps} open={open} onClose={close}>
        {content}
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};
