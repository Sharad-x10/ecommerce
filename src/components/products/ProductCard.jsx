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
<div className="group relative bg-luxury-ivory border border-luxury-stone rounded-luxury-lg shadow-soft hover:shadow-luxury transition-all duration-500 p-6 overflow-hidden">
  {/* Subtle hover overlay */}
  <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-luxury-lg"></div>
  
  {/* Premium badge */}
  <div className="absolute top-4 right-4 z-10">
    <div className="bg-luxury-charcoal text-luxury-ivory px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
      Premium
    </div>
  </div>

{/* Image */}
<Link to={`/products/${product.id}`}>
<div className="relative overflow-hidden bg-luxury-stone-light rounded-luxury h-56 mb-6 flex items-center justify-center group-hover:bg-luxury-stone transition-colors duration-500">
  <img 
    src={product.image} 
    alt={product.title} 
    className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
  />
</div>

 {/* Content */}
<h3 className="text-lg font-medium text-luxury-charcoal mb-3 line-clamp-2 group-hover:text-luxury-espresso transition-colors duration-300 leading-snug">{product.title}</h3>

 <div className="flex items-center gap-2 mb-4">
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(product.rating?.rate || 0) ? 'text-luxury-gold' : 'text-luxury-neutral-light'}`}>
        ★
      </span>
    ))}
  </div>
  <span className="text-sm text-luxury-neutral font-light">({product.rating?.count || 0})</span>
 </div>
</Link>

{/* Price */}
<div className="flex items-center gap-3 mb-6">
 <p className="text-2xl font-medium text-luxury-charcoal">${product.price}</p>
 <p className="text-lg text-luxury-neutral-light line-through font-light">${Math.round(product.price * 1.2)}</p>
</div>

{/* Button */}
{isCart ? (
 <button onClick={removeProductFromCart} className="w-full font-medium py-3 px-6 rounded-luxury bg-luxury-neutral text-luxury-ivory hover:bg-luxury-neutral-dark transition-all duration-300 tracking-wide">
   Remove from Cart
 </button>
 ) : (
<button 
 onClick={addProductToCart}
className={`w-full font-medium py-3 px-6 rounded-luxury transition-all duration-300 tracking-wide ${
 isAdded 
 ? 'bg-luxury-espresso text-luxury-ivory' 
 : 'bg-luxury-charcoal text-luxury-ivory hover:bg-luxury-charcoal-light hover:shadow-luxury'
 }`}
 >
 {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
</button>
 )}

 </div>

)

}


export default ProductCard