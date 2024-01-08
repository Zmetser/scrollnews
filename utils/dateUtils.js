// TODO: Write tests
/**
 * Returns the absolute time string representation of a given date.
 * If the date is today, it returns the time in the format "hour:minute".
 * Otherwise, it returns the date in the format "month day".
 *
 * @param {Date} date - The date to format.
 * @param {string} lang - The language code used for formatting.
 * @returns {string} The formatted absolute time string.
 */
export function getAbsoluteTimeString(date, lang) {
  if (isToday(date)) {
    return new Intl.DateTimeFormat(lang, {
      hour: 'numeric',
      minute: 'numeric'
    }).format(date)
  }

  return new Intl.DateTimeFormat(lang, {
    month: 'short',
    day: 'numeric'
  }).format(date)
}

/**
 * Converts a date and time string to a timestamp.
 * @param {string} date - The date string in the format 'YYYY-MM-DD'.
 * @param {string} time - The time string in the format 'HH:MM:SS'.
 * @returns {number} The timestamp representing the given date and time.
 */
export function toTimestamp(date, time) {
  return new Date(date + 'T' + time).getTime()
}

/**
 * Checks if a given date is today.
 *
 * @param {Date} date - The date to check.
 * @returns {boolean} Returns true if the date is today, false otherwise.
 */
function isToday(date) {
  const today = new Date()

  return today.toDateString() === date.toDateString()
}
