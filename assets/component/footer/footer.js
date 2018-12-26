'use strict'
// 注册组件
Vue.component('component-footer',{
    props:{

    },
    data(){
        
    },
    computed: {},
    methods:{

    },
    template:`
        <footer class="footer">
            <div>
                <img src="../assets/images/icon/shyeselect.png" />
                <span class="footer_select">
                首页
                </span>
            </div>
            <div>
                <img src="../assets/images/icon/dashiunselect.png" />
                <span>
                大师讲堂
                </span>
            </div>
            <div>
                <img src="../assets/images/icon/qifuunselect.png" />
                <span>
                祈福许愿
                </span>
            </div>
            <div>
                <img src="../assets/images/icon/gerenunselect.png" />
                <span>
                个人中心
                </span>
            </div>
        </footer>
    `
})