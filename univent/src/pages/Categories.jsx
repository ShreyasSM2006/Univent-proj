import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/mockEvents'

export default function Categories() {
  return (
    <section className="container page">
      <h1>Browse categories</h1>
      <p className="muted">Choose a category to see matching events.</p>
      <div className="grid grid-3 spaced">
        {categories.map((c) => <CategoryCard key={c.slug} category={c} />)}
      </div>
    </section>
  )
}
