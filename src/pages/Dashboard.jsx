import Sidebar from "../components/slidebar/Sidebar";
import React from "react";
import NotesArea from "../components/NotesArea";
import { Outlet } from "react-router-dom";
import Slideup from "../components/framer-motion/Slideup";
import Header from "../components/Header";
import Container from "../components/Container";

const Dashboard = () => {
  return (
    <>
    <Container>

      <div className="flex gap-10 ">
        <div className="w-1/12 ">
        <Sidebar />
        </div>
        <div className="w-11/12 pt-10 ">
          <Header />
          <Outlet />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Dashboard;
