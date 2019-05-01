<template>
    <div class="loading">
        <img src="http://img2.bdstatic.com/static/searchresult/img/loading_circle_40b82ef.gif" alt="">
        <span>加载中...</span>
    </div>
</template>
<script>
    export default {
        name:'loading',
        data(){
            return {

            }
        }
    }
</script>
<style>
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        min-height: 300px;
        color: #666;
        font-size: 20px;
    }

    .loading img{
        width: 80px;
        height: 80px;
    }

</style>
