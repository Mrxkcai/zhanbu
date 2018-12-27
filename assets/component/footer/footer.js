'use strict'
// 注册组件
Vue.component('component-footer',{
    props:{

    },
    data(){
        return{
            footerList:[
                {title:'首页',img:'../assets/images/icon/shyeunselect.png',active:false,pageUrl:'../footer1/index.html'},
                {title:'大师讲堂',img:'../assets/images/icon/dashiunselect.png',active:false,pageUrl:'../footer2/home.html'},
                {title:'祈福许愿',img:'../assets/images/icon/qifuunselect.png',active:false},
                {title:'个人中心',img:'../assets/images/icon/gerenunselect.png',active:false}
            ]
        }   
    },
    computed: {},
    methods:{
        changePage(pageUrl){
            window.location.href=pageUrl;
        }
    },
    template:`
        <footer class="footer">
            <div v-for="items in footerList" @click='changePage(items.pageUrl)'>
                <img :src="items.img" />
                <span :class="items.active?'footer_select':''">{{items.title}}</span>
            </div>
        </footer>
    `
})