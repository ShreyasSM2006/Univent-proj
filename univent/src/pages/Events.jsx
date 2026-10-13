import { Link, useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import EventCard from '../components/EventCard'
import { events, categories, getCategory } from '../data/mockEvents'

export default function Events() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const category = params.get('category') || ''
  const price = params.get('price') || ''

  function update(key, value) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const term = q.trim().toLowerCase()
  const results = events.filter((e) => {
    const haystack = [e.title, e.organizer, e.location, getCategory(e.category)?.name, ...e.tags].join(' ').toLowerCase()
    return (
      (!term || haystack.includes(term)) &&
      (!category || e.category === category) &&
      (!price || (price === 'free' ? e.price === 0 : e.price > 0))
    )
  })

  return (
    <section className="container page">
      <h1>Discover events</h1>
      <p className="muted">Sample events. Full filtering and sorting arrive in Milestone 2.</p>

      <div className="filters">
        <div className="field">
          <label htmlFor="f-q">Search</label>
          <input id="f-q" type="search" value={q} onChange={(e) => update('q', e.target.value)} placeholder="Title, organizer, topic" />
        </div>
        <div className="field">
          <label htmlFor="f-cat">Category</label>
          <select id="f-cat" value={category} onChange={(e) => update('category', e.target.value)}>
            <option value="">All categories</option>
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-price">Price</label>
          <select id="f-price" value={price} onChange={(e) => update('price', e.target.value)}>
            <option value="">Free and paid</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>

      <p className="muted small" aria-live="polite">{results.length} {results.length === 1 ? 'event' : 'events'} found</p>

      {results.length ? (
        <div className="grid grid-3">{results.map((e) => <EventCard key={e.id} event={e} />)}</div>
      ) : (
        <div className="empty">
          <SearchX size={32} aria-hidden="true" />
          <h2>No events match your search</h2>
          <p className="muted">Try a different keyword or clear your filters.</p>
          <Link to="/events" className="btn btn-ghost">Clear filters</Link>
        </div>
      )}
    </section>
  )
}
