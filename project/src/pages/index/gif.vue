<template>
	<div class="gif">
		<gif-item  v-for="list in lists" :key="list.id" :img="list.img" :zan="zan" :fenxiang="fenxiang"></gif-item>
	</div>
</template>

<script>
	import axios from "axios";
	import ok_png from"../../assets/ok.png";
	import fenxiang_png from"../../assets/fenxiang.png";
	export default {
		data(){
			return{
				img:"",
				lists:[],
				zan:ok_png,
				fenxiang:fenxiang_png,
			}
		},
		beforeCreate(){
			axios.post("/api/gif_loading").then((res)=>{
				/*console.log(res.data.list)*/
				this.lists = res.data.list
			})
		}
	}
</script>

<style>
	.gif{
		background: #eeeeee;
	}
	.gif .g_item{
		width:100%;
		height:81.29vw;
		background: white;
		margin-top:1.66vw;
		margin-bottom:2.59vw;
		padding:2.96vw;
	}
	.gif .g_item>p{
		width:100%;
		height:66.66vw;
	}
	.gif .g_item>p>img{
		width:100%;
		height:100%;
	}
	.gif .g_item>div{
		height:10.51vw;
		padding-right:0.92vw;
	}
	.gif .g_item>div>section{
		width:42.59vw;
		height:10.51vw;
		float: right;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.gif .g_item>div>section .ok>img,.fenxiang>img{
		width:4.25vw;
		height:4.25vw;
	}
	.gif .g_item>div>section .ok>span,.gif .g_item>div>section .write>span{
		font-size: 3.54vw;
		color:#898989;
	}
	.gif .g_item>div>section .write>i{
		display: inline-block;
		font-size: 4.45vw;
		color:#a3a3a3 !important;
	}
</style>