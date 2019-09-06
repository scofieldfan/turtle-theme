import Vue from "vue";

import "./less/home2.less";
// import "./less/method2/theme-a.less";
//import "./index-a.js";
//import "./index-b.js";
import App from "./app.vue";

const app = new Vue({
    render(h) {
        return h(App);
    }
});

app.$mount("#App");
