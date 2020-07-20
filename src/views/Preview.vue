<template>
  <div class="preview-store">
    <div class="hello-text">
      День починається з планування&#128293;
    </div>
    <router-link to='/toDo' class="btn">
      Спланувати
    </router-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false
    }),
    methods: {

    },
    mounted() {
  
    }
  }
</script>

<style lang="scss">
  * {
    text-decoration: none;
  }
  .preview-store {
    height: 100vh;
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hello-text {
    font-size: 1.5rem;
    color:  #fde900;
    transition: all 3s ease-in;
  }

  .btn {
    margin: 5rem auto;
    width: 200px;
    height: 50px;
    padding: 1rem;
    background-color: black;
    border-radius: 15px;
    border: 1px solid #715700;
    box-shadow: -1px -1px 1px #ff00007a;
    cursor: pointer;
    color: #ffdf03;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // animation: button 4s ease-in;
    &:active {
      top: 10px;
      color: green;
    }
  }


  @keyframes button {
    0% {
      color: rgba($color: #000000, $alpha: 1.0);
    }

  }

</style>