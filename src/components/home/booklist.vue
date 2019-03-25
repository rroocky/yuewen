<template>
  <section :class="$style.booklist">
    <div :class="$style.slidewrap">
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <ul></ul>
      <h3>全版权运营</h3>
      <p>{{bookDescription}}</p>
    </div>
    <div :class="$style.slidebook">
      <img
        v-for="(item,index) in items"
        :key="item.description"
        :src="item.src"
        class="assign-img"
        @click="clickHandle(index)"
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/doupocangqiong.jpg",
          description:
            "《斗破苍穹》是天蚕土豆首发于起点中文网的古装玄幻小说。其改编的动漫、游戏均广受欢迎，同名电视剧也即将上映。电影由万达影业、腾讯影业和阅文集团联合打造，将于2018年上映。 ",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/wudongqiankun.jpg",
          description:
            "《武动乾坤》自2011年于起点中文网连载起，便常居起点热销榜前列，目前全网点击量达数十亿，积累了大量的读者粉丝。同名改编电视剧由阅文集团携手深蓝影业、优酷等联合出品，2018年在东方卫视周播剧场首播，并在优酷视频同步播出。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/bubujingxin.jpg",
          description:
            "《步步惊心》是作家桐华创作的穿越小说。同名改编的电视剧于2012年在湖南卫视上映并在中日韩同时热播，荣获2012年第七届首尔国际电视节最佳海外电视剧大奖，并于2016年再度翻拍成《步步惊心：丽》。",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/jiangye.png",
          description:
            "《将夜》是阅文白金作家猫腻的第四部玄幻小说，首发于起点中文网。同名改编古装电视剧将于2018年上映，腾讯影业、阅文集团参与出品。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/yinianyongheng.jpg",
          description:
            "《一念永恒》是阅文白金作家耳根在起点中文网的又一力作，新书提笔不久便吸引一响天开影业掷千万重金夺下影视版权。在影游联动的互助驱动下，其游戏改编权的市场价值有望再刷新高。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/langyabang.jpg",
          description:
            "《琅琊榜》是首发在起点女生网上的一本架空权谋类小说，作者海宴。改编电视剧2015年播出后，口碑收视双红，胡歌饰演的梅长苏等角色深入人心。 ",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/daomubiji.jpg",
          description:
            "《盗墓笔记》最初连载于起点中文网，是南派三叔成名代表作。2015年网剧开播首日点击破亿，开启了盗墓文学 IP 年。电影于2016年上映，由井柏然、鹿晗、马思纯等主演，累计票房10亿元。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/quanzhigaoshou3.png",
          description:
            "《全职高手》最初连载于起点中文网，是阅文白金作家蝴蝶蓝的封神之作。改编动漫受到热捧，在腾讯视频播放量超10亿，成为2017国漫标杆。",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/shengxu.jpg",
          description:
            "《圣墟》是阅文集团白金作家辰东所著的第六部小说，2016年首发于起点中文网和创世中文网。一经推出，各大公司就争相了解版权情况，目前同名游戏火热上线中。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/guichuideng.jpg",
          description:
            "《鬼吹灯》是天下霸唱创作的经典悬疑盗墓小说，连载于起点中文网。先后进行过漫画、游戏、电影、网络电视剧的改编，均取得不俗的成绩，是当之无愧的超级IP。",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/zetianji.jpg",
          description:
            "《择天记》于创世中文网首发，是阅文白金作家猫腻的第五部玄幻作品。作为阅文重点 IP，进行了影视、游戏、动漫的联合开发，成为阅文集团全版权运营的标杆之作。",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/fuyao.jpg",
          description:
            "《扶摇皇后》是阅文集团旗下潇湘书院金牌女作家天下归元的经典力作，该作在连载期间，屡屡打破网站古言类作品订阅纪录，点击量超百亿，收藏量达数十万。改编电视剧《扶摇》于2018年播出 。",
          title: ""
        },
        {
          src: "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/zhuxian.jpg",
          description:
            "《诛仙》是阅文大神作家萧鼎的经典作品，文风干练，辞藻唯美。2016年改编电视剧《诛仙：青云志》上映，还原著粉十年「诛仙梦」。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/minyuezhuan.jpg",
          description:
            "《芈月传》是蒋胜男的原创小说，电子版由阅文独家首发。小说进行了电视剧、游戏等多种形式的改编，一度掀起芈月热潮。",
          title: ""
        },
        {
          src:
            "//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/lingjianshan.png",
          description:
            "《从前有座灵剑山》是国王陛下在创世中文网连载的仙侠类小说。2014年由腾讯动漫改编漫画，2016年由 Studio DEEN 制作动画并在日本播出，成为国漫创新之作。",
          title: ""
        }
      ],
      itemStyles: [
        {
          transform: "translateX(-1140px) translateZ(-500px)"
        },
        {
          transform: "translateX(-960px) translateZ(-390px)"
        },
        {
          transform: "translateX(-800px) translateZ(-320px)"
        },
        {
          transform: "translateX(-640px) translateZ(-170px)"
        },
        {
          transform: "translateX(-480px) translateZ(-60px)"
        },
        {
          transform: "translateX(-320px) translateZ(50px)"
        },
        {
          transform: "translateX(-160px) translateZ(160px)"
        },
        {
          // middle 滚动列表的中间样式，再添加数据往头和尾添加
          transform: "translateX(0) translateZ(300px)",
          filter: "brightness(100%)"
        },

        {
          transform: "translateX(160px) translateZ(160px)"
        },
        {
          transform: "translateX(320px) translateZ(50px)"
        },
        {
          transform: "translateX(480px) translateZ(-60px)"
        },
        {
          transform: "translateX(640px) translateZ(-170px)"
        },
        {
          transform: "translateX(800px) translateZ(-320px)"
        },
        {
          transform: "translateX(960px) translateZ(-390px)"
        },
        {
          transform: "translateX(1120px) translateZ(-500px)"
        }
      ],
      timer: null
    };
  },
  computed: {
    bookDescription() {
      return this.items[Math.floor(this.items.length / 2)].description;
    }
  },
  mounted() {
    this.assign();
    this.timer = setInterval(() => {
      let cut = this.items.splice(0, 1)[0];
      this.items.push(cut);
      setTimeout(() => {
        this.assign();
      }, 100);
    }, 5000);
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    // 将itemStyles的样式绑定给不同序列的img
    assign() {
      let imgs = document.querySelectorAll(".assign-img");
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = this.itemStyles[i].transform;
      }
    },
    // 列表向前移
    movePrev(n = 1) {
      // 将最左侧的元素插到最后面来
      for (let i = 0; i < n; i++) {
        let cut = this.items.splice(0, 1);
        this.items.push(cut[0]);
      }
      setTimeout(() => {
        this.assign();
      }, 100);
      console.log("before");
    },
    // 列表向后移
    moveAfter(n = 1) {
      // 将最右侧的元素插到最前面来
      for (let i = 0; i < n; i++) {
        let cut = this.items.splice(this.items.length - 1, 1);
        this.items.unshift(cut[0]);
      }
      setTimeout(() => {
        this.assign();
      }, 100);
      console.log("moveafter");
    },
    // 将点击的图片样式插到最中间来，相当于将这个点击的图片放到焦点上来
    clickHandle(index) {
      // 再点击前判断是前半段的元素还是后半段的元素或者是中间焦点元素
      let mid = Math.floor(this.items.length / 2);
      let step = Math.abs(index - mid);
      if (index == mid) {
        return;
      } else if (index < mid) {
        // 前半段
        this.moveAfter(step);
      } else {
        // 后半段
        this.movePrev(step);
      }
    }
  }
};
</script>

