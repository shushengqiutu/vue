<template>
    <div id="app" class="container">
        <router-view/>
        <hr>
        <ul>
            <li v-for=" (item,index) in done"
                :key="Math.random()"

            >
                <input type="checkbox" :checked="item.status==2">
                <span> {{item.name}} </span>
                <a href="javascript:void(0)"> delete</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'App',
        data(){
            return {

            }
        },
        computed:{
            ...mapGetters(['done'])
        },
        mounted(){
            this.$store.dispatch("getAll")
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;

    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;

    }

    a {
        text-decoration: none;
    }


    .container{
        width: 900px;
        margin:30px auto;
    }


</style>
