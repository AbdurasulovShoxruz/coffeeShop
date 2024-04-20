import "./App.scss";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Product/Product";

function App() {
  
  return (
    <>
      <div className="app">
        <Navbar />
        <Product />
      </div>
    </>
  );
}

export default App;
