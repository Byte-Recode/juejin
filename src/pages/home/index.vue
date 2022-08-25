<template>
	<div id="homeindex-container">
		<router-view @toggleTag="onToggleTag"></router-view><!-- 标签导航列表组件 -->
		<!-- 标签列表 -->
		<div class="taglist">
			<ol v-if="tagselect !== '综合' && tagselect !== '关注'">
				<li v-for="(item, index) in tagKeywords" :class="keywordselect == item ? 'keywordselect' : ''"
					href="javascript:;" :data-tag="item" :key="index" :data-word=item @click.stop="toggleKeyword">{{
							item
					}}</li>
			</ol>
		</div>
		<!-- 内容部分 -->
		<div :class="{ content: true, 'content-react': sidebaron }">
			<section class="main">
				<div class="list-header">
					<ul>
						<li :class="listselect == 1 ? 'liselect' : ''" :data-id="1" @click="toggleSelect">推荐</li>|
						<li :class="listselect == 2 ? 'liselect' : ''" :data-id="2" @click="toggleSelect">最新</li>|
						<li :class="listselect == 3 ? 'liselect' : ''" :data-id="3" @click="toggleSelect">热榜</li>
					</ul>
				</div>
				<!-- 瀑布流组件 -->
				<div :class="{ waterfall: true, 'waterfall-react': sidebaron }" ref="scrollBox">
					<SkeletonVue :height="150" :class="{ 'Skeleton': !sidebaron, 'Skeleton-react': sidebaron }"
						v-if="isskeleton">
					</SkeletonVue>
					<List v-for="(item, index) in articlearr" :key="index" :postid="item.id" :authorname="item.username"
						:title="item.title" :coverimg="item.photo"
						:abstract="item.abstract == 'null' ? item.content : item.abstract" :date="item.posttime"
						:keywords="item.keywords" :comment="item.replycount" :likecount="item.followcount"
						:viewcount="item.viewcount">
					</List>
					<h3 v-if="istip" :class="{ 'Skeleton': !sidebaron, 'Skeleton-react': sidebaron }"
						style="text-align: center; margin:20px 0">没有更多了</h3>
				</div>
			</section>
			<div style="width: 20px;height:1px;" v-if="!sidebaron"></div>
			<div class="sidebar" v-if="!sidebaron"></div>
		</div>
	</div>
</template>

<script>
import List from '../../components/List.vue'
import SkeletonVue from '../../components/Skeleton.vue';
import { getarticleAPI } from '../../api/getarticleAPI'
import { getarticletagAPI } from '../../api/getarticletagAPI'

