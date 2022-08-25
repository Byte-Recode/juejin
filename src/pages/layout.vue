<template>
	<div>
		<!-- 顶部导航 -->
		<navi class="outer"></navi>
		<!-- 导航内容区视图 -->
		<router-view></router-view>
	</div>
</template>

<script>
import navi from '../components/navi'
export default {
	components: {
		navi
	}
}
</script>

<style lang="less" scoped>
.outer {
	background: #ffffff;
}
</style>