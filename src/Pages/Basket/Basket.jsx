import { useSelector } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard'

import './basket.scss'


const Basket = () => {
   const basketProduct = useSelector(state => state.basket.basketState)
   const totalCount = basketProduct.reduce((sum, product) => sum + product.count, 0)

   return (
      <div className='basket'>
         <div className='container'>
            <h2 style={{
               marginBottom: '30px',
               padding: '8px 15px',
               background: 'rgba(138, 43, 226, 0.1)',
               color: '#8A2BE2',
               width: '200px',
               borderRadius: '10px'
            }}>
               Корзина 
               <span style={{ marginLeft: '50px', color: '#00ff00' }}>
                  {totalCount}
               </span>
            </h2>
            <div 
               style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap'
               }}
            >
               {basketProduct.map((product, index) => 
                  <ProductCard 
                     key={index}
                     index={index}
                     product={product}
                  />
               )}
            </div>
         </div>
      </div>
   )
   
}

export default Basket