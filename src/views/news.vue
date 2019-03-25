<template>
  <div class="news">
    <Nav/>
    <News/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Footer from "@c/public/footer.vue";
import News from "@c/news/news.vue";
export default {
  components: {
    Nav,
    Footer,
    News
  }
};
</script>

<style scoped>
</style>