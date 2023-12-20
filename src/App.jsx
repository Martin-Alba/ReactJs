import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Cart from "./components/Cart/Cart.jsx";
import ProductId from "./components/ProductId/ProductId.jsx";

const App = () => {
  const greeting = "Bienvenido a la tienda virtual de Tia Rosita";
  return (
    <BrowserRouter>
      <div className="max-w-[1200px] mx-auto">
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ProductId />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
