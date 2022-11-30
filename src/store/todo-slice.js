import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [{ id: 0, name: "example", complete: false, selected: false }],
    close: false,
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    removeTodo(state, action) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    deleteAll(state, action) {
      state.items = state.items.filter((item) => {
        return item.id === action.payload.id;
      });
    },
    toggle(state, action) {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.items[index].complete = action.payload.complete;
    },
    toggleDeleted(state, action) {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.items[index].selected = action.payload.selected;
    },
    update(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          return (item.name = action.payload.name);
        }
      });
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice;
