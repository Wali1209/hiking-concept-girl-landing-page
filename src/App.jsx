import { useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Banner from "./components/Banner";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GridLoader } from "react-spinners/";

function App() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  const loadingStyles = {
    width: "100%",
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      {isLoading ? (
        <div className="loading-container" style={loadingStyles}>
          <GridLoader color="#5E5932" margin={0} size={30} />
        </div>
      ) : (
        <main className="container-fluid border border-success">
          <NavbarComponent />
          <Banner />
        </main>
      )}
    </>
  );
}

export default App;
