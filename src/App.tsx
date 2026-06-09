import "./App.css";
import RoutesProvider from "./Routes/RoutesProvider";

function App() {
  return (
    <>
      {/* <GlobalContextProvider>
        <Header />
        <Main />
        <DetailsPage />
      </GlobalContextProvider> */}
      <RoutesProvider />
    </>
  );
}

export default App;
