import type { InputHTMLAttributes, ReactNode, Ref } from "react";

type InputType =
  | "text"
  | "search"
  | "checkbox"
  | "date"
  | "email"
  | "number"
  | "password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyleClass?: string;
  type: InputType;
  name: string;
  leftIcon?: ReactNode;
  ref?: Ref<HTMLInputElement>;
}
