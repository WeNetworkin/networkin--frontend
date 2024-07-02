import { FormButtonProps } from "../../types/interfaces/Buttons";
const FormButton = ({ text, handler, style, isDisabled }: FormButtonProps) => {
  return (
    <button
      onClick={handler}
      className={`${style} ${
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
