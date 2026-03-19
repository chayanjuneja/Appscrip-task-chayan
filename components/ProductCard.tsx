'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HeartIcon } from './Icons'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [wishlisted, setWishlisted] = useState(false)
  const seoName = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: '3/4' }}>
        <Image
          src={product.image}
          alt={`${product.title} - ${seoName}`}
          title={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-4"
          loading={index < 4 ? 'eager' : 'lazy'}
        />
      </div>
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#1a1a1a] leading-tight flex-1">
            {product.title.length > 50 ? `${product.title.slice(0, 50)}...` : product.title}
          </h3>
          <button
            type="button"
            onClick={() => setWishlisted(v => !v)}
            className={`flex-shrink-0 transition-colors mt-0.5 ${wishlisted ? 'text-red-500' : 'text-[#888] hover:text-[#1a1a1a]'}`}
            aria-label={wishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          >
            <HeartIcon filled={wishlisted} />
          </button>
        </div>
        <p className="text-xs text-[#888] italic">Sign in or Create an account to see pricing</p>
      </div>
    </article>
  )
}