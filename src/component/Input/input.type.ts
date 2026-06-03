import type { InputHTMLAttributes, ReactNode } from "react";

type InputType = 'text' | "search" | 'checkbox' | 'date'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerStyleClass ?: string,
    type:InputType,
    name:string,
    leftIcon?:ReactNode
}