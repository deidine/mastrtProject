import React from "react";
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
      <form
        className="p-4 m-2 w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-1/4 mx-auto">
          <div className="relative mb-2 group">
            <label>Label</label>
            <input
              key={0}
              {...register("1a1ebbb3-2efe-4aa3-b789-816a96702318", {
                required: { value: true, message: "Name is required" },

                pattern: {
                  value: new RegExp(""),
                  message: "Invalid input",
                },
              })}
              className="h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-white border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm py-2 px-3 w-full rounded-lg border"
              type="text"
              placeholder="Enter your data"
            />

            <label>Label</label>
            <input
              key={1}
              {...register("38b2f4fc-baee-483b-bba0-abc0ad3e8ad0", {
                required: { value: true, message: "Name is required" },

                pattern: {
                  value: new RegExp(""),
                  message: "Invalid input",
                },
              })}
              className="h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-white border-zinc-200 duration-100 placeholder:text-zinc-400 ring-2 ring-transparent focus:bg-white focus-visible:ring-indigo-400 shadow-sm py-2 px-3 w-full rounded-lg border"
              type="text"
              placeholder="Enter your data"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                is required
                {errors.name?.message && <>e</>}
              </span>
            )}
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
