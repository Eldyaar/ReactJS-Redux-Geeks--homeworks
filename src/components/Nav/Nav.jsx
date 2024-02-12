import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './nav.scss'

const Nav = () => {
   const { basketState, totalPrice } = useSelector(state => state.basket)
   const totalCount = basketState.reduce((sum, product) => sum + product.count, 0)

   return (
      <header className='nav'>
         <div className='container'>
            <div className='nav-wrap'>
               <div className='nav-wrap__logo'>
                  <NavLink to='/' className='nav-wrap__logo_link'>
                     React <span>Products</span>
                  </NavLink>
               </div>
               <nav className='nav-wrap__links'>
                  <ul>
                     <li><NavLink className='link' to='/add'>New product</NavLink></li>
                     <li><NavLink className='link' to='/products'>Products</NavLink></li>
                     <li>
                        <div className='basket-link'>
                           <div>{totalPrice} $</div>
                           <NavLink to='basket' className='link'>
                              <FaShoppingBasket className='basket' />
                              <span>{totalCount}</span>
                           </NavLink>
                        </div>
                     </li>
                  </ul>
               </nav>
               <button className='nav-wrap__btn'>
                  <FaUser className='profile' />
               </button>
            </div>
         </div>
      </header>
   )
}

export default Nav