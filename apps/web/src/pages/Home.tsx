import { useEffect } from 'react'
import { FiBell, FiHeart, FiSmartphone } from 'react-icons/fi'
import Layout from '../components/Layout'
import iconPng from '../assets/icon.png'

function Home() {
  useEffect(() => {
    document.title = 'Daily Quotes - Your Daily Dose of Inspiration'
  }, [])

  return (
    <Layout>
      <div>
        <section className="bg-theme-secondary text-center py-20 px-6">
          <div className="flex justify-center mb-8">
            <img src={iconPng} alt="Daily Quotes App" className="w-24 h-24 rounded-2xl" />
          </div>
          <h2 className="text-theme-dark text-5xl font-bold mb-4">
            Your Daily Dose of Inspiration
          </h2>
          <p className="text-theme-medium text-xl mb-8">
            Get motivated with hand-picked quotes delivered to you every day.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="btn-primary font-bold py-3 px-6 rounded-lg"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="btn-primary font-bold py-3 px-6 rounded-lg"
            >
              Download for Android
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-theme-dark py-20 px-6">
          <div className="container mx-auto">
            <h3 className="text-theme-white text-3xl font-bold text-center mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="feature">
                <FiSmartphone className="text-theme-primary text-4xl mx-auto mb-4" />
                <h4 className="text-theme-white text-xl font-bold mb-2">Daily Quotes</h4>
                <p className="text-theme-light-cream">Get a new quote every day to inspire you.</p>
              </div>
              <div className="feature">
                <FiHeart className="text-theme-primary text-4xl mx-auto mb-4" />
                <h4 className="text-theme-white text-xl font-bold mb-2">Favorites</h4>
                <p className="text-theme-light-cream">Save your favorite quotes to read them later.</p>
              </div>
              <div className="feature">
                <FiBell className="text-theme-primary text-4xl mx-auto mb-4" />
                <h4 className="text-theme-white text-xl font-bold mb-2">Notifications</h4>
                <p className="text-theme-light-cream">Get notified daily with the quote of the day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshot Section */}
        <section className="bg-theme-secondary py-20 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-theme-dark text-3xl font-bold mb-8">See the App in Action</h3>
            <img
              src="https://via.placeholder.com/800x400"
              alt="App Screenshot"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="download" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-theme-dark text-3xl font-bold mb-4">
              Download Daily Quotes Today!
            </h3>
            <p className="text-theme-medium text-xl mb-8">
              Join thousands of users who start their day with inspiration.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="btn-primary font-bold py-3 px-6 rounded-lg"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="btn-primary font-bold py-3 px-6 rounded-lg"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
