import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import InputComponent from "../components/InputComponent";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function FormBuilder({
  preview,
  allElements,
  addNewElement,
  setSubmitBtn,
  submitBtn,
}: {
  preview: boolean;
  allElements: FormElement[];
  addNewElement: (elem: FormElement[]) => void;
  setSubmitBtn: (value: string) => void;
  submitBtn: string;
}) {
  const [elements, setElements] = useState<FormElement[]>(allElements);

  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const addElement = () => {
    const newUUID: string = uuidv4();

    const newElement = {
      elementType: {
        type: "text",
        label: "Test" + newUUID,
        name: "" + newUUID,
        placeholder: "enter your data",
        value: "",
        style:
          "h-10  text-sm focus-visible:outline-none   focus-visible:ring-2 focus-visible:bg-white   border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm    py-2 px-3 w-full rounded-lg border",
      },
    };
    setElements((prev) => [...prev, newElement]);
    addNewElement([...elements, newElement]);
  };

  const handleDeleteInput = (index: number) => {
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
    addNewElement(updatedElements);
  };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setElements(items);
    addNewElement(items);
  }

  return (
    <>
      <div className="container w-full h-full bg-white rounded-lg border mt-4 shadow-sm mx-auto">
        <form className="p-4 m-2 w-full mx-auto ">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="data" type="COLUMN" direction="vertical">
              {(provided, snapshot) => (
                <div
                  className="w-1/4 mx-auto"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {elements.map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={"" + index}
                      index={index}
                      isDragDisabled={preview}
                    >
                      {(provided) => (
                        <div
                          key={index}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        > 
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
                            // pattern="\b\d{3}-\d{2}-\d{4}\b"  //901-23-4567
                            required={item.elementType.required}
                            style={item.elementType.style}
                            isPassWordRequired={(value: boolean) => {
 
                              console.log("deidine");
                              const updatedElements = [...elements];
                              updatedElements[index ].elementType.required = value;
                              console.log(
                                updatedElements[index].elementType.required
                              );
                              console.log(updatedElements);
                              setElements(updatedElements);
                              addNewElement(updatedElements);
                            }}
                          />

                          {errors[item.elementType.name] && (
                            <span className="text-sm text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <button
                    className="bg-black font-semibold text-white rounded-lg w-full
               justify-center items-center p-1 mx-auto flex"
                    disabled={!preview}
                  >
                    {preview ? (
                      submitBtn
                    ) : (
                      <input
                        className="outline-none  shadow-md bg-transparent w-full text-center"
                        value={submitBtn}
                        onChange={(e) => setSubmitBtn(e.target.value)}
                      />
                    )}
                  </button>
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
