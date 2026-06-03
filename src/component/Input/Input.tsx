import type { InputProps } from './input.type'
import style from  './input.module.css'


export default function Input({leftIcon:LeftIcon,type,name,containerStyleClass,...rest}:InputProps) {
  return (
    <div className={`${style.inputContainer} ${containerStyleClass}`}>
        {LeftIcon}
      <input name={name} className={style.input} type={type}  {...rest}/>
    </div>
  )
}
