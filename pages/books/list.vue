<template>
  <!-- Page Content  -->
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">book Lists</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <nuxt-link to="/books/add" class="btn btn-primary"
                  >Add New book</nuxt-link
                >
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-responsive">
                <table
                  class="data-tables table table-striped table-bordered"
                  style="width: 100%"
                >
                  <thead>
                    <tr>
                      <th style="width: 12%">Book Image</th>
                      <th style="width: 15%">Book Name</th>
                      <th style="width: 15%">Book Category</th>
                      <th style="width: 15%">Book Author</th>
                      <th style="width: 18%">Book Description</th>
                      <th style="width: 15%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in books" :key="index">
                      <td>
                        <img
                          class="img-fluid rounded"
                          :src="item.photo"
                          alt=""
                        />
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.category.name }}</td>
                      <td>{{ item.author.name }}</td>
                      <td>
                        <p class="mb-0">
                          {{ item.description }}
                        </p>
                      </td>
                      <td>
                        <div class="flex align-items-center list-user-action">
                          <nuxt-link
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Edit"
                            :to="`/books/${item.id}/edit`"
                            ><i class="ri-pencil-line"></i
                          ></nuxt-link>
                          <a
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Delete"
                            href="javascript:void(0)"
                            @click="deleteBook(item.id)"
                          >
                            <i class="ri-delete-bin-line"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      const that = this
      this.$books
        .getAll()
        .then((books) => {
          that.books = books
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
    deleteBook(id) {
      this.$confirm(
        'This will permanently delete the book. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          this.$nuxt.$loading.start()
          this.$books
            .delete(id)
            .then(() => {
              this.$nuxt.$loading.finish()
              this.$toast.success('deleted book')
              this.getAll()
            })
            .catch((error) => {
              this.$toast.error('deleted book' + error)
            })
        })
        .catch(() => {
          this.$toast.info('Delete canceled')
        })
    },
  },
}
</script>

<style></style>
