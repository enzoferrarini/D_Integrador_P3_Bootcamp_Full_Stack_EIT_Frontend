import "./App.css";
import CartProvider from "./context/CartProvider";
import StickyProvider from "./context/StickyProvider";
import ProductsProvider from "./context/ProductsProvider";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <CartProvider>
      <StickyProvider>
        <ProductsProvider>
          <RoutesApp />
        </ProductsProvider>
      </StickyProvider>
    </CartProvider>
  );
}

export default App;
