import { Outlet } from "react-router";
import Header from "../component/Header/HeaderContainer";
import GlobalContextProvider from "../Provider/GlobalContextProvider";

export default function HomePage() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <Outlet />
      </GlobalContextProvider>
    </>
  );
}
