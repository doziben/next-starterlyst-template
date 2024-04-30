import tw from "twin.macro";
import { PropsWithChildren } from "react";
import { PageMeta } from "../../types/components";
import illustration from "../../../public/images/writing.png";
import blurs from "../../../public/images/authBlurs.svg";
import Image from "next/image";
import Container from "../../components/container";

export default function AuthLayout({ children }: PageMeta & PropsWithChildren) {
  return <Container>{children}</Container>;
}
