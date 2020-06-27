import Vue from 'vue'
 import Router from "vue-router"
//import myrouter from  './myrouter'
Vue.use(Router)



const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes:[

        {
            path:"/",
            name:"home",
            component:()=>import(/* webpackChunkName: "about" */"./components/home.vue")
        },
        {
            path:"/about",
            name:"about",
            component:()=>import(/* webpackChunkName: "about" */"./components/about.vue")
        }
    ,
    {
        path:"/list",
        name:"list",
        component:()=>import(/* webpackChunkName: "about" */"./components/list.vue")
    }

    ]
})


export default router