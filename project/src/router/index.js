import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Login_regis = r=>require.ensure([],()=>r(require("@/pages/login_regis.vue")),"login_regis")
const Search = r=>require.ensure([],()=>r(require("@/pages/search.vue")),"search")
const Search_list = r=>require.ensure([],()=>r(require("@/pages/search_list.vue")),"search_list")
const Radio = r=>require.ensure([],()=>r(require("@/pages/radio.vue")),"radio")
const User = r=>require.ensure([],()=>r(require("@/pages/user.vue")),"user")

const Recreat = r=>require.ensure([],()=>r(require("@/pages/index/recreat.vue")),"recreat")
const Recommend = r=>require.ensure([],()=>r(require("@/pages/index/recommend.vue")),"recommend")
const Joke = r=>require.ensure([],()=>r(require("@/pages/index/joke.vue")),"joke")
const Science = r=>require.ensure([],()=>r(require("@/pages/index/science.vue")),"science")
const Gif = r=>require.ensure([],()=>r(require("@/pages/index/gif.vue")),"science")

const Login = r=>require.ensure([],()=>r(require("@/pages/login_regis/login.vue")),"login")
const Register = r=>require.ensure([],()=>r(require("@/pages/login_regis/register.vue")),"register")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      /*name: 'Hello',*/
      component: Hello,
      children:[{
           path:'/recreat',
           name:"Recreat",
           component:Recreat
        },{
           path:'/recommend',
           name:"Recommend",
           component:Recommend
        },{
           path:'/joke',
           name:"Joke",
           component:Joke
        },{
           path:'/science',
           name:"Science",
           component:Science
        },{
           path:'/gif',
           name:"Gif",
           component:Gif
        },{
        	path:'/',  
        	redirect:"/recommend"  
        }]
    },{
    	path:"/lr",
    	name:"Login_regis",
    	component:Login_regis,
    	children:[{
    		path:"/login",
    		name:"Login",
    		component:Login
    	},{
    		path:"/register",
    		name:"Register",
    		component:Register
    	},{
        	path:'/lr',  
        	redirect:"/login"  
        }]
    },{
    	path:"/search",
    	name:"Search",
    	component:Search
    },{
    	path:"/s_list",
    	name:"Search_list",
    	component:Search_list
    },{
    	path:"/user",
    	name:"User",
    	component:User
    },{
    	path:"/radio",
    	name:"Radio",
    	component:Radio
    }
  ]
})

/* 文章内容 */
Vue.component("content-item",{
	props:[
			"title","msg","img"
	],
	template:`
					<div class="l_item">
						<p class="img"><img :src="img" /></p>
						<dl>
							<dt class="title">{{title}}</dt>
							<dd class="msg">{{msg}}</dd>
							<div>
								<dd class="read">阅读<span>{{read}}</span></dd>
								<dd class="write">评论<span>{{write}}</span></dd>
								<dd class="ok" @click="handleOk">赞<span>{{ok}}</span></dd>
							</div>
							
						</dl>
					</div>
				`,
	data(){
		return{
			read:754,
			write:0,
			ok:23
		}
	},
	methods:{
		handleOk(){
			this.ok+=1
		}
	}
})

/* GIF */
Vue.component("gif-item",{
	props:[
		"img","zan","fenxiang"
	],
	template:`
					<div class="g_item">
						<p>
							<img :src="img" />
						</p>
						<div>
							<section>
								<section @click="handleOk" class="ok">
									<img :src="zan"/>
									<span>{{ok}}</span>
								</section>
								<section class="write">
									<i class="iconfont icon-xinxi"></i>
									<span>{{write}}</span>
								</section>
								<section class="fenxiang">
									<img :src="fenxiang"/>
								</section>
							</section>
						</div>
					</div>
					`,
	data(){
		return{
			write:4837,
			ok:215,
		}
	},
	methods:{
		handleOk(){
			this.ok+=1
		}
	}
})

/* VIDEO */
Vue.component("video-item",{
	props:[
		"zan","fenxiang","videoSrc","videoImg","width","height"
	],
	template:`
					<div class="g_item">
							<div class="div">
					        <video controls autoplay name="media" :width="width" :height="height">
					        		<source :src="videoSrc" :poster="videoImg" type="video/mp4" >
					        </video> 
				    	</div>
				    	
							<div class="i">
								<section>
										<section @click="handleOk" class="ok">
											<img :src="zan" style="width:4.25vw;height:4.25vw"/>
											<span>{{ok}}</span>
										</section>
										<section class="write">
											<i class="iconfont icon-xinxi"></i>
											<span>{{write}}</span>
										</section>
										<section class="fenxiang">
											<img :src="fenxiang" style="width:4.25vw;height:4.25vw"/>
										</section>
								</section>
							</div>
					</div>
					`,
	data(){
		return{
			write:4837,
			ok:215,
			_dom:"",
	    /*videoSrc:'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
	    videoImg:'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',*/
	    playStatus:'',
	    muteStatus:'',
	    isMute:true,
	    isPlay:false
		}
	},
	methods:{
		handleOk(){
				this.ok+=1
		},
		/*playClick(){
				console.log("click")
	    	this._dom = document.getElementById('myvideo');
        this.isPlay = !this.isPlay;
        this._dom.play();
		},
		closeSoundClick(){
		    this.isMute = !this.isMute;
		    if(this.isMute){
		        this.muteStatus = '';
		    }else{
		        this.muteStatus = 'muted';
		    }
		},
		showOtherVideo(){
		    let _this = this;
		    setTimeout(function(){
		        _this.flag = _this._dom.paused;
		        if(!_this.flag){
		            _this.showOtherVideo();
		            console.log(_this.flag);
		        }
		
		    },1000)
		}*/
	}
})