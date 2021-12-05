export class categoryservice {
  constructor(app) {
    this.$fire = app.$fire
  }

  async getAll() {
    const snapshot = await this.$fire.firestore.collection('categories').get()
    return snapshot.docs.map((doc) => {
      return { ...{ id: doc.id }, ...doc.data() }
    })
  }
  async getData(id) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('categories').doc(id).get()
    return snapshot
  }
  async addData(data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('categories').add(data)
    return snapshot
  }
  async delete(id) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('categories').doc(id).delete()
    return snapshot
  }
  async update(id, data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection('categories').doc(id).update(data)
    return snapshot
  }
}
