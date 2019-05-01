<template>
 <div >
     <router-link tag="a" to="/todolist"> todolist</router-link>
     <router-link  tag="a" to="/xiaoshuo"> xiaoshuo</router-link>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


a{    padding: 10px;
      color: #333;
      font-size: 18px;
      text-align: center;
    background: aliceblue;
    margin: 10px 30px;
  }
a:hover{
    color: #fff;
    background-color: #f40;
}

</style>å
