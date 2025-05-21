import React from 'react'
import CartCount from './CartCount'

function Header(props) {
  const {itemCount} = props
  return (
    <div class="flex justify-between items-center h-24 bg-amber-400 px-4">
  <div class="flex items-center gap-3">
    <img src='/src/pic/home.png' alt="Logo" class="w-32 
    h-32 object-contain mt-3 mb-2"/>
    <p class="text-3xl font-bold text-white mt-2 -ml-7 ">CC SHOP</p>
  </div>
  <CartCount itemCount={itemCount}/>
</div>
  )
}

export default Header