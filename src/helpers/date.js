// Helpers de formatage de date pour le frontend.
const FR_FORMATTER_LONG = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric', month: 'long', year: 'numeric',
})

const FR_FORMATTER_SHORT = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit', month: 'short', year: 'numeric',
})

export function formatDateLong(isoDate) {
  if (!isoDate) return ''
  return FR_FORMATTER_LONG.format(new Date(isoDate))
}

export function formatDateShort(isoDate) {
  if (!isoDate) return ''
  return FR_FORMATTER_SHORT.format(new Date(isoDate))
}

export function formatDateParts(isoDate) {
  if (!isoDate) return { day: '', month: '', year: '' }
  const d = new Date(isoDate)
  return {
    day: String(d.getDate()).padStart(2, '0'),
    month: new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(d).replace('.', ''),
    year: d.getFullYear(),
  }
}
