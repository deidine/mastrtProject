import React, { useEffect, useState, useRef } from "react";

export default function InputComponent({
  name,
  label,
  placeholder,
  type,
  deleteIndex,
  index,
  preview,
  minLength,
  maxLength,
  disabled,
  min,
  max,
  register,
  pattern,
}: InputProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRequired, setIsRequired] = useState(false); // State to track if input is required
  const menuRef = useRef<HTMLDivElement>(null);
  const regPattern = pattern
    ? typeof pattern === "string"
      ? new RegExp(pattern)
      : { value: new RegExp(pattern.value), message: pattern.message }
    : undefined;

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

  const toggleRequired = () => {
    setIsRequired(!isRequired); // Toggle required state
  };

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
            value: isRequired,
            message: "Name is required",
          },
          minLength,
          maxLength,
          disabled,
          min,
          max,
          pattern: regPattern, // Include pattern in validation rules
        })}
        className="   h-10  text-sm focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:bg-white   border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent
                 focus:bg-white focus-visible:ring-indigo-400 shadow-sm   py-2 px-3 w-full rounded-lg border"
        type={type}
        placeholder={placeholder}
        // required={isRequired}
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
            <li
              className="py-2  space-y-2 px-4 hover:bg-gray-100 font-medium  cursor-pointer"
              onClick={toggleRequired} // Toggle input required state
            >
           {/* {isRequired ? "Required: Yes" : "Required: No"} */}
              <div className="flex items-center justify-between hover:bg-zinc-100 rounded-lg px-1 py-1">
                <label
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
                 font-normal flex-1 text-zinc-600"
                >
                  Required {"   "}
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isRequired}
                  data-state={isRequired ? "checked" : "unchecked"}
                  value="on"
                  className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
                   transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white 
                    disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800 h-5 w-10"
                  id="required"
                >
                  <span
                    data-state={isRequired ? "checked" : "unchecked"}
                    className="pointer-events-none block rounded-full bg-white shadow-lg 
                    ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950 h-4 w-4"
                  ></span>
                </button>
              </div>
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
