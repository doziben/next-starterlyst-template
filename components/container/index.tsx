import { HTMLAttributes, PropsWithChildren } from "react";
import tw from "twin.macro";

export default function Container({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div tw="px-[1.6%] mx-auto max-w-[87rem]" {...props}>
      {children}
    </div>
  );
}
