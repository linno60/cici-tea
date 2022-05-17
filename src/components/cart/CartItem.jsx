import { useDispatch } from 'react-redux'
import {
    removeFromCart,
    addItemQuantity,
    subtractItemQuantity,
} from '../../features/cartSlice'
import './cart.scss'

const CartItem = (props) => {
    const dispatch = useDispatch()
    const { title, price, quantity } = props

    return (
        <div className='cartItemContent'>
            <div>
                <h2>{title}</h2>
                <h2>${price}</h2>
                <button onClick={() => dispatch(removeFromCart(props))}>
                    Remove from cart
                </button>
            </div>
            <div className='btn'>
                <p>
                    <button
                        onClick={() => dispatch(subtractItemQuantity(props))}
                    >
                        -
                    </button>
                    &nbsp;{quantity}&nbsp;
                    <button onClick={() => dispatch(addItemQuantity(props))}>
                        +
                    </button>
                </p>
            </div>
        </div>
    )
}

export default CartItem
