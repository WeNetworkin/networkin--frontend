import React, { useState } from "react";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Tag from "./components/Tags/Tag";
import InputAdd from "./components/Inputs/InputAdd";
import Card from "./components/Cards/Card";
import HeadingSkill from "./components/Cards/HeadingSkill";
import FormButton from "./components/Buttons/FormButton";
import { connect_button_style } from "./components/styles";
import SkillsTags from "./components/Cards/SkillsTags";
function App() {
    const [value, setValue] = useState("");

    const onConnectHandler = () => {
        // Click to Connect.
    };

    return (
        <div className="flex gap-10 m-6 h-full">
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <Tag text="Skills" image={true} /> */}
            {/* <InputAdd
                placeholder="Enter a Skill..."
                value={value}
                image=""
                changeHandler={(e: any) => {
                    setValue(e.target.value);
                }}
            /> */}
            <div className="w-[506px]">
                <Card
                    children={
                        <SkillsTags
                            tags={[
                                "Skill1",
                                "Skill2",
                                "Skill3",
                                "Skill4",
                                "Skill5",
                                "Skill6",
                                "Skill7",
                                "Skill8",
                            ]}
                            addNew={
                                <InputAdd
                                    placeholder="Enter A Skill..."
                                    value={value}
                                    image=""
                                    changeHandler={(e: any) => {
                                        setValue(e.target.value);
                                    }}
                                />
                            }
                        />
                    }
                    heading={<HeadingSkill />}
                    button={
                        <FormButton
                            text="Click To Connect"
                            handler={onConnectHandler}
                            style={connect_button_style}
                            isDisabled={false}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default App;
