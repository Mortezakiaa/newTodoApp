"use client";
import store from "@/stateManagment/store";
import { TChildren } from "@/Types/Types";
import { Provider as TodoProvider } from "react-redux";

const Provider: React.FC<TChildren> = ({ children }) => {
  return <TodoProvider store={store}>{children}</TodoProvider>;
};
export default Provider;
