import Product from './Product'
import ProjectData from './ProductData'

const Products = () => {
    return (
        <div>
            {ProjectData.map((product) => (
                <div key={product.id}>
                    <Product {...product} />
                </div>
            ))}
        </div>
    )
}

export default Products
