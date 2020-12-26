import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import './CartScreen.css'
import { addToCart, removeFromCart } from '../../Redux/actions/cartActions'


const CartScreen = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="cart__empty">
                        Your cart is empty
                        <Link To="/">
                            Go Back
                        </Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem
                        key={item.product}
                        item={item}
                        qtyChangeHandler={qtyChangeHandler}
                        removeFromCartHandler={removeFromCartHandler}
                    />
                ))
                }
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default CartScreen
