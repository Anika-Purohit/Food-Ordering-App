import { useSelector } from "react-redux";
import CartItemBar from "./CartItemBar";

const Cart = () =>{
const cartItems = useSelector(reduxStore => reduxStore.cart.items)
return(
    <>
    <h1 className="font-bold text-xl m-7">Cart Items:</h1>
    {cartItems.map(item => <CartItemBar {...item}/>)}
    </>
    )   
}
export default Cart;