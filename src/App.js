import React from 'react';
import Header from './components/Header';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import UsersComponent from './components/UsersComponent';

const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
          <Route path='/user' element={<UsersComponent/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App