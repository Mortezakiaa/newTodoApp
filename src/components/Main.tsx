"use client";
import { ToastContainer } from "react-toastify";
export type T = { children: React.ReactNode };

const Main: React.FC<T> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};
export default Main;
