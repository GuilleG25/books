<template>
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="iq-menu-bt d-flex align-items-center">
          <div class="wrapper-menu">
            <div class="main-circle"><i class="las la-bars"></i></div>
          </div>
          <div class="iq-navbar-logo d-flex justify-content-between">
            <a href="#" class="header-logo">
              <img
                src="/images/logo.png"
                class="img-fluid rounded-normal"
                alt=""
              />
              <div class="logo-title">
                <span class="text-primary text-uppercase">Admin Books</span>
              </div>
            </a>
          </div>
        </div>
        <div class="iq-search-bar">
          <form v-on:submit.prevent="search" class="searchbox">
            <input
              type="text"
              class="text search-input"
              placeholder="Search Here..."
              v-model="query"
            />
            <a @click="search" class="search-link"
              ><i class="ri-search-line"></i
            ></a>
          </form>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <i class="ri-menu-3-line"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item nav-icon search-content">
              <a
                href="#"
                class="search-toggle iq-waves-effect text-gray rounded"
              >
                <i class="ri-search-line"></i>
              </a>
              <form action="#" class="search-box p-0">
                <input
                  type="text"
                  class="text search-input"
                  placeholder="Type here to search..."
                />
                <a class="search-link" href="#"
                  ><i class="ri-search-line"></i
                ></a>
              </form>
            </li>
            <li class="nav-item nav-icon">
              <a
                href="#"
                class="search-toggle iq-waves-effect text-gray rounded"
              >
                <i class="ri-notification-2-line"></i>
                <span class="bg-primary dots"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">
                        All Notifications<small
                          class="badge badge-light float-right pt-1"
                          >1</small
                        >
                      </h5>
                    </div>
                    <a
                      href="https://guillermodaniel.xyz"
                      target="_blank"
                      class="iq-sub-card"
                    >
                      <div class="media align-items-center">
                        <div class="">
                          <img
                            class="avatar-40 rounded"
                            src="https://eu.ui-avatars.com/api/?name=Guillermo"
                            alt=""
                          />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0">Guillermo Daniel</h6>
                          <small class="float-right font-size-12"
                            >Just Now</small
                          >
                          <p class="mb-0">Visit my website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="line-height pt-3">
              <a
                href="#"
                class="search-toggle iq-waves-effect d-flex align-items-center"
              >
                <img
                  :src="
                    $store.state.user.photoURL
                      ? $store.state.user.photoURL
                      : $store.state.user.displayName
                      ? 'https://eu.ui-avatars.com/api/?name=' +
                        $store.state.user.displayName
                      : 'https://eu.ui-avatars.com/api/?name=' +
                        $store.state.user.email
                  "
                  class="img-fluid rounded-circle mr-3"
                  alt="user"
                />
                <div class="caption">
                  <h6 class="mb-1 line-height">
                    {{
                      $store.state.user.displayName
                        ? $store.state.user.displayName
                        : $store.state.user.email
                    }}
                  </h6>
                  <!-- <p class="mb-0 text-primary">$20.32</p> -->
                </div>
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white line-height">
                        Hello
                        {{
                          $store.state.user.displayName
                            ? $store.state.user.displayName
                            : $store.state.user.email
                        }}
                      </h5>
                      <span class="text-white font-size-12">Available</span>
                    </div>
                    <nuxt-link
                      to="/user/profile"
                      class="iq-sub-card iq-bg-primary-hover"
                    >
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-file-user-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0">My Profile</h6>
                          <p class="mb-0 font-size-12">
                            View personal profile details.
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      to="/user/account-setting"
                      class="iq-sub-card iq-bg-primary-hover"
                    >
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-account-box-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0">Account settings</h6>
                          <p class="mb-0 font-size-12">
                            Manage your account parameters.
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                    <div class="d-inline-block w-100 text-center p-3">
                      <button
                        @click="logout"
                        class="bg-primary iq-sign-btn"
                        role="button"
                      >
                        Sign out<i class="ri-login-box-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  mounted() {},
  methods: {
    logout() {
      this.$fire.auth.signOut()
    },
    search() {
      if (this.query !== '') {
        this.$nuxt.$loading.start()
        setTimeout(() => {
          this.$nuxt.$loading.finish()
          this.$router.push('/search?query=' + this.query)
        }, 300)
      } else {
        this.$toast.warning('you must enter a search')
      }
    },
  },
}
</script>
