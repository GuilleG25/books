<template>
  <div>
    <div v-if="error.statusCode === 404" class="container p-0">
      <div class="row no-gutters height-self-center">
        <div class="col-sm-12 text-center align-self-center">
          <div class="iq-error position-relative">
            <img
              src="/images/error/404.png"
              class="img-fluid iq-error-img"
              alt=""
            />
            <h2 class="mb-0 mt-4">Oops! This Page is Not Found.</h2>
            <p>The requested page dose not exist.</p>
            <nuxt-link class="btn btn-primary mt-3" to="/"
              ><i class="ri-home-4-line"></i>Back to Home</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div v-if="error.statusCode === 500" class="container p-0">
      <div class="row no-gutters height-self-center">
        <div class="col-sm-12 text-center align-self-center">
          <div class="iq-error position-relative">
            <img
              src="/images/error/500.png"
              class="img-fluid iq-error-img"
              alt=""
            />
            <h1 class="text-in-box">500</h1>
            <h2 class="mb-0">Oops! This Page is Not Working.</h2>
            <p>The requested is Internal Server Error.</p>
            <nuxt-link class="btn btn-primary mt-3" to="/"
              ><i class="ri-home-4-line"></i>Back to Home</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty', // you can set a custom layout for the error page
}
</script>
