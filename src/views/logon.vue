<template>
  <div>
    <Nav/>
    <section :class="$style.logon" :style="{height:mainHeight+'px'}">
      <img src="//img1.write.qq.com/writer/p1/contentv2/slogan.jpg" alt>
      <div :class="$style.logonbox">
        <div>
          <div class="clearfix">
            <div
              :class="{[$style.tabbtn]:true,[$style.active]:isActive('logon')}"
              @click="changeOper('logon')"
            >登录</div>
            <div
              :class="{[$style.tabbtn]:true,[$style.active]:isActive('register')}"
              @click="changeOper('register')"
            >注册</div>
          </div>
          <div :class="$style.inputgroup">
            <div>
              <input
                type="text"
                id="username"
                placeholder="请输入用户名"
                v-model="userName"
                @change="check('userName',$event)"
              >
            </div>
            <div>
              <input
                type="password"
                id="pwd"
                placeholder="请输入密码"
                v-model="pwd"
                @change="check('pwd',$event)"
              >
            </div>
            <div :id="$style.submit" v-if="isActive('logon')" @click="login">登录</div>
            <div :id="$style.submit" v-else-if="isActive('register')" @click="register">注册</div>
          </div>
        </div>
      </div>
    </section>
    <Foter/>
  </div>
</template>

<script>
import Nav from "@c/public/navbar.vue";
import Foter from "@c/public/footer.vue";
export default {
  components: {
    Nav,
    Foter
  },
  data() {
    return {
      mainHeight: 700,
      oper: "logon",
      userName: "",
      pwd: "",
      // 注册权限
      forMate: false
    };
  },
  methods: {
    isActive(act) {
      // 判断当前的页面处于登录还是注册
      return this.oper === act;
    },
    changeOper(act) {
      //每次点击按钮切换登录注册的active状态
      this.oper = act;
    },
    check(type, $event) {
      let userNameFormate = /^[A-Za-z][0-9A-Za-z]{5,}/.test(this.userName);
      let pwdFormate = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}/.test(
        this.pwd
      );
      // 每次改变文本框的值检测是否合法
      // 不合法提示，为空或者合法去掉提示
      // 提示通过添加删除类名实现显示隐藏
      if (type === "userName") {
        userNameFormate
          ? $event.target.parentNode.classList.remove("username-tip")
          : $event.target.parentNode.classList.add("username-tip");
      } else if (type === "pwd") {
        pwdFormate
          ? $event.target.parentNode.classList.remove("pwd-tip")
          : $event.target.parentNode.classList.add("pwd-tip");
      }

      // 判断注册权限
      if (userNameFormate && pwdFormate) {
        this.forMate = true;
      } else {
        this.forMate = false;
      }
    },
    login() {
      if (this.forMate) {
        // 格式正确
        let pwd = window.localStorage.getItem("user").split(":")[1];
        if (this.pwd === pwd) {
          // 改变vuex中的userName全局属性
          this.$store.commit("logon", this.userName);
          // 在localstorage添加一个表示，用来表示已登录，在路由权限的时候判断
          window.localStorage.removeItem("yuewen");
          window.localStorage.setItem("yuewen", "login");
          alert(this.userName + " 登陆成功");
          // 触发beforeRouteUpdate
          this.$router.push({ path: "/" });
        } else {
          alert("用户名密码错误");
        }
      } else {
        alert("用户名或密码格式错误");
      }
    },
    register() {
      if (this.forMate) {
        window.localStorage.removeItem("user");
        window.localStorage.setItem("user", this.userName + ":" + this.pwd);
        alert("注册成功");
      } else {
        alert("用户名或密码格式错误");
      }
    }
  },
  created() {
    this.mainHeight = this.$store.state.fullPageHeight;
  }
};
</script>

<style module lang="scss">
.logon {
  background: #fff;
  width: 1220px;
  margin: 0 auto;
  padding-top: 200px;
  position: relative;
  .logonbox {
    position: absolute;
    width: 300px;
    top: 200px;
    right: 50px;
    border: 1px solid #e6e6e6;
    margin: 0 auto;
    > div {
      height: 280px;
      border-radius: 5px;
      background: #fff;
      position: relative;
      z-index: 1;
      padding: 20px;
      .tabbtn {
        float: left;
        width: 50%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        text-align: center;
        box-sizing: border-box;
        border-bottom: 2px solid #e6e6e6;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .tabbtn.active {
        color: #37b2f8;
        border-bottom-color: #37b2f8;
      }
      .inputgroup {
        input {
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: transparent;
          border: 1px solid #e6e6e6;
          color: #a6a6a6;
          padding-left: 5px;
          margin-bottom: 32px;
        }
        #submit {
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: #37b2f8;
          text-align: center;
          font-size: 20px;
          color: #fff;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
    &::before {
      content: "";
      display: block;
      width: 100px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      left: 0px;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
    }
    &::after {
      content: "";
      display: block;
      width: 100px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      right: 0px;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
<style lang="css">
.username-tip,
.pwd-tip {
  position: relative;
}
.username-tip::after {
  content: "至少六位以字母开头且不得包含特殊字符";
  display: block;
  position: absolute;
  font-size: 12px;
  color: #f60;
  bottom: -20px;
  left: 10px;
}
.pwd-tip::after {
  content: "密码至少八位，数字字母混合";
  display: block;
  position: absolute;
  font-size: 12px;
  color: #f60;
  bottom: -20px;
  left: 10px;
}
</style>
