import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
import CheckOut from "./Components/CheckOut";
import Home from "./Components/Home";

function App() {

  const cartitems = useSelector(state => state.cartitems)
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cartitems" element={<CartPage cartitems={cartitems}/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
  )
}

export default App;
