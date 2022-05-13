import Menu from '../../components/menu/Menu'
import Cart from '../../components/cart/Cart'
import './order.scss'

function Order() {
    return (
        <div className='order'>
            <div className='menu'>
                <Menu />
            </div>
            <div className='cart'>
                <Cart />
            </div>
        </div>
    )
}
export default Order
