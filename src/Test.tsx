
import React from 'react';
import { useForm } from "react-hook-form";

const GeneratedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    
      console.log(getValues());
      console.log(data);
    
    console.log(errors);
  };

  return (
    <div className="container w-full h-full bg-white rounded-lg border mt-4 mx-auto">
      <form className="p-4 m-2 w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/4 mx-auto">
          <div className="relative mb-2 group">
            
  <label>phone</label>
  <input
    key={0}
    {...register("input309894b4_5300_458e_a382_c5d68fca5921", {
      required: { value: true, message: "Name is required" },
       
      pattern: {
        value:   /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/  ,
        message: "Invalid input",
      },
    })}
    className="h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-white border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm py-2 px-3 w-full rounded-lg border"
    type="text"
    placeholder="Enter your data"
  />
  {errors.input309894b4_5300_458e_a382_c5d68fca5921 && (
    <span className="text-sm text-red-500">
      is required
      {errors.input309894b4_5300_458e_a382_c5d68fca5921?.message && <>e</>}
    </span>
  )}<br/>


  <label>email</label>
  <input
    key={1}
    {...register("input4fb4d521_c5b5_4ec6_8b08_08ce7f806459", {
      required: { value: true, message: "Name is required" },
       
      pattern: {
        value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        message: "Invalid input",
      },
    })}
    className="h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-white border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm py-2 px-3 w-full rounded-lg border"
    type="text"
    placeholder="Enter your data"
  />
  {errors.input4fb4d521_c5b5_4ec6_8b08_08ce7f806459 && (
    <span className="text-sm text-red-500">
      is required
      {errors.input4fb4d521_c5b5_4ec6_8b08_08ce7f806459?.message && <>e</>}
    </span>
  )}<br/>

          </div>
        </div>
       
        <br />
        <button
          type="submit"
          className="bg-black font-semibold text-white rounded-lg w-full justify-center items-center p-1 mx-auto flex"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeneratedForm;
