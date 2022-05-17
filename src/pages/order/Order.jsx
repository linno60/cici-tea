import './order.scss'
import Products from '../../components/product/Products'
import Cart from '../../components/cart/Cart'

function Order() {
    return (
        <div className='order'>
            <div className='products'>
                <Products />
            </div>
            <div className='cart'>
                <Cart />
            </div>
        </div>
    )
}
export default Order
