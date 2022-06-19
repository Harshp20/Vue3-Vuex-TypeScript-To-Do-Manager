<template>
  <div class="container">
    <h1>{{ $store.state.heading }}</h1>
    <AddToDo />
    <ErrorText v-if="$store.state.showErrorText" />
    <h2 v-if="!$store.state.toDos.length" style="color: blue">
      To Do List Empty. Add Something...
    </h2>
    <ToDoList />
  </div>
</template>

<script lang="ts">
import AddToDo from "./AddToDo.vue";
import ToDoList from "./ToDoList.vue";
import ErrorText from "./ErrorText.vue";
import "../styles.css";

export default {
  name: "ToDos",
  components: {
    AddToDo,
    ToDoList,
    ErrorText,
  },
};
</script>
