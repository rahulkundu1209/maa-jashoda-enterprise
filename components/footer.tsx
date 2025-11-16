export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Maa Jashoda Enterprise</h3>
            <p className="text-sm opacity-90">
              Bringing authentic rural Bengal products to your table with quality and tradition.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/production" className="hover:text-secondary transition-colors">Production</a></li>
              <li><a href="/garden" className="hover:text-secondary transition-colors">Garden</a></li>
              <li><a href="/order" className="hover:text-secondary transition-colors">Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <p className="text-sm opacity-90">
              Rural West Bengal, India
            </p>
            <p className="text-sm opacity-90 mt-2">
              Email: info@maajashoda.com
            </p>
            <p className="text-sm opacity-90 mt-2">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © 2025 Maa Jashoda Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
