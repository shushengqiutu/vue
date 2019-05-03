<template>
    <div class="vuex">
        <h1> todolist</h1>
        <p> name:<input type="text" v-model="user.name"></p>
        <p> task:<input type="text" v-model="user.test"></p>
        <p>
            <button @click="add"> 快速提交</button>
        </p>
        <div>
            <h2> 未完成 <span> num</span></h2>
            <ul>
                <li v-for=" (item,index) in undone"
                    :key="Math.random()"

                >
                    <input type="checkbox" :checked="item.status==2" @change="changeSelect(item)">
                    <span> {{item.name}} </span>
                    <a href="javascript:void(0)" @click="remove(item)"> delete</a>
                </li>
            </ul>
        </div>
        <div>
            <h2> 已经完成 <span> num</span></h2>
            <ul>
                <li
                        v-for=" item in done "
                        :key=" Math.random()"

                ><input type="checkbox" :checked="item.status==2" @change="changeSelect(item)">
                    <span> {{item.name}}</span>
                    <a href="javascript:void(0)" @click="remove(item)"> delete</a></li>
            </ul>
        </div>


        <hr>

    </div>

</template>
<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Vuex",
        data() {
            return {
                user:{
                    name:'',
                    test:''
                },
                list: this.$store.state.list
            }
        },
        computed: {
            ...mapGetters(['done','undone']),

        },
        methods:{
            ...mapActions(['addData']),
            add:function () {
                 let user = {
                     name:this.user.name,
                     test:this.user.test,
                     status:'1',
                     time:new Date().getFullYear()+'-'+new Date().getMonth()
                 };
                this.addData(user)
                //  this.$store.dispatch('addData',user);
            },

            remove(item){
                this.$store.commit("removeList",item)
            },
            changeSelect(item){
                this.$store.commit('changeStatus',item)
            }
        }


    }


</script>
<style scoped>
    h1 {
        width: 100%;
        text-align: center;
        line-height: 50px;
    }

</style>
