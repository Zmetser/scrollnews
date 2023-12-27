import { unsafeCSS } from 'lit'

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

const categorySlugMap = CATEGORIES.reduce((map, category) => {
  map[category] = slugify(category)
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

export function filterByCategory(items, topic) {
  if (!topic) {
    return items
  }
  return items.filter((item) => item.topic === topic)
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
