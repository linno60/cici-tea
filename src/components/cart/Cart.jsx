import './cart.scss'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
    const { cartItems, totalAmount, quantity } = useSelector(
        (state) => state.cart
    )

    if (quantity === 0) {
        return (
            <div className='cartContent'>
                <h1>No items in cart...</h1>
            </div>
        )
    }

    return (
        <div className='cartContent'>
            <h1>Cart</h1>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <h2 className='total'>Total: ${totalAmount.toFixed(2)}</h2>
            <button className='checkOut'>Check Out</button>
        </div>
    )
}

export default Cart
