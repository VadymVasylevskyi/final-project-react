import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './features/store'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories} from './features/categories/categoriesSlice'
import { getProducts } from './features/products/productsSlice'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import HomePage from './pages/Home/HomePage'
import CategoriesPage from './pages/Categories/CategoriesPage'
import CartPage from './pages/Cart/CartPage'
import AllProductsPage from './pages/Products/All/AllProductsPage'
import ProductsByCategoryPage from './pages/Products/ByCategory/ProductsByCategoryPage'
import DiscountedProductsPage from './pages/Products/Discounted/DiscountedProductsPage'
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ConnectedModal from './components/Modal/ConnectedModal'
// import styles from './App.module.css'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories()),
    dispatch(getProducts())
  }, [])

  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='categories/:categoryId' element={<ProductsByCategoryPage />} />
          <Route path='products' element={<AllProductsPage />} />
          <Route path='discounted-products' element={<DiscountedProductsPage />} />
          <Route path='products/:productsId' element={<ProductDetailsPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ConnectedModal />
      </BrowserRouter>
   
    
  )
}

export default App
