import React, { ReactNode, useState } from "react";
import {MdOutlineEmail, MdOutlinePhone, MdTextFields } from "react-icons/md";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


type PatternItem = {
  title: string;
  icon: ReactNode;
};


const Pattern: PatternItem[] = [
  {
    title: "Text",

    icon: <MdTextFields />,
  },
  {
    title: "Email ",
    icon: <MdOutlineEmail />,
  },
  {
    title: "Phone Number  ",
    icon: <MdOutlinePhone />,
  },
];
const SideBarStyleInputs = ({
  isOpen,
  setStyle,
  setPattern,
  label,
}: {
  isOpen: (isOpen: boolean) => void;
  setStyle?: (style: string) => void;
  setPattern: (pattern: string) => void;
  label: string;
}) => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
    isOpen(!open);
  };

  const handleOverlayClick = () => {
    setOpen(false);
    isOpen(false);
  };

  return (
    <aside className="h-screen overflow-y-auto absolute top-0 right-0 w-full">
    <div className="fixed z-10 inset-x-0 w-full h-full bg-white px-4 border-l
     xl:inset-x-[unset] xl:block xl:max-w-[19rem] xl:top-auto xl:px-0  ">
    <div className="">
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        />
      )}

      <div
        className={`${
          open ? "w-48 px-2 opacity-100 z-30" : "w-0"
        } lg:w-72 bg-white h-screen relative duration-500`}
      >
        <div className=" justify-center mt-3">
          <h1
            className={`text-black  font-medium text-2xl text-center duration-200 ${
              !open && "invisible"
            }`}
          >
            <button
              className="fixed lg:hidden z-90 bottom-10 right-8 bg-white w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-white   duration-300"
              onClick={toggleSidebar}
            >
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 m-auto"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
                  />
                </svg>
              </span>
            </button>
            {label}
          </h1>
        </div>
        
        
        Ajoutter Input
        <ul>
          {Pattern.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-black text-sm items-center gap-x-4 ${
                item.icon ? "mt-9" : "mt-2"
              }`}
              onClick={() => {
                 
                setOpen(false);
                isOpen(false);
              }}
            >
              {item.icon}
              <span className="flex-1">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </aside>
  );
};

export default SideBarStyleInputs;
