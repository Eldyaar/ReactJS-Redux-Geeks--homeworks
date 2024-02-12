import { useSelector, useDispatch } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard'

import './products.scss'


const ProductsPage = () => {
   const productsData = useSelector(state => state.product.productState)

   return (
      <div className="product">
         <div className="container">   
            <div className="product-wrap">
               <h1>Продукты</h1>
               <div className='product-wrap__inner'>
                  {productsData.map((product, index) =>
                     <ProductCard
                        key={index}
                        index={index}
                        product={product}
                     />
                  )}
               </div>
            </div>   
         </div>
      </div>
   )
}

export default ProductsPage