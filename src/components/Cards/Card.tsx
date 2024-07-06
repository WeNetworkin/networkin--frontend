import React from "react";

interface CardProps {
  children: React.ReactNode;
  heading?: React.ReactNode;
  button?: React.ReactNode;
}

const Card = ({ children, heading, button }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-[#2A2A2A] rounded-2xl px-6 py-4">
        {heading && <div className="text-center">{heading}</div>}
        <div>{children}</div>
      </div>

      {button && <div>{button}</div>}
    </div>
  );
};

export default Card;
