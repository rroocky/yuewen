<template>
  <section :class="$style.product" :style="{height:this.mainHeight+'px'}">
    <h2 :class="$style.title">旗下品牌</h2>
    <div :class="$style.production">
      <div v-for="(item,index) in items" :key="item.title">
        <a
          href="javascript:"
          :class="{[$style.active]:isActive(index)}"
          @mouseover="handleMouseover(index)"
        >{{item.title}}</a>
      </div>
    </div>
    <div :class="$style.introbox">
      <transition-group name="fade" tag="div" mode="out-in">
        <p
          v-for="(item,index) in items"
          :key="item.title"
          v-show="isActive(index)"
        >{{item.description}}</p>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "起点中文网",
          description:
            "起点中文网创建于2002年5月，是国内引领行业的原创文学门户网站和写作平台，隶属于数字阅读综合平台——阅文集团。起点中文网前身为起点原创文学协会，长期致力于原创文学作者的挖掘与培养工作，并以推动中国文学原创事业为发展宗旨，并以此为契机开创了在线收费阅读即电子出版的新模式。"
        },
        {
          title: "创世中文网",
          description:
            "创世中文网成立于2013年，是由资深网络文学团队精心打造的集阅读、创作、互动社区、版权运营于一体的全开放网络文学平台。依托阅文集团，基于团队经验和影响力以及旗下大批知名网络作家，致力于推进网络文学泛娱乐运营、用户阅读和互动体验、原创扶持力度的升级，成为网络文学行业格局的主要变革者。"
        },
        {
          title: "云起书院",
          description:
            "云起书院是引领行业的女性文学创作基地，成就无数平民作者的文学梦想。作为网络文学产业的重要细分市场，女性文学有着巨大的市场想象空间。云起书院将肩负起打造全新女性文学产业生态的重任，基于腾讯强大的资源平台和运营体系，促进中国女性文学市场的健康、持续发展，迎接“全民阅读”时代的到来。"
        },
        {
          title: "红袖添香",
          description:
            "红袖添香创办于1999年，国内引领行业的女性文学数字版权运营商。 红袖添香为用户提供涵盖小说、散文、杂文、诗歌、歌词、剧本、日记等体裁的高品质创作和阅读服务，在言情、职场小说等女性文学写作及出版领域具有巨大影响力。"
        },
        {
          title: "潇湘书院",
          description:
            "潇湘书院一直以做中国最好的女生原创网站为目标，立志为广大的原创作者提供一个公平、公正、健康的文学发展平台。优秀的工作团队和人性化的管理模式，使潇湘书院成为女性原创作者群体以及读者群体中具备强大吸引力和归属感的原创网站。"
        },
        {
          title: "起点女生网",
          description:
            "起点女生网成立于2009年11月，其前身是「起点女生频道」，致力于对女性网络原创文学及作者的培养和挖掘。起点女生网依托起点中文网的成熟运作机制，成功实现了女性网络原创文学的商业化发展模式。囊括了《步步惊心》、《搜索》、《毒胭脂》等多部热门影视剧的原著小说版权。"
        },
        {
          title: "小说阅读网",
          description:
            "小说阅读网是国内优质文学版权运营商，网站拥有海量原创作品、签约作家、签约编剧及用户群，自 2009 年 4 月新版上线、开通 VIP 系统以来，打造出数部点击过亿的超人气签约作品，迅速创下单部作品点击逾两亿、单章订阅超三万、月稿酬收入过六万等各项辉煌记录，缔造出白金高薪网络作家十多人，月薪过万作家一百五十多人。"
        },
        {
          title: "言情小说吧",
          description:
            "言情小说吧成立于2005年，从建立之初至今，一直秉承着为用户提供优质的言情小说阅读体验平台，打造全球华语言情小说阅读基地的理念，在网络文学界走出了一条专业化的独特发展道路。言情小说吧拥有人气超高的论坛、方便快捷的网游以及站内家园等，能给用户提供读书、休闲、娱乐的多方位体验。"
        },
        {
          title: "天方听书网",
          description:
            "天方听书网创建于2004年，经过多年的运营和发展，已经成为国内引领行业的听书网站。天方听书网专注于有声读物的研发和市场运作，为广大听友提供时尚前沿的听书资讯和听书内容。网站内容涉及经济管理、中外文学、古典文学、现代文学、儿童文学、探案悬疑、科幻文学、百科知识等近20个大类。"
        },
        {
          title: "懒人听书",
          description:
            "懒人听书成立于2012年，专注移动互联网有声数字领域，立足移动音频行业，为用户提供所需的书籍节目以及有声数字交流服务等高品质内容。 上线至今，懒人听书始终坚持产品第一、用户至上，不断优化产品，丰富平台资源，形成多项行业优势，业已成为移动音频行业优质品牌。"
        },
        {
          title: "QQ阅读",
          description:
            "最早始于 WAP 版 QQ书城的 QQ阅读，早在前智能手机年代就积累了大量用用户基础。有着优良用户体验和海量原创作品的QQ阅读早已覆盖 iOS 、Android 等主流移动设备，是目前市面上广受用户欢迎的移动读书软件。"
        },
        {
          title: "起点读书",
          description:
            "起点读书是起点中文网首创「在线收费阅读」服务的移动应用，原创作家与读者在此互动创作，10 年来大神作家群星璀璨，积累了数百万部优秀原创作品。让亿万书友在 iOS、Android 等移动设备随时随地，畅享阅读。"
        },
        {
          title: "作家助手",
          description:
            "作家助手是阅文集团诚意打造的一款移动创作应用，覆盖 Android、iOS 等主流移动平台，凭借流畅的用户体验、强大的创作工具、可视化的统计分析等优势，迅速成为市场上深受作家喜爱的移动创作应用之一。"
        },
        {
          title: "Webnovel",
          description:
            "Webnovel作为阅文全球化策略的重要产品，提供高质量的英文虚构小说内容给全球英文读者。全面覆盖各个终端，除了优秀体验的网页以外，也一如既往的为 iOS 和 Android 等主流移动设备提供服务，是优秀的英文网文内容平台。"
        },
        {
          title: "红袖读书",
          description:
            "自千禧年来，红袖一直致力于为用户提供原创作品，并成为孕育中国原创文化的沃土，成功打造出多部诸如《裸婚》、《欢乐颂》、《萌妻食神》等一批高质量的IP作品。而经红袖精心开发出的红袖读书APP，兼顾优良的用户体验以及海量的书城作品两大特色，已覆盖iOS以及Android等主流移动设备，当前在女性阅读市场独占鳌头"
        },
        {
          title: "元气阅读",
          description:
            "元气阅读创建于2018年3月，是国内领先的二次元网络文学网站，隶属于数字阅读综合平台--阅文集团。元气阅读以推动中国二次元文学事业为宗旨，长期致力于二次元文学的挖掘与培养，并取得了巨大成就。"
        },
        {
          title: "中智博文",
          description:
            "中智博文图书有限公司成立于2003年，是一家专业从事图书策划、营销推广和发行代理的民营图书企业。公司以高品质、高效率、高市场敏锐度和实用性、艺术性相结合的原则，成功策划、出版发行了上千种图书品种，内容涵盖史地文化、少儿百科、经管励志、健康生活、学生读物、世界名著等诸多方面。"
        },
        {
          title: "聚石文华",
          description:
            "聚石文华的运营团队以专业出版策划人为主体，汇集行业精英凝聚而成；公司的整体运作主要包括图书的策划出版及发行 ，立志于为出版市场提供卓越的文学作品。自筹备阶段起，聚石文华已然洽谈并签约数名国内一流作家新作；并携手搜狐、腾讯、新浪、起点、晋江、红袖、四月天、17K等原创文学网站搭建出版文学的战略合作平台。"
        },
        {
          title: "华文天下",
          description:
            "天津华文天下图书有限公司成立于2001年，是中国民营书业具有深远影响力的公司之一。公司策划了大量优秀畅销图书。其中多本图书单品销量超过百万册，在版权引进和国内原创作家的打造上，探索出一整套畅销书运营模式。"
        }
      ],
      // 默认第一个为active状态
      activeIndex: 0,
      // 组件高度
      mainHeight: 700
    };
  },
  methods: {
    isActive(index) {
      return this.activeIndex === index;
    },
    handleMouseover(index) {
      // 鼠标滑过  让当前的A链接添加active类
      this.activeIndex = index;
    }
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  }
};
</script>

<style module lang="scss">
@import "@/styles/layout.scss";
.product {
  background: #212737;
  margin-top: 54px;
  padding-top: 30px;
  font-family: 宋体;
  color: #fff;
  box-sizing: border-box;
  .title {
    margin: 50px 0 40px;
    font-size: 30px;
    text-align: center;
    font-weight: 600;
  }
  .production {
    width: 1220px;
    margin: 0 auto;
    @include flex;
    justify-content: flex-start;
    > div {
      width: 20%;
      box-sizing: border-box;
      margin-bottom: 20px;
      text-align: center;
      a {
        display: inline-block;
        padding: 20px 0;
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        opacity: 0.5;
        transition: all 0.3s;
        &.active {
          opacity: 1;
          transform: scale(1.1) translateX(-5px);
          text-shadow: 0 0px 17px #fff;
        }
      }
    }
  }
  .introbox {
    width: 1220px;
    margin: 0 auto;
    padding: 40px 0;
    position: relative;
    p {
      width: 640px;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 40px;
      margin-left: -320px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.75;
    }
  }
}
</style>
<style lang="scss">
.fade-enter {
  opacity: 0.2;
  transform: translateY(-40px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-leave-active {
  opacity: 0.1;
  transition: all 0.2s;
}
</style>
