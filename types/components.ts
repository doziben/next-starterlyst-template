import {
  AnchorHTMLAttributes,
  ElementType,
  HTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

export type PageMetaLayout = "blank" | "public" | "auth" | "app";

export type PageMeta = {
  pageKey: string;
  title: string;
  layout: PageMetaLayout;
  allowAccess?: "all" | "noauth" | "auth";
  // Add any other prop you want to access
};

export type TypographyProps = {
  children: React.ReactNode | string;
} & HTMLAttributes<HTMLHeadingElement>;

export type TypographyTextProps = {
  children: React.ReactNode | string;
  isGrey?: boolean;
  as?: ElementType;
} & HTMLAttributes<HTMLParagraphElement>;

export type ButtonProps = {
  variant?: "primary" | "secondary";
  type?: "reset" | "submit" | "button";
  isLoading?: boolean;
  disabled?: HTMLButtonElement["disabled"];
} & PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type InputFieldProps<T> = {
  handleChange?: {
    id: keyof T;
    changeHandler: (key: keyof T, value: any) => void;
  };
  endOptions?: { title: string; isSelected: boolean }[];
  onSelectEndOption?: (value: string) => void;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FormDropdownProps<T> = {
  handleChange?: {
    id: keyof T;
    changeHandler: (key: keyof T, value: any) => void;
  };
  options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export type TextAreaProps<T> = {
  handleChange?: InputFieldProps<T>["handleChange"];
} & InputHTMLAttributes<HTMLTextAreaElement>;

export type UploadButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type CardProps = {} & PropsWithChildren & HTMLAttributes<HTMLElement>;

export type PortalProps = {
  isOpen: boolean;
} & PropsWithChildren;

export type ModalWrapperProps = {
  children: ReactNode;
};

export type ModalContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export type ModalHeaderProps = {
  onClose?: MouseEventHandler;
  title?: string;
  icon?: ReactNode;
  disableClose?: boolean;
  description?: string;
};

export type ModalProps = {
  children: ReactNode;
  aside?: boolean;
  icon?: ModalHeaderProps["icon"];
} & ModalHeaderProps;
