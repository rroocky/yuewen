<template>
  <div class="contact">
    <Nav/>
    <Cooperation/>
    <Footer/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Cooperation from "@c/cotact/cooperation_panel.vue";
import Footer from "@c/public/footer.vue";
export default {
  components: {
    Nav,
    Cooperation,
    Footer
  }
};
</script>

<style module lang="scss">
</style>