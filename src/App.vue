<template>
  <div id="app"> 
      <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
//import DemoGrid from './components/DemoGrid';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import "./assets/main.css";
import "./assets/32care.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


export default {
  name: 'App',
  components: {
    //DemoGrid
  },
  mounted : function () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/1153462312.js')
    document.head.appendChild(recaptchaScript);
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
