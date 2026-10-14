  import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Categories from './pages/Categories'
import CategoryPage from './pages/CategoryPage'
import PlaceholderPage from './pages/PlaceholderPage'
import Login from './pages/login'
import Signup from './pages/signup'
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Simple placeholder routes. Each one is replaced by a real page in a later milestone.
const placeholders = [
  { path: '/organizations', title: 'Organizations', description: 'A directory of colleges, clubs and communities hosting events will live here.' },
  { path: '/host', title: 'Host an event', eyebrow: 'Organizer onboarding — planned', description: 'Organizer onboarding, event creation, ticketing and attendee management are planned for a later milestone. Nothing is live yet.' },
  // { path: '/login', title: 'Log in', description: 'Authentication with Amazon Cognito is planned for Milestone 3. There is no working login yet.' },
  // { path: '/signup', title: 'Sign up', description: 'Account creation with email verification is planned for Milestone 3. There is no working signup yet.' },
  { path: '/about', title: 'About UniVent', description: 'UniVent is a student-built, serverless event discovery and registration project. This page will be written later.' },
  { path: '/help', title: 'Help', description: 'Help articles and FAQs will appear here.' },
  { path: '/contact', title: 'Contact', description: 'A contact form will be added here later.' },
  { path: '/privacy', title: 'Privacy policy', description: 'A privacy policy will be published before any real accounts exist.' },
  { path: '/terms', title: 'Terms of service', description: 'Terms of service will be published before any real accounts exist.' },
]

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categorySlug" element={<CategoryPage />} />
          {placeholders.map((p) => (
            <Route key={p.path} path={p.path} element={<PlaceholderPage title={p.title} description={p.description} eyebrow={p.eyebrow} />} />
          ))}
          <Route
            path="*"
            element={<PlaceholderPage eyebrow="404" title="Page not found" description="The page you're looking for doesn't exist." actions={<Link to="/" className="btn btn-primary">Go home</Link>} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
