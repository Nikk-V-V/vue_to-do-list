<template>

  <div class="container">
    <div class="logo">
      <div class="img-logo">
        <img src="../../assets/img/logo.png" alt="logo">
      </div>
      <div class="text-logo">
        Vue-ToDo-List
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
  .logo {
    display: flex;
    justify-content: center;
    align-content: center;
    .img-logo {
      width: 50px;
      height: 50px;
      img {
        max-width: 100%;
      }
    }
    .text-logo {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0 20px;
      color: #43ff8e8c;
    }
  }

</style>
