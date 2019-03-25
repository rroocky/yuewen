<template>
  <section class="fadeSlider">
    <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
      <swiper-slide v-for="item in items" :key="item.src">
        <div :class="$style.slidebox">
          <img :src="item.src">
          <div :class="{animate:animate,animatebox:true}">
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <span>{{item.link}}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="swiperOption.pagination"></div>
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
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: true,
        notNextTick: false,
        on: {
          slideChangeTransitionEnd: () => {
            this.animate = true;
          },
          slideChangeTransitionStart: () => {
            this.animate = false;
          }
        }
      },
      items: [
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/yw-hd-ip.jpg",
          title: "数字阅读，文创未来",
          desc: "引领行业的正版数字阅读平台和文学 IP 培育平台",
          link: "了解更多"
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/yw-hd-ft.png",
          title: "以梦为马，不负韶华",
          desc: "加入阅文，携手共铸文学梦",
          link: "了解更多"
        }
      ],
      animate: true
    };
  }
};
</script>
<style lang="css" >
@import "~swiper/dist/css/swiper.css";
/* 修改swiper的底部控制器 */
.fadeSlider .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 48px;
}
.fadeSlider .swiper-pagination-bullet {
  width: 32px;
  height: 4px;
  border-radius: 2px;
}
.fadeSlider .swiper-pagination-bullet-active {
  background: #fff;
}
/*  轮播图文字动画 */
@keyframes fade-in-up {
  from {
    /* transition: all 0.5s ease-in-out; */
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-20px);
  }
}
.animatebox {
  opacity: 0;
}
.animate {
  animation: fade-in-up 0.8s forwards 0.2s;
}
</style>

<style lang="scss" module>
@import "@/styles/element.scss";

.slidebox {
  height: 640px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  > div {
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    color: #fff;
    text-align: center;
    h2 {
      font-size: 64px;
      font-family: 宋体;
      font-weight: 600;
      margin-bottom: 40px;
    }
    p {
      height: 50px;
      line-height: 50px;
      font-size: 28px;
      font-family: 宋体;
      font-weight: 300;
      margin-bottom: 60px;
    }
    span {
      @include transparentBtn($padding: 13px 30px, $font-size: 18px);
      display: inline-block;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>