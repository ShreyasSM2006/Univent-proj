export function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function priceLabel(price) {
  return price === 0 ? 'Free' : `₹${price}`
}
