import { Link, useParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import PlaceholderPage from './PlaceholderPage'
import { getCategory, getEventsByCategory } from '../data/mockEvents'

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)

  if (!category) {
    return (
      <PlaceholderPage
        eyebrow="404"
        title="Category not found"
        description="That category doesn't exist."
        actions={<Link to="/categories" className="btn btn-primary">All categories</Link>}
      />
    )
  }

  const list = getEventsByCategory(category.slug)
  return (
    <section className="container page">
      <p className="eyebrow">Category</p>
      <h1>{category.name}</h1>
      <p className="muted">{category.blurb}</p>
      {list.length ? (
        <div className="grid grid-3 spaced">{list.map((e) => <EventCard key={e.id} event={e} />)}</div>
      ) : (
        <div className="empty">
          <h2>No sample events in this category yet</h2>
          <Link to="/events" className="btn btn-ghost">Browse all events</Link>
        </div>
      )}
    </section>
  )
}
