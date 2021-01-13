import Vue from "vue";
import App from "./App";
import router from "./router";

// import ElementUI from 'element-ui'
import {Message} from "element-ui";
Vue.config.productionTip = false;

// Vue.use(ElementUI)
Vue.prototype.$message = Message;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
