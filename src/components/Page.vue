<template>
    <div class="page">
        <div class="page-num page-select">
            1
        </div>
        <div class="page-num">
            2
        </div>
        <div class="page-next">
            <i class="fa fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Article',
};
</script>

<style scoped lang="scss">
    .page{
        width: 100%;
        height: 32px;
        margin-bottom: 90px;
        border-top: 1px solid rgb(238,238,238);
        display: flex;
        margin-top: 120px;
        .page-num{
            width: 9px;
            height: 29px;
            margin: 0 10px;
            padding: 0 10px;
            color: #000;
            line-height: 29px;
            border-top-color: #ccc;
        }
        .page-select{
            color: #fff;
            background: #ccc;
        }
        .page-next{
            width: 9px;
            height: 29px;
            margin: 0 10px;
            padding: 0 10px;
            color: #000;
            line-height: 29px;
        }
    }
</style>
