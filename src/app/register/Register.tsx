"use client";
import { useEffect, useState } from "react";
import FormButton from "../../components/Buttons/FormButton";
import { register_button_style } from "../../components/styles";
import { email, password, upload, userIcon } from "../../assets/exportAssets";
import InputBox from "../../components/Inputs/InputBox";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      //   const response = await axios.post("apiPath", user);
      //   console.log("User signed up", response);
    } catch (err: any) {
      console.error("Signup failed!");
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 8 &&
      user.username.length
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);
  console.log(user);
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-full w-full">
      <h1 className="text-white font-thin text-4xl">
        {loading ? "Loading..." : "lets get started"}
      </h1>
      <div className="w-max h-max p-20 border border-[#ECB365] rounded-3xl">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-20 items-center">
            <div className="flex flex-col gap-4 items-center mt-10">
              <InputBox
                placeholder="username..."
                image={userIcon}
                value={user.username}
                changeHandler={(e: any) =>
                  setUser({ ...user, username: e.target.value })
                }
              />
              <InputBox
                placeholder="email..."
                image={email}
                value={user.email}
                changeHandler={(e: any) =>
                  setUser({ ...user, email: e.target.value })
                }
              />
              <InputBox
                placeholder="password..."
                image={password}
                value={user.password}
                changeHandler={(e: any) =>
                  setUser({ ...user, password: e.target.value })
                }
              />
              <InputBox
                placeholder="upload resume..."
                image={upload}
                value={""}
                changeHandler={(e: any) => console.log("handle")}
              />
            </div>
            <FormButton
              text={"Login"}
              handler={handleClick}
              style={register_button_style}
              isDisabled={disabled}
            />
          </div>
          <>
            <span className="text-xs font-medium">
              Already Networkin'? <span className="text-[#F1C78E]">Login</span>
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Register;
