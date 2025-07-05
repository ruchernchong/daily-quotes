import { createBrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home'
import PrivacyPolicy from '../pages/PrivacyPolicy'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
])
