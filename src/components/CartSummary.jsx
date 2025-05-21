import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const {carts, decQuantity, addToCart, removeFromCart} = props

  const total = carts.reduce((a,c) => a += c.price * c.quantity, 0)
  const vat = total * 0.07
  const finalTotal = total + vat
  console.log(total)

  
  return (
    <div className='w-1/3 bg-orange-100 '>
      <h2 className='text-2xl rounded py-2 text-slate-600 ml-4'>Cart Items :</h2>
      {carts.length ===0 && <p className='text-2xl rounded py-2 text-slate-600 ml-4'>Empty Cart</p>}
      <div className="flex flex-col gap-2">
        { carts.map(el => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} 
            addToCart={addToCart} removeFromCart={removeFromCart}/>
            
        ))}
      </div>
        {carts.length > 0 && (
          <>
<div className='divide mt-4 text-lg font-semibold text-gray-800 px-4'>
  <p>Total Calculation</p>
</div>
<div className='flex flex-col gap-1 mt-2 px-4'>
  <div className='flex justify-between items-center px-1.5'>
    <p className='font-bold w-40 text-left -ml-1'>Total</p>
    <p className='w-32 text-right'>{total.toFixed(2)}</p>
  </div>
  
  <div className='flex justify-between items-center px-1.5'>
    <p className='font-bold w-40 text-left -ml-1'>VAT</p>
    <p className='w-32 text-right'>{vat.toFixed(2)}</p>
  </div>
  
  <div className='flex justify-between items-center px-1.5'>
    <p className='font-bold w-40 text-left -ml-1'>Final Total</p>
    <p className='w-32 text-right underline decoration-double font-medium'>฿{finalTotal.toFixed(2)}</p>
  </div>
</div>
          </>
        )}
      {/* <pre>{JSON.stringify(carts, null, 2)}</pre> */}
    </div>
  )
}

export default CartSummary