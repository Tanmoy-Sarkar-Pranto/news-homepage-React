import React from "react"
import closeBtn from "../assets/images/icon-menu-close.svg"

const Sidebar = ({ setIsSidebarOpen }) => {
  const links = ["Home", "New", "Popular", "Trending", "Categories"]
  return (
    <div className="flex flex-col z-50 custom-lg:flex-row ">
      <div className=" relative">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="right-4 top-4 absolute custom-lg:hidden"
        >
          <img src={closeBtn} alt="close" className="w-8 h-8" />
        </button>
      </div>
      <ul className="mt-24 flex flex-col z-50 justify-between custom-lg:flex-row custom-lg:gap-x-4">
        {links.map((link, index) => {
          return (
            <li key={index} className="mb-4 custom-lg:ml-12">
              <a
                href="#"
                className=" font-inter font-bold text-slate-950 focus:text-orange-500 hover:text-orange-500 custom-lg:text-xl"
              >
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
