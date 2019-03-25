<template>
  <section :class="cname">
    <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{name:item.href}">
          <img :src="item.src">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="swiperOption.pagination"></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
        v-if="swiperOption.navigation"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
        v-if="swiperOption.navigation"
      ></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ""
    },
    swiperOption: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        };
      }
    },
    items: {
      type: Array,
      default() {
        // [{href:"",src:""}]
        return [];
      }
    }
  }
};
</script>

<style lang="css">
@import "~swiper/dist/css/swiper.css";
</style>