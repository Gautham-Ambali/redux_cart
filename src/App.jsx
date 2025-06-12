// import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Landing from './pages/Landing'
import Wishlist from './pages/wishlist'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/det/:id' element={<Details/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
