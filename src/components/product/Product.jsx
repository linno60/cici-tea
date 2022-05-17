import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

const Product = ({ id, title, price }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <h3>${price}</h3>
            </div>
            <div>
                <button
                    onClick={() => dispatch(addToCart({ id, title, price }))}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product