<style module lang="scss">
.booklist {
  height: 614px;
  position: relative;
  overflow: hidden;
  background-color: rgba(31, 33, 35, 0.8);
  .slidewrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    text-align: center;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 100%;
      background: rgba(31, 33, 35, 0.8);
    }
    ul {
      height: 140px;
      width: 7200px;
      &:nth-child(1) {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/book-line1.jpg)
          repeat-x;
        animation: moved-bg 150s linear infinite;
      }
      &:nth-child(2) {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/book-line2.jpg)
          repeat-x;
        animation: moved-bg 160s linear infinite;
      }
      &:nth-child(3) {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/book-line3.jpg)
          repeat-x;
        animation: moved-bg 170s linear infinite;
      }
      &:nth-child(4) {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/book-line3.jpg)
          repeat-x;
      }
      &:nth-child(5) {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/book-line3.jpg)
          repeat-x;
      }
    }
    h3 {
      font-family: 宋体;
      font-weight: 600;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: 70px;
      z-index: 1;
    }
    p {
      width: 600px;
      position: absolute;
      left: 50%;
      margin-left: -300px;
      top: 150px;
      font-size: 18px;
      line-height: 1.75;
      color: #fff;
      font-family: "宋体";
      z-index: 1;
    }
  }
  .slidebook {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 262px;
    perspective: 1800px;
    perspective-origin: bottom;
    transform-style: preserve-3d;
    img {
      width: 198px;
      height: 262px;
      border-radius: 6px;
      position: absolute;
      left: 50%;
      margin-left: -99px;
      object-fit: cover;
      transition: all .8s ease-in-out;
      filter: brightness(70%);
      &:nth-of-type(8) {
        filter: brightness(100%);
      }
      &:hover {
        filter: brightness(100%);
      }
    }
  }
}
// 定义小说列表移动背景动画
@keyframes moved-bg {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-5200px);
  }
}
</style>