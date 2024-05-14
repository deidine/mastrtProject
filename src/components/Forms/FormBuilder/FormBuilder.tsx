import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import InputComponent from "../../Input/InputComponent";
import SideBarStyle from "../../Input/SideBarStyle";

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
  const [inputIndex, setInputIndex] = useState<number>(0);
  const [isSideOpen, setIsSideOpen] = useState(false);

  useEffect(() => {
    setElements(allElements);
  }, [allElements]);

  const addElement = () => {
    const newUUID: string = uuidv4();
    const newElement = {
      elementType: {
        type: "text",
        label: "Label",
        name: newUUID,
        placeholder: "Enter your data",
        value: "",
        required: true,
        pattern:"",
        style:
          `h-10 text-sm focus-visible:outline-none focus-visible:ring-2
           focus-visible:bg-white border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 
           ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm py-2 px-3 w-full
            rounded-lg border`,
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

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(elements);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setElements(items);
    addNewElement(items);
  };

  return (
    <>
      <div className="container w-full h-full bg-white rounded-lg border mt-4 shadow-sm mx-auto">
        <form className="p-4 m-2 w-full mx-auto ">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="data" type="COLUMN" direction="vertical">
              {(provided) => (
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
                            key={item.elementType.name}
                            index={index}
                            preview={preview}
                            {...item.elementType}
                            deleteIndex={handleDeleteInput}
                            isPassWordRequired={(value: boolean) => {
                              const updatedElements = [...elements];
                              updatedElements[
                                index
                              ].elementType.required = value;
                              addNewElement(updatedElements);
                            }}
                            setLabel={(value: string) => {
                              const updatedElements = [...elements];
                              updatedElements[index].elementType.label = value;
                              addNewElement(updatedElements);
                            }}
                            openSideBar={(isOpen: boolean) => {
                              setIsSideOpen(isOpen);
                              setInputIndex(index);
                            }}
                          /> 
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <button
                    className="bg-black font-semibold text-white rounded-lg w-full justify-center items-center p-1 mx-auto flex"
                    disabled={!preview}
                  >
                    {preview ? (
                      submitBtn
                    ) : (
                      <input
                        className="outline-none shadow-md bg-transparent w-full text-center"
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

      <div className="container w-full shadow-md h-full bg-white font-semibold rounded-lg border mt-4 mx-auto flex justify-center items-center">
        <button
          className="bg-gray-300 w-1/4 rounded-lg m-2 p-1"
          onClick={addElement}
        >
          Insert element
        </button>
      </div>

      {isSideOpen && (
        <SideBarStyle
          isOpen={(value: boolean) => {
            setIsSideOpen(value);
          } }
          setStyle={(value: string) => {
            const updatedElements = [...elements];
            updatedElements[inputIndex].elementType.style += " " + value;
            addNewElement(updatedElements);
          } }
          setPattern={(value: string) => {
            const updatedElements = [...elements];
            if (updatedElements[inputIndex].elementType.pattern == "") {

              updatedElements[inputIndex].elementType.pattern += value;
            }

            addNewElement(updatedElements);
          } } label={elements[inputIndex].elementType.label}        />
      )}
    </>
  );
}
