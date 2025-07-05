import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiBell, FiHeart, FiSmartphone } from 'react-icons/fi'
import iconPng from '../assets/icon.png'
import Layout from '../components/Layout'

function Home() {
  useEffect(() => {
    document.title = 'Daily Quotes - Your Daily Dose of Inspiration'

    // Handle hash navigation when coming from other pages
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to ensure the component is fully rendered
    }
  }, [])

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section
          className="bg-theme-secondary text-center py-20 px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={iconPng}
              alt="Daily Quotes App"
              className="w-24 h-24 rounded-2xl"
            />
          </motion.div>
          <motion.h2
            className="text-theme-dark text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your Daily Dose of Inspiration
          </motion.h2>
          <motion.p
            className="text-theme-medium text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Get motivated with hand-picked quotes delivered to you every day.
          </motion.p>
          {/* Download buttons temporarily removed
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#"
              className="btn-primary font-bold py-3 px-6 rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Download for iOS
            </motion.a>
            <motion.a
              href="#"
              className="btn-primary font-bold py-3 px-6 rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Download for Android
            </motion.a>
          </motion.div>
          */}
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="bg-theme-dark py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <motion.h3
              className="text-theme-white text-3xl font-bold text-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Features
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="feature"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <FiSmartphone className="text-theme-primary text-4xl mx-auto mb-4" />
                </motion.div>
                <h4 className="text-theme-white text-xl font-bold mb-2">
                  Daily Quotes
                </h4>
                <p className="text-theme-light-cream">
                  Get a new quote every day to inspire you.
                </p>
              </motion.div>
              <motion.div
                className="feature"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <FiHeart className="text-theme-primary text-4xl mx-auto mb-4" />
                </motion.div>
                <h4 className="text-theme-white text-xl font-bold mb-2">
                  Favorites
                </h4>
                <p className="text-theme-light-cream">
                  Save your favorite quotes to read them later.
                </p>
              </motion.div>
              <motion.div
                className="feature"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <FiBell className="text-theme-primary text-4xl mx-auto mb-4" />
                </motion.div>
                <h4 className="text-theme-white text-xl font-bold mb-2">
                  Notifications
                </h4>
                <p className="text-theme-light-cream">
                  Get notified daily with the quote of the day.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* App Screenshot Section */}
        <motion.section
          className="bg-theme-secondary py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <motion.h3
              className="text-theme-dark text-3xl font-bold mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              See the App in Action
            </motion.h3>
            <motion.img
              src="https://via.placeholder.com/800x400"
              alt="App Screenshot"
              className="mx-auto rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          id="download"
          className="py-20 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <motion.h3
              className="text-theme-dark text-3xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Download Daily Quotes Today!
            </motion.h3>
            <motion.p
              className="text-theme-medium text-xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of users who start their day with inspiration.
            </motion.p>
            {/* Download buttons temporarily removed
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                className="btn-primary font-bold py-3 px-6 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Download for iOS
              </motion.a>
              <motion.a
                href="#"
                className="btn-primary font-bold py-3 px-6 rounded-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Download for Android
              </motion.a>
            </motion.div>
            */}
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  )
}

export default Home
