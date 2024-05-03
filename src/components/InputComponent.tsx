import React, { useEffect, useState, useRef } from "react";

type InputProps = {
  name: string;
  type: string;
  index: number;
  placeholder: string;
  deleteIndex: (index: number) => void;
  label: string;
  preview: boolean;
} & { register: any; getValues: any };

export default function InputComponent({
  name,
  label,
  placeholder,
  type,
  deleteIndex,
  index,
  preview,
  register,
}: InputProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative mb-2 group">
      {!preview ? (
        <button
          type="button"
          className="absolute -left-5 flex-none mt-3 cursor-grab duration-150
         text-zinc-400 hidden group-hover:block hover:text-zinc-600"
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
            className="lucide lucide-grip-vertical w-5 h-5"
          >
            <circle cx="9" cy="12" r="1"></circle>
            <circle cx="9" cy="5" r="1"></circle>
            <circle cx="9" cy="19" r="1"></circle>
            <circle cx="15" cy="12" r="1"></circle>
            <circle cx="15" cy="5" r="1"></circle>
            <circle cx="15" cy="19" r="1"></circle>
          </svg>
        </button>
      ) : (
        ""
      )}
      <label>
        {label}
        {index}
      </label>
      <input
        {...register(name, {
          required: {
            value: true,
            message: "Name is required",
          },
        })}
        className="   h-10  text-sm focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:bg-white   border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent
                 focus:bg-white focus-visible:ring-indigo-400 shadow-sm   py-2 px-3 w-full rounded-lg border"
        type={type}
        placeholder={placeholder}
      />
      {!preview ? (
        <button
          className="absolute w-6 inline-block text-right h-fit top-0 bottom-0
        translate-y-[50%] my-auto -right-6 opacity-0 group-hover:opacity-100"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-4 h-4 flex-none"
          >
            <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
          </svg>
        </button>
      ) : (
        ""
      )}
      {isMenuOpen && (
        <div
          className="absolute -top-24 right-0 z-50  inline-flex items-center justify-center
          translate-y-[100%] my-auto  w-40   bg-white border border-gray-200 rounded-lg shadow-lg"
          ref={menuRef}
        >
          <div
            role="separator"
            aria-orientation="horizontal"
            className="-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800"
          ></div>
          <ul className="flex  flex-col p-1 space-y-2 rounded-lg px-1 py-1">
            <li className="py-2  px-4 hover:bg-gray-100 font-medium  cursor-pointer">
              Menu Item 1
            </li>
            <li className="py-2  px-4 hover:bg-gray-100 font-medium  cursor-pointer">
              Menu Item 2
            </li>
            <li
              className="inline-flex items-center whitespace-nowrap font-medium  py-2  px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                deleteIndex(index);
                setIsMenuOpen(false); // Close the menu after deleting
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
          </ul>
        </div>
      )}
    </div>
  );
}
