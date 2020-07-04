<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

  import MainLayout from "./layouts/MainLayout";

  export default {
      computed: {
          layout() {
              let layout = this.$route.meta.layout

              if (layout) return layout + '-layout'
          }
      },
      components: {
          MainLayout
      }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, sans-serif;
  }

  .d_flex {
    display: flex;
  }

  .j_c_s-a {
    justify-content: space-around;
  }

  .full {
    width: 70%;
  }

  .container {
    width: 100%;
    padding: 20px 10%;
  }

  .task {
    display: grid;
    grid-template-columns: 0.5fr 2fr 2fr 0.5fr;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
    border: 1px solid;
    border-radius: 10px;
    .task_check {
      height: 20px;
      justify-self: center;
      align-self: center;
      input {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    .task_text {
      color: #FF5722;
      justify-self: center;
      align-self: center;
    }
    .data_create_task {
      justify-self: center;
      align-self: center;
      color: #01ffac;
    }
    .task_delete {
      background: #003227;
      border: none;
      cursor: pointer;
      justify-self: center;
      align-self: center;
      i {
        color: rgb(255, 19, 0);
      }
    }
    .disabled {
      cursor: default;
      i {
        color: #f44336d1;
      }
    }
    .ready {
      text-decoration: line-through;
    }
  }
</style>

