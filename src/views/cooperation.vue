<template>
  <div class="cooperation">
    <Nav/>
    <Banner/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Footer from "@c/public/footer.vue";
import Banner from "@c/cooperation/banner.vue";
export default {
  components: {
    Nav,
    Footer,
    Banner
  }
};
</script>

<style scoped>
</style>