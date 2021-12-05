<template>
  <!-- Page Content  -->
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Category Lists</h4>
              </div>
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <button
                  href="admin-add-category.html"
                  class="btn btn-primary"
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  Add New Category
                </button>
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
                      <th width="20%">Category Name</th>
                      <th width="65%">Category Description</th>
                      <th width="10%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in categories" :key="index">
                      <td>{{ item.name }}</td>
                      <td>
                        <p class="mb-0">
                          {{ item.description }}
                        </p>
                      </td>
                      <td>
                        <div class="flex align-items-center list-user-action">
                          <a
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Edit"
                            href="javascript:void(0)"
                            @click="getData(item)"
                            ><i class="ri-pencil-line"></i
                          ></a>
                          <a
                            class="bg-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Delete"
                            href="javascript:void(0)"
                            @click="deleteCategory(item.id)"
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
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Category</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="iq-card-body">
              <form class="needs-validation was-validated">
                <div class="form-group">
                  <label>Category Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('category.name'),
                    }"
                    v-model="category.name"
                  />
                  <div
                    v-if="validation.hasError('category.name')"
                    class="invalid-feedback"
                  >
                    is {{ validation.firstError('category.name') }}
                  </div>
                </div>
                <div class="form-group">
                  <label>Category Description:</label>
                  <textarea
                    class="form-control"
                    :class="{
                      'not-valid': validation.hasError('category.description'),
                    }"
                    rows="4"
                    v-model="category.description"
                  ></textarea>

                  <div
                    v-if="validation.hasError('category.description')"
                    class="invalid-feedback"
                  >
                    is
                    {{ validation.firstError('category.description') }}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              v-if="!edit"
              @click="add"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Add
            </button>
            <button
              v-if="edit"
              @click="update"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Save
            </button>
            <button type="button" @click="reset" class="btn btn-danger">
              Reset
            </button>
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
      edit: false,
      categoryId: null,
      category: {
        name: '',
        description: '',
      },
      categories: [],
    }
  },
  validators: {
    'category.name'(value) {
      return Validator.value(value).required()
    },
    'category.description'(value) {
      return Validator.value(value).required()
    },
  },
  mounted() {
    this.getAll()
  },
  methods: {
    add(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$categories
            .addData(this.category)
            .then((category) => {
              that.$nuxt.$loading.finish()
              that.reset()
              this.getAll()
              that.$toast.success('Registered category')
            })
            .catch((error) => {
              that.$toast.error(error)
              console.error(error)
            })
        }
      })
    },
    async getAll() {
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
    deleteCategory(id) {
      this.$confirm(
        'This will permanently delete the category. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
      )
        .then(() => {
          this.$nuxt.$loading.start()
          this.$categories
            .delete(id)
            .then(() => {
              this.$nuxt.$loading.finish()
              this.$toast.success('deleted category')
              this.getAll()
            })
            .catch((error) => {
              this.$toast.error('deleted category' + error)
            })
        })
        .catch(() => {
          this.$toast.info('Delete canceled')
        })
    },
    async getData(item) {
      this.category.name = item.name
      this.category.description = item.description
      this.categoryId = item.id
      this.edit = true
      $('.modal').modal('show')
    },
    update(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$categories
            .update(this.categoryId, this.category)
            .then(() => {
              that.$nuxt.$loading.finish()
              that.getAll()
              that.$toast.success('Update category')
            })
            .catch((error) => {
              that.$toast.error(error)
              console.error('Error update: ', error)
            })
        }
      })
    },
    reset() {
      this.category = {
        name: '',
        description: '',
      }
    },
  },
}
</script>

<style></style>
