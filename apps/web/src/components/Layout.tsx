import type React from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Daily Quotes
          </Link>
          <nav>
            <a href="#features" className="px-4">
              Features
            </a>
            <a href="#download" className="px-4">
              Download
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2025 Daily Quotes. All rights reserved. |{' '}
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-gray-900"
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
