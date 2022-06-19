import { createStore } from "vuex";

// interface State {
//   toDoBeingEdited: undefined | string;
//   heading: string;
//   toDo: string;
//   toggleUpdateBtn: boolean;
//   toDos: [
//     {
//       name: string;
//       status: string;
//     }
//   ];
// }

export default createStore({
  state: {
    toDoBeingEdited: null,
    heading: "Your To-Do List",
    toDo: "",
    toggleUpdateBtn: false,
    toDos: [
      {
        name: "Feed the Cat",
        status: "Pending",
      },
    ],
    errorText: 'Item already exists',
    showErrorText: false
  },
  getters: {},
  mutations: {
    deleteToDo(state, index) {
      state.toDos.splice(index, 1);
    },
    editToDo(state, index) {
      state.toDoBeingEdited = index;
      state.toDo = state.toDos[state.toDoBeingEdited as any].name; // Fix this type casting
    },
    addToDo(state) {
      state.toDos.push({
        name: state.toDo,
        status: "Pending",
      });
      state.toDo = ''
    },
    setToDoName(state, toDoName) {
      state.toDo = toDoName.trim();
    },
    updateToDo(state) {
      state.toDos[state.toDoBeingEdited as any].name = state.toDo; // Fix this type casting
      state.toDoBeingEdited = null
      state.toDo = ''
    },
    cancelToDoEdit(state) {
      state.toDoBeingEdited = null
      state.toDo = ''
    },
    toggleErrorText(state) {
      state.showErrorText = true
      setTimeout(() => {
        state.showErrorText = false
      }, 1300)
    }
  },
  actions: {
    deleteToDo({ state, commit }, index) {
      if (state.toDoBeingEdited === index) commit('cancelToDoEdit');
      commit("deleteToDo", index);
    },
    editToDo({ commit }, index) {
      commit("editToDo", index);
    },
    addToDo({ state, commit }) {
      if (!state.toDo.length) return;

      if (state.toDos.find(x => x.name.toLocaleLowerCase() === state.toDo.toLocaleLowerCase()) !== undefined) {
        commit('toggleErrorText')
        return
      };

      if (state.toDoBeingEdited === null) {
        commit("addToDo");
      } else {
        commit("updateToDo");
      }
    },
    setToDoName({ commit }, toDoName) {
      commit("setToDoName", toDoName);
    },
    cancelToDoEdit({ commit }) {
      commit('cancelToDoEdit')
    }
  },
});
