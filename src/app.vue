<template>
    <div id="app">
        <img src="./assets/2.jpg">
        <ul>
            <li class="ico ico-l1"></li>
            <li class="ico ico-l2"></li>
            <li class="ico ico-l3"></li>
            <li class="ico ico-l4">a</li>
        </ul>
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
/* stylelint-disable*/
    @import "~sprite.scss";
    @import "~sprite2.scss";
    $black: #000;
    $yellow: #66ff66;
    .ico-l1{
        @include sprite($a1);
    }
    .ico-l2{
        @include sprite($a2);

    }
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
