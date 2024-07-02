import React from "react";
import FormButton from "../Buttons/FormButton";
import { filled_button_style, login_button_style } from "../styles";
import { navButtonList } from "./constants";
const Navbar = () => {
  const handleLogin = () => {};
  const handleRegister = () => {};
  return (
    <div className="flex h-max items-center justify-between rounded-full border-2 border-[#ECB365] px-10 py-2">
      <div className="text-[#F1C78E] text-3xl font-thin">Networkin'</div>
      <div className="flex items-center">
        {navButtonList.map((singleButton, index) => {
          return (
            <FormButton
              text={singleButton.text}
              handler={() => {
                /* Go to path variable */
              }}
              style={login_button_style}
              isDisabled={false}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex items-center">
        <div>
          <FormButton
            text={"Login"}
            style={login_button_style}
            handler={handleLogin}
            isDisabled={false}
          />
        </div>
        <div>
          <FormButton
            text={"Register"}
            style={filled_button_style}
            handler={handleRegister}
            isDisabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
