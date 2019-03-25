<template>
  <section :class="$style.list">
    <dl>
      <dt>
        <i class="icon"></i>
        <span>730万作家</span>
      </dt>
      <dd>完善的作家孵化和培养体系，打造作家、读者、平台互生共荣的文化生态体系。</dd>
    </dl>
    <dl>
      <dt>
        <i class="icon"></i>
        <span>上千万部作品</span>
      </dt>
      <dd>原创小说已覆盖行业半壁江山，覆盖200多种内容品类。</dd>
    </dl>
    <dl>
      <dt>
        <i class="icon"></i>
        <span>数亿活跃用户</span>
      </dt>
      <dd>以 QQ 阅读为中心，包罗网络原创、传统出版、音频听书等品牌功能的多元产品矩阵。</dd>
    </dl>
    <dl>
      <dt>
        <i class="icon"></i>
        <span>深受用户欢迎</span>
      </dt>
      <dd>QQ 阅读入选了 QuestMobile 发布的 "2017年度中国移动互联网用户粘性TOP10行业NO.1 APP"全版权运营</dd>
    </dl>
  </section>
</template>

<script>
export default {};
</script>

<style module lang="scss">
@import "@/styles/layout.scss";
.list {
  @include flex;
  width: 1220px;
  margin: 0 auto;
  padding: 55px 0;
  justify-content: space-around;
  dl {
    width: 20%;
    text-align: center;
    dt {
      i {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        background-image: url("//qidian.gtimg.com/yuewen/v1/css/images/icons-pbm4.png");
        background-repeat: no-repeat;
      }
      span {
        color: #3385ff;
        font-size: 16px;
        font-weight: 500;
        display: block;
        padding: 10px 0 10px;
      }
    }
    dd {
      margin: 20px 1em;
      color: #717678;
      font-size: 14px;
      line-height: 1.75;
    }
    &:nth-of-type(1) i {
      background-position: -205px -8px;
    }
    &:nth-of-type(2) i {
      background-position: -63px -0px;
    }
    &:nth-of-type(3) i {
      background-position: -131px -2px;
    }
    &:nth-of-type(4) i {
      background-position: 0px -6px;
    }
  }
}
</style>