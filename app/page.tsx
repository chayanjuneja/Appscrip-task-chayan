import { Suspense } from 'react'
import ProductListingPage from '../components/ProductListingPage'

export const dynamic = 'force-dynamic'

export default async function Home() {
  let products = []
  let categories = []

  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NETLIFY_URL
      ? `https://${process.env.NETLIFY_URL}`
      : 'http://localhost:3000'

    const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' })
    const data = await res.json()
    products = data.products
    categories = data.categories
  } catch {
    // products stay empty, client will hydrate
  }

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