export const CATEGORY_DEFAULT = 'home'

// we could gather the categories from the items, but then we would have to dynamically
// generate the classes for the categories, which would make me inject css after data fetch
export const CATEGORIES = [
  'Autó',
  'Belföld',
  'Bulvár',
  'Életmód',
  'Gazdaság',
  'Informatika',
  'Külföld',
  'Kultúra',
  'Publicisztika',
  'Sport'
]

/**
 * Array of categories as slugs.
 * @type {Array<string>}
 */
const categoriesSafe = CATEGORIES.map((category) => slugify(category))

/**
 * Map of category names to their corresponding slugs.
 * @type {Object.<string, string>}
 */
const categorySlugMap = CATEGORIES.reduce((map, category, index) => {
  map[category] = categoriesSafe[index]
  return map
}, {})

// create an url slug from a word by replacing spaces with dashes
// and converting to lowercase and replacing accented characters
// with their ascii equivalent
function slugify(word) {
  return word
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function categoryStyleMapFor(category) {
  return {
    '--category-color': `var(--category-color-${categorySlugMap[category] ?? 'unknown'})`
  }
}

export function filterByCategory(items, category) {
  if (!category || category === CATEGORY_DEFAULT) {
    return items
  }
  console.log(category, items.filter((item) => item.topic === category))
  return items.filter((item) => item.topic === category)
}

/**
 * Returns the next category based on the given category.
 * If the given category is not found in the list of categories, returns the default category.
 *
 * @param {string} category - The current category.
 * @returns {string} - The next category.
 */
export function getNextCategory(category) {
  const index = CATEGORIES.indexOf(category)
  if (index < 0) {
    console.log(CATEGORIES[0])
    return CATEGORIES[0]
  }
  console.log(CATEGORIES[(index + 1) % CATEGORIES.length])
  return CATEGORIES[(index + 1) % CATEGORIES.length]
}

// get all the unique categories from the items
export function gatherCategoriesFrom(items) {
  return Array.from(
    items.reduce((categories, item) => {
      if (item.topic) {
        categories.add(item.topic)
      }
      return categories
    }, new Set())
  ).sort((lhs, rhs) => lhs.localeCompare(rhs))
}
