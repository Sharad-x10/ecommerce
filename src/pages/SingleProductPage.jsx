import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { products } from '../data/productsData'

function SingleProductPage() {
    const params = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart, removeFromCart, isInCart } = useCart();
    console.log(params);

    const handleAddToCart = () => {
        addToCart(item);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

      useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        async function fetchProducts() {
          try {
            const productId = parseInt(params.id);
            
            // Check if it's a local product (IDs 30, 40, 50, 60)
            const localProduct = products.find(p => p.id === productId);
            
            if (localProduct) {
              setItem(localProduct);
              setLoading(false);
            } else {
              // Fetch from API for other products
              const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
              const data = await response.json();
              setItem(data);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching products', error);
            setLoading(false);
          }
        }
        fetchProducts();
      }, [params.id]);
    
      console.log("item:", item);
      console.log("loading:", loading);

      if (loading) {
        return <div className="text-center py-16">Loading...</div>;
      }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
          <div className="grid md:grid-cols-2 gap-12 p-12">
            {/* Image Section */}
            <div className="flex justify-center items-center bg-blue-50 rounded-xl p-12 group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-w-full max-h-96 object-contain filter group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <span className="inline-block bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                  {item.category}
                </span>
                <h1 className="text-4xl font-display font-medium text-gray-900 leading-tight">{item.title}</h1>
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="text-5xl font-medium text-blue-600">${item.price}</span>
                {item.rating && (
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                    <span className="text-yellow-500 mr-2 text-lg">★</span>
                    <span className="font-semibold text-gray-900">{item.rating.rate}</span>
                    <span className="text-gray-600 ml-2 font-light">({item.rating.count} reviews)</span>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide">Description</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
              </div>
              
              {isInCart(item.id) ? (
                <div className="space-y-4">
                  <button 
                    onClick={handleAddToCart}
                    disabled
                    className="w-full bg-gray-400 text-white font-medium py-4 px-8 rounded-xl cursor-not-allowed tracking-wide"
                  >
                    Already in Cart
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 tracking-wide hover:shadow-lg"
                    >
                      Remove
                    </button>
                    <Link 
                      to="/cart"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 text-center flex items-center justify-center tracking-wide hover:shadow-lg"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handleAddToCart}
                  className={`w-full font-medium py-4 px-8 rounded-xl transition-all duration-300 tracking-wide ${
                    isAdded 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                  }`}
                >
                  {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage