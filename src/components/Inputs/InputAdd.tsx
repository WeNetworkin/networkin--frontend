import { InputBoxProps } from "../../types/interfaces/Inputs";
import FormButton from "../Buttons/FormButton";
import { add_button_style } from "../styles";

const InputAdd = ({ placeholder, value, changeHandler }: InputBoxProps) => {
    const onSubmit = () => {
        // Function To Add
    };

    return (
        <div className="flex gap-2 w-full justify-center py-4 px-6">
            <input
                type="text"
                className="placeholder-[#707070] outline-none py-3 px-4 bg-transparent border border-[#E69A33] rounded-lg"
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />

            <FormButton
                text="ADD"
                handler={onSubmit}
                style={add_button_style}
                isDisabled={false}
            />
        </div>
    );
};

export default InputAdd;
