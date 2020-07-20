<template>
  <div class="app-main-layout">
    <header>
      <Header/>
    </header>
    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
  import Header from "../components/app/Header";

  export default {
      name: "main-layout",
      components: {Header}
  }

</script>

<style scoped lang="scss">

  header {
    background-color: #06200042;
    box-shadow: 1px 0 2px 0 #00c787;
  }

  .app-main-layout {
    background-color: #003227;
    min-height: 100vh;
  }

  .app-page {
    min-height: 80vh;
    position: relative;
  }

</style>
