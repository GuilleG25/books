export class bookservice {
  constructor(app) {
    this.$fire = app.$fire
  }

  async getAll() {
    const snapshot = await this.$fire.firestore.collection('books').get()
    return snapshot.docs.map((doc) => {
      return { ...{ id: doc.id }, ...doc.data() }
    })
  }
  async getData(id) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('books').doc(id).get()
    return snapshot
  }
  async addData(data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('books').add(data)
    return snapshot
  }
  async delete(id) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('books').doc(id).delete()
    return snapshot
  }
  async update(id, data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('books').doc(id).update(data)
    return snapshot
  }
}
