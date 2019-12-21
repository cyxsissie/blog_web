<template>
    <div class="Tag" >
        <div class="tag-top">
            <H2>Tags</H2>
        </div>
        <div class="tag-content">
            <span>目前共23个标签</span>
        </div>
        <div class="tag-bottom">
            <a @mouseover="addChange" @mouseout="outChange">java</a>
            <a CLASS="tag-a-bold">golang</a>
            <a>php</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tag',
  methods: {
    addChange(e) {
      e.target.style.borderBottom = '1px solid #000';
    },
    outChange(e) {
      e.target.style.borderBottom = '1px solid #ccc';
    },
  },
};
</script>

<style scoped lang="scss">
    .Tag{
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 15px;
        line-height: 2;
        color: #555;
        width: 70%;
        margin:90px auto 120px auto ;
        .tag-top{
            text-align: left;
            font-size: 25px;
        }
        .tag-content{
            text-align: center;
            span{
                font-size: 15px;
            }
        }
        .tag-bottom{
            padding: 15px;
            font-size: 12px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:center;

            a{
                border-bottom: 1px solid #ccc;
                margin-top: 15px;
                margin-right: 13px;
                margin-left: 13px;
                height: 25px;

            }
            .tag-a-bold{
                font-size: 30px;
                color: #111;
                height: 58px;
                margin-top: -8px;
            }

        }
    }
</style>
