import { PropsWithChildren } from "react";
import tw from "twin.macro";
import { PageMeta } from "../../types/components";
import Container from "../../components/container";

export default function PublicLayout({
  children,
}: PageMeta & PropsWithChildren) {
  return <Container>{children}</Container>;
}
