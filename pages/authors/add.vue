<template>
  <!-- Page Content  -->
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Add Author</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <form
                v-on:submit.prevent="add"
                class="needs-validation was-validated"
              >
                <div class="form-group">
                  <label>Author Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('author.name'),
                    }"
                    v-model="author.name"
                  />
                  <div
                    v-if="validation.hasError('author.name')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('author.name') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Author url photo profile:</label>
                  <div class="custom-file">
                    <input
                      type="sring"
                      class="form-control"
                      :class="{
                        'not-valid': validation.hasError('author.photo'),
                      }"
                      v-model="author.photo"
                    />
                    <div
                      v-if="validation.hasError('author.photo')"
                      class="invalid-feedback"
                    >
                      is {{ validation.firstError('author.photo') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Author Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('author.email'),
                    }"
                    v-model="author.email"
                  />
                  <div
                    v-if="validation.hasError('author.email')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('author.email') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Author Description:</label>
                  <textarea
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('author.description'),
                    }"
                    rows="4"
                    v-model="author.description"
                  ></textarea>

                  <div
                    v-if="validation.hasError('author.description')"
                    class="invalid-feedback"
                  >
                    is
                    {{ validation.firstError('author.description') }}
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
      author: {
        name: '',
        photo: '',
        email: '',
        description: '',
      },
    }
  },
  validators: {
    'author.name'(value) {
      return Validator.value(value).required()
    },
    'author.photo'(value) {
      return Validator.value(value).required()
    },
    'author.email'(value) {
      return Validator.value(value).required().email()
    },
    'author.description'(value) {
      return Validator.value(value).required()
    },
  },

  methods: {
    add(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$authors
            .addData(this.author)
            .then((author) => {
              that.$nuxt.$loading.finish()
              that.reset()
              that.$toast.success('Registered author')
            })
            .catch((error) => {
              that.$toast.error(error)
              console.error(error)
            })
        }
      })
    },
    reset() {
      this.author = {
        name: '',
        photo: '',
        email: '',
        description: '',
      }
    },
  },
}
</script>

<style></style>
