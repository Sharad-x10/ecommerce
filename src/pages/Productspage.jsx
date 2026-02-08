import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useCart } from '../hooks/useCart';
import categoriesData from '../data/categories';
import CategoryTab from '../components/products/CategoryTab';
import SearchProduct from '../components/products/SearchProduct';
import ProductRange from '../components/products/ProductRange';
import FilterByRating from '../components/products/FilterByRating';


export default function Productspage() {

  const { items, loading } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const [minValue,setMinValue]=useState(0);
  const [maxValue,setMaxValue]=useState(1000);

  const [minRating, setMinRating]=useState(0);
  const [maxRating, setMaxRating]=useState(0);


  console.log("min Rating",minRating);
  console.log("max Rating",maxRating);

  

  let filterItems = items.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
 
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-6 tracking-tight">
              Luxury Collection
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Discover our meticulously curated collection of premium products, crafted for the discerning connoisseur
          </p>

          <div className="mb-10 space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-1 max-w-lg mx-auto">
              <SearchProduct setSearch={setSearch} />
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-amber-400 font-semibold text-lg mb-4">Price Range</h3>
                  <ProductRange 
                    setMaxValue={setMaxValue}
                    setMinValue={setMinValue}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-amber-400 font-semibold text-lg mb-4">Rating Filter</h3>
                  <FilterByRating 
                    setMinRate={setMinRating}
                    setMaxRating={setMaxRating}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <CategoryTab CategoryName="all" key="all" setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            {
              categoriesData.map((category) => {
                return <CategoryTab CategoryName={category} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} key={category}/>;  
              })
            }
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filterItems.map((product) => (
            <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
              <ProductCard 
                product={product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
