import { Link } from 'react-router-dom'
import { CalendarDays, MapPin } from 'lucide-react'
import EventBanner from './EventBanner'
import { getCategory } from '../data/mockEvents'
import { formatDate, priceLabel } from '../utils'

// variant: "card" (default, vertical) or "row" (compact, horizontal)
export default function EventCard({ event, variant = 'card' }) {
  const category = getCategory(event.category)
  const url = `/events/${event.id}`

  return (
    <article className={`event-card event-card-${variant}`}>
      <Link to={url} className="event-media" tabIndex={-1} aria-hidden="true">
        <EventBanner event={event} />
      </Link>
      <div className="event-body">
        <div className="chip-row">
          <span className="chip">{category?.name}</span>
          <span className={`chip ${event.price === 0 ? 'chip-free' : 'chip-paid'}`}>{priceLabel(event.price)}</span>
        </div>
        <h3 className="event-title"><Link to={url}>{event.title}</Link></h3>
        <p className="muted small">by {event.organizer}</p>
        <ul className="event-facts">
          <li><CalendarDays size={15} aria-hidden="true" /> {formatDate(event.startDate)}</li>
          <li><MapPin size={15} aria-hidden="true" /> {event.mode} · {event.location}</li>
        </ul>
        <Link to={url} className="btn btn-ghost btn-sm">View details</Link>
      </div>
    </article>
  )
}
