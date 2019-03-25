import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullPageHeight: window.screen.availHeight - 170,
    // 登录状态
    login: window.localStorage.getItem("yuewen") ? true : false,
    userName: window.localStorage.getItem("user") ? window.localStorage.getItem("user").split(":")[0] : ""
  },
  mutations: {
    logon(state, userName) {
      state.login = true;
      state.userName = userName;
    },
    logOut(state) {
      state.login = false;
      state.userName = "";
    }
  },
  actions: {}
});
