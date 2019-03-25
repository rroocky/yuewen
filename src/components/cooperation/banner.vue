<template>
  <section :class="$style.cooperation" :style="{height:this.mainHeight+'px'}">
    <div>
      <h2 :class="$style.title">投资者关系</h2>
      <p :class="$style.article">文集团是中国网络文学市场的先锋，运营领先的网络文学平台。
        <br>按作家、读者以及提供文学内容的规模和质量等维度，阅文都在中国网络文学市场中
        <br>处于领先地位
      </p>
      <p :class="$style.gu">2017年11月8日，阅文集团在香港联交所主板上市，股份代号：0772。</p>
      <img src="//qidian.gtimg.com/yuewen/v1/css/images/yw-invest-pic@2x.png" alt>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainHeight: 700
    };
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  }
};
</script>

<style module lang="scss">
.cooperation {
  padding-top: 54px;
  color: #fff;
  font-family: 宋体;
  background-image: linear-gradient(
    to bottom,
    rgba(72, 140, 229, 1),
    rgba(53, 114, 218, 1)
  );
  position: relative;
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("//qidian.gtimg.com/yuewen/v1/css/images/yw-invest-line.png")
      no-repeat bottom;
    background-size: contain;
  }
  > div {
    width: 1220px;
    padding-left: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    .title {
      padding: 180px 0 30px 0;
      font-size: 28px;
      font-weight: 600;
    }
    .article {
      font-size: 18px;
      font-weight: 550;
      line-height: 1.75;
      margin-bottom: 20px;
    }
    .gu {
      font-size: 14px;
      opacity: 0.6;
      font-weight: 550;
      margin-bottom: 20px;
    }
    img {
      position: absolute;
      right: 50px;
      top: 90px;
      width: 350px;
      z-index: 1;
    }
  }
}
</style>