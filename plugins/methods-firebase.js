import { authorservice } from './definition/authors.service.js'
import { categoryservice } from './definition/categories.service.js'
import { bookservice } from './definition/books.service.js'

export default ({ app }, inject) => {
  const authorsFire = new authorservice(app)
  const categoriesFire = new categoryservice(app)
  const booksFire = new bookservice(app)

  inject('authors', authorsFire)
  inject('categories', categoriesFire)
  inject('books', booksFire)
}
