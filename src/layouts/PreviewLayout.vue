<template>
  <div class="app-preview-layout">
    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>


<script>
  export default {
  
  }
</script>


<style scoped lang="scss">
  .app-preview-layout {
    background-color: #003227;
    min-height: 100vh;
  }

  .app-page {
    min-height: 80vh;
    position: relative;
  }
</style>