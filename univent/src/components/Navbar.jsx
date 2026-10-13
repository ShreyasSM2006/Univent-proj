import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Ticket } from 'lucide-react'

const links = [
  { to: '/events', label: 'Discover' },
  { to: '/categories', label: 'Categories' },
  { to: '/organizations', label: 'Organizations' },
  { to: '/host', label: 'Host an Event' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
  setOpen(false)
}, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" aria-label="UniVent home">
          <span className="logo-mark"><Ticket size={18} aria-hidden="true" /></span>
          Uni<span>Vent</span>
        </Link>

        <nav id="main-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">{l.label}</NavLink>
          ))}
          <div className="nav-actions">
            <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Sign up</Link>
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
