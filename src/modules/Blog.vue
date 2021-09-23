<template>
  <div class="hello">
    
    Hellow this is blog

    <div @click="onDivClicked">
      Click Me
    </div>

    <router-link to="/home">Go to Home</router-link>
    <post></post>
     <post></post>
      <post></post>
       <post></post>



  </div>
</template>

<script>

        import Post from "./Post";

      export default {
        name: 'HelloWorld',
        components : {
          Post
        },
        props: {
        },
        data: () => ({
        }),
        computed: {
        },
        filters: {
        },
        created : function () {
        },
        methods: {
          onDivClicked : function(){

          }
        }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
