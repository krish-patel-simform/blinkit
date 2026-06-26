import type { ButtonProps } from './button.type'
import style from './button.module.css'

export default function Button({mode,title,leftIcon:LeftIcon ,rightIcon:RightIcon,...rest}:ButtonProps) {
  return (
    <button {...rest} className={`${style.btn} ${style[`btn${mode}`]}`}>
      {LeftIcon}
      {title}
      {RightIcon}
    </button>
  )
}
