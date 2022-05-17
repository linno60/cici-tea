import { useDispatch } from 'react-redux'
import {
    removeFromCart,
    addItemQuantity,
    subtractItemQuantity,
} from '../../features/cartSlice'

const CartItem = (props) => {
    const dispatch = useDispatch()
    const { title, price, quantity } = props

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h2>${price}</h2>
                <button onClick={() => dispatch(removeFromCart(props))}>
                    Remove from cart
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(subtractItemQuantity(props))}>
                    -
                </button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(addItemQuantity(props))}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CartItem
