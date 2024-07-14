"use client";
import { ToastContainer } from "react-toastify";
import Nav from "./Nav";
import { TChildren } from "@/Types/Types";
import MainContainer from "./MainContainer";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider";

const MainLayout: React.FC<TChildren> = ({ children }) => {
  return (
    <Provider>
      <Nav />
      <MainContainer>{children}</MainContainer>
      <ToastContainer />
    </Provider>
  );
};
export default MainLayout;
