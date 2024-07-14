"use client";

import { addTodo } from "@/stateManagment/TodoSlice";
import { TTask } from "@/Types/Types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function useAddTodo() {
  const [todo, setTodo] = useState<TTask>({
    _id: "",
    title: "",
    status: "todo",
  });
  const dispatch = useDispatch();

  const ChangeStatus = (e: any) => {
    setTodo({ ...todo, status: e.target.value });
  };

  const SaveTodos = () => {
    const id = Math.floor(Math.random() * 1000000000).toString();
    dispatch(addTodo({ ...todo, _id: id }));
    setTodo({ _id: "", status: "todo", title: "" });
    toast.success("todo created!!!");
  };

  return { todo, setTodo, ChangeStatus, SaveTodos };
}
