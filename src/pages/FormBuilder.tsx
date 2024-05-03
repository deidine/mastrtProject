import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import InputComponent from "../components/InputComponent";
import FomCodeGenarator from "./FomCodeGenarator";

export default function FormBuilder<T extends FieldValues>() {
  const [preview, setPreview] = useState(false);

  const allElements: FormElement[] = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const addElement = () => {
    const newElement = {
      elementType: {
        type: "text",
        label: "Test",
        name: "" + Date.now(),
        placeholder: "enter your data",
        value: "",
      },
    };
    setElements((prev) => [...prev, newElement]);
  };

  const [elements, setElements] = useState<FormElement[]>(allElements);

  const onSubmit = (data: any) => {
    if (preview) {
      console.log(getValues());
      console.log(data);
      // for (var key in data) {
      //   console.log(data[key].name);
      // }
    }
    console.log(errors);
  };

  const handleDeleteInput = (index: number) => {
    setElements((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <>
      <TopBarTest
        preview={preview}
        setPreview={setPreview}
        elements={elements}
      />

      <div className="container w-full h-full bg-white rounded-lg border mt-4 mx-auto">
        <form
          className="p-4 m-2 w-full mx-auto "
          onSubmit={preview ? handleSubmit(onSubmit) : undefined}
        >
          <div className="w-1/4 mx-auto">
            {elements.map((item, index) => (
              <div key={index}>
                <InputComponent
                  preview={preview}
                  name={item.elementType.name}
                  type={item.elementType.type}
                  index={index}
                  placeholder={item.elementType.placeholder}
                  register={register}
                  getValues={getValues}
                  label={item.elementType.label}
                  deleteIndex={handleDeleteInput}
                />

                {errors[item.elementType.name] && preview && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            ))}

            <button
              className="bg-black font-semibold text-white rounded-lg w-full
               justify-center items-center p-1 mx-auto flex"
              disabled={!preview} // Disable button in preview mode
            >
              {preview ? (
                "Submit"
              ) : (
                <input
                  className="outline-none 
      shadow-md
      bg-transparent w-full text-center"
                  value="Submit"
                />
              )}
            </button>
          </div>
        </form>
      </div>

      <div
        className="container w-full 
      shadow-md
      h-full bg-white font-semibold rounded-lg border mt-4 mx-auto flex justify-center items-center"
      >
        <button
          className="bg-gray-300 w-1/4 rounded-lg m-2 p-1"
          onClick={addElement}
        >
          Insert element
        </button>
      </div>
    </>
  );
}

export function TopBarTest({
  preview,
  setPreview,
  elements,
}: {
  preview: boolean;
  elements: FormElement[];
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="py-3 border-b max-w-2xl mx-auto mt-3 border shadow-sm rounded-xl">
      <div dir="ltr" data-orientation="horizontal" className="w-60 mx-auto">
        <div className="inline-flex gap-x-3 h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50">
          {/* <button className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14">
            Save
          </button> */}

          <button
            className="btn2 hover:bg-zinc-900/90 h-9 px-3 rounded-lg border
            bg-zinc-100 text-zinc-800 hover:text-white"
            onClick={() => {
              setPreview(!preview);
            }}
          >
            {preview ? "Edit" : "Preview"}
          </button>
          <FomCodeGenarator allElements={elements} />
        </div>
      </div>
    </div>
  );
}
