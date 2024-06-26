import { SVGProps } from "react";

interface InputBoxProps {
  placeholder: string;
  image: string;
  value: string;
  changeHandler: (e: any) => void;
}
const InputBox = ({
  placeholder,
  image,
  value,
  changeHandler,
}: InputBoxProps) => {
  return (
    <div className="flex items-end gap-2 w-72 border-b border-[#F1C78E] m-6">
      <input
        type={placeholder === "password..." ? "password" : "text"}
        placeholder={placeholder}
        className="placeholder-[#707070] flex-1 bg-transparent p-1 outline-none"
        value={value}
        onChange={changeHandler}
      />
      <img src={image} alt="icon" className="pb-1" />
    </div>
  );
};

export default InputBox;