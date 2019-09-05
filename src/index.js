import Vue from "vue";
import "./less/home.less";
import App from "./app.vue";

const app = new Vue({
    render(h) {
        return h(App);
    }
});

app.$mount("#App");
