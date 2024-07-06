import { TagsProps } from "../../types/interfaces/Tags";
import { close } from "../../assets/exportAssets";

const Tag = ({ text, image }: TagsProps) => {
  return (
    <div className="py-2 px-4 flex items-center gap-6 border border-[#E69A33] rounded-full my-1">
      <div>{text}</div>
      {image && (
        <div>
          <img src={close} alt="cut" />
        </div>
      )}
    </div>
  );
};

export default Tag;
