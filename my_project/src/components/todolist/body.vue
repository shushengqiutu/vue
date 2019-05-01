<template>
   <div class="v-body">
       <h2>任务列表</h2>
       <button class="mr20"  @click="changeType('all')">全部</button>
       <button class="mr20"  @click="changeType('down')">已完成</button>
       <button class="mr20"  @click="changeType('undown')">未完成</button>

       <ul>
           <todolistItem :data="list" @changeselect="changeSelect"></todolistItem>
       </ul>

       {{this.list}}
   </div>
</template>

<script>
    import todolistItem from '@/components/todolist/todolistitem'
    export default {
        name: 'todolistbody',
        components:{
            todolistItem
        },
        data () {
            return {
                list:[]
            }
        },
        computed:{
           undown(){
               var list = this.listTest;
               var data = list.filter((item)=>{
                   return item.status === 0
               });
               return data;
           },
           down(){
                var list = this.listTest;
                var data = list.filter((item)=>{
                    return item.status === 1
                });
                return data;
            },
            all(){
              return this.listTest;
            }
        },
        props:["listTest"],
        mounted(){
            this.list = this.listTest;
        },
        methods:{
            changeSelect:function (item) {
                console.log(item);
                this.$emit('selectChange',item)
            },
            changeType:function (type) {
                this.list = this[type]
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v-body{
      padding-left: 100px;
  }
  .v-body h3 {
      height: 50px;
      margin: 5px 0;
      background-color: transparent;
      line-height: 50px;
      color: #666;
      font-size: 16px;

  }
 .mr20{
     margin:10px 20px;
     padding: 6px;
 }

</style>
