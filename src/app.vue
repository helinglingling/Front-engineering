<template>
  <div id="app">
    <img src="./assets/2.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
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
