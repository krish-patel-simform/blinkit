import ErrorBoundary from "../../Errorboundary/ErrorBoundary";
import ErrorFallback from "../../Errorboundary/ErrorFallback";
import BannerPresenter from "./BannerPresenter";
import CategoryPresenter from "./CategoryPresenter";
import style from "./main.module.css";
import ProductListPresenter from "./ProductListPresenter";
export default function Main() {
  return (
    <div className={`${style.mainContainer}`}>
      <section className={style.mainBannerContainer}>
        {/* Banners */}
        <BannerPresenter />
      </section>
      <section className={`${style.mainCategoryContainer}`}>
        {/* categoris presenter */}
        <CategoryPresenter />
      </section>
      <section className={`${style.mainProductListContainer}`}>
        {/* List of subcategoris */}
        <ErrorBoundary fallback={ErrorFallback} max_retries={3}>
          <ProductListPresenter />
        </ErrorBoundary>
      </section>
    </div>
  );
}
