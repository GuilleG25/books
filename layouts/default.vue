<template>
  <div>
    <div id="loading" v-show="$store.state.loadingFull">
      <div id="loading-center"></div>
    </div>
    <div class="wrapper">
      <!-- Sidebar  -->
      <side-bar />
      <!-- TOP Nav Bar -->
      <nav-bar />
      <!-- TOP Nav Bar END -->
      <!-- Page Content  -->
      <Nuxt />
    </div>
    <!-- Wrapper END -->
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    SideBar: () => import('./.default/sidebar'),
    NavBar: () => import('./.default/navbar'),
    Footer: () => import('./.default/footer'),
  },
  data: () => ({}),
  computed: {},
  mounted() {
    setTimeout(() => {
      this.$store.commit('CHANGE_LOADING', false)
    }, 500)
  },
  methods: {},
  head() {
    return {}
  },
}
</script>
<style></style>
