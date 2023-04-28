import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import { Shop } from "./pages/shop/Shop";
import { Cart} from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Shop/>} ></Route>
          <Route path = "/cart" element={<Cart/>} ></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
