<template>
    <div class="article-info">
      <div class="article-info-header">
        <div class="article-info-title">
          <h1>Mac 下的定时任务工具：Launchctl{{this.$route.params.article_id}}</h1>
        </div>
        <div class="article-meta">
          <span>
            <i class="fa fa-calendar-o"></i>
            <span>2017-03-07</span>
          </span>
            <span class="article-meta-divider">|</span>
            <span>
            <i class="fa  fa-calendar-check-o"></i>
            <span>2017-03-07</span>
          </span>
            <span class="article-meta-divider">|</span>
            <span>
            <i class="fa fa-folder-o"></i>
            <span>工具</span>
          </span>
            <span class="article-meta-divider">|</span>
            <span>
            <i class="fa fa-file-word-o"></i>
            <span>1,3434</span>
          </span>
        </div>
      </div>
      <pre v-highlightjs v-html="msg" style="text-align: left"></pre>
    </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  data() {
    return {
      msg: "<span>123123123</span><code class='php'>echo 'hello world'; </code><div>123123123</div>",
    };
  },
};
</script>

<style scoped lang="scss">
  .article-info{
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    width: 70%;
    box-shadow:0 0 5px rgba(202,203,203,0.5);
    margin: 80px auto;
    height: 1000px;
    padding: 25px;
    .article-info-header{
      margin-top: 20px;
      .article-info-title{
        margin-bottom: 10px;
        h1{
          font-size: 26px;
          font-weight: 400;
        }
      }
    }
    .article-meta{
      color: #999;
      text-align: center;
      font-size: 12px;
      margin-top: 15px;
      margin-bottom: 60px;
      width: 100%;
      i{
        margin-right: 3px;
      }
      .article-meta-divider{
        margin: 0 1em;
      }
    }
  }
</style>
