<template>
  <div class="todo-list">
    <TodoCard
      :todo="todo"
      v-for="todo in todoItems"
      :key="todo.id"
      v-on:remove-todo="removeTodo"
      v-on:update-status="updateStatus"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoCard from "./TodoCard.vue";
import { Prop } from "vue-property-decorator";
import { TodoModel } from "@/models/TodoModel";

@Options({
  components: {
    TodoCard,
  },
})
export default class TodoList extends Vue {
  @Prop() todoItems!: TodoModel[];

  removeTodo(todo: TodoModel) {
    this.$emit("remove-todo", todo);
  }
  updateStatus(todo: TodoModel) {
    console.log(todo);

    this.$emit("update-status", todo);
  }
}
</script>

<style lang="scss">
.todo-list {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  & > :last-child {
    margin-bottom: 50px;
  }
}
</style>
