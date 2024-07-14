"use client";
import HeaderTitle from "@/components/HeaderTitle";
import TodoCard from "@/components/TodoCard";
import { TodoSelector } from "@/stateManagment/TodoSlice";
import { useSelector } from "react-redux";

export default function page() {
  const { todos } = useSelector(TodoSelector);
  return (
    <>
      <HeaderTitle text="Todos" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <TodoCard name={"todo"} data={todos} />
        <TodoCard name={"in progress"} data={todos} />
        <TodoCard name={"done"} data={todos} />
      </div>
    </>
  );
}
