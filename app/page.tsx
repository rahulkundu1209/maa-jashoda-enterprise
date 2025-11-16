'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/rural-bengal-agricultural-landscape-with-puffed-ri.jpg"
            alt="Maa Jashoda Enterprise - Puffed Rice Production"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Taste the Purity of Rural Bengal</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">Authentic products from Maa Jashoda Enterprise</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/production"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore All Products
                </Link>
                <Link
                  href="/order"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">About Maa Jashoda Enterprise</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located in the heart of rural West Bengal, Maa Jashoda Enterprise has been dedicated to producing authentic, high-quality food products with traditional methods passed down through generations.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our enterprise thrives on two pillars: sustainable agricultural production and an engaging garden that celebrates local engagement and community spirit. Every product reflects our commitment to quality, tradition, and the values of rural Bengal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/production"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  View Our Products
                </Link>
                <Link
                  href="/garden"
                  className="border-2 border-primary text-primary px-6 py-2 rounded-md font-semibold hover:bg-primary/5 transition-colors text-center"
                >
                  Visit Our Garden
                </Link>
              </div>
            </div>
            <div className="relative h-80">
              <Image
                src="/rural-bengal-farming-garden-with-workers.jpg"
                alt="Maa Jashoda Garden and Workshop"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Two Pillars Section */}
        <section className="bg-muted py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-foreground">Our Two Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-8 shadow-md">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Production</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We produce premium quality puffed rice and traditional spices using time-honored methods and locally sourced ingredients. Every batch is crafted with care to ensure authenticity and excellence.
                </p>
                <Link
                  href="/production"
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Discover Our Products →
                </Link>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-md">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Garden</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our garden serves as a living testament to sustainable farming and community engagement. Fresh produce and flowers grow here, supporting our workers and celebrating local traditions.
                </p>
                <Link
                  href="/garden"
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Explore Our Garden →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
