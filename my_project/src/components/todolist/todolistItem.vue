<template>
    <div class="v-body">
        <li v-for="(item,index) in data" :key="item.text">
            <input type="checkbox" :checked="item.status===1" @change="changeCheckbox(item)">
            <span> {{item.text}}</span>  <span> {{item.createAt}}</span><a href=""> delete</a>
            <p>index {{index}}</p>

        </li>
    </div>
</template>

<script>
    export default {
        name: 'todolistitem',
        data () {
            return {

            }
        },
        methods:{
            changeCheckbox(item){
                console.log(item);
                this.$emit('changeselect',item)
            }
        },

        props:["data"]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .v-body{
        padding-left: 100px;
    }
    .v-body h3{
        height: 50px;
        margin: 5px 0;
        background-color: transparent;
        line-height: 50px;
        color: #666;
        font-size: 16px;

    }

</style>
