import React from "react";

function CartItem(props) {
  const {
    addToCart,
    decQuantity,
    removeFromCart,
    item: { id, title, price, quantity },
  } = props;
  return (
  <div className="flex items-center justify-between px-4 py-1 border-b border-gray-300">
  <p className="w-40 text-left truncate">{title.split(" ")[0] + " " + title.split(" ")[1]}</p>

  <div className="flex items-center gap-2 justify-center">
    <p
      className="w-8 h-8 flex justify-center items-center border border-gray-400 cursor-pointer hover:bg-red-100 hover:text-red-600 transition"
      onClick={() => decQuantity(id)}
    >
      -
    </p>
    

    
    <p
      className="w-8 h-8 flex justify-center items-center border border-gray-400 cursor-pointer hover:bg-green-100 hover:text-green-600 transition"
      onClick={() => addToCart(id)}
    >
      +
    </p>
    <p
    className="w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-red-200 hover:text-white transition"
    onClick={() => removeFromCart(id)}
  >
    <img src='/src/pic/bin.png' alt="Logo" class="w-10 
    h-10 object-contain mt-3 mb-2"/>
  </p>
  </div>
  
  <p className="w-28 text-right">{quantity} x ฿{price}</p>
</div>
);
}

export default CartItem;
