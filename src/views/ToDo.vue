<template>
  <div class="container">
    <Main/>
  </div>
</template>

<script>

  import Main from '../components/app/main/main'

  export default {
      name: "ToDo",
      data: () => ({
         
      }),
      components: {
        Main
      },
      methods: {
       
      },
      mounted() {
       
      }
  }

</script>

<style scoped lang="scss">
  * {
    color: #41b883;
    list-style: none;
    font-size: 1rem;
    outline: none;
  }
  
  .container {
    min-height: 80vh;
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    font-size: 2rem;
    color: #00ff13b5;
  }
  
</style>
