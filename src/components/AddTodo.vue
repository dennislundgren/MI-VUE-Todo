<template>
  <div class="add-todo">
    <input
      type="text"
      placeholder="What do you want to do?"
      v-model="todoText"
      @keyup.enter="addTodo"
      maxlength="30"
    />
    <button @click="addTodo" type="submit">Add</button>
  </div>
</template>

<script lang="ts">
import { TodoDate, TodoModel } from "@/models/TodoModel";
import { Vue } from "vue-class-component";

export default class AddTodo extends Vue {
  todoText = "";
  addTodo() {
    const d = new Date();
    const newTodoDate = new TodoDate(
      d.getFullYear().toString(),
      d.getMonth(),
      d.getDate().toString(),
      d.getDay(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    );
    const newTodo = new TodoModel(
      this.todoText,
      newTodoDate,
      false,
      Date.now()
    );
    this.$emit("add-todo", newTodo);
    this.todoText = "";
  }
}
</script>

<style lang="scss" scoped>
@mixin hover {
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      @content;
    }
  }
}
.add-todo {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 90vw, 600px);

  // Development CSS
  //   border: 1px solid salmon;
  input {
    width: 75%;
    border: none;
    border-bottom: 1px solid #707070;
    border-radius: 0;
    align-self: flex-end;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 25%;
    height: 100%;
    cursor: pointer;
    border: 1px solid #707070;
    border-radius: 8px;
    background-color: white;
    transition: var(--transition);
    color: #000000;
    @include hover {
      background-color: #b0ee6d;
    }
  }
}
</style>
