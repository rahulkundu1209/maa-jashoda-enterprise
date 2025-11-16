'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold">Maa Jashoda</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/production" className="hover:text-secondary transition-colors">
              Production
            </Link>
            <Link href="/garden" className="hover:text-secondary transition-colors">
              Garden
            </Link>
            <Link href="/order" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Order Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/production"
              className="hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Production
            </Link>
            <Link
              href="/garden"
              className="hover:text-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Garden
            </Link>
            <Link
              href="/order"
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
