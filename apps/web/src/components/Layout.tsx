import type React from 'react'
import { Link } from 'react-router-dom'
import iconSvg from '../assets/icon.svg'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-theme-primary text-theme-dark min-h-screen flex flex-col">
      <header className="bg-theme-dark shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-theme-white text-2xl font-bold flex items-center gap-2">
            <img src={iconSvg} alt="Daily Quotes" className="w-8 h-8 rounded-lg" />
            Daily Quotes
          </Link>
          <nav>
            <a href="#features" className="text-theme-light-cream hover:text-theme-white transition-colors px-4">
              Features
            </a>
            <a href="#download" className="text-theme-light-cream hover:text-theme-white transition-colors px-4">
              Download
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-theme-dark py-6">
        <div className="container mx-auto text-center">
          <p className="text-theme-light-cream">
            &copy; 2025 Daily Quotes. All rights reserved. |{' '}
            <Link
              to="/privacy-policy"
              className="text-theme-white hover:text-theme-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
