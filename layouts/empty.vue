<template>
  <div>
    <div id="loading" v-show="$store.state.loadingFull">
      <div id="loading-center"></div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.commit('CHANGE_LOADING', false)
    }, 500)
  },
}
</script>
