import React from "react";
import Tag from "./Tag";

const TagList = (tags: string[]) => {
    return (
        <div className="grid ">
            {tags.map((tag: string, index: number) => {
                return <Tag key={index} text={tag} image={true} />;
            })}
        </div>
    );
};

export default TagList;
