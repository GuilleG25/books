<template>
  <!-- Sign in Start -->
  <div>
    <section v-if="!emailSent" class="sign-in-page">
      <div class="container p-0">
        <div class="row no-gutters height-self-center">
          <div class="col-sm-12 align-self-center page-content rounded">
            <div class="row m-0">
              <div class="col-sm-12 sign-in-page-data">
                <div class="sign-in-from bg-primary rounded">
                  <h3 class="mb-0 text-white">verify email</h3>
                  <p class="text-white">
                    If you have not received a verification email, enter your
                    email again so that we can send you a verification link
                    again.
                  </p>
                  <div class="d-inline-block w-100">
                    <a href="/" class="btn btn-white">
                      I have already verified
                    </a>
                  </div>
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
                    <div class="d-inline-block w-100">
                      <button
                        @click="sentVerify"
                        type="button"
                        class="btn btn-white"
                      >
                        Sent email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="emailSent" class="sign-in-page">
      <div class="container p-0">
        <div class="row no-gutters height-self-center">
          <div class="col-sm-12 align-self-center page-content rounded">
            <div class="row m-0">
              <div class="col-sm-12 sign-in-page-data">
                <div class="sign-in-from bg-primary rounded">
                  <img src="images/login/mail.png" width="80" alt="" />
                  <h3 class="mt-3 mb-0 text-white">Success !</h3>
                  <p class="text-white">
                    A email has been send to {{ auth.email }} Please check for
                    an email from company and click on the included link to
                    verify.
                  </p>
                  <div class="d-inline-block w-100">
                    <a href="/" class="btn btn-white mt-3">Back to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
      emailSent: false,
      auth: {
        email: '',
      },
    }
  },
  validators: {
    'auth.email'(value) {
      return Validator.value(value).required().email()
    },
  },
  methods: {
    sentVerify(event) {
      event.preventDefault()
      this.$validate().then((success) => {
        if (success) {
          this.$nuxt.$loading.start()
          const that = this
          this.$fire.auth.currentUser
            .sendEmailVerification()
            .catch(function (error) {
              that.snackbarText = error.message
              that.snackbar = true
            })
            .then(() => {
              //we are signed in
              setTimeout(() => {
                that.$nuxt.$loading.finish()
                that.emailSent = true
                that.$toast.success('Mail sent successfully')
              }, 300)
            })
        }
      })
    },
  },
}
</script>

<style></style>
