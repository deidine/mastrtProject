import React, { useState } from "react";

type CodeGenaratorProps = {
  allElements: FormElement[];
};

export default function FomCodeGenarator({ allElements }: CodeGenaratorProps) {
  const [componentCode, setComponentCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateComponentCode = () => {
    const componentCode = allElements.map((input, index) => {
      return `
      <label>${input.elementType.label}</label>
      <input
      key={${index}}
      className="${input.elementType.style}"
      type="${input.elementType.type}"
    
      name="${input.elementType.name}"
      placeholder="${input.elementType.placeholder}" 
      />`;
    });
    // import React from 'react';

    // const GeneratedForm = () => {
    //   return (
    const exportCode = `
    <div className="container w-full h-full bg-white rounded-lg border mt-4 mx-auto">

      <form
      className="p-4 m-2 w-full mx-auto "
      
      >
      <div
      className="w-1/4 mx-auto"
>
      <div className="relative mb-2 group">
      
      ${componentCode.join("\n")}
      </div>
      </div>
      <br/>
        <button type="submit" 
        className="bg-black font-semibold text-white rounded-lg w-full
               justify-center items-center p-1 mx-auto flex"
        >Submit</button>
      </form>
      </div>
      `;
    //   );
    // };

    // export default GeneratedForm;

    setComponentCode(exportCode);
    setIsModalOpen(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(componentCode);
      alert("Copied to clipboard!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy to clipboard!");
    }
  };

  return (
    <>
      <button
        className="border border-zinc-200 bg-white hover:bg-zinc-100
  h-9 rounded-lg
           text-zinc-800  "
        type="button"
        onClick={generateComponentCode}
      >
        Export Form
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex overflow-y-auto items-center w-full justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Generated Form Code</h2>
            <pre>{componentCode}</pre>
            <div className="flex justify-between">
              <button
                className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                onClick={copyToClipboard}
              >
                Copy
              </button>
              <button
                className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
