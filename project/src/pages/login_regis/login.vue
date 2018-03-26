<template>
	<form class="form">
		<label>
			<section>
				<i class="iconfont icon-wode01"></i>
				<input type="text" v-model="username" placeholder="请输入用户名"/>
			</section>
		</label>
		<label>
			<section>
				<i class="iconfont icon-42"></i>
				<input type="password" v-model="pwd" placeholder="请输入密码"/>
			</section>
		</label>
		<button @click="handleClick" class="btn">登录</button>
		<p>忘记密码？</p>
	</form>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return{
				username:"",
				pwd:""
			}
		},
		methods:{
			handleClick(){
				let{username,pwd}=this;
				if(!username || !pwd){
					alert("不能为空！");
					return
				}
				axios.post("/api/login",{username,pwd}).then(function(res){
					console.log(res)
					/*if(!res.data.code){
						this.$router.push("/")
						console.log(res.data)
					}*/
				})
			}
		}
	}
</script>
	
<style>
	
</style>