import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Search defaultCity="washington d.c." />
      </div>
      <Footer />
    </div>
  );
}

export default App;
