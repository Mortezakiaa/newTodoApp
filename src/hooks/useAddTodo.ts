"use client";

import { useState } from "react";

export default function useAddTodo() {
  const [todo, setTodo] = useState({
    title: "",
    status: "",
  });

  const ChangeStatus = (e: any) => {
    setTodo({ ...todo, status: e.target.value });
  };

  const SaveTodos = () => {};

  return { todo, setTodo, ChangeStatus, SaveTodos };
}
