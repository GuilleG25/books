<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center">
                <div class="rounded-circle iq-card-icon bg-primary">
                  <i class="ri-user-line"></i>
                </div>
                <div class="text-left ml-3">
                  <h2 class="mb-0">
                    <span class="counter">{{ authors }}</span>
                  </h2>
                  <h5 class="">Authors</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center">
                <div class="rounded-circle iq-card-icon bg-danger">
                  <i class="ri-book-line"></i>
                </div>
                <div class="text-left ml-3">
                  <h2 class="mb-0">
                    <span class="counter">{{ booksCount }}</span>
                  </h2>
                  <h5 class="">Books</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-body">
              <div class="d-flex align-items-center">
                <div class="rounded-circle iq-card-icon bg-warning">
                  <i class="ri-computer-line"></i>
                </div>
                <div class="text-left ml-3">
                  <h2 class="mb-0">
                    <span class="counter">{{ categories }}</span>
                  </h2>
                  <h5 class="">Categories</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Last books registered</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle text-primary"
                    id="dropdownMenuButton5"
                    data-toggle="dropdown"
                  >
                    <i class="ri-more-fill"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton5"
                  >
                    <a class="dropdown-item" href="#"
                      ><i class="ri-eye-fill mr-2"></i>View</a
                    >
                    <a class="dropdown-item" href="#"
                      ><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a
                    >
                    <a class="dropdown-item" href="#"
                      ><i class="ri-pencil-fill mr-2"></i>Edit</a
                    >
                    <a class="dropdown-item" href="#"
                      ><i class="ri-printer-fill mr-2"></i>Print</a
                    >
                    <a class="dropdown-item" href="#"
                      ><i class="ri-file-download-fill mr-2"></i>Download</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="table-responsive">
                <table class="table mb-0 table-borderless">
                  <thead>
                    <tr>
                      <th style="width: 12%">Book Image</th>
                      <th style="width: 15%">Book Name</th>
                      <th style="width: 15%">Book Category</th>
                      <th style="width: 15%">Book Author</th>
                      <th style="width: 18%">Book Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in books.slice(0, 9)" :key="index">
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
      authors: 0,
      categories: 0,
      booksCount: 0,
      books: [],
    }
  },
  mounted() {
    this.getAllAuthors()
    this.getAllCategories()
    this.getAllBooks()
  },
  methods: {
    async getAllAuthors() {
      const that = this
      this.$authors
        .getAll()
        .then((authors) => {
          that.authors = authors.length
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
    async getAllCategories() {
      const that = this
      this.$categories
        .getAll()
        .then((categories) => {
          that.categories = categories.length
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
    async getAllBooks() {
      const that = this
      this.$books
        .getAll()
        .then((books) => {
          that.booksCount = books.length
          that.books = books
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
  },
}
</script>

<style></style>
