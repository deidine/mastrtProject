import React, { useState } from "react";
import { MdOutlineDashboard, MdAccountCircle } from "react-icons/md";
import { BsChevronDown, BsServer } from "react-icons/bs";

const Menus = [
  {
    title: "Services",
    src: "Services",
    icon: <BsServer />,
    subMenus: [
      { title: "Service 2", src: "/services/services2", cName: "sub-nav" },
    ],
  },
  {
    title: "bg-yellow-500",
    src: "Background Yellow",
    gap: true,
    icon: <MdAccountCircle />,
  },
  {
    title: "text-purple-500",
    src: "Text Color Purple",
    icon: <MdAccountCircle />,
  },
  {
    title: "border-indigo-500",
    src: "Border Color Indigo",
    icon: <MdAccountCircle />,
  },
  { title: "p-8", src: "Padding 8", icon: <MdAccountCircle /> },
  { title: "m-8", src: "Margin 8", icon: <MdAccountCircle /> },
  { title: "w-64", src: "Width 64", icon: <MdAccountCircle /> },
  { title: "h-24", src: "Height 24", icon: <MdAccountCircle /> },
  {
    title: "bg-gray-500",
    src: "Background Gray",
    gap: true,
    icon: <MdAccountCircle />,
  },
  {
    title: "text-green-500",
    src: "Text Color Green",
    icon: <MdAccountCircle />,
  },
  {
    title: "border-red-500",
    src: "Border Color Red",
    icon: <MdAccountCircle />,
  },
  { title: "p-12", src: "Padding 12", icon: <MdAccountCircle /> },
  { title: "m-12", src: "Margin 12", icon: <MdAccountCircle /> },
  { title: "w-72", src: "Width 72", icon: <MdAccountCircle /> },
];

const Sidebar = ({
  isOpen,
  setStyle,
}: {
  isOpen: (isOpen: boolean) => void;
  setStyle?: (style: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
    isOpen(!open);
  };

  const handleSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="h-screen overflow-y-auto absolute items-end justify-end top-0 right-0"
      onClick={handleSidebarClick}
    >
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
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
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>

      <div
        className={` ${
          open ? "w-48 px-2 " : "w-0 "
        } lg:w-72 bg-teal-800 h-screen   relative duration-500`}
      >
        <div className=" justify-center mt-3">
          <h1
            className={`text-white  font-medium text-2xl text-center duration-200 ${
              !open && "invisible"
            }`}
          >
            LOGO
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                }  `}
                onClick={() => {
                  setStyle!(Menu.title);
                }}
              >
                {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                <span className="flex-1">{Menu.title}</span>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className={`${subMenuOpen && "rotate-180"}`}
                  />
                )}
              </li>
              {Menu.subMenus && subMenuOpen && open && (
                <ul>
                  {Menu.subMenus.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer text-center text-sm text-gray-200 py-1"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;