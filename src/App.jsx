import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const greeting = "Bienvenido a a la tienda virtual de Tia Rosita";
  return (
    <div className="max-w-[1200px] mx-auto">
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
};

export default App;
