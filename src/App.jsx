import { Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home/Home"
import Posts from "./Pages/Posts/Posts"
import CreatePost from "./Pages/CreatePost/CreatePost"
import Layout from './components/Layout/Layout'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Homework4 from './Pages/Homework4/Homework4'
import ProductsPage from './Pages/ProductsPage/ProductsPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='posts' element={<Posts />} />
        <Route path='createposts' element={<CreatePost />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='hw4' element={<Homework4 />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App