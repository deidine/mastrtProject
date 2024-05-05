type FormElement = {
    elementType: InputElement;
  };
  type InputElement = {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    label: string;
    style?: string;

  };
   type ReactHookFormPropertiesRestrictions<T> =
  | {
      value: T;
      message: string;
    }
  | T;

    type InputOptions = {
    isPasswordConfirm?: boolean;
    minLength?: ReactHookFormPropertiesRestrictions<number>;
    maxLength?: ReactHookFormPropertiesRestrictions<number>;
    pattern?: ReactHookFormPropertiesRestrictions<string>;
    min?: ReactHookFormPropertiesRestrictions<number>;
    max?: ReactHookFormPropertiesRestrictions<number>;
    required?: boolean | string;
    disabled?: boolean;
    
  };
  
  
type InputProps = {
  
  index: number;
  deleteIndex: (index: number) => void;
  preview: boolean;
} & { register: any; getValues: any } & InputElement &InputOptions;
