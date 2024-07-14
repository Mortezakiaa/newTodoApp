"use client";
import { ToastContainer } from "react-toastify";
import Nav from "./Nav";
import { TChildren } from "@/Types/Types";
import MainContainer from "./MainContainer";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout: React.FC<TChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      <MainContainer>{children}</MainContainer>
      <ToastContainer />
    </>
  );
};
export default MainLayout;
