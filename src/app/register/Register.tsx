"use client";
import { useEffect, useState } from "react";
import FormButton from "../../components/Buttons/FormButton";
import {
  login_button_style,
  register_button_style,
} from "../../components/styles";
import { email, password, userIcon } from "../../assets/exportAssets";
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
    <div>
      <div className="flex flex-col items-center mt-[40vh]">
        <h1 className="text-white">{loading ? "Loading..." : "Register"}</h1>
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
        <FormButton
          text={"Register"}
          handler={handleClick}
          style={register_button_style}
          isDisabled={disabled}
        />
      </div>
    </div>
  );
};

export default Register;
