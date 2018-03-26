<template>
	<div class="radio">
		<header class="header">视频</header>
		<div class="content">
			<div class="r_items">
				<video-item :width="width" :height="height" :zan="zan" :fenxiang="fenxiang" :videoSrc="list.videoSrc" :videoImg="list.videoImg"  v-for="(list,i) in lists" :key="i"></video-item>
			</div>
		</div>
		<footer>
		    <ul>
		    	<li v-for="i in links" @click="handleChange(i)" :class="{active:i.title==current}">
	          		<i :class="i.icon"></i>
	          		<span>{{i.title}}</span>
         		</li>
		    </ul>
	   </footer> 
	</div>
</template>

<script>
	import axios from "axios";
	import ok_png from"../assets/ok.png";
	import fenxiang_png from"../assets/fenxiang.png";
	export default {
		data(){
			return{
				current:"视频",
				lists:[],
				zan:ok_png,
				fenxiang:fenxiang_png,
				width:"355px",
				height:"300px",
				/*width:"300px",
				height:"245px",*/
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
		  		if(i.title == "首页"){
		  			this.$router.push("/")
		  		}else if(i.title == "我的"){
		  			this.$router.push("/user")
		  		}
		  	}
	    },
	    beforeCreate(){
			axios.post("/api/video_loading").then((res)=>{
				/*console.log(res.data.list)*/
				this.lists = res.data.list
			})
		}
	}
</script>

<style>
	.radio{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
	}
	.header{
		font-size:4.25vw;
		color:white;
		justify-content: center;
		align-items: center;
		letter-spacing: 3px;
	}
	.radio .content .r_items .g_item{
		width:100%;
		height:93.8vw;
		background: white;
		margin-top:1.66vw;
		margin-bottom:2.59vw;
		padding:2.96vw;
		padding-bottom:0vw;
	}
	.radio .content .r_items .g_item .div{
		width:100%;
		height:80vw;
	}
	.radio .content .r_items .g_item .i{
		height:10.51vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.radio .content .r_items .g_item .i>section{
		width:45.59vw;
		height:10.51vw;
		float: right;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.radio .content .r_items .g_item .i>section .ok>img,.fenxiang>img{
		width:4.25vw;
		height:4.25vw;
	}
	.radio .content .r_items .g_item .i>section .ok>span,.radio .content .r_items .g_item .i>section .write>span{
		font-size: 3.54vw;
		color:#898989;
	}
	.radio .content .r_items .g_item .i>section .write>i{
		display: inline-block;
		font-size: 4.45vw;
		color:#a3a3a3 !important;
	}
</style>