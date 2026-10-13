import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeader({ title, subtitle, linkTo, linkLabel }) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        {subtitle && <p className="muted">{subtitle}</p>}
      </div>
      {linkTo && (
        <Link to={linkTo} className="link-arrow">{linkLabel} <ArrowRight size={16} aria-hidden="true" /></Link>
      )}
    </div>
  )
}
