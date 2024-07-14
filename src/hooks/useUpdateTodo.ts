import { updateTodoStatus } from "@/stateManagment/TodoSlice";
import { TTask } from "@/Types/Types";
import {  useState } from "react";
import { useDispatch } from "react-redux";

export default function useUpdateTodo() {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const DragEnd = (e: TTask) => {
    console.log("status", status);
    if (!status) return;
    dispatch(updateTodoStatus({ _id: e._id, status: status }));
  };

  const DragOver = (e) => {
    e.preventDefault();
  };

  return { setStatus, DragEnd, DragOver };
}
