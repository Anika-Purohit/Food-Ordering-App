const CartItemBar = (itemCards) =>{
return (   
<div className="  m-7">    
<h2 className="font-bold">{itemCards.name}</h2>
<h2>Rupees : {itemCards.price/100}</h2>
</div>
)
}
export default CartItemBar;