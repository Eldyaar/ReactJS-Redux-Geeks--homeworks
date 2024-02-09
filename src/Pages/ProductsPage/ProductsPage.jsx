import { useSelector, useDispatch } from 'react-redux'

import { addProductBasket } from '../../Store/basketReducer'

import ProductCard from '../../components/ProductCard/ProductCard'

import './products.scss'


const ProductsPage = () => {
   const productsData = useSelector(state => state.product.products)
   const basketData = useSelector(state => state.basket.products)
   const dispatch = useDispatch()

   const addToBasket = index => {
      dispatch(addProductBasket(productsData[index]))

      console.log(productsData[index])
   }

   return (
      <div className="product">
         <div className="container">   
            <div className="product-wrap">
               <h1>Продукты</h1>
               <div className='product-wrap__inner'>
                  {productsData.map((product, index) => 
                     <ProductCard 
                        key={product.id}
                        index={index}
                        product={product}
                        addToBasket={addToBasket}
                     />
                  )}
               </div>
            </div>   
         </div>
      </div>
   )
}

export default ProductsPage