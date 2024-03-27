import React from "react"
import classNames from "classnames"
import { useState } from "react"
import logoImg from "../assets/images/logo.svg"
import menuIcon from "../assets/images/icon-menu.svg"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <nav className="flex justify-between items-center ">
      <img
        src={logoImg}
        alt="logo"
        className="w-12 aspect-auto custom-lg:w-20"
      />
      <div className="hidden custom-lg:block custom-lg:pb-4">
        <Sidebar />
      </div>
      <button onClick={toggleSidebar} className="custom-lg:hidden">
        <img src={menuIcon} alt="menu" className="w-8 h-4" />
      </button>
      <div
        className={classNames(
          "fixed inset-y-0 right-0 w-[64%] bg-white z-50 transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isSidebarOpen,
            "translate-x-full": !isSidebarOpen,
          }
        )}
      >
        {/* Sidebar content */}
        <nav className="p-4 ">
          {isSidebarOpen && (
            <div className="fixed inset-0 z-70 bg-white opacity-50" />
          )}
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </nav>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  )
}

export default Navbar
