import style from "./footer.module.css";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export default function Footer() {
  const { searchRef } = useGlobalContext();

  function handleGoToSearch() {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: "smooth" });
      searchRef.current.focus();
    }
  }

  return (
    <div className={`${style.footerContainer}`}>
      <Button mode="Primary" title="Go to search" onClick={handleGoToSearch} />
    </div>
  );
}
