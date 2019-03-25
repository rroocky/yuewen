<template>
  <nav :class="{ontop:ontop}">
    <div>
      <div class="logo"></div>
      <ul class="navbar">
        <li>
          <router-link :to="{ name : 'home' }">全版权运营</router-link>
        </li>
        <li>
          <router-link :to="{ name : 'mobile' }">移动产品</router-link>
        </li>
        <li>
          <router-link :to="{ name : 'products' }">旗下品牌</router-link>
        </li>
        <li>
          <router-link :to="{ name : 'cooperation' }">投资者关系</router-link>
        </li>
        <li>
          <router-link :to="{ name : 'news' }">新闻中心</router-link>
        </li>
        <li>
          <router-link :to="{ name : 'contact' }">联系我们</router-link>
        </li>
      </ul>
      <div class="logon">
        <template v-if="!isLogin()">
          <router-link :to="{ name : 'logon' }">登录</router-link>
          <router-link :to="{ name : 'logon' }">注册</router-link>
        </template>
        <template v-else>
          <a href="javasctipt:">{{getUser()}}</a>
          <a href="javasctipt:" @click.prevent="logout">退出</a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      ontop: true
    };
  },
  props: {
    // 用来判断是否是首页的导航条，如果是才做变化处理，否则一直为白色背景样式
    scrollChange: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.scrollChange) {
      window.addEventListener("scroll", this.handleScroll);
    } else {
      this.ontop = false;
    }
  },
  destroyed() {
    if (this.scrollChange) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.ontop = scrollTop > 0 ? false : true;
    },
    isLogin() {
      return this.$store.state.login;
    },
    getUser() {
      return this.$store.state.userName;
    },
    logout() {
      // 清除登录标识
      window.localStorage.removeItem("yuewen");
      this.$store.commit("logOut");
    }
  }
};
</script>

<style lang="scss" >
nav {
  background: rgba($color: #ffffff, $alpha: 1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  > div {
    width: 1220px;
    margin: 0 auto;
    height: 54px;
    line-height: 54px;
    position: relative;
    .logo {
      width: 138px;
      height: 32px;
      float: left;
      margin-left: 50px;
      margin-top: 10px;
      background: url("//qidian.gtimg.com/yuewen/v1/css/images/yw-logo.png")
        no-repeat;
      background-position: 0 -48px;
    }
    .navbar {
      position: absolute;
      top: 0;
      right: 252px;
      li {
        float: left;
        a {
          display: inline-block;
          height: 51px;
          padding: 0 25px;
          color: #717678;
          transition: 0.2s ease;
          &:hover {
            box-shadow: 0 3px 0 0 #3f7fe0;
          }
        }
      }
    }
    .logon {
      width: 140px;
      float: right;
      a {
        display: inline-block;
        width: 65px;
        text-align: center;
        color: #3f7fe0;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}
nav.ontop {
  background: rgba($color: transparent, $alpha: 0);
  > div {
    .logo {
      background-position: 0 0;
    }
    .navbar {
      li {
        a {
          color: #fff;
          transition: 0.2s ease;
          &:hover {
            box-shadow: 0 3px 0 0 #fff;
          }
        }
      }
    }
    .logon {
      a {
        color: #fff;
      }
    }
  }
}
</style>
<style lang="scss">
.router-link-exact-active {
  color: #fff !important;
  background-color: #3f7fe0;
  box-shadow: 0 3px 0 0 #3f7fe0;
}
nav.ontop .router-link-exact-active {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 3px 0 0 #fff;
}
</style>
