import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer.jsx";

const App = () => {
  const greeting = "Bienvenido a la tienda virtual de Tia Rosita";
  return (
    <BrowserRouter>
      <div className="max-w-[1200px] mx-auto">
        <NavBar />
        <Routes>
          <Route path="*" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
