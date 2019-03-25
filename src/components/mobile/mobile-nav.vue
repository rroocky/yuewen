<template>
  <div :class="$style.mobile" :style="{height:this.mainHeight+'px'}">
    <ul :class="$style.nav">
      <li :class="{[$style.active]:this.isActive(0)}" @click="handleClick(0,$event)">QQ阅读</li>
      <li :class="{[$style.active]:this.isActive(1)}" @click="handleClick(1,$event)">起点读书</li>
      <li :class="{[$style.active]:this.isActive(2)}" @click="handleClick(2,$event)">读书助手</li>
      <li :class="{[$style.active]:this.isActive(3)}" @click="handleClick(3,$event)">七点国际</li>
      <li :class="{[$style.active]:this.isActive(4)}" @click="handleClick(4,$event)">红袖读书</li>
      <i :style="{left:this.left+'px'}"></i>
    </ul>
    <Panel
      v-for="item in items"
      :key="item.titleImg"
      :titleImg="item.titleImg"
      :introduce="item.introduce"
      :img="item.img"
      v-show="isShow(item.navIndex)"
    />
  </div>
</template>

<script>
import Panel from "@c/mobile/mobile-panel.vue";
export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          titleImg: "//qidian.gtimg.com/yuewen/v1/css/images/yw-h-qq.png",
          introduce:
            "海量原著，想读就读。个性推荐，拥有你的专属书城；精致排版，感受个性阅读体验。",
          img: "//qidian.gtimg.com/yuewen/v1/css/images/yw-app-qq-new@2x.png",
          // 每个组件的索引值，用来切换显示Panel
          navIndex: 0
        },
        {
          titleImg: "//qidian.gtimg.com/yuewen/v1/css/images/yw-h-qd2.png",
          introduce:
            "看原创正版小说，追大神作家；广大读者的选择，百万作家在此创作；热门影视、游戏 IP 发源地。",
          img: "//qidian.gtimg.com/yuewen/v1/css/images/yw-app-qd-new3@2x.png",
          // 每个组件的索引值，用来切换显示Panel
          navIndex: 1
        },
        {
          titleImg: "//qidian.gtimg.com/yuewen/v1/css/images/yw-h-zj.png",
          introduce:
            "随身记录乍现灵感，发布专属自己的作品，与数亿读者分享你的故事。",
          img: "//qidian.gtimg.com/yuewen/v1/css/images/yw-app-zj-new3@2x.png",
          // 每个组件的索引值，用来切换显示Panel
          navIndex: 2
        },
        {
          titleImg: "//qidian.gtimg.com/yuewen/v1/css/images/yw-h-wbn2.png",
          introduce: "面向全球的网络文学阅读与原创平台",
          img: "//qidian.gtimg.com/yuewen/v1/css/images/yw-app-wbn-new@2x.png",
          // 每个组件的索引值，用来切换显示Panel
          navIndex: 3
        },
        {
          titleImg: "//qidian.gtimg.com/yuewen/v1/css/images/yw-h-hx.png",
          introduce: "女频 IP 抢先看，女生爱看的小说都在这",
          img: "//qidian.gtimg.com/yuewen/v1/css/images/yw-app-hx-new@2x.png",
          // 每个组件的索引值，用来切换显示Panel
          navIndex: 4
        }
      ],
      //当前显示状态的Panel组件  默认是第一个显示
      activePanel: 0,
      // 当前为active的导航，默认第一个
      activeNav: 0,
      // 导航下方的小蓝条的位置
      left: 0,
      mainHeight: 700
    };
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  },
  methods: {
    handleClick(navIndex, event) {
      // 切换显示页签 Panel组件
      this.activePanel = navIndex;
      // 切换导航的active状态
      this.activeNav = navIndex;
      // 获取当前按钮的offsetleft
      let distance = event.target.offsetLeft;
      this.left = distance;
    },
    isShow(navIndex) {
      // 判断panel的索引是否是激活状态的
      return navIndex === this.activePanel ? true : false;
    },
    isActive(navIndex) {
      // 判断当前导航是否是active状态
      return navIndex === this.activeNav ? true : false;
    }
  }
};
</script>

<style module lang="scss">
@import "@/styles/layout.scss";
.mobile {
  width: 1220px;
  margin: 80px auto 0px;
  .nav {
    @include flex;
    width: 525px;
    margin: 25px auto 25px auto;
    justify-content: space-between;
    border-bottom: 1px solid #bcc1cc;
    position: relative;
    li {
      padding: 20px 5px;
      color: #767178;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #3385ff;
      }
    }
    li.active {
      color: #3385ff;
    }
    i {
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 60px;
      height: 4px;
      background: #3385ff;
      transition: left 0.2s;
    }
  }
}
</style>