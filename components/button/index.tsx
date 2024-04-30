import tw from "twin.macro";
import styled from "@emotion/styled";

import ButtonSpinner from "./ButtonSpinner";
import { ButtonHTMLAttributes, Fragment } from "react";
import { ButtonProps } from "../../types/components";
import Link from "next/link";

interface styles {
  variant: ButtonProps["variant"];
}

const StyledButton = styled.a(({ variant }: styles) => [
  tw` transition-all w-[fit-content] font-black uppercase cursor-pointer flex text-center justify-center rounded-full  px-6 py-4  hover:(scale-95)`,
  variant === "primary" &&
    tw`bg-primary-200 text-common-white disabled:(bg-common-grayText)`,
  variant === "secondary" && tw`border border-primary-200 text-primary-200`,
]);

export default function Button({
  children,
  variant,
  isLoading,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <Fragment>
      {!!href ? (
        <Link href={href} passHref>
          <StyledButton variant={variant ?? "primary"} {...props}>
            {isLoading ? ButtonSpinner : children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton
          variant={variant ?? "primary"}
          {...props}
          as={"button"}
          type={type}
        >
          {isLoading ? ButtonSpinner : children}
        </StyledButton>
      )}
    </Fragment>
  );
}

function Simple({
  children,
  ...props
}: {} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      tw="transition-all gap-3 flex text-center justify-center  p-2 hover:(scale-95) dark:(text-white)"
      {...props}
    >
      {children}
    </button>
  );
}

Button.Simple = Simple;
