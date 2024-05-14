import React, { ReactNode, useState } from "react";
import { MdOutlineDashboard, MdOutlineFormatColorFill } from "react-icons/md";
import { BsChevronDown, BsServer } from "react-icons/bs";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
type MenuItem = {
  title: string;

  icon: JSX.Element;
  subMenus?: { title: string; cName: string }[];
  gap?: boolean;
};
type PatternItem = {
  title: string;
  pattern: string;
  icon: ReactNode;
};
 

const Menus: MenuItem[] = [
  {
    title: "text color",
    icon: <BsServer />,
    subMenus: [
      { title: "text-purple-500", cName: "sub-nav" },
      { title: "text-purple-500", cName: "sub-nav" },
    ],
  },
  {
    title: "bg-yellow-500",
    gap: true,
    icon: <MdOutlineFormatColorFill />,
  },
  {
    title: "text-purple-500",
    icon: <MdOutlineFormatColorFill />,
  },
];

const Pattern: PatternItem[] = [
  {
    title: "URL Pattern",
    pattern: " /^(?:(\d{3}))?[-.\s]?(\d{3})[-.\s]?(\d{4})$/",
    icon: <MdOutlineFormatColorFill />,
  },
  {
    title: "Email Pattern",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    icon: <MdOutlineFormatColorFill />,
  },
  {
    
    title: "Phone Number Pattern",
    pattern: "/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/",
    // 1234567890
    // 123-456-7890
    // 123.456.7890
    // 123 456 7890
    // (123) 456 7890
    icon: <MdOutlineFormatColorFill />,
  },
];
const SideBarStyle = ({
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
    // if i add w-full it be in left screen
    <aside className="inline-flex h-screen overflow-y-auto absolute top-0 right-0">
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
        <ul className="pt-6">
          Ajoutter Coulerur
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-black text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                }`}
                onClick={() => {
                  setStyle!(Menu.title);
                  setOpen(false);
                  isOpen(false);
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
                      className="flex px-5 cursor-pointer hover:bg-teal-400 text-center text-sm text-black py-1"
                    >
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        <hr />
        <br />
        Ajoutter Pattern
        <ul>
          {Pattern.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-black text-sm items-center gap-x-4 ${
                item.icon ? "mt-9" : "mt-2"
              }`}
              onClick={() => {
                setPattern(item.pattern);
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
    </aside>
  );
};

export default SideBarStyle;