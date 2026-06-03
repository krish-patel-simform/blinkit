import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import Input from '../Input/Input'
import style from './header.module.css'
import Search4 from 'reicon-react/icons/Search4'
import CartShopping from 'reicon-react/icons/CartShop'

export default function HeaderPresent() {
    return (
    <div className={`${style.header}`}>
      <section className={`${style.headerLogo}`}>
        {/* Logo */}
        <img src={logo} />
      </section>
      <section className={`${style.headerLocation}`}>
        {/* location and set Location */}
        <p>Dilevery in 8 minutes</p>
        <p>address from location</p>
      </section>
      <section className={`${style.headerActions}`}>
        <Input leftIcon={<Search4/>} name='search' type='search' placeholder='Search milk..' containerStyleClass={style.headerInputAction}/>

        <Button mode='Secondary' title='Login' />

        <Button leftIcon={<CartShopping/>} mode='Primary' title='Cart' />
      </section>
    </div>
  )
}
