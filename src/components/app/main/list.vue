<template>
  <div>
     <p class="quantity" v-if="quantity">
        Всього у вас завдань: {{quantity}}, з них виконано {{ready}}
      </p>
      <ul v-if="tasks[0]">
        <li
          v-for="(item, index) of tasks"
          :key="index"
          class="task"
        >
          <div @change="isCheck" class="task_check">
            <input v-model="item.isDone" type="checkbox">
          </div>
          <div 
            class="task_text" 
            :class="{ready: item.isDone}"
          >
            {{item.text}}
          </div>
          <div class="data_create_task">
            {{item.date | date('data')}}
          </div>
          <button
            class="task_delete"
            :class="{disabled: !item.isDone}"
            :disabled="!item.isDone"
            @click="deleteTasks(item.id)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </li>
      </ul>
  </div>
</template>

<script>

  export default {
    name: 'List',
    props: ["tasks", "quantity"],
    data: () => ({
      ready: 0
    }),
    methods: {
      isCheck() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.isReady()
      },
      isReady() {
        this.ready = 0
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.forEach((value) => {
          if (value.isDone === true) this.ready++
        })
      },

      deleteTasks(id) {
        this.$emit("remove", id)
      }
    },
    mounted() {
      this.isReady()
    }
  }
</script>

<style lang="scss" scoped>
  .quantity {
    color: #b0ff7e;
    text-align: center;
    font-size: 1rem;
    margin: 2rem 0;
  }
</style>