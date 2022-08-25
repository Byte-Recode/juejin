<template>
  <div class="outer">
    <div class="container">
      <!-- 掘金图标开始-->
      <div>
        <a href="javascript:;"><img src="@/assets/xitujuejin.png" alt="加载失败" /></a>
      </div>
      <!-- 掘金图标开始结束-->
      <!-- 导航部分开始 -->
      <nav>
        <h3 class="title">创作者中心</h3>
        <!-- 左侧导航列表部分结束 -->
        <!-- 右侧组件部分开始 -->
        <ul class="right">
          <!-- 会员开始 -->
          <li class="vip">
            <a href="javascript:;"><img src="@/assets/vip.png" alt="加载失败" /><span>会员</span></a>
          </li>
          <!-- 会员结束 -->
          <!-- 消息提醒开始 -->
          <li>
            <el-button size="mini" type="info" icon="el-icon-message-solid" circle></el-button>
          </li>
          <!-- 消息提醒结束 -->
          <!-- 头像开始 -->
          <li class="me">
            <img src="@/assets/touxiang.png" alt="加载失败" />
          </li>
          <!-- 头像结束 -->
        </ul>
        <!-- 右侧组件部分结束 -->
      </nav>
    </div>
    <div class="body">
      <div class="slebar">
        <div class="userImg">
          <img src="@/assets/touxiang.png" alt="" />
          <span>用户123456...</span>
        </div>
        <!-- 按钮 -->
        <el-button type="primary" class="writebtn" @click="editor">写文章</el-button>

        <!-- 选择导航栏 -->
        <div class="choose-outer">
          <div class="choose">
            <el-row class="tac">
              <el-col>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-s-cooperation"></i>
                      <span>内容管理</span>
                    </template>
                    <el-menu-item index="1-1">文章管理</el-menu-item>
                    <el-menu-item index="1-2">专栏管理</el-menu-item>
                    <el-menu-item index="1-3">沸点管理</el-menu-item>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-data-analysis"></i>
                      <span>数据中心</span>
                    </template>
                    <el-menu-item index="1-1">内容数据</el-menu-item>
                    <el-menu-item index="1-2">关注者数据</el-menu-item>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-star-on"></i>
                      <span>创作成长</span>
                    </template>
                    <el-menu-item index="1-1">创作等级权益</el-menu-item>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-s-flag"></i>
                      <span>活动中心</span>
                    </template>
                    <el-menu-item index="1-1">创作活动</el-menu-item>
                  </el-submenu>
                  <el-submenu index="6">
                    <template slot="title">
                      <i class="el-icon-question"></i>
                      <span>帮助中心</span>
                    </template>
                    <el-menu-item index="1-1">常见问题</el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="bodyRight">
        <!-- 创作活动 -->
        <div class="one">
          <div class="title1">
            <h3>创作活动</h3>
            <h4>查看更多<i class="el-icon-arrow-right"></i></h4>
          </div>
          <div class="carousel">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(item, index) in images" :key="index">
                <img :src="item.imgSrc" alt="">
                <!-- <h1>{{item.imgSrc}}</h1> -->
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 数据概览 -->
        <div class="two">
          <div class="title1">
            <h3>数据概览<i class="el-icon-question"></i></h3>
            <h4>查看更多<i class="el-icon-arrow-right"></i></h4>
          </div>
          <div class="data">
            <div v-for="(item, index) in dataList" :key="index" class="dataList">
              <div>
                <h4>{{ item.title }}</h4>
                <h1>{{ item.num }}</h1>
                <h5>较前日--</h5>
              </div>
            </div>
          </div>
        </div>
        <!-- 创作任务 -->
        <div class="three">
          <div class="title1">
            <h3>创作任务</h3>
          </div>
          <div class="content3">
            <div class="put">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article-icon.cb8af82.png"
                alt="" />
              <div>
                <h3>首次成功发布文章<a>(>400字)</a><i class="el-icon-question"></i></h3>
                <h4>奖励矿石<span>10000</span></h4>
              </div>
              <el-button type="primary" round class="finish">去完成</el-button>
            </div>
            <div class="put">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/pin-icon.c8ea3e1.png" alt="" />
              <div>
                <h3>首次成功发布沸点<i class="el-icon-question"></i></h3>
                <h4>奖励矿石<span>5000</span></h4>
              </div>
              <el-button type="primary" round class="finish">去完成</el-button>
            </div>
          </div>
        </div>
        <!-- 近期发布 -->
        <div class="four">
          <div class="title1">
            <h3>近期发布<i class="el-icon-question"></i></h3>
          </div>
          <el-button-group>
            <el-button class="btn1">文章</el-button>
            <el-button class="btn2">沸点</el-button>
          </el-button-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: "总关注者数",
          num: 0,
        },
        {
          title: "文章展现数",
          num: 0,
        },
        {
          title: "文章阅读数",
          num: 0,
        },
        {
          title: "文章点赞数",
          num: 0,
        },
        {
          title: "文章评论数",
          num: 0,
        },
        {
          title: "文章收藏数",
          num: 0,
        },
      ],
      images: [
        {
          imgSrc: "http://qt.guetwhj.top/JueJin/juejin01.jpg"
        },
        {
          imgSrc: "http://qt.guetwhj.top/JueJin/juejin02.jpg"
        },
        {
          imgSrc: "http://qt.guetwhj.top/JueJin/juejin03.png"
        },
        {
          imgSrc: "http://qt.guetwhj.top/JueJin/juejin04.png"
        },
      ]
    };
  },
  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    editor() {
      const url = this.$router.resolve({
        path: '/editor',
        query: {
          username: '掘金用户XXX',
          userid: 3
        }
      })
      window.open(url.href, '_blank');
    }
  }
};
</script>

