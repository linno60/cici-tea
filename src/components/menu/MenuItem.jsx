import './menuItem.scss'

const MenuItem = (props) => {
    const { name, price } = props

    return (
        <div className='menuItem'>
            {name && <p>{name}</p>}
            {price && <p>${price}</p>}
            <button>+</button>
        </div>
    )
}
export default MenuItem
