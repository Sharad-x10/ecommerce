import React, { useState } from 'react'

import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';


function ProductCard({product}) {
 const [isAdded, setIsAdded] = useState(false)

const { addToCart, isInCart, removeFromCart } = useCart();

const isCart = isInCart(product.id);




function addProductToCart() {

addToCart(product);

handleAddCart();

}


 function removeProductFromCart() {

removeFromCart(product.id);

 }


const handleAddCart = () => {

 setIsAdded(true)

 setTimeout(() => setIsAdded(false), 2000)

}


 return (
<div className="group relative bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 overflow-hidden">
  <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
  
  <div className="absolute top-4 right-4 z-10">
    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
      Premium
    </div>
  </div>

<Link to={`/products/${product.id}`}>
<div className="relative overflow-hidden bg-blue-50 rounded-xl h-56 mb-6 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-500">
  <img 
    src={product.image} 
    alt={product.title} 
    className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
  />
</div>

 <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{product.title}</h3>

 <div className="flex items-center gap-2 mb-4">
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(product.rating?.rate || 0) ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    ))}
  </div>
  <span className="text-sm text-gray-600 font-light">({product.rating?.count || 0})</span>
 </div>
</Link>

<div className="flex items-center gap-3 mb-6">
 <p className="text-2xl font-medium text-blue-600">${product.price}</p>
 <p className="text-lg text-gray-400 line-through font-light">${Math.round(product.price * 1.2)}</p>
</div>

{isCart ? (
 <button onClick={removeProductFromCart} className="w-full font-medium py-3 px-6 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all duration-300 tracking-wide">
   Remove from Cart
 </button>
 ) : (
<button 
 onClick={addProductToCart}
className={`w-full font-medium py-3 px-6 rounded-xl transition-all duration-300 tracking-wide ${
 isAdded 
 ? 'bg-green-600 text-white' 
 : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
 }`}
 >
 {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
</button>
 )}

 </div>

)

}


export default ProductCard