<style lang="less" scoped>
.outer {
  border-bottom: 1px solid #efeded;

  .container {
    z-index: 10;
    position: fixed;
    display: flex;
    top: 0px;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;
    background-color: #ffffff;
    height: 60px;
    border-bottom: 1px solid #efeded;

    div {
      margin-left: 12px;
      margin-right: 22px;
      width: 100px;

      a {
        img {
          margin: 0 auto;
          margin-top: 16px;
          width: 100px;
          margin-left: 10px;
        }
      }
    }

    nav {
      display: flex;
      justify-content: space-between;
      flex: 9;

      .top-nav {
        display: flex;
        background: #ffffff;

        li {
          display: flex;
          justify-content: space-between;
          text-align: center;
          width: 48px;
          height: 54px;

          a {
            height: 54px;
            display: block;
            line-height: 53px;
            font-size: 13px;
          }

          &:hover a {
            color: #333333;
            border-bottom: 2px solid rgb(56, 113, 247);
          }

          .active {
            color: rgb(56, 113, 247);
          }
        }

        .others {
          display: flex;

          li {
            a {
              border: none;
            }
          }
        }
      }

      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;

        >ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 5;

          >.search {
            width: 260px;
            margin-right: 0;
          }

          >.scrollMenu {
            width: 130px;
            margin-right: 0;
          }
        }

        >li {
          margin: 0 10px;
        }

        .vip {
          display: flex;
          justify-content: space-between;
          align-items: center;

          >a {
            display: flex;
            align-items: center;
            height: 24px;
            line-height: 24px;

            img {
              width: 24px;
              height: 24px;
              margin-right: 3px;
            }
          }
        }

        .me {
          img {
            width: 36px;
            height: 36px;
            border-radius: 50px;
            margin-right: 15px;
          }
        }
      }
    }
  }
}

.title {
  line-height: 60px;
  font-weight: 400;
  color: #1d7dfa;
  margin-left: 10px;
}

// 创作者中心主要内容

// 左侧
.slebar {
  overflow: hidden;
  position: fixed;
  width: 200px;
  height: calc(100% - 200px);
  top: 80px;
  margin-left: 80px;
  background-color: #ffffff;
}

.bodyRight {
  width: 900px;
  margin-left: 310px;
  height: 1200px;
  margin-top: 80px;
}

// 左侧内容头像区

.slebar .userImg {
  margin-top: 20px;
  height: 80px;
}

.slebar .userImg img {
  float: left;
  width: 50px;
  height: 50px;
  margin-left: 15px;
  border-radius: 25px;
}

.slebar .userImg span {
  display: block;
  height: 80px;
  line-height: 50px;
  text-align: center;
}

// 写文章按钮
.slebar .writebtn {
  width: 180px;
  margin-left: 10px;
  height: 35px;
  line-height: 12px;
}

// 选择导航栏
.choose-outer {
  width: 190px;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.choose {
  position: absolute;
  left: 0;
  top: 0;
  right: -17px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
  width: 210px;
  margin-left: 5px;
}

// 走马灯
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// 内容右边部分--第一部分
.one {
  height: 410px;
  background-color: #ffffff;

  .carousel {
    // z-index: 0;

    img {
      // z-index: -1
    }
  }
}

.title1 {
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.title1 h3 {
  font-weight: 400;
  margin-left: 10px;
  line-height: 50px;
}

.title1 h4 {
  font-weight: 400;
  margin-right: 10px;
  line-height: 50px;
  color: #99a9bf;
}

.one .carousel {
  width: 95%;
  margin: 20px auto;
  height: 10px;
}

.carousel img {
  width: 100%;
  height: 100%;
}

// 第二部分
.two {
  margin-top: 20px;
  height: 320px;
  background-color: #ffffff;
}

.data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.data .dataList {
  width: 31%;
  height: 110px;
  background-color: #f7f8fa;
  margin: 5px;
  margin-top: 10px;
  border-radius: 2px;
}

.dataList div {
  margin-top: 15px;
  margin-left: 15px;
}

.dataList div h4,
h5 {
  font-weight: 400;
}

// 第三部分
.three {
  margin-top: 20px;
  height: 180px;
  background-color: #ffffff;
}

.content3 {
  display: flex;
  justify-content: space-around;
}

.content3 .put {
  width: 47%;
  height: 80px;
  margin-top: 20px;
  border: 1px solid #d3dce6;
  border-radius: 3px;
}

.content3 .put img {
  height: 40px;
  width: 40px;
}

.put {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.put .finish {
  height: 30px;
  width: 90px;
  line-height: 5px;
}

.put h4,
h3 {
  font-weight: 400;
}

.put span {
  margin-left: 5px;
  color: #1d7dfa;
}

// 第四部分
.four {
  margin-top: 20px;
  height: 160px;
  background-color: #ffffff;
}

.four .btn1 {
  margin-top: 30px;
  margin-left: 30px;
  height: 30px;
  line-height: 6px;
  color: #1d7dfa;
}

.four .btn2 {
  margin-top: 30px;
  height: 30px;
  line-height: 6px;
  color: #333333;
}


//修改
.el-menu-vertical-demo {
  span {}
}
</style>
