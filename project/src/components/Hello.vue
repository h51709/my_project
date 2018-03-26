<template>
	  <div class="hello">
	  		<header>
	  			<h1>News</h1>
		  		<form>
		  			<i class="iconfont icon-sousuo"></i>
		  			<input type="text" :placeholder="msg" class="in_se" @click="clickSearch"/>
		  		</form>
	  		</header>
	  		
		  	<div class="content">
		  		 <ul class="child">
			    	<li><h4><router-link to="/recommend">推荐</router-link></h4></li>
			     	<li><h4><router-link to="/recreat">娱乐</router-link></h4></li>
			     	<li><h4><router-link to="/joke">段子</router-link></h4></li>
			     	<li><h4><router-link to="/science">科技</router-link></h4></li>
			     	<li><h4><router-link to="/gif">GIF图</router-link></h4></li>
			    </ul>
				  <router-view>
			    	<keep-alive>   
			          <component :is="current"></component>
					 	</keep-alive>
			    </router-view>
		  	</div>
		  	
		    <footer>
		    	<ul>
			    	<li v-for="i in links" @click="handleChange(i)" :class="{active:i.title==current}">
	          		<i :class="i.icon"></i>
	          		<span>{{i.title}}</span>
	         	</li>
			    </ul>
			   <!-- <ul>
			    	<li><router-link to="/">首页</router-link></li>
			     	<li><router-link to="/radio">视频</router-link></li>
			     	<li>信息</li>
			     	<li><router-link to="/user">我的</router-link></li>
			    </ul>-->
			    
		    </footer> 
		    
	  </div>
</template>

<script>
	export default {
	  data () {
	    return {
	      msg:"搜索感兴趣的",
	      bool:true,
        current:"首页",
        links:[
        		{title:'首页',icon:"iconfont icon-home"},
        		{title:'视频',icon:"iconfont icon-tv"},
        		{title:'信息',icon:"iconfont icon-xinxi"},
        		{title:'我的',icon:"iconfont icon-wode"}
        ]
	    }
	  },
	  methods:{
	  	handleChange(i){
	  		this.current = i.title;
	  		if(i.title == "视频"){
	  			this.$router.push("/radio")
	  		}else if(i.title == "我的"){
	  			this.$router.push("/user")
	  		}
	  	},
	  	clickSearch(){
	  		this.$router.push("/search")
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.hello{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
	}
	
	/* header */
	header h1{
		width:26.11vw;
		height:13.33vw;
		text-align: center;
		line-height: 13.33vw;
		font-size: 6.48vw;
		color: white;
	}
	header form{
		width:71.11vw;
		height:7.77vw;
		display: flex;
		justify-content: space-between;
		margin-top:2.77vw;
	}
	header form i{
		display: inline-block;
		width:7.77vw;
		height:7.77vw;
		padding-left:1.68vw;
		background: white;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		text-align: center;
		line-height: 7.77vw;
		font-size:3.24vw !important;
		color:#717171
	}
	header form .in_se{
		width:63.70vw;
		height:7.77vw;
		border:none;
		outline: none;
		padding:0px;
		padding-left:0.55vw;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		font-size:3.14vw;
		color:#9e9e9e;
	}
	
	/* 主要内容 */
	.content .child{
		height:9.62vw;
		line-height: 9.62vw;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	.content .child>li{
		width:20vw;
		text-align: center;
	}
	.content .child>li h4{
		font-size:3.8vw;
		font-weight: bold;
	}
	.content .child>li h4 a{
		color:#707070;
	}
	
	/* 子组件 */
	div>.recom{
		padding:0 1.38vw;
		padding-top:2.77vw;
		position:relative;
	}
	div>.recom .l_item{
		width:47.22vw;
		background: white;
		border-radius: 6px;
		position: absolute;
	}
	div>.recom .l_item .img{
		width:47.22vw;
	}
	div>.recom .l_item .img img{
		width:100%;
		border-radius: 6px;
	}
	div>.recom .l_item dl{
		width:47.22vw;
		height:35.35vw;
		padding:3.7vw 1.85vw;
	}
	div>.recom .l_item dl .title{
		height:10vw;
		overflow: hidden;
		font-size: 3.70vw;
		color:#535353;
		font-weight: bold;
	}
	div>.recom .l_item dl .msg{
		height:8.6vw;
		font-size: 3.24vw;
		color:#898989;
		margin: 2.25vw 0;
		line-height: 4.35vw;
		overflow: hidden;
	}
	div>.recom .l_item dl>div{
		height:7vw;
		width:33.33vw;
		font-size: 2.22vw;
		color:#898989;
		display: flex;
		justify-content: space-between;
	}
</style>
