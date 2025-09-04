import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { ShoppingCartProvider } from './context/shoppingCartContext.jsx';
import Home from './pages/Home.jsx'
import { createContext, useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <ShoppingCartProvider>
      <>
        <Navbar />
        <Home></Home>
      </>
    </ShoppingCartProvider>

  )
}

export default App
