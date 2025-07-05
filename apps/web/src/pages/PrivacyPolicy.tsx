import type React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Daily Quotes'
  }, [])

  return (
    <Layout>
      <motion.div 
        className="bg-theme-secondary min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-theme-dark"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-theme-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>

            <h2>1. Information We Collect</h2>
            <p>
              Daily Quotes is designed to respect your privacy. We collect
              minimal information:
            </p>
            <ul>
              <li>
                App usage data (quotes viewed, favorites saved) stored locally
                on your device
              </li>
              <li>
                Basic analytics to improve app performance (anonymous usage
                patterns)
              </li>
              <li>
                Crash reports to help us fix bugs (no personal information
                included)
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide you with personalized daily quotes</li>
              <li>Remember your favorite quotes (stored locally)</li>
              <li>Improve app functionality and user experience</li>
              <li>Send you daily quote notifications (if enabled)</li>
            </ul>

            <h2>3. Data Storage</h2>
            <p>
              Your personal data (favorites, preferences) is stored locally on
              your device and is not transmitted to our servers. We do not have
              access to your favorite quotes or personal settings.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>We may use third-party services for:</p>
            <ul>
              <li>Analytics (to understand app usage patterns)</li>
              <li>Crash reporting (to improve app stability)</li>
              <li>Push notifications (to deliver daily quotes)</li>
            </ul>
            <p>
              These services have their own privacy policies and we encourage
              you to review them.
            </p>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell, trade, or share your personal information with
              third parties. Your data remains private and is used solely to
              enhance your Daily Quotes experience.
            </p>

            <h2>6. Children's Privacy</h2>
            <p>
              Our app is safe for all ages. We do not knowingly collect personal
              information from children under 13. If you are a parent and
              believe your child has provided us with personal information,
              please contact us.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Delete the app and all locally stored data at any time</li>
              <li>Disable notifications in your device settings</li>
              <li>Contact us with any privacy concerns</li>
            </ul>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the "last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us at:
            </p>
            <p>Email: hello@ruchern.dev</p>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default PrivacyPolicy
