import React from "react";

export default function FrontPageSection({
  title,
  description,
  child,
}: {
  title: string;
  description: string;
  child: JSX.Element;
}) {
  return (
    <div className="w-screen flex-auto bg-background">
      <div className="flex flex-col">
        <p className="text-3xl text-center font-bold my-6 p-3 text-grey">
          {title}
        </p>
        <div className="flex flex-row p-3">
          <div className="flex w-1/4" />
          <p className="text-center text-light-grey">{description}</p>
          <div className="flex w-1/4" />
        </div>
        {child}
      </div>
    </div>
  );
}
