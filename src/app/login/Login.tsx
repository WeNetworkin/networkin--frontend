import { useEffect, useState } from "react";
import FormButton from "../../components/Buttons/FormButton";
import { login_button_style } from "../../components/styles";
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
    <div>
      <div className="flex flex-col items-center mt-[40vh]">
        <h1 className="text-white">{loading ? "Loading..." : "Login"}</h1>
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
        <FormButton
          text={"Login"}
          handler={handleClick}
          style={login_button_style}
          isDisabled={disabled}
        />
      </div>
    </div>
  );
};

export default Login;
