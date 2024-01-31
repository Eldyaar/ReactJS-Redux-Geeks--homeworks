import { useSelector } from 'react-redux'

import './products.scss'

const ProductsPage = () => {
   const productsData = useSelector(state => state.product.products)

   return (
      <div className="product">
         <div className="container">
            <div className="product-wrap">
               <h1>Продукты</h1>
               <div className='product-wrap__inner'>
                  {productsData.map((product, index) => (
                     <div key={index} className='product-wrap__inner-card'>
                        <p><span>name:</span>{product.name}</p>
                        <p><span>Origin:</span>{product.origin}</p>
                        <p><span>price:</span>{product.price}</p>
                        <p><span>date:</span>{product.create_of_date}</p>
                     </div>
                  ))}
               </div>
            </div>   
         </div>
      </div>
   )
}

export default ProductsPage
