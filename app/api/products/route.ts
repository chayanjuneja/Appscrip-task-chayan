export const dynamic = 'force-dynamic'

export async function GET() {
  const [productsRes, categoriesRes] = await Promise.all([
    fetch('https://fakestoreapi.com/products'),
    fetch('https://fakestoreapi.com/products/categories'),
  ])
  const products = await productsRes.json()
  const categories = await categoriesRes.json()
  return Response.json({ products, categories })
}