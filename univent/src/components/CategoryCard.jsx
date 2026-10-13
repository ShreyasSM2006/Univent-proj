import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { iconMap, fallbackIcon } from '../data/categoryIcons'

export default function CategoryCard({ category }) {
  const Icon = iconMap[category.icon] || fallbackIcon
  return (
    <Link to={`/categories/${category.slug}`} className="category-card">
      <span className="category-icon"><Icon size={22} aria-hidden="true" /></span>
      <span className="category-text">
        <strong>{category.name}</strong>
        <span className="muted small">{category.blurb}</span>
      </span>
      <ArrowUpRight size={18} className="category-arrow" aria-hidden="true" />
    </Link>
  )
}
