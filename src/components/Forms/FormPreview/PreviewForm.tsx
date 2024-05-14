import InputComponent from "../../Input/InputComponent";
import { useForm } from "react-hook-form";

export default function PreviewForm({
  preview,
  elements,
  submitBtn,
}: {
  preview: boolean;
  elements: FormElement[];
  submitBtn: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    if (preview) {
      console.log(getValues());
      console.log(data);
    }
    console.log(errors);
  };

  return (
    <div className="container w-full h-full bg-white rounded-lg border mt-4 shadow-sm mx-auto">
      <form
        className="p-4 m-2 w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        {elements.map((item, index) => (
          <div key={index} className="w-1/4 mx-auto">
            <InputComponent
              preview={preview}
              name={item.elementType.name}
              type={item.elementType.type}
              index={index}
              placeholder={item.elementType.placeholder}
              register={register}
              pattern={item.elementType.pattern}
              
              label={item.elementType.label}
              style={item.elementType.style}
              required={item.elementType.required}
            />


            {errors[item.elementType.name] && preview && (
              <span className="text-sm text-red-500">
                {item.elementType.label} is required
                {errors[item.elementType.name]?.message && <>e</>}
              </span>
            )}
          </div>
        ))}

        <button
          className="bg-black font-semibold text-white rounded-lg  w-1/4
               justify-center items-center p-1 mx-auto flex"
          disabled={!preview}
          type="submit"
        >
          {" "}
          {submitBtn}
        </button>
      </form>
    </div>
  );
}
