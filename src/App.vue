<template>
  <AddTodo v-on:add-todo="addTodoMethod" />
  <TodoList
    :todoItems="todo_items"
    v-on:remove-todo="removeTodo"
    v-on:update-status="updateStatus"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import { TodoModel } from "./models/TodoModel";

@Options({
  components: {
    AddTodo,
    TodoList,
  },
})
export default class App extends Vue {
  todo_items: TodoModel[] = [];

  addTodoMethod(newTodo: TodoModel) {
    this.todo_items.push(newTodo);
    this.updateLocalStorage(this.todo_items);
  }
  removeTodo(todo: TodoModel) {
    const i = this.todo_items.findIndex((i) => i.id === todo.id);
    this.todo_items.splice(i, 1);
    this.updateLocalStorage(this.todo_items);
  }
  updateStatus(todo: TodoModel) {
    const i = this.todo_items.findIndex((i) => i.id === todo.id);
    console.log("Här är jag", this.todo_items[i]);
    this.todo_items[i] = todo;
    this.updateLocalStorage(this.todo_items);
  }
  updateLocalStorage(todos: TodoModel[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  mounted() {
    const todos: string | null = localStorage.getItem("todos");
    if (todos) {
      this.todo_items = JSON.parse(todos);
    }
  }
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/oqp6wjf.css");
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: prestige-elite-std, monospace;
  font-size: 14px;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 25px;
  & > * {
    width: clamp(300px, 90vw, 600px);
  }
}
</style>
