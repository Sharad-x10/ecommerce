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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-gray-900 mb-6 tracking-tight">
              Our Collection
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            Discover our meticulously curated collection of premium products, crafted for the discerning connoisseur
          </p>

          <div className="mb-12 space-y-8">
            <div className="backdrop-blur-sm bg-white/80 border border-blue-100 rounded-2xl shadow-xl p-2 max-w-lg mx-auto">
              <SearchProduct setSearch={setSearch} />
            </div>
            <div className="backdrop-blur-sm bg-white/80 border border-blue-100 rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="text-gray-900 font-medium text-lg mb-6 tracking-wide">Price Range</h3>
                  <ProductRange 
                    setMaxValue={setMaxValue}
                    setMinValue={setMinValue}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-gray-900 font-medium text-lg mb-6 tracking-wide">Rating Filter</h3>
                  <FilterByRating 
                    setMinRate={setMinRating}
                    setMaxRating={setMaxRating}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CategoryTab CategoryName="all" key="all" setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            {
              categoriesData.map((category) => {
                return <CategoryTab CategoryName={category} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} key={category}/>;  
              })
            }
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="w-32 h-1 bg-blue-600 rounded-full shadow-sm"></div>
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
