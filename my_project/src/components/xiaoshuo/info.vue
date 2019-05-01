<template>
    <div >
            <div v-if="loading">
                <v-loading></v-loading>
            </div>
           <div v-if="!loading" v-for=" (item,index) in list">
               <div class="center">
                   <p > 第{{getCap(index)}}章</p>
                   <h3> {{item.name}}</h3>
               </div>
               <div v-html="item.content">

               </div>
           </div>

        <button @click="onscroll">查看更多{{ this.capter }}</button>


    </div>
</template>

<script>
    import loading from './loading';

    export default {
        name: 'Info',
        components:{
            'v-loading':loading
        },
        data () {
            return {
                list:[],
                index:0,
                loading: true,
                capter:0,
            }
        },
        computed:{

        },
        mounted(){
              var id=this.$route.query.id;
              this.getData(id);

              let before = new Date().getTime();
              this.getData(id,0).then(d=>{

                  let date = new Date().getTime();
                  this.list = d.data.data;

                  this.capter = this.list[this.list.length-1].capter;

                  if (date-before < 1000){
                      setTimeout(()=>{
                         this.loading =false ;
                      },1000-(date-before))
                  }
              });
        },
        methods:{

            onscroll(){
                var id=this.$route.query.id;
                this.getData(id,this.capter).then(data=>{
                    console.log(data);
                    this.list= this.list.concat(data.data.data);
                    this.loading =false;


                    this.capter = this.list[this.list.length-1].capter;
                })
            },
            getCap(index){
                let cap=['一','二','三','四','五'];
                return cap[index]
            },
            getData(id,cap){
                this.loading = true;
                var str=" http://localhost:3033/api/id";
                return this.$ajax.get(str,{
                    params:{
                        id:id,
                        cap:cap
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center{
    text-align: center;
}



</style>å
