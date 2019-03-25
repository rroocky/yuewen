<template>
  <div class="home">
    <Nav :scrollChange="true"/>
    <Fade-slider/>
    <Des/>
    <List/>
    <Book-list/>
    <Footer/>
  </div>
</template>

<script>
import $ from "@/assets/js/util.js";
import Nav from "@/components/public/navbar.vue";
import FadeSlider from "@/components/home/fadeSlider.vue";
import Des from "@/components/home/description.vue";
import List from "@/components/home/list.vue";
import Footer from "@/components/public/footer.vue";
import BookList from "@/components/home/booklist.vue";
export default {
  name: "home",
  components: {
    Nav,
    FadeSlider,
    Des,
    List,
    Footer,
    BookList
  },
  data() {
    return {
      recommend: [],
      err: false
    };
  },
  methods: {
    getRecommend() {
      $.ajax("https://www.mock.com/recommend", "get")
        .then(res => {
          this.recommend = res.data.recomendList;
        })
        .catch(err => {
          this.err = true;
        });
    }
  },
  created() {
    this.getRecommend();
  }
};
</script>
