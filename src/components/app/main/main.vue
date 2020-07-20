<template>
  <div>
    <Add  @create="create"/>
    <List :tasks="tasks" :quantity="quantity" @remove="removeTasks"/>
  </div>
</template>

<script>

  import Add from './add'
  import List from './list'

  export default {
    name: 'Main',
    data: () => ({
      tasks: [],
      quantity: 0
    }),
    components: {
      Add,
      List
    },
    methods: {
       create(text) {
          this.tasks = [];

          let newTask = {id: new Date().getUTCMilliseconds(),text, date: new Date(), isDone: false}

          if (JSON.parse(localStorage.getItem('tasks'))) {
              this.tasks = JSON.parse(localStorage.getItem('tasks'))
              this.tasks.unshift(newTask)
              localStorage.setItem('tasks', JSON.stringify(this.tasks))
          } else {
              localStorage.setItem('tasks', JSON.stringify(this.tasks))
              this.create(text)
          }

          this.quantity++
      },
      getTasks() {
        if (JSON.parse(localStorage.getItem('tasks')))
          this.tasks = JSON.parse(localStorage.getItem('tasks'))
        if(this.tasks) this.quantity = this.tasks.length
      },
      removeTasks(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
      }
    },
    mounted() {
      this.getTasks()
    }
  }
</script>