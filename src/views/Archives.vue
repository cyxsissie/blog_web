<template>
    <div class="archive">
        <div class="archive-title">
            <div class="archive-move-on"></div>
            <span class="archive-title-on">Um..! 目前共计 13 篇日志， 继续努力。</span>
        </div>
        <div class="archive-info">
            <div class="archive-info-title">
                <div class="archive-move-info-on"></div>
                <h1>2019</h1>
            </div>
            <div class="archive-info-body">
                <div class="archive-info-body-box">
                    <div class="archive-move-body-on"></div>
                    <span class="archive-body-time">03-27</span>
                    <span class="archive-body-title">Mac 下的定时任务工具：Launchctl</span>
                </div>
            </div>
            <div class="archive-info-body">
                <div class="archive-info-body-box">
                    <div class="archive-move-body-on"></div>
                    <span class="archive-body-time">03-27</span>
                    <span class="archive-body-title">Mac 下的定时任务工具：Launchctl</span>
                </div>
            </div>
        </div>
        <div class="archive-info">
            <div class="archive-info-title">
                <div class="archive-move-info-on"></div>
                <h1>2019</h1>
            </div>
            <div class="archive-info-body">
                <div class="archive-info-body-box">
                    <div class="archive-move-body-on"></div>
                    <span class="archive-body-time">03-27</span>
                    <span class="archive-body-title">Mac 下的定时任务工具：Launchctl</span>
                </div>
            </div>
            <div class="archive-info-body">
                <div class="archive-info-body-box">
                    <div class="archive-move-body-on"></div>
                    <span class="archive-body-time">03-27</span>
                    <span class="archive-body-title">Mac 下的定时任务工具：Launchctl</span>
                </div>
            </div>
            <div class="archive-info-body">
                <div class="archive-info-body-box">
                    <div class="archive-move-body-on"></div>
                    <span class="archive-body-time">03-27</span>
                    <span class="archive-body-title">Mac 下的定时任务工具：Launchctl</span>
                </div>
            </div>
        </div>
        <Page/>
    </div>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'Archives',
  components: {
    Page,
  },
};
</script>

<style scoped lang="scss">
    .archive{
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 15px;
        line-height: 2;
        color: #555;
        width: 70%;
        margin:90px auto 120px auto ;
        border-left:5px solid rgb(245,245,245) ;
        .archive-move-on{
            width: 10px;
            height: 10px;
            background: rgb(170,170,170);
            border-radius: 50%;
            margin-left: -7px;
        }
        .archive-title-on{
            float: left;
            margin-top: -18px;
            margin-left: 18px;
        }
        .archive-info{
            .archive-info-title{
                margin-top: 90px;
                font-size: 22px;
                margin-bottom: 90px;
                .archive-move-info-on{
                    width: 8px;
                    height: 8px;
                    background: rgb(170,170,170);
                    border-radius: 50%;
                    margin-left: -7px;
                }
                h1{
                    font-weight: bold;
                    line-height: 1.5;
                    text-align: left;
                    margin-top: -18px;
                    margin-left: 18px;
                }
            }
            .archive-info-body{
                height: 63px;
                box-shadow:0 0 5px rgba(202,203,203,0.5);
                padding: 25px;
                margin-bottom: 30px;
                .archive-info-body-box{
                    height: 35px;
                    margin-top: 25px;
                    text-align: left;
                    border-bottom: 1px dashed rgb(170,170,170);
                    .archive-move-body-on{
                        width: 6px;
                        height: 6px;
                        background: rgb(170,170,170);
                        border-radius: 50%;
                        margin-left: 6px;
                    }
                    .archive-body-time{
                        color: #555;
                        font-size: 12px;
                        margin-left: 25px;
                        margin-right: 15px;
                        position: relative;
                        bottom:23px;
                    }
                    .archive-body-title{
                        color: #555;
                        font-size: 18px;
                        margin-left: 25px;
                        margin-right: 15px;
                        position: relative;
                        bottom:23px;
                    }
                }

            }
        }

    }

</style>
