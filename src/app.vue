<template>
  <div id="app">
    <img src="./assets/2.jpg">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import api from "../mock/api.js";
export default {
  async created() {
    let res = await axios.get(api.getUserInfo);
    console.log(res);   // eslint-disable-line no-console
  }
};
</script>

<style lang="scss">
/* stylelint-disable unit-whitelist*/
/* stylelint-disable*/
$black: black;
$yellow: yellow;
h2 {
    font-size: 30px;
    color: $black;
    background: $yellow;
    transform: rotate(5deg);
}
img{
    width: 300px;
    height: 200px;
}
</style>
