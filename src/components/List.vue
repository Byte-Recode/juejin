<template>
	<div id="list-container">
		<router-link to="#">
			<div class="entry">
				<!-- 头部区域 -->
				<div class="meta-container">
					<a class="user-message" @click.stop="intoAuthor">
						<div class="username">
							{{ authorname }}
						</div>
					</a>
					<div class="time">
						{{ setDate(date) }}
					</div>
					<div class="tag-list" @click.stop="intoArticle">
						<a calss="tag" v-for="(item, index) in keyword" :key="index"
							:class="{ 'isshowbot': index == (keyword.length - 1) }">{{ item }}</a>
					</div>
				</div>

				<!-- 主体区域 -->
				<div class="content">
					<div class="content-main" @click="intoArticle">
						<div class="content-title">
							<a href="">{{ title }}</a>
						</div>
						<div class="abstract">
							<a href="">{{ abstract.slice(0, 60) }}</a>
						</div>
						<ul class="action-list">
							<li class="item view" @click.stop="intoArticle">
								<i><img src="../assets/icon/view.png"></i>
								<span>{{ setNum(viewcount) }}</span>
							</li>
							<li class="item like" @click.stop="likeArticle">
								<i><img src="../assets/icon/like.png"></i>
								<span>{{ setNum(likecount) }}</span>
							</li>
							<li class="item comment" @click.stop="commentArticle">
								<i><img src="../assets/icon/comment.png"></i>
								<span>{{ setNum(comment) }}</span>
							</li>
						</ul>
					</div>
					<img class="content-img" :src="coverimg" v-if="isShowCover" />
				</div>

				<!-- 关闭按钮 -->
				<div class="close" :id="closeId">
					<img class="close-icon" src="../assets/icon/close.png" @click.stop="CloseMenuON">
					<div class="close-menu" v-if="isCloseMenuON">
						<div class="menu-item" @click.stop="disincline">
							<img class="menu-item-icon" src="../assets/icon/1.png" />
							<div class="menu-item-content">
								不感兴趣
							</div>
						</div>
						<div class="menu-item" @click.stop="shieldAuthor">
							<img class="menu-item-icon" src="../assets/icon/2.png" />
							<div class="menu-item-content">
								屏蔽作者:{{ authorname }}
							</div>
						</div>
						<div class="menu-item" @click.stop="ShieldMenuOn">
							<img class="menu-item-icon" src="../assets/icon/3.png" />
							<div class="menu-item-content">
								屏蔽标签
							</div>
							<img class="menu-item-arrow" :src="menuitemarrow" />
						</div>
						<div class="menu-item-label" v-if="isShieldMenuON">
							<div class="label-item">
								<div class="item">JAVA</div>
								<div class="item">前端</div>
								<div class="item">JavaScript</div>
								<div class="item">NodeJs</div>
								<div class="item">IOS</div>
								<div class="label-item-confirm">
									确定屏蔽
								</div>
							</div>
						</div>
						<div class="menu-item" @click.stop="tipOff">
							<img class="menu-item-icon" src="../assets/icon/4.png" />
							<div class="menu-item-content">
								举报
							</div>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import myTool from '../utils/myTool'

