import { useEffect, useState, useRef } from "react";
import PopUpMenu from "./PopUpMenu";

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
  style,
  required,
  isPassWordRequired,
  setLabel,
  pattern,
}: InputProps & {
  isPassWordRequired?: (value: boolean) => void;
  setLabel?: (value: string) => void;
  deleteIndex?: (index: number) => void;
}) {
  const [inputValue, setInputValue] = useState(label); // Initialize state with label value if present
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRequired, setIsRequired] = useState(required);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLabel!(e.target.value);
  };

  const regPattern = pattern
    ? typeof pattern === "string"
      ? new RegExp(pattern)
      : { value: new RegExp(pattern.value), message: pattern.message }
    : undefined;

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
        {preview ? (
          <>{label}</>
        ) : (
          <input
            className="w-full outline-none bg-transparent"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        )}
      </label>

      {preview ? (
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
            pattern: regPattern ? regPattern : undefined,
          })}
          className={`${style}`}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name, {})}
          className={`${style}`}
          type={type}
          placeholder={placeholder}
        />
      )}
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
        <PopUpMenu
          required={required!}
          isOpen={(value:boolean)=>{
            setIsMenuOpen(value)
          }}
          isPassWordRequired={(value: boolean) => {
            isPassWordRequired!(value);
          }}
          deleteIndex={(index: number) => {
            deleteIndex!(index);
          }}
          index={index}
        />
      )}
    </div>
  );
}
