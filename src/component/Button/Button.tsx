import type { ButtonProps } from './button.type'
import style from './button.module.css'

export default function Button({mode,title,leftIcon:LeftIcon ,rightIcon:RightIcon}:ButtonProps) {
  return (
    <button className={`${style.btn} ${style[`btn${mode}`]}`}>
      {LeftIcon}
      {title}
      {RightIcon}
    </button>
  )
}
