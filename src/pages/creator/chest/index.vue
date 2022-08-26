<template>
    <div class="layout">
        <header>
            <div class="container">
                <a href="javascript:;" @click="toHome">
                    <img
                        class="logo"
                        src="../../../assets/xitujuejin.png"
                        alt="加载失败"
                /></a>
                <div class="right">
                    <el-button type="primary">发布</el-button>
                    <img src="../../../assets/touxiang.png" alt="加载失败" />
                </div>
            </div>
        </header>
		<section>
			<div class="container">
				<div class="box">
					<a href="javascript:;">文章草稿（0）</a>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang='less' scoped>
	header {
		display: flex;
		align-items: center;
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #efeded;
		background: white;
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			margin: 0 auto;
			.logo {
				margin: 0 auto;
				// margin-top: 16px;
				width: 100px;
			}
			.right {
				display: flex;
				justify-content: space-between;
				align-items: center;
				img {
					width: 36px;
					height: 36px;
					border-radius: 50px;
					margin-left: 30px;
				}
			}
		}
	}
	section{
		margin: 0 auto;
		margin-top: 20px;
		.container {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 93%;
			margin: 0 auto;
			.box{
				height: 50px;
				width: 640px;
				background: white;
				border-radius: 10px;
				line-height: 50px;
				font-weight: bold;
				padding-left: 20px;
				a{
					color: rgb(44, 152, 252);
				}
			}
		}
	}
</style>