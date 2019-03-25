<template>
  <div class="mobile">
    <Nav/>
    <Mobile-nav/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Footer from "@c/public/footer.vue";
import MobileNav from "@c/mobile/mobile-nav.vue";
export default {
  components: {
    Nav,
    Footer,
    MobileNav
  }
};
</script>

<style scoped>
</style>