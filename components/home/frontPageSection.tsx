import React from "react";
import Container from "../common/container";

export default function FrontPageSection({
  title,
  description,
  children,
  backgroundColor,
}: {
  title: string;
  description: string | undefined;
  children: JSX.Element | JSX.Element[];
  backgroundColor: boolean;
}) {
  return (
    <div
      className={
        backgroundColor
          ? "w-screen h-screen flex-auto bg-primary"
          : "w-screen h-screen flex-auto bg-background"
      }
    >
      <div className="flex flex-col relative top-1/2 -translate-y-2/4">
        <p
          className={
            backgroundColor
              ? "text-3xl text-center font-bold my-6 p-3 text-white"
              : "text-3xl text-center font-bold my-6 p-3 text-grey"
          }
        >
          {title}
        </p>
        {description ? (
          <div className="flex flex-row p-3">
            <Container>
              <p
                className={
                  backgroundColor
                    ? "text-center text-grey"
                    : "text-center text-light-grey"
                }
              >
                {description}
              </p>
            </Container>
          </div>
        ) : (
          <></>
        )}
        <Container>{children}</Container>
      </div>
    </div>
  );
}
