<template>
  <!-- Sign in Start -->
  <section class="sign-in-page">
    <div class="container p-0">
      <div class="row no-gutters height-self-center">
        <div class="col-sm-12 align-self-center page-content rounded">
          <div class="row m-0">
            <div class="col-sm-12 sign-in-page-data">
              <div class="sign-in-from bg-primary rounded">
                <h3 class="mb-0 text-center text-white">Sign in</h3>
                <p class="text-center text-white">
                  Enter your email address and password to access admin panel.
                </p>
                <form class="mt-4 form-text needs-validation was-validated">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      :class="{
                        'not-valid': validation.hasError('auth.email'),
                      }"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      label="Password"
                      name="email"
                      v-model="auth.email"
                    />
                    <div
                      v-if="validation.hasError('auth.email')"
                      class="invalid-feedback"
                    >
                      Email is {{ validation.firstError('auth.email') }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <nuxt-link
                      to="forgot-password"
                      class="float-right text-dark"
                      >Forgot password?</nuxt-link
                    >
                    <input
                      type="password"
                      class="mb-0 form-control"
                      :class="{
                        'not-valid': validation.hasError('auth.password'),
                      }"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      label="Password"
                      name="password"
                      v-model="auth.password"
                    />
                    <div
                      v-if="validation.hasError('auth.password')"
                      class="invalid-feedback"
                    >
                      Password is {{ validation.firstError('auth.password') }}
                    </div>
                  </div>
                  <!-- <div class="d-inline-block w-100">
                    <div
                      class="custom-control custom-checkbox d-inline-block mt-2 pt-1"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1"
                        >Remember Me</label
                      >
                    </div>
                  </div> -->
                  <div class="sign-info text-center">
                    <button
                      @click="login"
                      type="button"
                      class="btn btn-white d-block w-100 mb-2"
                    >
                      Sign in
                    </button>
                    <span
                      class="text-dark dark-color d-inline-block line-height-2"
                      >Don't have an account?
                      <nuxt-link to="/sign-up" class="text-white"
                        >Sign up</nuxt-link
                      ></span
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Sign in END -->
</template>

<script>
import { Validator } from 'simple-vue-validator'
export default {
  layout: 'empty',
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: '',
      },
    }
  },
  validators: {
    'auth.email'(value) {
      return Validator.value(value).required()
    },
    'auth.password'(value) {
      return Validator.value(value).required()
    },
  },
  methods: {
    login(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$fire.auth
            .signInWithEmailAndPassword(this.auth.email, this.auth.password)
            .catch(function (error) {
              that.$nuxt.$loading.finish()
              that.snackbarText = error.message
              that.snackbar = true
              that.$toast.error('wrong credentials')
            })
            .then((user) => {
              //we are signed in
              setTimeout(() => {
                that.$nuxt.$loading.finish()
                that.$router.push('/')
              }, 300)
            })
        }
      })
    },
  },
}
</script>

<style></style>
