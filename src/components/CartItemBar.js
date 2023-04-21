const CartItemBar = (itemCards) =>{
return (   
<div className="  ml-7 mt-7 mb-1 mr-7 border-2 border-orange-900 p-3 bg-white rounded-2xl shadow-lg text-orange-900">    
<h2 className="font-bold">{itemCards.name}</h2>
<h2 className="font-mono">Rupees : {itemCards.price/100}</h2>
</div>
)
}
export default CartItemBar;