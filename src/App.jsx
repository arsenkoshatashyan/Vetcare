import "./App.css";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Tariff from "./components/Tariff/Tariff";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Cards />
      <Experience />
      <Tariff />
      <Contact />
    </div>
  );
}

export default App;
