import Product from './Product'
import ProductData from './ProductData'
import './product.scss'

const Products = () => {
    return (
        <div className='productList'>
            {ProductData.map((product) => (
                <div key={product.id}>
                    <Product {...product} />
                </div>
            ))}
        </div>
    )
}

export default Products
