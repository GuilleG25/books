<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Account Setting</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="acc-edit">
                <form>
                  <div class="form-group">
                    <label for="email">Uid:</label>
                    <input
                      disabled
                      type="string"
                      class="form-control"
                      id="string"
                      :value="$store.state.user.uid"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      disabled
                      type="email"
                      class="form-control"
                      id="email"
                      :value="$store.state.user.email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="uname">Display Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="uname"
                      v-model="accounts.displayName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="altemail">Number Phone:</label>
                    <input
                      type="int"
                      class="form-control"
                      id="phone"
                      v-model="accounts.phoneNumber"
                    />
                  </div>
                  <div class="form-group">
                    <label for="altemail">Photo:</label>
                    <input
                      type="string"
                      class="form-control"
                      id="phone"
                      v-model="accounts.photoURL"
                    />
                  </div>
                  <button
                    @click="updateProfile"
                    type="button"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Change password</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="acc-edit">
                <form>
                  <div class="form-group">
                    <label for="facebook">New password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="auth.newPassword"
                    />
                  </div>
                  <div class="form-group">
                    <label for="twitter">Repeat new password</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="auth.newPasswordRepeat"
                    />
                  </div>
                  <button
                    @click="updatePassword"
                    type="button"
                    class="btn btn-primary"
                  >
                    Save
                  </button>
                </form>
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
      auth: {
        newPassword: '',
        newPasswordRepeat: '',
      },
      accounts: {
        displayName: this.$store.state.user.displayName,
        phoneNumber: this.$store.state.user.phoneNumber,
        photoURL: this.$store.state.user.photoURL,
      },
    }
  },
  methods: {
    updateProfile() {
      const that = this
      this.$fire.auth.currentUser
        .updateProfile({
          displayName: this.accounts.displayName,
          phoneNumber: this.accounts.phoneNumber,
          photoURL: this.accounts.photoURL,
        })
        .then((r) => {
          console.log(r)
          that.$toast.success('Profile update')
        })
        .catch((e) => {
          that.$toast.error('An ocurred error')
        })
    },
    updatePassword() {
      const newPassword = this.auth.newPassword
      const newPasswordRepeat = this.auth.newPasswordRepeat

      if (newPassword === '' || newPasswordRepeat === '') {
        this.$toast.error('passwords cannot be empty')
        return false
      }

      if (newPassword === newPasswordRepeat) {
        const that = this
        const user = this.$fire.auth.currentUser
        user
          .updatePassword(newPassword)
          .then(() => {
            that.auth.newPassword = ''
            that.auth.newPasswordRepeat = ''
            that.$toast.success('Password Update')
          })
          .catch((error) => {
            console.log(error)
            that.$toast.error(error)
          })
      } else {
        this.$toast.error('Passwords do not match')
      }
    },
  },
}
</script>

<style></style>
