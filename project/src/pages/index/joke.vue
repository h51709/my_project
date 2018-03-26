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
	            axios.post("/api/loading").then((res)=>{
					vm.lists = res.data.list.reverse()
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
</style>