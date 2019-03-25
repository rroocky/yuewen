<template>
  <div :class="$style.panel">
    <div :class="$style.imgbox">
      <img :src="items.img" alt>
    </div>
    <div :class="$style.articlebox">
      <h3 :class="$style.title">
        <span>{{items.title}}</span>
      </h3>
      <div :class="$style.date">{{items.date}}</div>
      <div :class="$style.article">{{items.article}}</div>
      <a :class="$style.more" href="javascript:">
        阅读详情
        <i :class="$style.arr"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style module lang="scss">
.panel {
  height: 408px;
  width: 280px;
  background: #fff;
  text-align: justify;
  box-shadow: 0 0 20px 2px #ccc;
  .imgbox {
    height: 160px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      img {
        transform-origin: center;
        transform: scale(1.05);
        transition: all 0.4s;
      }
    }
  }
  .articlebox {
    padding: 20px 10px;
    .title {
      height: 50px;
      margin-bottom: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      span {
        font-size: 16px;
        color: #333;
        font-family: 宋体;
        font-weight: 600;
        line-height: 24px;
      }
    }
    .date {
      font-size: 12px;
      color: #81898c;
      font-family: 微软雅黑;
    }
    .article {
      height: 63px;
      font-size: 14px;
      color: #333;
      line-height: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 13px 0 13px 0;
    }
    .more {
      display: block;
      color: #3f7fe0;
      height: 20px;
      line-height: 20px;
      padding-top: 20px;
      position: relative;
      .arr {
        position: absolute;
        background: url("//qidian.gtimg.com/yuewen/v1/css/images/icons-arr-line@2x.png")
          no-repeat center;
        background-size: contain;
        left: 65px;
        top: 24;
        width: 15px;
        height: 12px;
      }
    }
  }
}
</style>