export default {
	name: "List",
	data() {
		return {
			isCloseMenuON: false,
			isShieldMenuON: false,
			isShowCover: false,
			postlabelarr: [],
			keyword: [],
			closeId: 'close' + (Math.random() * 100000).toFixed(0),//想给元素赋一个独一无二的id，但是后续没有用上
		}
	},
	props: {
		authorname: {
			type: String,
			default: ""
		},
		date: {
			type: String,
			default: ""
		},
		tag: {
			type: String,
			default: ""
		},
		postid: {
			type: Number,
			default: 0
		},
		title: {
			type: String,
			default: ""
		},
		abstract: {
			type: String,
			default: ""
		},
		viewcount: {
			type: Number,
			default: 0
		},
		likecount: {
			type: Number,
			default: 0
		},
		comment: {
			type: Number,
			default: 0
		},
		coverimg: {
			type: String,
			default: ""
		},
		keywords: {
			type: String,
			default: ""
		},



	},
	computed: {
		menuitemarrow() {
			return this.isCloseMenuON ? require('../assets/icon/arrow-up.png') : require('../assets/icon/arrow-down.png')
		}
	},
	methods: {
		// 测试
		test() {
			console.log("test");
		},
		// 将后端关键词存为数组
		getKeyword() {
			this.keyword = this.keywords.split(",")
			// console.log(this.keyword)
		},
		// 解析数字和时间
		setNum(number) {
			return myTool.setNum(number)
		},
		setDate(date) {
			return myTool.setDate(date)
		},
		//是否展示封面
		isShowPhoto() {
			if (this.coverimg == 'null' || this.coverimg == '') {
				this.isShowCover = false
			} else {
				this.isShowCover = true
			}
		},
		//关闭按钮相关方法
		closeMenu() {
			window.addEventListener("click", e => {
				const iconEl = document.querySelector(`#${this.closeId}`);// 这里是要隐藏的弹窗 类名
				if (iconEl && !iconEl.contains(e.target)) {// contains 方法 就是查看包含关系  
					// contains 方法 本身含义：用于判断字符串中是否包含指定的字符或字符串
					//               返回值 :如果包含指定的字符或字符串返回 true，否则返回 false。
					this.isCloseMenuON = false; // flagChart 弹窗的开关
				}
			});
		},
		CloseMenuON() {
			this.isCloseMenuON === true ? this.isCloseMenuON = false : this.isCloseMenuON = true
		},
		ShieldMenuOn() {
			this.isShieldMenuON === true ? this.isShieldMenuON = false : this.isShieldMenuON = true
		},
		disincline(e) {
			// console.log(e.currentTarget.dataset.posterid);
			console.log('点击不感兴趣后，向后端发送this.userid与postid,postauthor')
		},
		shieldAuthor() {
			console.log('点击屏蔽作者后，向后端发送this.userid, postauthor')
		},
		tipOff() {
			console.log('点击举报后，向后端发送this.postid');
		},
		//点击文章相关方法
		intoAuthor() {
			console.log(`进入用户${this.authorname}主页`);
			this.$message({
				message: `进入用户${this.authorname}主页,暂未开放此功能`,
				duration: 500
			});
		},
		intoArticle() {
			console.log("打开文章");
			this.$router.push({
				path: '/article',
				query: {
					postid: this.postid
				}
			})
		},
		likeArticle() {
			console.log("点赞");
			this.$message({
				message: `给postid=${this.postid}点赞,暂未开放此功能`,
				duration: 500
			});
		},
		commentArticle() {
			console.log("评论文章");
			this.$message({
				message: `评论postid=${this.postid},暂未开放此功能`,
				duration: 500
			});
		}

	},
	created() {
		this.getKeyword()
		this.isShowPhoto()
	},
	mounted() {
		this.closeMenu()
	}
}
</script>

<style lang="less" scoped>
@graypro: #4e5969;
@gray: #86909c;
@black: #1d2129;

