import React from "react";
import Sidebar from "../components/homepage/sidebar";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="ml-[50px] w-[300px] h-screen">
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;
