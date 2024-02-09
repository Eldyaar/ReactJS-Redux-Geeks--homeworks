import { useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './nav.scss'

const Nav = () => {
   const dispatch = useDispatch()
   const themeState = useSelector(state => state.theme.darkTheme)
   const basketProduct = useSelector(state => state.basket.products)

   const switchTheme = () => dispatch({ type: 'SWITCH_THEME' })

   const switchBgStyle = () => {
      if (themeState) {
         document.body.style.backgroundColor = "#fff"
      } else {
         document.body.style.backgroundColor = "#373737"
      }
   }

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
                        <button 
                           onClick={() => {
                              switchTheme()
                              switchBgStyle()
                           }}
                           className='nav-wrap__theme-btn'>
                           {themeState ? 'Яркий' : 'Темный'}
                        </button>
                     </li>
                     <li>
                        <NavLink to='basket' className='link'>
                           <FaShoppingBasket className='basket' />
                           <span>{basketProduct.length}</span>
                        </NavLink>
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