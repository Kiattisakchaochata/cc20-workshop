import { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { products, addToCart } = props;
  console.log(products[0]);

  return (
    <div className='w-2/3 bg-blue-400 ps-2'>
  <div class="flex flex-col">
    <h2 className='ml-15 text-2xl rounded py-2 text-slate-600 self-start'>Product List</h2>
    
    <div className="ml-15 flex gap-3 flex-wrap justify-start max-h-[80vh] overflow-y-auto pr-2 mt-2">
      {products.map(el => (
        <ProductCard key={el.id} productItem={el} addToCart={addToCart} />
      ))}
    </div>
  </div>
</div>
  );
}

export default ProductList;