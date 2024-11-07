import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">LuxStay</h3>
            <p className="text-muted-foreground">
              Experience luxury and comfort in our handpicked selection of premium hotels.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/rooms" className="block text-muted-foreground hover:text-primary">Our Rooms</Link>
              <Link href="/pricing" className="block text-muted-foreground hover:text-primary">Pricing</Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <Link href="/faq" className="block text-muted-foreground hover:text-primary">FAQs</Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-primary">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LuxStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}