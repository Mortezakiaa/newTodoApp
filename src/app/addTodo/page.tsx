"use client";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import HeaderTitle from "@/components/HeaderTitle";
import RadioButton from "@/components/RadioButton";
import useAddTodo from "@/hooks/useAddTodo";

export default function page() {
  const { ChangeStatus, SaveTodos, setTodo, todo } = useAddTodo();

  return (
    <>
      <HeaderTitle text={"Add New Todo"} />
      <div className="px-3 mt-2">
        <div>
          <label htmlFor="title" className="block mb-2 text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-teal-600 rounded-md w-[200px]">
          <RadioButton
            Checked={todo.status === "DailyTodo"}
            ChangeStatus={(e) => ChangeStatus(e)}
            Value={"todo"}
          />
          <BsAlignStart color="white" />
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-cyan-800 rounded-md w-[200px]">
          <RadioButton
            Checked={todo.status === "WeeklyTodo"}
            ChangeStatus={(e) => ChangeStatus(e)}
            Value={"in progress"}
          />
          <FiSettings color="white" />
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-green-700 rounded-md w-[200px]">
          <RadioButton
            Checked={todo.status === "MonthlyTodo"}
            ChangeStatus={(e) => ChangeStatus(e)}
            Value={"done"}
          />
          <AiOutlineFileSearch color="white" />
        </div>
        <div>
          <button
            type="button"
            onClick={SaveTodos}
            className="mt-2 text-white bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}
