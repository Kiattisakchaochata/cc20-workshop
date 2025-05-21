import React, { useState } from 'react'

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const { addToCart ,productItem: { id, category, description, title, image, price, rating } } = props
  return (
    <div className="card bg-base-100 w-70 shadow-sm pt-4">
      <figure className='h-40 w-2/3 mx-auto'>
        <img className='h-full w-full object-contain'
          src={image}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className='text-sm text-pink-400 text-center'>{category}</p>
        <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-2'}` } 
          onClick={()=>setShowDesc(prv=>!prv)}
        >{description}</p>
        <p className='text-slate-700 text-2xl'>฿{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"
            onClick={()=>addToCart(id, title, price)}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard