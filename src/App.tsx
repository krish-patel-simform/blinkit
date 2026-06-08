import "./App.css";
import Header from "./component/Header/HeaderContainer";
import Main from "./component/Main/Main";
import GlobalContextProvider from "./Provider/GlobalContextProvider";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <Main />
      </GlobalContextProvider>
    </>
  );
}

export default App;
