import './menu.scss'
import MenuData from './MenuData'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <div className='menuContent'>
            {MenuData.map((item) => (
                <MenuItem {...item} key={item.name} />
            ))}
        </div>
    )
}
export default Menu
