<template>
	<div class="login">
		<section>
			<ul class="l_r">
		    	<li><h4><router-link to="/login">登录</router-link></h4></li>
		     	<li><h4><router-link to="/register">注册</router-link></h4></li>
		    </ul>
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
	export default {
		
	}
</script>
	
<style>
	.login{
		width:100%;
		height:100%;
		background: url(https://s3.pstatp.com/growth/mobile_list/image/banner_index_middle_3_89f45f4f.png) no-repeat 0px 0;
		background-size: 100% 70%;
		padding-top:56.55vw;
		padding-left:5.55vw;
	}
	.login>section{
		width:88.88vw;
		height:105.55vw;
		border:3px dotted #C1E2B3;
		border-radius: 10px;
		background: white;
		opacity: 0.9;
		padding:4.07vw 5.74vw;
	}
	.login>section .l_r{
		width:100%;
		height:8.14vw;
		display: flex;
		justify-content: space-between;
		padding:0 12.15vw;
		line-height: 8.14vw;
		margin-bottom: 3.7vw;
	}
	.login>section .l_r a{
		font-size: 4vw;
		font-weight: bold;
		letter-spacing: 3px;
		color:#898989;
	}
	.router-link-exact-active{
		display: inline-block;
		width:9.81vw;
		height:7.44vw;
		color:#ff3b45 !important;
		border-bottom:2px solid #ff3b45;
		text-align: center;
	}
	
	/* 子组件 */
	.form>label>section{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #c5c5c5;
	}
	.form>label>section>i{
		display: inline-block;
		width:9.07vw;
		height:12.22vw;
		text-align: center;
		line-height: 12.22vw;
		padding:0vw;
		font-size: 5.09vw;
		color:#848484 !important;
	}
	.form>label>section>input{
		width:68.51vw;
		height:12.22vw;
		outline: none;
		border: none;
	}
	.form>label>section .valid{
		width:51vw;
		height:12.22vw;
	}
	.btn{
		width:100%;
		height:11.48vw;
		border-radius: 20vw;
		background: #f45d52;
		text-align: center;
		border:none;
		color:white;
		outline: none;
		margin-top: 11.29vw;
		margin-bottom: 5.55vw;
		font-size: 3.7vw;
		letter-spacing: 3px;
		box-shadow:2px 2px 5px #C0C0C0;
	}
	.form p{
		color:#ea6157;
		font-size: 3.81vw;
		float: right;
		letter-spacing: 0.35vw;
	}
</style>