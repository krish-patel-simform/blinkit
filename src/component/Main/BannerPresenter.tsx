import { banners } from '../../data/data'
import style from './banner.module.css'

export default function BannerPresenter() {
  return (
    <div className={`${style.bannerContainer}`}>
      {
        banners.map((bannerLink,index)=>{
            return (
                <section key={index} className={`${style.banner}`}>
                    <img src={bannerLink} alt={`banner${index}`} />
                </section>
            )
        })
      }
    </div>
  )
}
