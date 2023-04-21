import { useSelector } from "react-redux";
import CartItemBar from "./CartItemBar";

const Cart = () =>{
const cartItems = useSelector(reduxStore => reduxStore.cart.items)
return(
    <div className="bg-yellow-50">
    <h1 className="font-bold text-xl ml-7 pt-4 text-orange-900">Cart Items:</h1>
    {cartItems.map(item => <CartItemBar  {...item}/>)}
    </div>
    )   
}
export default Cart;