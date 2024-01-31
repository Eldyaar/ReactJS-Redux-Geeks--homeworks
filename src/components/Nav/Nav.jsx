import { useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
   const dispatch = useDispatch()
   const themeState = useSelector(state => state.theme.darkTheme)

   const switchTheme = () => {
      dispatch({ type: 'SWITCH_THEME' })
   }

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
                  <NavLink className='nav-wrap__logo_link' to='/'>
                     React <span>Posts</span>
                  </NavLink>
               </div>
               <nav className='nav-wrap__links'>
                  <ul>
                     <li><NavLink className='link' to='/'>Главная</NavLink></li>
                     <li><NavLink className='link' to='/posts'>Посты</NavLink></li>
                     <li><NavLink className='link' to='/createposts'>Новый пост</NavLink></li>
                     <li><NavLink className='link' to='/hw4'>Homework 4 (New product)</NavLink></li>
                     <li><NavLink className='link' to='/products'>Products</NavLink></li>
                  </ul>
               </nav>
               <button 
                  onClick={() => {
                     switchTheme()
                     switchBgStyle()
                  }}
                  className='nav-wrap__theme-btn'>
                  {themeState ? 'Яркий' : 'Темный'}
               </button>
               <button className='nav-wrap__btn'>Войти</button>
            </div>
         </div>
      </header>
   )
}

export default Nav
