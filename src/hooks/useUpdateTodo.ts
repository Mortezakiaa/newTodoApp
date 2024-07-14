"use client";
import {
  setUpdate,
  TodoSelector,
  updateTodoStatus,
} from "@/stateManagment/TodoSlice";
import { TTask } from "@/Types/Types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function useUpdateTodo() {
  const dispatch = useDispatch();
  const { updateTodo } = useSelector(TodoSelector);

  const setTodo = (i: TTask) => {
    dispatch(setUpdate(i));
  };

  const DragEnd = (e: string) => {
    if (!e) return;
    dispatch(updateTodoStatus({ _id: updateTodo._id, status: e }));
  };

  const DragOver = (e: any) => {
    e.preventDefault();
  };

  return { DragEnd, DragOver, setTodo };
}
