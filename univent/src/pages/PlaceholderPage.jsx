import { Link } from 'react-router-dom'
import { Construction } from 'lucide-react'

// Reusable page for routes that arrive in later milestones.
export default function PlaceholderPage({ title, description, eyebrow = 'Coming in a later milestone', actions }) {
  return (
    <section className="container page-narrow placeholder">
      <span className="placeholder-icon"><Construction size={26} aria-hidden="true" /></span>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="muted lead">{description}</p>
      <div className="btn-row">
        {actions || (
          <>
            <Link to="/events" className="btn btn-primary">Explore events</Link>
            <Link to="/" className="btn btn-ghost">Back to home</Link>
          </>
        )}
      </div>
    </section>
  )
}
