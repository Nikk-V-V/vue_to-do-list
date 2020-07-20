<template>
  <div class="add-task">
    <label>
      <input 
        v-model="text" :key-up="validInput(text)" type="text"
      >
    </label>
    <button 
        @click="create(text)" 
        :class="{disabled_create: !valid}" 
        :disabled="!valid"
      >
        <i class="fas fa-plus-circle"></i>
    </button>
  </div> 
</template>

<script>

  

  export default {
    name: "addTask",
    data: () => ({
      text: "",
      valid: false,
    }),
    components: {
      
    },
    methods: {
      validInput(text) {
        this.valid = text.trim() !== '';
      },
      create(text) {
        this.$emit('create', text)
        this.text = ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .d-flex {
    display: flex;
  }
  .add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    input {
      border-radius: 10px 1px 1px 10px;
      padding: 0.5rem 1rem;
      background: #002f4994;
      color: #41b883;
      font-size: 1rem;
      border: 1px solid #41b883;
      font-weight: bold;
      border-right: none;
    }
    button {
      border: 1px solid #41b883;
      border-radius: 1px 15px 15px 0;
      width: 70px;
      padding: 5.1px 0;
      background: #0030388f;
      cursor: pointer;
      i {
        color: #41b883;
        font-size: 1.5rem;
      }
    }
    .disabled_create {
      i {
        color: #006a3b;
      }
    }
  }
</style>