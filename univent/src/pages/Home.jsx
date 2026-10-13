import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Compass, ClipboardCheck, PartyPopper, ArrowRight } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import EventCard from '../components/EventCard'
import SectionHeader from '../components/SectionHeader'
import { categories, getFeaturedEvents, getClosingSoonEvents } from '../data/mockEvents'

const steps = [
  { icon: Compass, title: 'Discover events', text: 'Search and browse hackathons, workshops, competitions and more.' },
  { icon: ClipboardCheck, title: 'Register for an event', text: 'Pick an event and sign up. Registration is planned for a later milestone.' },
  { icon: PartyPopper, title: 'Show up and participate', text: 'Attend, compete, learn and meet people who share your interests.' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/events?q=${encodeURIComponent(q)}` : '/events')
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Hackathons · Workshops · Competitions</p>
          <h1 className="hero-title">Find your people. <span className="gradient-text">Experience more.</span></h1>
          <p className="lead muted">
            UniVent helps you discover hackathons, workshops, competitions, fests and other events — and, soon, register for them in one place.
          </p>

          <form className="search-bar" onSubmit={handleSearch} role="search">
            <Search size={20} aria-hidden="true" className="search-icon" />
            <label htmlFor="hero-search" className="sr-only">Search events</label>
            <input id="hero-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events, organizers or topics" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>

          <div className="chip-row hero-shortcuts">
            <span className="muted small">Popular:</span>
            {categories.slice(0, 4).map((c) => (
              <Link key={c.slug} to={`/categories/${c.slug}`} className="chip chip-link">{c.name}</Link>
            ))}
          </div>

          <div className="btn-row">
            <Link to="/events" className="btn btn-primary btn-lg">Explore Events</Link>
            <Link to="/host" className="btn btn-ghost btn-lg">Host an Event</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader title="Explore by category" subtitle="Jump straight to the kind of event you're after." linkTo="/categories" linkLabel="All categories" />
        <div className="grid grid-3">
          {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
        </div>
      </section>

      <section className="section container">
        <SectionHeader title="Featured events" subtitle="Sample events shown for illustration." linkTo="/events" linkLabel="View all events" />
        <div className="grid grid-3">
          {getFeaturedEvents().map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      <section className="section container">
        <SectionHeader title="Closing soon" subtitle="Sample events with the nearest registration deadlines." />
        <div className="grid grid-2">
          {getClosingSoonEvents(4).map((e) => <EventCard key={e.id} event={e} variant="row" />)}
        </div>
      </section>

      <section className="section container">
        <SectionHeader title="How UniVent works" />
        <ol className="grid grid-3 steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <s.icon size={24} aria-hidden="true" className="step-icon" />
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section">
        <div className="cta-panel">
          <h2>Have an event worth sharing?</h2>
          <p className="muted lead">
            Organizers will be able to publish events, configure tickets and manage registrations through UniVent. Organizer tools are planned for a future milestone.
          </p>
          <Link to="/host" className="btn btn-primary btn-lg">Start hosting <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
