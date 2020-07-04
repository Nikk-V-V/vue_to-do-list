<template>
  <div class="container">
    <div class="add-task">
      <label>
        <input v-model="text" :key-up="validInput(text)" type="text">
      </label>
      <button @click="create(text)" :class="{disabled_create: !valid}" :disabled="!valid">
        <i class="fas fa-plus-circle"></i>
      </button>
    </div>
    <div class="tasks">
      <p class="quantity" v-if="quantity">
        Всього у вас завдань: {{quantity}}, з них виконано {{ready}}
      </p>
      <ul>
        <li v-for="task of tasks" class="task">
            <div @change="isCheck" class="task_check">
              <input v-model="task.isDone" type="checkbox">
            </div>
            <div class="task_text" :class="{ready: task.isDone}">
              {{task.text}}
            </div>
            <div class="data_create_task">
              {{task.date | date('data')}}
            </div>
            <button
                    class="task_delete"
                    :class="{disabled: !task.isDone}"
                    :disabled="!task.isDone"
                    @click="deleteTasks(task)"
            >
            <i class="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
    <h2 v-if="!tasks[0]" class="message">
      Немає завдань? Придумай!
    </h2>
  </div>
</template>

<script>

  export default {
      name: "ToDo",
      data: () => ({
          check: false,
          text: '',
          valid: false,
          tasks: [],
          quantity: 0,
          ready: 0
      }),
      components: {},
      methods: {
          isCheck() {
              this.ready = 0
              localStorage.setItem('tasks', JSON.stringify(this.tasks))
              this.tasks.forEach((value) => {
                  if (value.isDone === true) this.ready++
              })
          },
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
              this.quantity = this.tasks.length
              this.text = ''
          },
          validInput(text) {
              this.valid = text.trim() !== '';
          },
          getTasks() {
              if (JSON.parse(localStorage.getItem('tasks')))
                  this.tasks = JSON.parse(localStorage.getItem('tasks'))

              if(this.tasks) this.quantity = this.tasks.length

          },
          deleteTasks(item) {
              let arr = []

              arr = this.tasks.filter(x => x.id !== item.id)

              localStorage.setItem('tasks', JSON.stringify(arr))

              this.quantity = this.tasks.length

              this.getTasks()

              this.ready--
          }
      },
      mounted() {
          this.getTasks()
          this.isCheck()
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
  .quantity {
    color: #b0ff7e;
    text-align: center;
    font-size: 1rem;
    margin: 2rem 0;
  }
</style>
