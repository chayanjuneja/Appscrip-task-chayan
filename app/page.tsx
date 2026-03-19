import { Suspense } from 'react'
import ProductListingPage from '../components/ProductListingPage'

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

async function getCategories() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export default async function Home() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://appscrip.store/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://appscrip.store/products' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense>
        <ProductListingPage products={products} categories={categories} />
      </Suspense>
    </>
  )
}