export default {
	data() {
		return {
			sidebaron: false,
			tagselect: "综合",
			tagKeywords: [],
			keywordselect: "",
			articlearr: [],//文章列表
			listselect: 1,//选择的排序依据
			isloading: false,//向后端请求文章
			isskeleton: true,
			loadheight: 200,//加载余量阈值
			index: 0,
			num: 10,
			istip: false,//提示：没有更多了
			tag: [],
		}
	},
	components: {
		List,
		SkeletonVue
	},
	methods: {
		setKeyword() {
			this.keywordselect = this.tagKeywords[0]
		},
		// 切换标签
		onToggleTag(tag, tagKeywords) {
			// 获取当前选择的大标签
			this.tagselect = tag
			console.log('index' + tag);
			console.log(tagKeywords);
			if (tagKeywords) {
				this.tagKeywords = tagKeywords
				this.setKeyword()
				this.reSet()
				this.listselect = 1
				this.getarticletag()
				console.log('tag');
			} else {
				this.reSet()
				this.listselect = 1
				// 如果选中的标签是综合与关注，则获取默认文章列表（未建用户与文章关系表，因此省略关注的文章列表）
				this.getArticle()
				console.log('zonghe');
			}
		},
		// 重置索引、列表等
		reSet() {
			// 重置索引与列表
			this.index = 0
			this.articlearr = []
			this.isskeleton = true
			this.istip = false
		},
		// 切换关键词
		toggleKeyword(e) {
			this.reSet()
			this.keywordselect = e.currentTarget.dataset.word
			this.getarticletag()
		},
		// 切换选择排序，1表示推荐，2表示最新，3表示热榜
		toggleSelect(e) {
			this.reSet()
			// console.log(e.currentTarget.dataset.id);
			this.listselect = parseInt(e.currentTarget.dataset.id)
			if (this.tagselect == '综合' || this.tagselect == '关注') {
				this.getArticle()
			} else {
				this.getarticletag()
			}
		},
		// 根据关键字查询
		async getarticletag() {
			// 首页列表排序匹配，order表示传给后方的排序依据
			let order
			switch (this.listselect) {
				case 1:
					order = 'recommend'
					break;
				case 2:
					order = 'new'
					break;
				case 3:
					order = 'hot'
					break;
				default:
					order = 'recommend'
			}
			// 获取文章列表
			let res
			if (this.keywordselect === this.tagKeywords[0]) {
				res = await getarticletagAPI(this.index, this.num, this.tagKeywords, order)
			} else {
				res = await getarticletagAPI(this.index, this.num, this.keywordselect, order)
			}
			console.log(res)
			if (res.code !== 201) {
				this.isskeleton = false
				this.istip = true
				return
			}
			this.articlearr = [...this.articlearr, ...res.data]
			this.index = this.index + this.num
			// console.log(this.index);
			this.isloading = false
			this.isskeleton = false
		},
		// 查询所有文章
		async getArticle() {
			// 首页列表排序匹配，order表示传给后方的排序依据
			let order
			switch (this.listselect) {
				case 1:
					order = 'recommend'
					break;
				case 2:
					order = 'new'
					break;
				case 3:
					order = 'hot'
					break;
				default:
					order = 'recommend'
			}
			// 获取文章列表
			const res = await getarticleAPI(this.index, this.num, order)
			// console.log(res)
			if (res.code !== 201) {
				this.isskeleton = false
				this.istip = true
				return
			}
			this.articlearr = [...this.articlearr, ...res.data]
			this.index = this.index + this.num
			// console.log(this.index);
			this.isloading = false
			this.isskeleton = false
		},
		// 防抖函数
		debounce(fn, delay) {
			let timer;
			return function () {
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					fn();
				}, delay);
			}
		},
		toggleTopBar() {
			const windowInfo = {
				width: window.innerWidth,
				hight: window.innerHeight
			}
			console.log(windowInfo);
			if (windowInfo.width < 960) {
				this.sidebaron = true
			} else {
				this.sidebaron = false
			}
		},
		// 监听屏幕滚动
		windowScroll() {
			if (!this.isloading) {
				let boxHeight = this.$refs.scrollBox.offsetHeight
				let scrollboxheight = boxHeight + 56 + 42  //盒子高度（包括搜索栏）
				let boxoffset = window.pageYOffset  //屏幕滚动像素
				let deviceheight = window.screen.height  //设备高度
				// console.log(scrollboxheight + "=" + boxoffset + "+" + deviceheight);
				// 当滚动盒子偏移量小于屏幕滚动像素+设备高度+200余量时滚动
				if (scrollboxheight < boxoffset + deviceheight + this.loadheight) {
					// 设置节流阀isloading
					this.isloading = true
					if (this.tagselect == '综合' || this.tagselect == '关注') {
						this.getArticle()
					} else {
						this.getarticletag()
					}
				}
			} else return
		}
	},
	created() {
		this.toggleTopBar()
		window.addEventListener('resize', this.debounce(this.toggleTopBar, 500))
		window.addEventListener('scroll', this.windowScroll)
		this.getArticle()
	},
	mounted() {
		addEventListener('resize', this.debounce(this.toggleTopBar, 500))
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.debounce(this.toggleTopBar, 500));
		window.removeEventListener('scroll', this.windowScroll)

	}
};
</script>

<style lang="less" scoped>
#homeindex-container {
	li {
		list-style: none;
	}

	.taglist {
		padding: 0 10px;

		ol {
			max-width: 960px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			padding: 0;
			margin: 0 auto;

			li {
				font-size: 12px;
				background-color: #fff;
				border-radius: 999px;
				padding: 5px 8px;
				margin: 5px;
			}

			.keywordselect {
				color: #fff;
				background-color: #007fff;
			}
		}
	}

	.content {
		max-width: 960px;
		margin: 0 auto;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		// width: 63%;
		background-color: #f4f5f5;

		.main {
			overflow: hidden;
			background-color: #fff;

			.list-header {
				border-bottom: 1px solid rgb(239, 239, 239);
				padding: 1vw 2vw;

				ul {
					display: flex;
					justify-content: flex-start;
					color: #909090;

					li {
						font-size: 14px;
						margin: 0 15px;
						color: #909090;

						&:hover {
							color: #007fff;
						}
					}

					.liselect {
						color: #007fff;
					}
				}
			}

			.waterfall {
				max-width: 700px;

				.Skeleton {
					width: 700px !important;
				}

				.Skeleton-react {
					width: calc(100vw - 15px)
				}
			}

			.waterfall-react {
				width: 100%;
				max-width: 9999px;

			}
		}

		.sidebar {
			width: 240px;
			height: 900px;
			background-color: blue;
		}
	}

	.content-react {
		margin: 0;
		margin-top: 10px;
		// display: flex;
		// justify-content: center;
		width: 100%;
		// background: #ffffff;
	}
}
</style>