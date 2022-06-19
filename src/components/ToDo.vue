<template>
  <div class="tasks-table">
    <table v-if="$store.state.toDos.length">
      <tr>
        <th>S No.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(task, index) in $store.state.toDos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ task.name }}</td>
        <td>{{ task.status }}</td>
        <td>
          <button
            @click="$store.dispatch('editToDo', index)"
            class="crud-btn edit-btn"
          >
            Edit
          </button>
        </td>
        <td>
          <button
            @click="$store.dispatch('deleteToDo', index)"
            class="crud-btn delete-btn"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ToDo",
};
</script>

<style></style>
