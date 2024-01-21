import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
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
                  </ul>
               </nav>
               <button className='nav-wrap__btn'>Войти</button>
            </div>
         </div>
      </header>
   )
}

export default Nav
