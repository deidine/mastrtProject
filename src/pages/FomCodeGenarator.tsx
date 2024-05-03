import React, { useState } from "react";

type CodeGenaratorProps = {
  allElements: FormElement[];
};

export default function FomCodeGenarator({ allElements }: CodeGenaratorProps) {
  const [componentCode, setComponentCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateComponentCode = () => {
    const componentCode = allElements.map((input, index) => {
      return `<input
      key={${index}}
      type="${input.elementType.type}"
      label="${input.elementType.label}"
      name="${input.elementType.name}"
      placeholder="${input.elementType.placeholder}" 
      index={${index}} />`;
    });

    const exportCode = `
  import React from 'react';
 
  const GeneratedForm = () => {
    return (
      <form>
        ${componentCode.join("\n")}
      </form>
    );
  };

  export default GeneratedForm;
`;

    setComponentCode(exportCode);
    setIsModalOpen(true); // Open the modal after generating code
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(componentCode);
      alert("Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy to clipboard!");
    }
  };

  return (
    <>
      <button
        className="border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14"
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
