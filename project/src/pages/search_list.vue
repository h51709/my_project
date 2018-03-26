<template>
	<div class="search2">
		<header class="s_head">
			<i class="iconfont icon-xiangzuo" @click="clickSearch"></i>
			<p>{{message}}</p>
		</header>
		<div class="content">
			<form @click="clickSearch">
				<i class="iconfont icon-sousuo"></i>
		  		<input type="text" :placeholder="message" />
			</form>
			<div class="s_list">
				<p v-if="typeof lists[0] == 'string'">{{lists}}</p>
				<content-item v-else v-for="list in lists" :title="list.title" :msg="list.msg" :img="list.img" :key="list.id"></content-item>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return{
				message:"",
				title:"",
				msg:"",
				img:"",
				lists:[]
			}
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				console.log(vm)
				var msg = vm.message;
	            axios.post("/api/search",{msg}).then((res)=>{
	            	console.log(res.data.data)
					vm.lists = res.data.data
				})
	        })
			
		},
		mounted(){
			this.message = sessionStorage.getItem("search")
		},
		updated(){
			setTimeout(()=>{
				if(typeof this.lists[0] == 'string'){
					return
				}else{
					var imgs = document.querySelectorAll("div.l_item"),
						len = imgs.length, 
						colWidth = imgs[0].offsetWidth,
						containerWidth = document.getElementsByClassName("s_list")[0].clientWidth - 17, 
						cols = 2,
						spacing = 7,
						height = new Array(cols); 
					height.fill(0);
				
					// 定位
					for (var i = 0; i < len; i++) {
						var colIndex = findShortest(height);
						imgs[i].style.top = height[colIndex] + spacing + "px";
						imgs[i].style.left = (colIndex + 1) * spacing + colIndex * colWidth + "px";
						height[colIndex] += imgs[i].offsetHeight + spacing;
					}				
					// 找出最短列索引
					function findShortest(height) {
						var min = height[0], index = 0;
						for (var i = 1; i < height.length; i++) {
							if (min > height[i]) {
								min = height[i];
								index = i;
							}
						}
						return index;
					}
				}
				
			},100)
			
			
		},
		methods:{
			clickSearch(){
		  		this.$router.push("/search")
		  	}
		}
	}
</script>

<style>
	.search2{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
	}
	.search2 .s_head{
		background: white;
		width:100%;
		height:15.74vw;
		padding: 0 6.20vw;
		line-height: 15.74vw;
		text-align: center;
	}
	.search2 .s_head>i{
		font-size:5.55vw;
		color:black !important;	
		font-weight: bold;
	}
	.search2 .s_head>p{
		width:100%;
		height: 100%;
		font-size: 4.25vw;
		font-weight: bold;
		color:black;
		letter-spacing: 1.5vw;
	}
	.search2 .content{
		background: #eeeeee;
		flex: 1;
	}
	.search2 .content>form{
		width:94.44vw;
		height:7.4vw;
		background: white;
		border-radius: 5px;
		margin:2.77vw 2.77vw;
		display: flex;
		justify-content: space-between;
	}
	.search2 .content>form>i{
		display: inline-block;
		width:7.4vw;
		height:7.4vw;
		text-align: center;
		line-height: 7.4vw;
		font-size: 3.51vw;
		color:#707070;
	}
	.search2 .content>form>input{
		width:100%;
		height: 100%;
		outline: none;
		font-size: 3.51vw;
		color:#707070;
		border:none;
		padding:0;
		border-radius: 5px;
	}
	
	.search2 .content .s_list{
		padding:0 1.38vw;
		padding-top:2.77vw;
		position:relative;
	}
	.search2 .content .s_list .l_item{
		width:47.22vw;
		background: white;
		border-radius: 6px;
		position: absolute;
	}
	.search2 .content .s_list .l_item .img{
		width:47.22vw;
	}
	.search2 .content .s_list .l_item .img img{
		width:100%;
		border-radius: 6px;
	}
	.search2 .content .s_list .l_item dl{
		width:47.22vw;
		height:35.35vw;
		padding:3.7vw 1.85vw;
	}
	.search2 .content .s_list .l_item dl .title{
		height:10vw;
		overflow: hidden;
		font-size: 3.70vw;
		color:#535353;
		font-weight: bold;
	}
	.search2 .content .s_list .l_item dl .msg{
		height:8.6vw;
		font-size: 3.24vw;
		color:#898989;
		margin: 2.25vw 0;
		line-height: 4.35vw;
		overflow: hidden;
	}
	.search2 .content .s_list .l_item dl>div{
		height:7vw;
		width:33.33vw;
		font-size: 2.22vw;
		color:#898989;
		display: flex;
		justify-content: space-between;
	}
</style>