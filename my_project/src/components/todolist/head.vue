<template>
   <div class="head">
        <h1> 任务计划列表</h1>
         <p> 添加任务：</p>
         <div class="inp">
             <input  type="text" v-model="inputValue" :placeholder="placeholder" @keyup.enter="checkVal">
         </div>
       <v-body :listTest="msg" @selectChange="selectChange"></v-body>
   </div>
</template>

<script>
    import body from '@/components/todolist/body'

    export default {
        name: 'home',
        data () {
            return {
                placeholder:"请输入你要添加的任务",
                inputValue:'',
                msg:[]
            }
        },
        components:{
            'v-body':body
        },
        created(){
            var data = localStorage.getItem('item');
            if (data && JSON.parse(data)){
                this.msg = JSON.parse(data)
            }
        },
        mounted(){

        },
        methods:{
            inputEnd:function () {

                console.log(this.inputValue);
                var oDate = new Date();
                this.msg.push({
                    text:this.inputValue,
                    createAt: this.formatTime(oDate),
                    status:0
                });

                this.inputValue="";
                localStorage.setItem('item',JSON.stringify(this.msg));
            },
            formatTime:function (time) {
                var y = time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                return y+'-'+m+'-'+d
            },
            checkVal:function () {
                 var flag=true
                 var len=this.msg.length
                if(this.inputValue.length===0){
                    alert("你还没输入")
                    return
                }
                for(var i=0;i<len;i++){
                    if(this.msg[i].text===this.inputValue){
                        flag=false
                        break
                    }
                }

                if(flag){
                    this.inputEnd()
                }else{
                    this.inputValue=""

                    alert("你输入的任务已经存在")
                }

            },
            selectChange:function (val) {
               var index= this.msg.indexOf(val)

                 this.msg[index].status = (this.msg[index].status ===0?1:0)
                 localStorage.setItem('item',JSON.stringify(this.msg));

            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{
        color: #fff;
        background: #f30;
        text-align: center;
        line-height: 60px;
        height: 60px;
        font-size: 20px;
    }
    .head p{
        height: 50px;
        margin: 10px 0;
        padding-left: 100px;
        color: red;
        background: antiquewhite;
        line-height: 50px;


    }
    .head >.inp{
        padding-left: 100px;
        font-size: 18px;
    }
    .head >.inp >input{
        height: 38px;
        width: 800px;
        border:1px solid #ddd;
        padding-left: 8px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .head >.inp >input:focus{
        outline: none;
        border:1px solid #f00;
        box-sizing: content-box;
    }
</style>
