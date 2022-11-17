import { ReactNode } from "react";
import { H2 } from "../common/wouH";

type Props = {
  children?: ReactNode;
};

export default function PostTitle({ children }: Props) {
  return <H2>{children}</H2>;
}
