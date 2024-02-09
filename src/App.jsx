import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import AddProduct from './Pages/AddProduct/AddProducts'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import Basket from './Pages/Basket/Basket'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='products' element={<ProductsPage />} />
        <Route path='add' element={<AddProduct />} />
        <Route path='basket' element={<Basket />} />

        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App