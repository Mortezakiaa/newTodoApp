"use client";
import HeaderTitle from "@/components/HeaderTitle";
import TodoCard from "@/components/TodoCard";
import { TTask } from "@/Types/Types";

const d: TTask[] = [
  { _id: "1", title: "test", status: "todo" },
  // { _id: "2", title: "test1", status: "in progress" },
  { _id: "3", title: "test2", status: "done" },
  { _id: "4", title: "test4", status: "done" },
  { _id: "5", title: "test5", status: "todo" },
  // { _id: "6", title: "test6", status: "in progress" },
];

export default function page() {
  return (
    <>
      <HeaderTitle text="Todos" />
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <TodoCard name={"todo"} data={d} />
        <TodoCard name={"in progress"} data={d} />
        <TodoCard name={"done"} data={d} />
      </div>
    </>
  );
}
