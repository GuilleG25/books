<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <div class="row profile-content">
        <div class="col-12 col-md-12 col-lg-4">
          <div class="iq-card">
            <div class="iq-card-body profile-page">
              <div class="profile-header">
                <div class="cover-container text-center">
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
                    alt="profile-bg"
                    class="rounded-circle img-fluid"
                  />
                  <div class="profile-detail mt-3">
                    <h3>
                      {{
                        $store.state.user.displayName
                          ? $store.state.user.displayName
                          : $store.state.user.email
                      }}
                    </h3>
                    <!-- <p class="text-primary">Web designer</p> -->
                    <!-- <p>
                      Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa.Morbi nulla dolor, ornare at commodo non, feugiat
                      non nisi.
                    </p> -->
                  </div>
                  <div class="iq-social d-inline-block align-items-center">
                    <ul class="list-inline d-flex p-0 mb-0 align-items-center">
                      <li>
                        <a
                          href="#"
                          class="avatar-40 rounded-circle bg-primary mr-2 facebook"
                          ><i class="fa fa-facebook" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="avatar-40 rounded-circle bg-primary mr-2 twitter"
                          ><i class="fa fa-twitter" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="avatar-40 rounded-circle bg-primary mr-2 youtube"
                          ><i class="fa fa-youtube-play" aria-hidden="true"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="avatar-40 rounded-circle bg-primary pinterest"
                          ><i class="fa fa-pinterest-p" aria-hidden="true"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-8">
          <div class="iq-card">
            <div
              class="iq-card-header d-flex justify-content-between align-items-center mb-0"
            >
              <div class="iq-header-title">
                <h4 class="card-title mb-0">Personal Details</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <ul class="list-inline p-0 mb-0">
                <li>
                  <div
                    class="row align-items-center justify-content-between mb-3"
                  >
                    <div class="col-sm-6">
                      <h6>Registration date</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="mb-0">
                        {{ $store.state.user.metadata.creationTime }}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="row align-items-center justify-content-between mb-3"
                  >
                    <div class="col-sm-6">
                      <h6>last SignIn</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="mb-0">
                        {{ $store.state.user.metadata.lastSignInTime }}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="row align-items-center justify-content-between mb-3"
                  >
                    <div class="col-sm-6">
                      <h6>Phone</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="mb-0">{{ $store.state.user.phoneNumber }}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="row align-items-center justify-content-between mb-3"
                  >
                    <div class="col-sm-6">
                      <h6>Email</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="mb-0">{{ $store.state.user.email }}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="row align-items-center justify-content-between mb-3"
                  >
                    <div class="col-sm-6">
                      <h6>UID</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="mb-0">{{ $store.state.user.uid }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
