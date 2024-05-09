import React, { useEffect, useRef, useState } from "react";

export default function PopUpMenu({
  required,
  index,
  isOpen,
  isSideOpen,
  deleteIndex,
  isPassWordRequired,
}: {
  required?: boolean;
  isOpen: (value: boolean) => void;
  isSideOpen: (value: boolean ) => void;
  isPassWordRequired: (value: boolean) => void;

  deleteIndex: (index: number) => void;
  index: number;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRequired, setIsRequired] = useState(required);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        isOpen(false);
        }
      event.stopPropagation(); // Stop propagation to prevent event reaching document level
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleRequired = () => {
    setIsRequired(!isRequired);
    isPassWordRequired(!isRequired);
  };

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
    isSideOpen(!isSideBarOpen );
  };

  return (
    <>
      <div
        className={`${isSideBarOpen?"hidden ": ""} absolute -top-24 right-0 z-50 inline-flex items-center 
        justify-center translate-y-[100%] my-auto w-40 bg-white border border-gray-200 
        rounded-lg shadow-lg
        overflow-hidden
        `}
        ref={menuRef}
      >
        <div
          role="separator"
          aria-orientation="horizontal"
          className="-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800"
        ></div>
        <ul className="flex flex-col p-1 space-y-2 rounded-lg px-1 py-1">
          <li
            className="py-2 space-y-2 px-4 hover:bg-gray-100 font-medium cursor-pointer"
            onClick={toggleRequired}
          >
            <div className="flex items-center justify-between hover:bg-zinc-100 rounded-lg px-1 py-1">
              <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal flex-1 text-zinc-600">
                Required {"   "}
              </label>
              <button
                type="button"
                role="switch"
                aria-checked={isRequired}
                data-state={isRequired ? "checked" : "unchecked"}
                value="on"
                className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800 h-5 w-10"
                id="required"
              >
                <span
                  data-state={isRequired ? "checked" : "unchecked"}
                  className="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950 h-4 w-4"
                ></span>
              </button>
            </div>
          </li>
          <li
            className="inline-flex items-center whitespace-nowrap font-medium py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              deleteIndex(index);
              setIsMenuOpen(false); // Close the menu after deleting
              isOpen(false);
              console.log("Delete option clicked");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" mr-2 lucide lucide-trash w-4 h-4"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            Delete
          </li>
          <li
            className="inline-flex items-center whitespace-nowrap font-medium py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={toggleSidebar}
          >
            {" "}
            {isSideBarOpen ? "Close" : "Open"} Cahnge Style
          </li>
        </ul>
      </div>
    </>
  );
}
