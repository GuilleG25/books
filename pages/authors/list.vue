<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Author Lists</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <nuxt-link to="/authors/add" class="btn btn-primary"
                  >Add New Author</nuxt-link
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
                      <th style="width: 5%">Profile</th>
                      <th style="width: 20%">Author Name</th>
                      <th style="width: 60%">Author Description</th>
                      <th style="width: 10%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in authors" :key="index">
                      <td>
                        <img
                          :src="item.photo"
                          class="img-fluid avatar-50 rounded"
                          alt="author-profile"
                        />
                      </td>
                      <td>{{ item.name }}</td>
                      <td>
                        <p class="mb-0">{{ item.description }}</p>
                      </td>
                      <td>
                        <div class="flex align-items-center list-user-action">
                          <nuxt-link
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Edit"
                            :to="`/authors/${item.id}/edit`"
                            ><i class="ri-pencil-line"></i
                          ></nuxt-link>
                          <a
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Delete"
                            href="javascript:void(0)"
                            @click="deleteAuthor(item.id)"
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
      authors: [],
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      const that = this
      this.$authors
        .getAll()
        .then((authors) => {
          that.authors = authors
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
    deleteAuthor(id) {
      this.$confirm(
        'This will permanently delete the author. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          this.$nuxt.$loading.start()
          this.$authors
            .delete(id)
            .then(() => {
              this.$nuxt.$loading.finish()
              this.$toast.success('deleted author')
              this.getAll()
            })
            .catch((error) => {
              this.$toast.error('deleted author' + error)
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
