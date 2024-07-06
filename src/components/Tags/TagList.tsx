import React from "react";
import Tag from "./Tag";

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag: string, index: number) => {
        return <Tag key={index} text={tag} image={true} />;
      })}
    </div>
  );
};

export default TagList;
