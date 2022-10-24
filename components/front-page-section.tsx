import React from "react";

export default function FrontPageSection({
  title,
  description,
  children,
  backgroundColor,
}: {
  title: string;
  description: string;
  children: JSX.Element | string;
  backgroundColor: boolean;
}) {
  return (
    <div
      className={
        backgroundColor
          ? "w-screen flex-auto bg-primary"
          : "w-screen flex-auto bg-background"
      }
    >
      <div className="flex flex-col">
        <p
          className={
            backgroundColor
              ? "text-3xl text-center font-bold my-6 p-3 text-white"
              : "text-3xl text-center font-bold my-6 p-3 text-grey"
          }
        >
          {title}
        </p>
        <div className="flex flex-row p-3">
          <div className="flex w-1/4" />
          <p
            className={
              backgroundColor
                ? "text-center text-grey"
                : "text-center text-light-grey"
            }
          >
            {description}
          </p>
          <div className="flex w-1/4" />
        </div>
        {children}
      </div>
    </div>
  );
}
