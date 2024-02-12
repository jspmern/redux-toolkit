import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { edit: "", todo: [], text: "" },
  reducers: {
    addText(state, action) {
      state.text = action.payload;
    },
    deleteText(state, action) {
      let newData = state.todo.filter((item) => {
        return item.id !== action.payload;
      });
      state.todo = newData;
    },
    submitData(state, action) {
      if (state.edit) {
        let updateData = state.todo.map((item) => {
          if (item.id == state.edit.id) {
            let newText = state.text;
            return {
              ...item,
              text: newText,
            };
          } else {
            return item;
          }
        });
        state.todo = updateData;
        state.edit = "";
      } else {
        let obj = { id: Math.trunc(Math.random() * 10000), text: state.text };
        state.todo = [...state.todo, obj];
      }

      state.text = "";
    },
    editData(state, action) {
      let findData = state.todo.find((item) => {
        return item.id === action.payload;
      });
      state.edit = findData;
      state.text = findData.text;
    },
  },
});
export let { addText, deleteText, submitData, editData } = TodoSlice.actions;
export default TodoSlice;
