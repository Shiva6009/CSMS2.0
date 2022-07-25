import React, { Component } from "react";
import { useState } from "react";

function SidePanelInDashboard(){

    const [open, setOpen] = useState(false);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Accounts", src: "User", gap: true },
      { title: "Schedule ", src: "Calendar" },
      { title: "Search", src: "Search" },
      { title: "Analytics", src: "Chart" },
      { title: "Files ", src: "Folder", gap: true },
      { title: "Setting", src: "Setting" },
    ];
  
    return (
      <div className="flex">
        <div
          className={` ${
            open ? `w-52` : "w-20 "
          } bg-dark-purple h-screen pl-3  pt-8 relative duration-300`}
        >
          <img
            src="./assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="p-0 mt-5 ml-2">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} `}
              >
                <img src={`./assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          
        </div>
      </div>
    );
}

export default SidePanelInDashboard;