#list-container {
	// border: 1px solid #ccc;
	margin: 0 auto;

	a {
		text-decoration: none;

		&:link {
			text-decoration: none;
		}

		&:visited {
			text-decoration: none;
		}
	}

	ul {
		padding: 0;
		margin: 0;
	}

	.entry {
		// overflow: hidden;
		position: relative;
		// border: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border-bottom: 1px solid rgb(229, 229, 229);
		// min-width: 320PX;
		margin: 12px 20px 0;

		.meta-container {
			display: flex;
			// min-width: 320PX;
			align-items: center;

			.user-message {
				overflow: hidden;
				position: relative;
				// display: flex;
				flex-shrink: 1;
				max-width: 162px;
				align-items: center;
				line-height: 22px;
				color: @graypro;
				white-space: nowrap;
				font-size: 14px;
				margin-right: 8px;

			}

			.time {
				position: relative;
				line-height: 22px;
				white-space: nowrap;
				font-size: 14px;
				color: @gray;
				flex-shrink: 0;
				padding: 0 10px;

				&::before {
					content: "";
					position: absolute;
					top: 4px;
					left: 0;
					width: 1px;
					height: 14px;
					background-color: #ccc;
				}

				&::after {
					content: "";
					position: absolute;
					top: 4px;
					right: 0;
					width: 1px;
					height: 14px;
					background-color: #ccc;
				}
			}

			.tag-list {
				position: relative;
				display: flex;
				flex-shrink: 1;
				font-size: 14px;
				line-height: 22px;
				color: @gray;
				align-items: center;
				padding: 0 2px;


				a {
					flex-shrink: 1;
					position: relative;
					display: flex;
					// flex-shrink: 0;
					margin: 0 8px;

					&::after {
						content: "";
						position: absolute;
						right: -8px;
						top: 10px;
						width: 2px;
						height: 2px;
						border-radius: 50%;
						background-color: black;
					}
				}

				.isshowbot {

					// color: aqua;
					&::after {
						display: none;
					}
				}
			}

		}

		.content {
			display: flex;
			width: 100%;
			padding-bottom: 12px;
			margin-top: 10px;

			.content-main {
				flex: 1 1 auto;
				min-width: 80px;
				text-align: left;

				.action-list {
					display: flex;
					flex-shrink: 1;
					align-items: center;

					.item {
						display: flex;
						flex-shrink: 1;
						align-items: center;
						font-size: 14px;
						color: @graypro;
						margin-right: 20px;
					}

					.item i {
						width: 16px;
						height: 16px;
					}

					.item span {
						margin-left: 4px;
					}

					.item i img {
						width: 100%;
						height: 100%;
					}

					li {
						list-style: none;
					}


				}

				.content-title {
					margin-bottom: 8px;

					a {
						overflow: hidden;
						font-size: 16px;
						font-weight: 700;
						line-height: 24px;
						color: @black;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
					}
				}

				.abstract {
					margin-bottom: 10px;


					a {
						overflow: hidden;
						font-size: 13px;
						line-height: 22px;
						color: @gray;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
					}
				}
			}

			.content-img {
				border: 1px solod #ccc;
				flex: 0 0 auto;
				width: 120px;
				height: 80px;
				border-radius: 2px;
				margin-left: 24px;

			}
		}

		.close {
			// overflow: hidden;
			width: 12px;
			height: 12px;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 10;

			.close-icon {
				width: 100%;
				height: 100%;
			}

			.close-menu {
				width: 180px;
				position: absolute;
				right: 0;
				top: 100%;
				background-color: #fff;
				box-shadow: 0px 0px 15px #ccc;
				padding-bottom: 8px;


				.menu-item {
					position: relative;
					overflow: hidden;
					display: flex;
					align-items: center;
					padding: 8px 8px 0;
					font-size: 14px;
					line-height: 22px;
					white-space: nowrap;
					color: @black;

					.menu-item-icon,
					.menu-item-arrow {
						width: 12px;
						height: 12px;
						margin-right: 5px;
					}

					.menu-item-arrow {
						position: absolute;
						top: 50%;
						right: 0;
						transform: translate(-5px, 0);
						opacity: .5;
					}
				}

				.menu-item-label {
					.label-item {
						display: flex;
						flex-wrap: wrap;
						padding: 8px 8px 0;

						.item {
							padding: 5px;
							font-size: 10px;
							background-color: rgb(238, 238, 238);
							color: @black;
							border-radius: 3px;
							margin: 2px 2px;
						}

						.label-item-confirm {
							width: 100%;
							font-size: 14px;
							line-height: 24px;
							color: #fff;
							background-color: rgb(184, 184, 255);
							border-radius: 5px;
							margin: 5px 0 0;
						}
					}
				}
			}
		}
	}
}
</style>