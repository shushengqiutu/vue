/**
* @file
* @Author: daijiulong
* @Date:   2019/5/3
*/
import Vue from "vue"
import Vuex from "vuex"
import  axios from 'axios'


Vue.prototype.$ajax= axios
Vue.use(Vuex)
const vue22=new Vue();


let url = 'http://localhost:3033/api/';

function getData() {
    return vue22.$ajax.get(url+'getlist')
}

function addData(user) {
    return vue22.$ajax.get(url+'addlist',{
        params:{
            item:user
        }
    })
}


export default  new Vuex.Store({
    state:{
        list:[],
        num:1
    },
    mutations:{
        addList(state,user){
            console.log(state,user);
            state.list.push(user)
        },
        removeList(state,item){

            var index = state.list.findIndex((data)=>{
                return item == data
            });

            state.list.splice(index,1)

            // state.list.forEach((i,index)=>{
            //      if(i===item){
            //          state.list.splice(index,1)
            //      }
            // })
        },
        changeStatus(state,item){
            var index = state.list.findIndex((data)=>{
               return item == data
            });
            state.list[index].status = state.list[index].status ==='2'?'1':'2';


        },
        getList(state,list){
            state.list=list
        }

    },
    actions:{
        getAll(context){
            return getData().then(d=>{
                context.commit('getList',d.data.data)
            })
        },
        addData(context,user){
            return addData(user).then(d=>{
                context.commit('addList',user)
            })
        }
    },
    getters:{
        done:function (state) {
            return state.list.filter((item)=>{return item.status === '2'})
        },
        undone:function (state) {
            return state.list.filter((item)=>{return item.status === '1'})
        }

    }

});

