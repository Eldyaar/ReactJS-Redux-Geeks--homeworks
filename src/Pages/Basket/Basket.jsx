import { useSelector, useDispatch } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard'

import { addProductBasket } from '../../Store/basketReducer'

import './basket.scss'


const Basket = () => {
   const basketProduct = useSelector(state => state.basket.products)
   const dispatch = useDispatch()

   const addToBasket = (index) => {
      dispatch(addProductBasket(basketProduct[index]))
   }

   return (
      <div className='basket'>
         <div className='container'>
            <h2 style={{marginBottom: '30px'}}>Корзина: <span>{basketProduct.length}</span></h2>
            <div 
               style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap'
               }}
            >
               {basketProduct.map((product, index) => 
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
   )
   
}

export default Basket