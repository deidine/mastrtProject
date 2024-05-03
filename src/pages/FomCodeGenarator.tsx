import React, { useState } from "react";
type CodeGenaratorProps = {
  allElements: FormElement[];
};
export default function FomCodeGenarator({ allElements }: CodeGenaratorProps) {
  const [componentCode, setComponentCode] = useState("");

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
  };
  return (
    <>
     <button className=" border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 rounded-lg text-zinc-800 w-14" type="button" onClick={generateComponentCode}>
          Export Form
        </button>
    <div> 
          <pre>{componentCode}</pre>
        </div>
    </>
  );
}
