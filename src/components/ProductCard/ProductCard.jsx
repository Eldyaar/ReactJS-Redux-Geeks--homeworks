import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { basketActions } from '../../Store/basketSlice'

import { FaHeart } from 'react-icons/fa'
import './productCard.scss'


const ProductCard = ({ product, index }) => {
   const dispatch = useDispatch()

   const basketItem = useSelector(state => state.basket.basketState.find((prod) => prod.name === product.name))
   const productPrice = typeof product.price === 'string' ? Number(product.price.substring(1)) : 0

   const location = useLocation()
   const isBasketPage = location.pathname === '/basket'

   const addedCount = basketItem ? basketItem.count : 0


   const addToBasket = () => {
      const basketProduct = {
         id: product.id,
         count: 0,
         name: product.name,
         price: product.price,
         picture: product.picture
      }

      dispatch(basketActions.addProduct(basketProduct))
      dispatch(basketActions.calculateTotalPrice())
   }

   const removeFromBasket = () => {
      dispatch(basketActions.removeProduct(product))
      dispatch(basketActions.calculateTotalPrice())
   }

   const onClickIncrease = () => {
      dispatch(basketActions.addProduct(product))
   }

   const onClickDecrease = () => {
      if (basketItem.count <= 1) {
         removeFromBasket()
      } else {
         dispatch(basketActions.decreaseCount(product))
      }
   }
   
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
                     <div className='card-bottom__info_price'>{productPrice * product.count} $</div>
                  </div>
                  <div 
                     style={{
                        background: 'rgba(138, 43, 226, 0.1)',
                        padding: '5px 10px',
                        borderRadius: '50%',
                        color: '#8A2BE2'
                     }}
                  >{addedCount}</div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                     <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <button onClick={onClickDecrease} style={{width: '45%'}}>-</button>
                        <button onClick={onClickIncrease} style={{width: '45%'}}>+</button>
                     </div>
                     <button 
                        onClick={() => removeFromBasket()}
                        className='card-bottom__btn'
                     >
                        Удалить
                     </button>
                  </div>
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
                        onClick={() => addToBasket()}
                        className='card-bottom__btn'
                     >
                        Купить
                        {addedCount > 0 && <span>{addedCount}</span>}
                     </button>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default ProductCard