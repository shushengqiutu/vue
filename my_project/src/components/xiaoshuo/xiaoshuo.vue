<template>
    <div>
        <!--<ul v-for=" item in list " >-->
            <!--<li>  书名<span> {{item.name}}</span></li>-->
            <!--<li> 作者 <span>{{item.author}}</span></li>-->
            <!--<li><img :src="item.image" alt=""></li>-->

        <!--</ul>-->

        <h2>xxx小说网</h2>
           <ul>
               <router-link tag="li" :to="{name:'Info',query:{id:0}}"
               v-for="item in list">
                   <div class="left"><img :src="item.image" alt=""></div>
                   <div class="right">
                       <h2> {{item.name}}</h2>
                       <p> {{item.author}}</p>
                        <p> {{item.id}}</p>
                   </div>
               </router-link>
           </ul>


    </div>
</template>

<script>
    import loading from './loading'
    export default {
        name: 'xiaoshuo',
        components:{
            loading
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                list:[]

            }
        },
        mounted(){
            this.$ajax.get("http://localhost:3033/api/list").then(
                (d)=>{
                    if(d.data.data.length>0){
                        this.list=d.data.data

                    }
                }
            ).catch((err)=>{
                console.log(err)
            })
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul>li{
        display: flex;
        padding: 0 10px;
        height: 150px;
        justify-content: space-around;
        margin: 10px 0;
    }
    .left{
        flex: 1;
        background: red;
    }
    .left>img{
        display: block;
        width: 100%;
        height: 150px;
    }
    .right{
        flex: 2;
        padding-left: 20px;
        padding-top: 10px;
        background: azure;
    }

</style>
