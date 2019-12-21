<template>
  <div class="article-lists">
    <article @click="RouterTo(2222)">
      <header>
        Mac 下的定时任务工具：Launchctl
      </header>
      <div class="article-meta">
        <span>
          <i class="fa fa-calendar-o"></i>
          <span>发表于 2017-03-07</span>
        </span>
        <span class="article-meta-divider">|</span>
        <span>
          <i class="fa  fa-calendar-check-o"></i>
          <span>更新于 2017-03-07</span>
        </span>
        <span class="article-meta-divider">|</span>
        <span>
          <i class="fa fa-folder-o"></i>
          <span>分类于 工具</span>
        </span>
        <span class="article-meta-divider">|</span>
        <span>
          <i class="fa fa-file-word-o"></i>
          <span>字数统计 1,3434</span>
        </span>
      </div>
      <div class="article-info">
        <div class="article-context">
          Launchctl 的介绍Launchctl 是 Mac 系统自带的定时任务工具，与 crontab 功能类似。
          Launchctl 的使用以简单的例子展示如何使用 Launchctl，
          比如现有一个位于 /Users/rundouble/Desktop 目录的 run.sh 脚本，脚本内容如下： ...
        </div>
        <div class="article-read-all">
          阅读全文 »
        </div>
      </div>
    </article>
    <Page/>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'Article',
  data() {
    return {
      id: 12,
    };
  },
  components: {
    Page,
  },
  methods: {
    RouterTo(id) {
      this.$router.push({ name: 'ArticleInfo', params: { article_id: id } });
    },
    outChange(e) {
      e.target.style.borderBottom = '1px solid #ccc';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-lists{
  width: 70%;
  margin: 0 auto;
  article{
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    height: 232px;
    padding: 25px;
    margin-top: 80px;
    box-shadow:0 0 5px rgba(202,203,203,0.5);
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    header{
      font-size: 26px;
      font-weight: 400;
      color: #555;
      float: left;
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: left;
    }
    .article-meta{
      color: #999;
      text-align: left;
      font-size: 12px;
      margin-top: 7px;
      margin-bottom: 20px;
      width: 100%;
      i{
        margin-right: 3px;
      }
      .article-meta-divider{
        margin: 0 1em;
      }
    }
    .article-info{
      margin-top: 20px;
      .article-context{
        text-align: left;
        font-size: 15px;
        line-height: 2;
        color: #555;
      }
      .article-read-all{
        color: #555;
        font-size: 13px;
        background: transparent;
        border-radius: 0;
        line-height: 2;
        margin-top: 20px;
        text-align: left;
        border-bottom: 2px solid rgb(102,102,102);
        width: 69px;
        height: 30px;
      }
    }
  }
}
</style>
