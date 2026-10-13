import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, MapPin, Clock, Info } from 'lucide-react'
import EventBanner from '../components/EventBanner'
import PlaceholderPage from './PlaceholderPage'
import { getEventById, getCategory } from '../data/mockEvents'
import { formatDate, priceLabel } from '../utils'

export default function EventDetails() {
  const { eventId } = useParams()
  const event = getEventById(eventId)

  if (!event) {
    return (
      <PlaceholderPage
        eyebrow="404"
        title="Event not found"
        description="We couldn't find an event with that ID. It may have been removed, or the link may be wrong."
        actions={<Link to="/events" className="btn btn-primary">Browse events</Link>}
      />
    )
  }

  const category = getCategory(event.category)

  return (
    <section className="container page">
      <Link to="/events" className="link-arrow back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to events</Link>
      <div className="detail-grid">
        <div>
          <div className="detail-banner"><EventBanner event={event} /></div>
          <div className="chip-row">
            <Link to={`/categories/${category.slug}`} className="chip chip-link">{category.name}</Link>
            <span className={`chip ${event.price === 0 ? 'chip-free' : 'chip-paid'}`}>{priceLabel(event.price)}</span>
          </div>
          <h1>{event.title}</h1>
          <p className="muted">Organized by {event.organizer}</p>
          <h2 className="h3">About this event</h2>
          <p className="muted lead">{event.description}</p>
        </div>

        <aside className="detail-side">
          <ul className="event-facts big">
            <li><CalendarDays size={18} aria-hidden="true" /> {formatDate(event.startDate)}</li>
            <li><MapPin size={18} aria-hidden="true" /> {event.mode} · {event.location}</li>
            <li><Clock size={18} aria-hidden="true" /> Register by {formatDate(event.deadline)}</li>
          </ul>
          <div className="notice">
            <Info size={18} aria-hidden="true" />
            <p>This is sample content. Registration is not available yet and will arrive in a later milestone.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
