import { motion } from 'framer-motion'
import type React from 'react'
import { Link, useLocation } from 'react-router-dom'
import iconPng from '../assets/icon.png'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // On home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On other pages, navigate to home page with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <div className="bg-theme-primary text-theme-dark min-h-screen flex flex-col">
      <motion.header
        className="bg-theme-dark shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link
              to="/"
              className="text-theme-white text-2xl font-bold flex items-center gap-2"
            >
              <motion.img
                src={iconPng}
                alt="Daily Quotes"
                className="w-8 h-8 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              Daily Quotes
            </Link>
          </motion.div>
          <nav>
            <motion.button
              onClick={() => handleNavClick('features')}
              className="text-theme-light-cream hover:text-theme-white transition-colors px-4 bg-transparent border-none cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Features
            </motion.button>
            <motion.button
              onClick={() => handleNavClick('download')}
              className="text-theme-light-cream hover:text-theme-white transition-colors px-4 bg-transparent border-none cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Download
            </motion.button>
          </nav>
        </div>
      </motion.header>

      <main className="flex-1">{children}</main>

      <motion.footer
        className="bg-theme-dark py-6"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-theme-light-cream">
            &copy; 2025 Daily Quotes. All rights reserved. |{' '}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-block"
            >
              <Link
                to="/privacy-policy"
                className="text-theme-white hover:text-theme-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </motion.span>
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default Layout
