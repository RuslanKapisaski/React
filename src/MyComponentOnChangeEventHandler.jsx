//onChange event handler
import React, { useState } from "react";

function MyComponentOnChangeEventHandler() {
	const [name, setName] = useState("Guest");
	const [quantity, setQuantity] = useState(0);
	const [comment, setComment] = useState("Give us a feedback.");
	const [payment, setPayment] = useState("");
	const [shipping, setShipping] = useState("");

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleQuantityCahnge(e) {
		setQuantity(e.target.value);
	}

	function handleCommentChange(e) {
		setComment(e.target.value);
	}

	function handlePaymentChange(e) {
		setPayment(e.target.value);
	}

	function handleShippingChange(e) {
		setShipping(e.target.value);
	}

	return (
		<div className="paymeny-form">
			<input value={name} onChange={handleNameChange} />
			<p>Name: {name}</p>
			<input value={quantity} onChange={handleQuantityCahnge} type="number" />
			<p>Quantity: {quantity}</p>
			<textarea
				value={comment}
				onChange={handleCommentChange}
				placeholder="Enter Delivery Instructions"
			/>
			<p>Comments: {comment}</p>

			<select value={payment} onChange={handlePaymentChange}>
				<option value="">Select an option</option>
				<option value="Mastercard">Mastercard</option>
				<option value="Visa">Visa</option>
				<option value="Giftcard">Giftcard</option>
			</select>

			<p>Payment: {payment}</p>

			<label>
				<input
					type="radio"
					value="Pick up"
					checked={shipping === "Pick up"}
					onChange={handleShippingChange}
				/>
				Pick Up
			</label>
			<label>
				<input
					type="radio"
					value="Delivery"
					checked={payment === "Delivery"}
					onChange={handleShippingChange}
				/>
				Delivery
			</label>
			<p>Shipping:{shipping} </p>
		</div>
	);
}
export default MyComponentOnChangeEventHandler;
