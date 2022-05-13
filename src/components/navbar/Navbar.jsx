import { useNavigate, useLocation } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

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
                <li onClick={() => navigate('/sign-in')}>
                    <span>Sign In</span>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
