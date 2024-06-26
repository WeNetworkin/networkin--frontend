import { FormButtonProps } from "../../types/interfaces/Buttons";
const FormButton = ({ text, handler, style, isDisabled }: FormButtonProps) => {
  return (
    <button
      onClick={handler}
      className={`m-3 px-3 py-1 text-base font-medium rounded-lg  ${style} ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type="submit"
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default FormButton;
