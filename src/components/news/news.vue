<template>
  <section :class="$style.news" :style="{height:this.mainHeight+'px'}">
    <div>
      <News-panel v-for="item in items" :key="item.img" :items="item"/>
    </div>
  </section>
</template>

<script>
import NewsPanel from "@c/news/news-panel.vue";
export default {
  components: {
    NewsPanel
  },
  data() {
    return {
      mainHeight: 700,
      items: [
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/0ee585d5b7694f7bb9dfa12ec5e08a67/0",
          title: "当代女子图鉴出炉 红袖读书发布2019女性婚恋观研究报告",
          date: "2019-03-12",
          article:
            "3月8日，阅文集团旗下女性阅读旗舰品牌红袖读书发布当代女子图鉴——《2019红袖读书女性婚恋观研究报告》（下称“报告”）。此次研究报告以红袖读书APP内用户线上调研结果为蓝本，从感情经历、择偶要求、婚姻期待等多方面对“90后”、“95后”、“00后”三个年龄阶段女性读者的婚恋观进行了全面的剖析，相信这会是一份了解年轻女性的快速指南和实用的“脱单攻略”。"
        },
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/c3b149f9169151cfe3c9cf90a95c2dbe/0",
          title: "上海市委书记李强一行走访调研阅文集团",
          date: "2019-02-22",
          article:
            "李强来到阅文集团后，了解了企业发展历程、创新模式以及未来发展战略，同企业负责人亲切交流，认真听取大家关于产业发展、营商环境的意见建议。"
        },
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/dec0ccae2f521106346d80b356330834/0",
          title: "《流浪地球》票房破40亿，阅文科幻IP生态定义未来",
          date: "2019-02-22",
          article: ""
        },
        {
          img:
            "//qidian.qpic.cn/qidian_common/349573/7e4872880ee9a25066c99b2cbc0bd7dd/0",
          title:
            "阅文集团发布《2018网络文学发展报告》 新生代用户带来行业新趋势",
          date: "2019-02-22",
          article:
            "阅文集团正式发布2018网络文学发展报告，指出已有多年发展历史的网络文学正不断进化和迭代，在各个维度均展现出全新的面貌特征，其中新生代的崛起和粉丝价值的凸显更促使行业产生内生式的升级和变革。"
        }
      ]
    };
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  }
};
</script>

<style module lang="scss">
@import "@/styles/layout.scss";
.news {
  padding-top: 54px;
  background: #ebf1fa;
  > div {
    width: 1220px;
    margin: 0 auto;
    padding-top: 100px;
    @include flex;
    justify-content: space-around;
  }
}
</style>