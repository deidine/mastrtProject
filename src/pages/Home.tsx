import React, { useState } from "react";
import PreviewForm from "./PreviewForm";
import FormBuilder from "./FormBuilder";
import FomCodeGenarator from "./FomCodeGenarator";

export default function Home() {
  const [submitBtn, setSubmitBtn] = useState("Submit");
  const [elements, setElements] = useState<FormElement[]>([]);
  const [preview, setPreview] = useState(false);

  return (
    <div>
      <div className="py-3 border-b max-w-2xl mx-auto mt-3 border shadow-sm rounded-xl">
        <div dir="ltr" data-orientation="horizontal" className="w-60 mx-auto">
          <div className="inline-flex gap-x-3 h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50">
            <button
              onClick={() => {
                setPreview(true);
              }}
              className="btn2 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14"
     
            >
              Preview
            </button>

            <button
              className="btn2 hover:bg-zinc-900/90 h-9 px-3 rounded-lg border
            bg-zinc-100 text-zinc-800 hover:text-white"
              onClick={() => {
                setPreview(false);
              }}
       

            >
              Edit
            </button>
            <FomCodeGenarator allElements={elements} />
          </div>
        </div>
      </div>
      {preview ? (
        <PreviewForm
          preview={preview}
          elements={elements}
          submitBtn={submitBtn}
        />
      ) : (
        <FormBuilder
          preview={preview}
          allElements={elements}
          addNewElement={(elem: FormElement[]) => {
            console.log("fetouh");
            setElements(elem);
            console.log(elem);
          }}
          setSubmitBtn={(value: string) => {
            setSubmitBtn(value);
          }}
          submitBtn={submitBtn}
        />
      )}
    </div>
  );
}
