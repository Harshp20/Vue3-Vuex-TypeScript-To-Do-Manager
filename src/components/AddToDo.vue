<template>
  <div class="addition-content">
    <input
      v-model="toDo"
      type="text"
      class="todo-text"
      placeholder="Enter task..."
      @keyup.enter="$store.dispatch('addToDo')"
    />
    <button
      @click="$store.dispatch('addToDo')"
      :class="
        $store.state.toDoBeingEdited === null
          ? 'todo-btn add-btn'
          : 'todo-btn update-btn'
      "
    >
      {{ $store.state.toDoBeingEdited === null ? "Add" : "Update" }}
    </button>
    <button
      v-if="$store.state.toDoBeingEdited !== null"
      @click="$store.dispatch('cancelToDoEdit')"
      class="todo-btn delete-btn"
    >
      Cancel
    </button>
  </div>
</template>

<script>
import "../styles.css";

export default {
  name: "AddToDo",
  computed: {
    toDo: {
      get() {
        return this.$store.state.toDo;
      },
      set(toDoName) {
        this.$store.dispatch("setToDoName", toDoName);
      },
    },
  },
};
</script>