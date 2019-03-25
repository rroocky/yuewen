<template>
  <div>
    <Nav/>
    <Production/>
    <Foter/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Production from "@c/products/product.vue";
import Foter from "@c/public/footer.vue";
export default {
  components: {
    Nav,
    Production,
    Foter
  }
  // beforeRouteEnter(to, from, next) {
  //   if (this.$store.state.login) {
  //     //用户已登录
  //     next();
  //   } else {
  //     next({ path: "/logon" });
  //   }
  // }
};
</script>

<style scoped>
</style>