import React, { useState, useContext } from 'react';
import { AppContext } from "../AppContext";
import CartItem from "../components/cartItem";

function Cart() {
	const { cartItems } = useContext(AppContext);
	const { emptyCard } = useContext(AppContext);
	const [orderBtnText, setOrderBtnText] = useState("Place order");

	const cartItemElements = cartItems.map(item => {
		return (
			<CartItem item={item} key={item.id} />
		)
	})
	const totalCost = Number(5.99 * cartItems.length);

    function handleOrder() {
		setOrderBtnText("...ordering");
		const order = new Promise ((resolve, reject) => {
            setTimeout(() => {
                emptyCard();
				setOrderBtnText('Place order');
            }, 3000)
        })
        return order;
		// change the text 
		// place the order with the context promise
		// when the order resolve, change the text

	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<div className="order-button">
				{cartItems.length > 0 && <button onClick={handleOrder}>{orderBtnText}</button>}
			</div>
			<h1 style={{textAlign:'center'}}>Total: {totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h1>
		</main>
	);
}

export default Cart;
