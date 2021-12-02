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
                  <h3 class="mb-0 text-white">Reset Password</h3>
                  <p class="text-white">
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                  <form action="sign-in.html" class="mt-4 form-text">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control mb-0"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                        v-model="auth.email"
                      />
                    </div>
                    <div class="d-inline-block w-100">
                      <button
                        @click="forgotPassword"
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
                    forgot password.
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
  methods: {
    forgotPassword() {
      this.$nuxt.$loading.start()
      const that = this
      this.$fire.auth
        .sendPasswordResetEmail(this.auth.email)
        .then(function () {
          setTimeout(() => {
            that.$nuxt.$loading.finish()
            that.emailSent = true
          }, 300)
        })
        .catch(function (error) {
          that.snackbarText = error.message
          that.snackbar = true
        })
    },
  },
}
</script>

<style></style>
