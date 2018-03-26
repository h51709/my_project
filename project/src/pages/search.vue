<template>
	<div class="search">
		<div class="form">
			<form>
				<i class="iconfont icon-sousuo"></i>
		  		<input type="text" v-model="msg" class="se" autofocus="autofocus"/>
		  		<p @click="msg=''"><img :src="close"/></p>
			</form>
		  	<p @click="backIndex">取消</p>
		</div>
		<div class="record" v-show="msg !== ''" @click="clickSearch_list">
			<i class="iconfont icon-zhadan"></i>
			{{msg}}
		</div>
	</div>
</template>

<script>
	import close_png from"../assets/close.png";
	export default {
		data(){
			return{
				close:close_png,
				msg:""
			}
		},
		methods:{
			backIndex(){
				this.$router.push("/")
			},
			clickSearch_list(){
				sessionStorage.setItem("search",this.msg)
				this.$router.push("/s_list")
			}
		}
	}
</script>

<style>
	.search .form{
		width:100%;
		height:13.33vw;
		padding: 2.22vw 3.7vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 3.7vw;
		color:#828282;
	}
	.search .form form{
		height:100%;
		width:80.55vw;
		background: #eeeeee;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
	}
	.search .form form i{
		display: inline-block;
		width:8.70vw;
		height:8.70vw;
		text-align: center;
		line-height: 8.70vw;
		font-size: 3.24vw;
		color:#707070 !important;
	}
	.search .form form .se{
		height:8.575vw;
		width:60.64vw;
		padding:0vw;
		border:none;
		background: #eeeeee;
		outline: none;
	}
	.search .form form>p{
		width:11.9vw;
		height:8.575vw;
		background: #eeeeee;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
	.search .form form>p img{
		width:5.09vw;
		height:5.09vw;
	}
	.search .record{
		width:100%;
		height:15.88vw;
		line-height: 15.88vw;
		padding:0 3.7vw;
		color:#8e8e8e;
		border-bottom: 1px solid #d3d3d3;
	}
	.search .record>i{
		display: inline-block;
		width:7.40vw;
		height:7.40vw;
		background: #fee8eb;
		border-radius: 50%;
		text-align: center;
		line-height: 7.4vw;
		font-size: 3.88vw;
		color:#ff6a66 !important;
		margin-top:2.74vw;
		margin-right: 3.14vw;
	}
</style>