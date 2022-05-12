<template>
  <div
    class="todo-card"
    :id="todo.id.toString()"
    :class="{ done: todo.status }"
  >
    <div class="todo-content">
      <div class="text">
        <span class="text__todo">{{ todo.text }}</span>
        <span class="text__date">
          {{ todo.date.month }} {{ todo.date.date }}, {{ todo.date.year }}.
          {{ todo.date.hour }}:{{ todo.date.minute }}:{{ todo.date.second }}
        </span>
      </div>
      <div class="buttons">
        <button
          type="submit"
          :id="todo.id.toString()"
          @click="removeTodo"
          class="btn btn--remove"
        >
          Remove
        </button>
        <button
          type="submit"
          :id="todo.id.toString()"
          @click="updateStatus"
          class="btn btn--status"
          :class="[todo.status ? 'btn--done' : 'btn--undo']"
        >
          <span v-if="todo.status">Undo</span>
          <span v-if="!todo.status">Done</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TodoModel } from "@/models/TodoModel";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class TodoCard extends Vue {
  @Prop() todo!: TodoModel;

  updateStatus() {
    if (this.todo.status) this.todo.status = false;
    else this.todo.status = true;
    console.log(this.todo.status);

    this.$emit("update-status", this.todo);
  }
  removeTodo() {
    this.$emit("remove-todo", this.todo);
  }
}
</script>

<style lang="scss">
:root {
  --transition: all 0.1s ease-out;
  --transition-slow: all 0.5s ease-out;
}
.todo-card {
  border: 1px solid #707070;
  border-radius: 8px;
  height: 150px;
  box-shadow: 1.5px 3px 6px rgba($color: #000000, $alpha: 0.16);
  padding: 17px;
  transition: var(--transition);
  &:hover {
    transform: scale(1.02);
  }
  .todo-content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .text {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      &__todo {
        height: 50%;
        display: flex;
        align-items: flex-end;
      }
      &__date {
        display: flex;
        align-items: flex-end;
        height: 50%;
        font-size: 10px;
        opacity: 0.5;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 17px;
      button {
        width: 100px;
        height: 50px;
        cursor: pointer;
        border: 1px solid #707070;
        border-radius: 8px;
        background-color: white;
        &.btn {
          transition: var(--transition);
          &--remove:hover {
            background-color: #ee6d6d;
          }
          &--done:hover {
            background-color: #eed66d;
          }
          &--undo:hover {
            background-color: #b0ee6d;
          }
        }
      }
    }
  }
}
.done {
  background-color: #b0ee6d;
}
</style>
