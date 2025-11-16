'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GardenCard } from '@/components/garden-card'

interface GardenItem {
  id: number
  name: string
  description: string
  image_url: string
  category: string
}

export default function GardenPage() {
  const [gardenItems, setGardenItems] = useState<GardenItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGardenItems = async () => {
      try {
        const response = await fetch('/api/garden')
        if (!response.ok) throw new Error('Failed to fetch garden items')
        const data = await response.json()
        setGardenItems(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchGardenItems()
  }, [])

  const vegetablesCategory = gardenItems.filter(item => item.category === 'Vegetables')
  const flowersCategory = gardenItems.filter(item => item.category === 'Flowers')
  const herbsCategory = gardenItems.filter(item => item.category === 'Herbs')

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Our Garden</h1>
            <p className="text-lg opacity-90">A source of fresh air, engagement, and community spirit in rural West Bengal</p>
          </div>
        </section>

        {/* Garden Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading garden items...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-red-50 rounded-lg">
              <p className="text-red-600">Error: {error}</p>
            </div>
          ) : gardenItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No garden items available yet. Check back soon!</p>
            </div>
          ) : (
            <>
              {/* Vegetables */}
              {vegetablesCategory.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Vegetables</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vegetablesCategory.map((item) => (
                      <GardenCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        imageUrl={item.image_url}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Flowers */}
              {flowersCategory.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Flowers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flowersCategory.map((item) => (
                      <GardenCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        imageUrl={item.image_url}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Herbs */}
              {herbsCategory.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Herbs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {herbsCategory.map((item) => (
                      <GardenCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        imageUrl={item.image_url}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {/* Information Section */}
        <section className="bg-muted py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Garden Philosophy</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our garden is more than just a place for cultivation. It is a sanctuary where nature thrives alongside our community. The fresh produce and vibrant flowers serve as a constant reminder of our connection to the earth and the importance of sustainable living.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
