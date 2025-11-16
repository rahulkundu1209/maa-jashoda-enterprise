'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function OrderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Place Your Order</h1>
            <p className="text-lg opacity-90">Secure and easy ordering through our external form</p>
          </div>
        </section>

        {/* Order Section */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Order Our Products</h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We're delighted that you're interested in ordering from Maa Jashoda Enterprise! Our products are carefully crafted with quality and tradition in mind.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To place your order, please fill out our secure order form. It's quick, easy, and secure. Simply provide your details and specify the products you'd like to order.
            </p>

            <div className="my-10 p-6 bg-muted rounded-lg border-l-4 border-primary">
              <p className="text-foreground text-sm">
                <span className="font-semibold">Note:</span> Orders are submitted through a secure external form managed by Google Forms. Your information is safe and protected.
              </p>
            </div>

            <a
              href="https://forms.gle/your-order-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Submit Order Form (External Link)
              <ExternalLink size={20} />
            </a>

            <p className="text-muted-foreground mt-8 text-sm">
              Have questions? Contact us at <span className="font-semibold">info@maajashoda.com</span>
            </p>
          </div>

          {/* Back to Products */}
          <div className="text-center mt-12">
            <Link
              href="/production"
              className="text-primary hover:underline font-semibold"
            >
              ← Back to Products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
