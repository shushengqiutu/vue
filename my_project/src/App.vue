<template>
    <div id="app" class="container">

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
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
