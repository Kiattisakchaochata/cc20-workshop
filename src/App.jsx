import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartSummary from "./components/CartSummary"
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // อะไรที่ต้องมีใน cart = { id, price, title, quantity}

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
      .then(resp => resp.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  const addToCart = (id, title, price) => {
    let idx = carts.findIndex(el => el.id === id) // not fond = -1
    let newItem
    if(idx === -1) {
      newItem = { id: id, title: title, price: price, quantity: 1 }
      setCarts([...carts, newItem])
    }else {
      const clonedCart = [...carts]
      clonedCart[idx].quantity +=1
      setCarts(clonedCart)
    }
  }
    const decQuantity = (id) => {
      //ลดจำนวน Quantity ของ item ใน cart 
      let idx = carts.findIndex(el => el.id === id) // not fond = -1
      const clonedCart = [...carts]
      if(clonedCart[idx].quantity > 1) {
        clonedCart[idx].quantity -=1 
        setCarts(clonedCart)
      } else {
        clonedCart.splice(idx,1)
      }
      setCarts(clonedCart)
    }
    
const removeFromCart = (id) => {
  setCarts((prevCarts) => prevCarts.filter(item => item.id !== id));
};

    // const incQuantity = (id) => {
    //   let idx = carts.findIndex(el => el.id === id)
    //   const clonedCart = [...carts]
    //   clonedCart[idx].quantity +=1
    //   setCarts(clonedCart)
    // }
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart}
         removeFromCart={removeFromCart} />
      </div>
    </div>
  )
}


export default App