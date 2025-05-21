import React from 'react'

function CartCount(props) {
  const {itemCount} = props
  return (
    <div class="relative inline-block mr-3 mt-8 mb-2">
  <img src='/src/pic/shopping.svg' alt="Logo" class="w-15 h-15 object-contain"/>
  <span class="absolute top-0 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-3 py-2">
    {itemCount}
  </span>
</div>
  )
}

export default CartCount