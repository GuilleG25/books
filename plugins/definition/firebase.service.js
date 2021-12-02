export class fireService {
  constructor(app) {
    this.$fire = app.$fire
  }

  async getAll(table) {
    const snapshot = await this.$fire.firestore.collection(table).get()
    return snapshot.docs.map((doc) => {
      return { ...{ id: doc.id }, ...doc.data() }
    })
  }
  async addData(table, data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection(table).add(data)
    return snapshot
  }
  async delete(table, id) {
    const db = this.$fire.firestore
    const snapshot = await db.collection(table).doc(id).delete()
    return snapshot
  }
  async update(table, id, data) {
    const db = this.$fire.firestore
    const snapshot = await db.collection(table).doc(id).update(data)
    return snapshot
  }
}
