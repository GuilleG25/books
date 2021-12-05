import { authorservice } from './definition/authors.service.js'
import { categoryservice } from './definition/categories.service.js'

export default ({ app }, inject) => {
  const authorsFire = new authorservice(app)
  const categoriesFire = new categoryservice(app)

  inject('authors', authorsFire)
  inject('categories', categoriesFire)
}
