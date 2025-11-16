'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  image_url: string
  why_choose: string
  category: string
}

export default function ProductionPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (!response.ok) throw new Error('Failed to fetch products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-lg opacity-90">Premium quality puffed rice and traditional spices from rural West Bengal</p>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-red-50 rounded-lg">
              <p className="text-red-600">Error: {error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products available yet. Please check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    imageUrl={product.image_url}
                    whyChoose={product.why_choose}
                  />
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Ready to Order?</h3>
                <p className="text-muted-foreground mb-6">
                  Submit your order through our secure external form. We deliver authentic products directly to you.
                </p>
                <Link
                  href="/order"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Place Order Now
                </Link>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
