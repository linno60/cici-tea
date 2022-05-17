import { useNavigate } from 'react-router-dom'
import './navbar.scss'
import { auth } from '../../firebase.config'

function Navbar() {
    const navigate = useNavigate()

    const user = auth.currentUser

    return (
        <nav className='nav'>
            <span className='logo' onClick={() => navigate('/')}>
                Cici Tea
            </span>
            <ul>
                <li onClick={() => navigate('/')}>
                    <span>Home</span>
                </li>
                <li onClick={() => navigate('/order')}>
                    <span>Online Order</span>
                </li>
                <li onClick={() => navigate('/')}>
                    <span>About</span>
                </li>
                <li onClick={() => navigate('/cart')}>
                    <span>Cart</span>
                </li>
                {user ? (
                    <li></li>
                ) : (
                    <li onClick={() => navigate('/sign-in')}>
                        <span>Sign In</span>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Navbar
