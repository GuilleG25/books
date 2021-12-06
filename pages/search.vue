<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="iq-card-transparent mb-0">
            <div class="d-block text-center">
              <h2 class="mb-3">Search by Book Name</h2>
              <div class="w-100 iq-search-filter">
                <ul
                  class="list-inline p-0 m-0 row justify-content-center search-menu-options"
                >
                  <!-- <li class="search-menu-opt">
                    <div class="iq-dropdown">
                      <div class="form-group mb-0">
                        <select
                          class="form-control form-search-control bg-white border-0"
                          id="exampleFormControlSelect1"
                        >
                          <option selected="">All</option>
                          <option>A Books</option>
                          <option>the Sun</option>
                          <option>Harsh book</option>
                          <option>People book</option>
                          <option>the Fog</option>
                        </select>
                      </div>
                    </div>
                  </li> -->
                  <li class="search-menu-opt">
                    <div class="iq-dropdown">
                      <div class="form-group mb-0">
                        <select
                          class="form-control form-search-control bg-white border-0"
                          v-model="category"
                        >
                          <option selected="" value="">Categories</option>
                          <option
                            v-for="(item, index) in categories"
                            :key="index"
                            :value="item.name"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="search-menu-opt">
                    <div class="iq-dropdown">
                      <div class="form-group mb-0">
                        <select
                          class="form-control form-search-control bg-white border-0"
                          id="exampleFormControlSelect3"
                        >
                          <option selected="">Year</option>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                        </select>
                      </div>
                    </div>
                  </li> -->
                  <li class="search-menu-opt">
                    <div class="iq-dropdown">
                      <div class="form-group mb-0">
                        <select
                          class="form-control form-search-control bg-white border-0"
                          v-model="author"
                        >
                          <option selected="" value="">Author</option>
                          <option
                            v-for="(item, index) in authors"
                            :key="index"
                            :value="item.name"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li class="search-menu-opt">
                    <div
                      class="iq-search-bar search-book d-flex align-items-center"
                    >
                      <form
                        v-on:submit.prevent="search"
                        class="searchbox needs-validation was-validated"
                      >
                        <input
                          type="text"
                          class="text search-input"
                          placeholder="search here..."
                          v-model="query"
                        />
                        <a class="search-link" href="#"
                          ><i class="ri-search-line"></i
                        ></a>
                      </form>
                      <button
                        @click="search"
                        type="submit"
                        class="btn btn-primary search-data ml-2"
                      >
                        Search
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="iq-card">
            <div class="iq-card-body">
              <div class="">
                <h3 v-if="searchResult.length === 0">No results found</h3>
                <div v-if="searchResult.length > 0" class="row">
                  <div
                    v-for="(item, index) in searchResult"
                    :key="index"
                    class="col-sm-6 col-md-4 col-lg-3"
                  >
                    <div
                      class="iq-card iq-card-block iq-card-stretch iq-card-height search-bookcontent"
                    >
                      <div class="iq-card-body p-0">
                        <div class="d-flex align-items-center">
                          <div
                            class="col-6 p-0 position-relative image-overlap-shadow"
                          >
                            <a href="javascript:void();"
                              ><img
                                class="img-fluid rounded w-100"
                                :src="item.photo"
                                alt=""
                            /></a>
                            <div class="view-book">
                              <a
                                href="book-page.html"
                                class="btn btn-sm btn-white"
                                >View Book</a
                              >
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="mb-2">
                              <h6 class="mb-1">{{ item.name }}</h6>
                              <p class="font-size-13 line-height mb-1">
                                {{ item.author.name }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      categories: [],
      searchResult: [],
      searchResultMain: [],
      query: '',
      author: null,
      category: null,
    }
  },
  mounted() {
    this.getAllAuthors()
    this.getAllCategories()
    if (this.$route.query.query) {
      this.search()
    }
  },
  watch: {
    author: function (val) {
      this.filterData()
    },
    category: function (val) {
      this.filterData()
    },
  },
  methods: {
    async getAllAuthors() {
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
    async getAllCategories() {
      const that = this
      this.$categories
        .getAll()
        .then((categories) => {
          that.categories = categories
        })
        .catch((error) => {
          console.error('Error getAll: ', error)
        })
    },
    search() {
      if (
        this.query !== '' ||
        (this.$route.query.query && this.$route.query.query !== '')
      ) {
        const query = this.query !== '' ? this.query : this.$route.query.query
        if (this.query !== '') {
          this.$nuxt.$loading.start()
        }
        const that = this
        this.$books
          .search(query, this.author, this.category)
          .then((searchResult) => {
            that.searchResultMain = searchResult
            that.searchResult = searchResult
            if (this.query !== '') {
              that.$nuxt.$loading.finish()
            }
          })
          .catch((error) => {
            that.$toast.error(error)
            console.error(error)
          })
      } else {
        this.$toast.warning('you must enter a search')
      }
    },
    filterData() {
      this.searchResult = this.searchResultMain

      if (this.category) {
        console.log('category')
        this.searchResult = this.searchResult.filter((book) => {
          return book.category.name === this.category
        })
      }
      if (this.author) {
        console.log('author')
        this.searchResult = this.searchResult.filter((book) => {
          console.log(book)
          return book.author.name === this.author
        })
      }
    },
  },
}
</script>

<style></style>
