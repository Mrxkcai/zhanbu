'use strict'
// 注册组件
Vue.component('component-footer',{
    props:{

    },
    data(){
        return{
            footerList:[
                {title:'首页',img:'../assets/images/icon/shyeunselect.png',active:false},
                {title:'大师讲堂',img:'../assets/images/icon/shyeunselect.png',active:false},
                {title:'祈福许愿',img:'../assets/images/icon/shyeunselect.png',active:false},
                {title:'个人中心',img:'../assets/images/icon/shyeunselect.png',active:false}
            ]
        }
    },
    computed: {},
    methods:{

    },
    template:`
        <footer class="footer">
            <div v-for="items in footerList">
                <img :src="items.img" />
                <span :class="items.active?'footer_select':''">{{items.title}}</span>
            </div>
        </footer>
    `
})