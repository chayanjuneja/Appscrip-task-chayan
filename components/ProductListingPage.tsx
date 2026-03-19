'use client'

import { useState, useCallback } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ControlsBar from './ControlsBar'
import FilterSidebar from './FilterSidebar'
import ProductCard from './ProductCard'
import Footer from './Footer'

type SortOption = 'RECOMMENDED' | 'NEWEST FIRST' | 'POPULAR' | 'PRICE: HIGH TO LOW' | 'PRICE: LOW TO HIGH'

interface Product {
  id: number; title: string; price: number; description: string
  category: string; image: string; rating: { rate: number; count: number }
}

function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const arr = [...products]
  switch (sortBy) {
    case 'PRICE: HIGH TO LOW': return arr.sort((a, b) => b.price - a.price)
    case 'PRICE: LOW TO HIGH': return arr.sort((a, b) => a.price - b.price)
    case 'POPULAR': return arr.sort((a, b) => b.rating.count - a.rating.count)
    case 'NEWEST FIRST': return arr.sort((a, b) => b.id - a.id)
    default: return arr
  }
}

export default function ProductListingPage({ products, categories }: { products: Product[]; categories: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [customizable, setCustomizable] = useState(false)
  const [showFilter, setShowFilter] = useState(true)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('RECOMMENDED')

  const filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    return true
  })
  const displayed = sortProducts(filtered, sortBy)

  const handleCategory = useCallback((cat: string) => {
    setSelectedCategory(cat)
    setMobileFilterOpen(false)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onMenuToggle={() => setMobileFilterOpen(true)} />
      <main>
        <HeroSection />
        <ControlsBar itemCount={displayed.length} showFilter={showFilter} onToggleFilter={() => setShowFilter(v => !v)} sortBy={sortBy} onSortChange={setSortBy} />
        <div className="flex gap-0 md:gap-8 px-4 md:px-8 py-6">
          {showFilter && (
            <div className="hidden md:block">
              <FilterSidebar categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategory} customizable={customizable} onCustomizableChange={setCustomizable} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {displayed.length === 0
              ? <p className="text-center text-[#888] py-20 text-sm">No products found.</p>
              : <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                  {displayed.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
                </div>
            }
          </div>
        </div>
      </main>
      {mobileFilterOpen && (
        <FilterSidebar categories={categories} selectedCategory={selectedCategory} onCategoryChange={handleCategory} customizable={customizable} onCustomizableChange={setCustomizable} isDrawer onClose={() => setMobileFilterOpen(false)} />
      )}
      <Footer />
    </div>
  )
}