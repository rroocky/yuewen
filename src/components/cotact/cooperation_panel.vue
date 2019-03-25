<template>
  <div>
    <div :class="$style.productionInfo" :style="{height:this.mainHeight+'px'}">
      <div>
        <div :class="$style.left">
          <i :class="$style.logo"></i>
          <ul>
            <li>北京</li>
            <li>上海</li>
            <li>杭州</li>
          </ul>
        </div>
        <div :class="$style.right">
          <dl :class="$style.contactwrap">
            <dt :class="$style.contactTitle">联系我们</dt>
            <dd :class="$style.contact">
              <!-- 第一列 -->
              <div>
                <dl v-for="item in cooeration1" :key="item.title">
                  <dt>{{item.title}}</dt>
                  <div :class="$style.hide">
                    <dd v-for="(list,index) in item.infoList" :key="index">{{list}}</dd>
                  </div>
                </dl>
              </div>
              <!-- 第二列 -->
              <div>
                <dl v-for="item in cooeration2" :key="item.title">
                  <dt>{{item.title}}</dt>
                  <div :class="$style.hide">
                    <dd v-for="(list,index) in item.infoList" :key="index">{{list}}</dd>
                  </div>
                </dl>
              </div>
              <!-- 第三列 -->
              <div>
                <dl v-for="item in cooeration3" :key="item.title">
                  <dt>{{item.title}}</dt>
                  <div :class="$style.hide">
                    <dd v-for="(list,index) in item.infoList" :key="index">{{list}}</dd>
                  </div>
                </dl>
              </div>
            </dd>
          </dl>
          <dl :class="$style.mobile">
            <dt :class="$style.mobiletTitle">移动产品</dt>
            <dd>
              <a href="javascript:">阅读</a>
            </dd>
            <dd>
              <a href="javascript:">起点读书</a>
            </dd>
            <dd>
              <a href="javascript:">作家助手</a>
            </dd>
            <dd>
              <a href="javascript:">Webnovel</a>
            </dd>
            <dd>
              <a href="javascript:">红袖读书</a>
            </dd>
            <dd>
              <a href="javascript:">飞读免费小说</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cooeration1: [
        {
          title: "IP衍生品合作",
          infoList: [
            "朱女士",
            "电话：021-61870500-82012",
            "邮箱：zhudandan@yuewen.com"
          ]
        },
        {
          title: "影视合作 (联合开发出品和制作)",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        },
        {
          title: "活动推广 (联合开发出品和制作)",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        },
        {
          title: "动画合作",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        }
      ],
      cooeration2: [
        {
          title: "市场商务合作",
          infoList: [
            "朱女士",
            "电话：021-61870500-82012",
            "邮箱：zhudandan@yuewen.com"
          ]
        },
        {
          title: "海外商务合作",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        },
        {
          title: "App推广合作",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        },
        {
          title: "音频业务合作",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        }
      ],
      cooeration3: [
        {
          title: "影视及游戏改编授权",
          infoList: [
            "朱女士",
            "电话：021-61870500-82012",
            "邮箱：zhudandan@yuewen.com"
          ]
        },
        {
          title: "出版版权合作",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        },
        {
          title: "媒体联系",
          infoList: [
            "李女士",
            "电话：021-61870500-82012",
            "电话：021-61870500-82029"
          ]
        }
      ],
      mainHeight: 700
    };
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  }
};
</script>

<style module lang="scss">
@import "@/styles/layout.scss";

.productionInfo {
  margin-top: 54px;
  background: url("//qidian.gtimg.com/yuewen/v1/css/images/grid_bg2.png")
    repeat-x #242a31;
  color: #fff;
  & > div {
    width: 1220px;
    padding: 80px 0 40px 0;
    margin: 0 auto;
    position: relative;
    .left {
      .logo {
        width: 134px;
        height: 40px;
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/yw-logo-new@2x.png)
          no-repeat;
        background-size: cover;
        display: block;
      }
      ul {
        @include flex;
        width: 134px;
        justify-content: space-around;
        position: relative;
        li {
          flex: 1;
          text-align: center;
          height: 50px;
          line-height: 50px;
        }
        &::after {
          content: "";
          display: block;
          width: 50px;
          height: 1px;
          background: #fff;
          position: absolute;
          bottom: -5px;
          left: 0;
        }
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 80px;
      width: 900px;
      @include flex;
      .contactwrap {
        &:nth-child(1) {
          width: 80%;
        }
        &:nth-child(2) {
          width: 20%;
        }
        .contactTitle {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .contact {
          @include flex;
          justify-content: space-between;
          > div {
            width: 33%;
            dl {
              dt {
                font-size: 14px;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
              }
              .hide {
                dd {
                  font-weight: 300;
                  height: 0;
                  overflow: hidden;
                  line-height: 30px;
                  color: #ddd;
                  transition: all 0.5s;
                }
              }
              &:hover {
                dd {
                  height: 30px;
                }
              }
            }
          }
        }
      }
      .mobile {
        .mobiletTitle {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 30px;
        }
        dd {
          height: 40px;
          line-height: 40px;
          margin-bottom: 5px;
          a {
            color: #fff;
            position: relative;
            display: inline-block;
            height: 100%;
            &::after {
              content: "";
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              background: #fff;
              transition: 0.5s;
            }
            &:hover {
              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>