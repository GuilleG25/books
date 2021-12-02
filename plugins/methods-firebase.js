import { fireService } from './definition/firebase.service.js'

export default ({ app }, inject) => {
  const firebase = new fireService(app)

  inject('firebaseBooks', firebase)
}
