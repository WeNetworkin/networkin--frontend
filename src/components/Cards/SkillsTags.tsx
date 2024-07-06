import React from "react";
import TagList from "../Tags/TagList";

interface SkillsTagsProps {
  tags: string[];
  addNew?: any;
}

const SkillsTags = ({ tags, addNew }: SkillsTagsProps) => {
  return (
    <div className="w-full">
      <TagList tags={tags} />
      <div>{addNew}</div>
    </div>
  );
};

export default SkillsTags;
