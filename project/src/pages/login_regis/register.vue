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
				<i class="iconfont icon-wode01"></i>
				<input type="text" v-model="tel" placeholder="请输入手机号"/>
			</section>
		</label>
		<label>
			<section>
				<i class="iconfont icon-icon--"></i>
				<input type="text" v-model="valid" placeholder="请输入验证码" class="valid"/>
				<img :src="src" @click="handleYanZheng"" id="img"/>
			</section>
		</label>
		<label>
			<section>
				<i class="iconfont icon-42"></i>
				<input type="password" v-model="pwd" placeholder="请设置密码"/>
			</section>
		</label>
		<button @click="handleClick" class="btn">注册</button>
		<p>忘记密码？</p>
	</form>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return{
				username:"",
				pwd:"",
				tel:"",
				valid:"",
				src:"",
				sid:""
			}
		},
		created(){
			this.handleYanZheng()
		},
		methods:{
			
			/* 点击生成验证码 */
			handleYanZheng(){
				var url = "http://route.showapi.com/932-2?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&length=4&specials=false&";
				var _this = this;
				axios.post(url).then(function(data){
					//生成验证码
					_this.src = data.data.showapi_res_body.image,
					_this.sid = data.data.showapi_res_body.sid
					
				})
			},
			
			/* 注册 */
			handleClick(){
				
				let{username,pwd,tel,valid}=this;
				if(!username || !pwd || !tel){
					alert("不能为空！");
					return
				}
				if(!valid){
					alert("请输入验证码");
					return
				}
				
				//验证验证码
		       	var _val = this.valid,
					_sid = this.sid;
										
		       	var url = `http://route.showapi.com/932-1?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&checkcode=${_val}&sid=${_sid}&`;
				axios.get(url).then(function(data){
					if(!data.data.showapi_res_body.valid){
						alert("请输入正确的验证码");
						return
					}
				})
				
				//注册
				axios.post("/api/register",{username,pwd,tel}).then((res)=>{
					if(!res.data.code){
						this.$router.push("/")
						/*console.log(res.data.msg)*/
					}
				})
			}
			
		}
	}
</script>
	
<style>
	
</style>