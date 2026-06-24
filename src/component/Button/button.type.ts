import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonMode = "Primary" | "Secondary"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode :ButtonMode,
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
    title:string
}