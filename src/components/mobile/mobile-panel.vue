<template>
  <div :class="$style.panel">
    <h3 v-bind:style="{backgroundImage:this.h3bg}"></h3>
    <p>{{introduce}}</p>
    <div :class="$style.btn">了解更多</div>
    <div :class="$style.imgbox">
      <img :src="this.img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleImg: {
      type: String,
      default: ""
    },
    introduce: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  },
  computed: {
    h3bg() {
      return "url(" + this.titleImg + ")";
    }
  }
};
</script>

<style module lang="scss">
@import "@/styles/element.scss";
.panel {
  h3 {
    height: 88px;
    width: 203px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75;
    padding: 0 0 30px 0;
    text-align: center;
  }
  .btn {
    @include transparentBtn(
      $padding: 15px,
      $color: #3385ff,
      $border: 1px solid #3385ff
    );
    margin: 20px auto;
    width: 100px;
    &:hover {
      color: #fff;
      background: #3385ff;
      transition: all 0.2s;
    }
  }
  .imgbox {
    width: 610px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 610px;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>