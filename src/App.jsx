import NavbarComponent from "./components/NavbarComponent";
import Banner from "./components/Banner";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <main className="container-xxl border border-success">
      <NavbarComponent />
      <Banner />
    </main>
  );
}

export default App;
