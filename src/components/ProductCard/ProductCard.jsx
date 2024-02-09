import { useLocation } from 'react-router-dom'

import { FaHeart } from 'react-icons/fa'
import './productCard.scss'


const ProductCard = ({product, index, addToBasket}) => {
   const location = useLocation()
   const isBasketPage = location.pathname === '/basket'

   return (
      <>
         {isBasketPage ? (
            <div key={index} className='card'>
               <div 
                  style={{
                     background: `url(${product.picture})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center'
                  }}
                  className='card-top'
               >
                  <div className='card-top__info'>
                     <div className='card-top__info_promo'>-25%</div>
                     <div className='card-top__info_like'>
                        <FaHeart className="heart" />
                     </div>
                  </div>
               </div>
               <div className='card-bottom'>
                  <div className='card-bottom__info'>
                     <div className='card-bottom__info_name'>{product.name}</div>
                     <div className='card-bottom__info_price'>{product.price}</div>
                  </div>
                  <button className='card-bottom__btn'>
                     Убрать
                  </button>
               </div>
            </div>
            ) : (
               <div key={index} className='card'>
                  <div 
                     style={{
                        background: `url(${product.picture})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                     }}
                     className='card-top'
                  >
                     <div className='card-top__info'>
                        <div className='card-top__info_promo'>-25%</div>
                        <div className='card-top__info_like'>
                           <FaHeart className="heart" />
                        </div>
                     </div>
                  </div>
                  <div className='card-bottom'>
                     <div className='card-bottom__info'>
                        <div className='card-bottom__info_name'>{product.name}</div>
                        <div className='card-bottom__info_price'>{product.price}</div>
                     </div>
                     <button 
                        onClick={() => addToBasket(index)}
                        className='card-bottom__btn'
                     >
                        Купить
                     </button>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default ProductCard