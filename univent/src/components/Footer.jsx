import { Link } from 'react-router-dom'

const columns = [
  { title: 'Discover', links: [['Events', '/events'], ['Categories', '/categories'], ['Organizations', '/organizations']] },
  { title: 'Organizers', links: [['Host an Event', '/host'], ['Log in', '/login'], ['Sign up', '/signup']] },
  { title: 'Company', links: [['About', '/about'], ['Help', '/help'], ['Contact', '/contact']] },
  { title: 'Legal', links: [['Privacy', '/privacy'], ['Terms', '/terms']] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo">Uni<span>Vent</span></Link>
          <p className="muted small footer-blurb">
            Discover. Participate. Organize. An event discovery and registration platform currently in early development.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="footer-title">{col.title}</h3>
            <ul>
              {col.links.map(([label, to]) => (
                <li key={to + label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom muted small">
        © {new Date().getFullYear()} UniVent. A student cloud computing project. Event listings are sample content.
      </div>
    </footer>
  )
}
