<template>
	<div>
		<div class="recom">
			<content-item v-for="list in lists" :title="list.title" :msg="list.msg" :img="list.img" :key="list.id"></content-item>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return{
				title:"",
				msg:"",
				img:"",
				lists:[]
			}
		},
		beforeRouteEnter(to, from, next){
	        next(vm=>{
	            axios.post("/api/loading_recreat").then((res)=>{
					vm.lists = res.data.list
				})
	        })
	    },
		updated(){
			var imgs = document.querySelectorAll("div.l_item"),
				len = imgs.length, 
				colWidth = imgs[0].offsetWidth,
				containerWidth = document.getElementsByClassName("recom")[0].clientWidth - 17, 
				cols = 2,
				/*spacing = (containerWidth - cols * colWidth) / (cols + 1),*/
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
	}
</script>

<style>
	/*.recom{
		padding:0 1.38vw;
		padding-top:2.77vw;
		position:relative;
	}
	.recom .l_item{
		width:47.22vw;
		background: white;
		border-radius: 6px;
		position: absolute;
	}
	.recom .l_item .img{
		width:47.22vw;
	}
	.recom .l_item .img img{
		width:100%;
		border-radius: 6px;
	}
	.recom .l_item dl{
		width:47.22vw;
		height:35.35vw;
		padding:3.7vw 1.85vw;
	}
	.recom .l_item dl .title{
		height:10vw;
		overflow: hidden;
		font-size: 3.70vw;
		color:#535353;
		font-weight: bold;
	}
	.recom .l_item dl .msg{
		height:8.6vw;
		font-size: 3.24vw;
		color:#898989;
		margin: 2.25vw 0;
		line-height: 4.35vw;
		overflow: hidden;
	}
	.recom .l_item dl>div{
		height:7vw;
		width:33.33vw;
		font-size: 2.22vw;
		color:#898989;
		display: flex;
		justify-content: space-between;
	}*/
</style>