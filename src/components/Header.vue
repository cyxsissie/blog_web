<template>
  <div id="header">
    <div class="header-inner">
      <div class="log-box">
        <a href="/" class="brand">
          <div class="before-log-line">
            <i></i>
          </div>
          <div class="log-title">Chen's Blog</div>
          <div  class="after-log-line">
            <i></i>
          </div>
        </a>

      </div>
      <div class="right-nav">
        <div class="nav-lists">
          <div class="nav-box">
            <router-link  @mouseover.native="addChange" @mouseout.native="outChange"
                          to="/" class="nav-tag">
              <i class="fa fa-home"></i>
              <span>主页</span>
            </router-link>
            <router-link  @mouseover.native="addChange" @mouseout.native="outChange" to="/archives"
                          class="nav-tag">
              <i class="fa fa-archive"></i>
              <span>归档</span>
            </router-link>
            <router-link  @mouseover.native="addChange" @mouseout.native="outChange"
                          to="/tag" class="nav-tag">
              <i class="fa fa-tag"></i>
              <span>标签</span>
            </router-link>
            <router-link  @mouseover.native="addChange" @mouseout.native="outChange"
                          to="/about" class="nav-tag">
              <i class="fa fa-user"></i>
              <span>关于</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    addChange(e) {
      e.currentTarget.style.background = 'rgb(225,225,225)';
    },
    outChange(e) {
      e.currentTarget.style.background = 'rgb(245,245,245)';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  height: 92px;
  background-color: rgb(245,245,245);
  .header-inner{
    width: 70%;
    margin: 0 auto;
    .log-box{
      height: 92px;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content:center;
      .brand{
        .before-log-line{
          width: 100%;
          i{
            width: 70%;
            display: block;
            height: 2px;
            background-color: black;
          }
        }
        .log-title{
          font-size: 24px;
          color: black;
          margin: 6px 0px 6px -30px;
        }
        .after-log-line{
          width: 100%;
          i{
            width: 70%;
            display: block;
            height: 2px;
            background-color: black;
          }
        }
      }
    }
    .right-nav{
      height: 92px;
      width: 380px;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content:center;
      .nav-lists{
        width: 100%;
        .nav-tag{
          color: #555;
          font-size: 13px;
          font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
          padding: 10px 15px;
          span{
            margin-left: 0px;
          }
        }
      }
    }
  }
}

</style>
