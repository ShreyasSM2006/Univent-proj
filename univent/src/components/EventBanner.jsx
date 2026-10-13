import { useState } from 'react'
import { getCategory } from '../data/mockEvents'
import { iconMap, fallbackIcon } from '../data/categoryIcons'

// Shows the event image, or a gradient + icon if it is missing or fails to load.
export default function EventBanner({ event }) {
  const [failed, setFailed] = useState(false)
  const Icon = iconMap[getCategory(event.category)?.icon] || fallbackIcon

  if (!event.image || failed) {
    return (
      <div className="banner banner-fallback" role="img" aria-label={`${event.title} banner`}>
        <Icon size={40} aria-hidden="true" />
      </div>
    )
  }
  return <img className="banner" src={event.image} alt="" loading="lazy" onError={() => setFailed(true)} />
}
