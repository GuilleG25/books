<template>
  <!-- Page Content  -->
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Add Books</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <form
                v-on:submit.prevent="add"
                class="needs-validation was-validated"
              >
                <div class="form-group">
                  <label>Book Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('book.name'),
                    }"
                    v-model="book.name"
                  />
                  <div
                    v-if="validation.hasError('book.name')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('book.name') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Book Category:</label>
                  <select
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('book.category'),
                    }"
                    v-model="book.category"
                  >
                    <option selected="" disabled="">Book Category</option>
                    <option
                      v-for="(item, index) in categories"
                      :key="index"
                      :value="item"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                  <div
                    v-if="validation.hasError('book.category')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('book.category') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Book Author:</label>
                  <select
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('book.author'),
                    }"
                    v-model="book.author"
                  >
                    <option selected="" disabled="">Book Author</option>
                    <option
                      v-for="(item, index) in authors"
                      :key="index"
                      :value="item"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                  <div
                    v-if="validation.hasError('book.author')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('book.author') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Book url photo:</label>
                  <div class="custom-file">
                    <input
                      type="sring"
                      class="form-control"
                      :class="{
                        'not-valid': validation.hasError('book.photo'),
                      }"
                      v-model="book.photo"
                    />
                    <div
                      v-if="validation.hasError('book.photo')"
                      class="invalid-feedback"
                    >
                      is {{ validation.firstError('book.photo') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Book Description:</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    :class="{
                      'not-valid': validation.hasError('book.description'),
                    }"
                    v-model="book.description"
                  ></textarea>
                  <div
                    v-if="validation.hasError('book.description')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('book.description') }}
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
                <button type="button" @click="reset" class="btn btn-danger">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from 'simple-vue-validator'

export default {
  data() {
    return {
      authors: [],
      categories: [],
      book: {
        name: '',
        name_lowercase: '',
        photo: '',
        category: '',
        author: '',
        description: '',
      },
    }
  },
  validators: {
    'book.name'(value) {
      return Validator.value(value).required()
    },
    'book.photo'(value) {
      return Validator.value(value).required()
    },
    'book.category'(value) {
      return Validator.value(value).required()
    },
    'book.author'(value) {
      return Validator.value(value).required()
    },
    'book.description'(value) {
      return Validator.value(value).required()
    },
  },
  mounted() {
    this.getAllAuthors()
    this.getAllCategories()
  },
  watch: {
    'book.name': function (val) {
      this.book.name_lowercase = this.book.name.toLowerCase()
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
    add(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$books
            .addData(this.book)
            .then((book) => {
              that.$nuxt.$loading.finish()
              that.reset()
              that.$toast.success('Registered book')
            })
            .catch((error) => {
              that.$toast.error(error)
              console.error(error)
            })
        }
      })
    },
    reset() {
      this.book = {
        name: '',
        name_lowercase: '',
        photo: '',
        category: {},
        author: {},
        description: '',
      }
    },
  },
}
</script>

<style></style>
