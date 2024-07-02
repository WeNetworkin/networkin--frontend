import { useEffect, useState } from "react";
import FormButton from "../../components/Buttons/FormButton";
import { register_button_style } from "../../components/styles";
import InputBox from "../../components/Inputs/InputBox";
import { password, userIcon } from "../../assets/exportAssets";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      // Logic to handle API Calls

      // const isEmail = user.email.includes("@");
      // const userData = isEmail
      //   ? { email: user.email, password: user.password }
      //   : { username: user.email, password: user.password };
      //   const response = await axios.post("apiPath", userData);
      //   console.log("User logged in ", response);
      setLoading(false);
    } catch (err: any) {
      console.error("Login failed!");
    }
  };

  useEffect(() => {
    if ((user.email || user.username) && user.password.length > 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);
  console.log(user);
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-full w-full">
      <h1 className="text-white font-thin text-4xl">
        {loading ? "Loading..." : "welcome back"}
      </h1>
      <div className="w-max h-max p-20 border border-[#ECB365] rounded-3xl">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-20 items-center">
            <div className="flex flex-col gap-4 items-center mt-10">
              <InputBox
                placeholder="username or email..."
                image={userIcon}
                value={user.email}
                changeHandler={(e: any) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              <InputBox
                placeholder="password..."
                image={password}
                value={user.password}
                changeHandler={(e: any) =>
                  setUser({ ...user, password: e.target.value })
                }
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
              New to Networkin'?{" "}
              <span className="text-[#F1C78E]">Register</span>
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Login;
