'use strict'
// 注册组件
Vue.component('component-footer',{
    props:{

    },
    data(){
        return{
            footerList:[
                {title:'首页',img:'shyeunselect.png',active:false,pageUrl:'../footer1/index.html'},
                {title:'大师讲堂',img:'dashiunselect.png',active:false,pageUrl:'../footer2/master.html'},
                {title:'祈福许愿',img:'qifuunselect.png',active:false,pageUrl:'../footer3/index.html'},
                {title:'个人中心',img:'gerenunselect.png',active:false,pageUrl:'../footer4/personalCenter.html'}
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
                <img :src="'../assets/images/icon/'+items.img" />
                <span :class="items.active?'footer_select':''">{{items.title}}</span>
            </div>
        </footer>
    `
})