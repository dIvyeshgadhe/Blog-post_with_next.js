import { IRenderInputProps } from "@/types/formfield";
import { useId } from "react";
import style from "./style.module.scss";
// Text Field
export const RenderTextInput = ({
  register,
  type,
  children,
  placeholder,
  containerClasses,
  inputClasses,
  labelClasses,
  labelName,
  disabled,
  errorClasses,
  errorMessage,
}: IRenderInputProps) => {
  const id = useId();
  return (
    <>
      <div className={`${style.formGroup} ${containerClasses}`}>
        <label
          htmlFor={id}
          className={`formLabel ${labelClasses}`}
          data-content={labelName}
        >
          <span className="hidden--visually">{labelName}</span>
        </label>
        <input
          id={id}
          {...register}
          className={`${style.formInput} ${inputClasses}`}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
        />
        <span className="childrenClass">{children}</span>
      </div>
      <div className={`inputError ${errorClasses}`}>
        {errorMessage && (
          <span className={`${style.error}`}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};
