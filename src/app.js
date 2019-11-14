import Vue from 'vue';
import App from "./app.vue";
import router from '../src/router';
// 引入实例模块
import print from './print';
print();

let p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("done");
    },1000)
});
p.then(res=>{
    console.log(res)
});

new Vue({
    el:"#app",
    router,
    render: h => h(App)
});

// 增加对HMR的实现
if(module.hot){
    module.hot.accept("./print.js",function(){
        console.log("收到更新后的魔力")
        print();
    })
}
