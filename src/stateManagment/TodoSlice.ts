import { TTask } from "@/Types/Types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type T = { todos: TTask[] };

const initialState: T = {
  todos: [
    { _id: "1", title: "test", status: "todo" },
    { _id: "2", title: "test1", status: "in progress" },
    { _id: "3", title: "test2", status: "done" },
    { _id: "4", title: "test4", status: "done" },
    { _id: "5", title: "test5", status: "todo" },
    { _id: "6", title: "test6", status: "in progress" },
  ],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    updateTodoStatus: (state, action) => {
      state.todos = state.todos.map((i) => {
        if (i._id === action.payload._id) {
          i.status = action.payload.status;
        }
        return i;
      });
    },
  },
});

export default TodoSlice.reducer;
export const { addTodo, updateTodoStatus } = TodoSlice.actions;
export const TodoSelector = (store: RootState) => store.todoReducer;
