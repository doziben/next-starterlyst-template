import tw from "twin.macro";
import styled from "@emotion/styled";
import { TypographyProps, TypographyTextProps } from "../../types/components";

const headingStyles = {
  1: tw`text-[2.5rem] leading-[100%] lg:(text-[3rem]) xl:(text-[3.5rem]) `,
  2: tw`text-[2rem] leading-[100%] lg:(text-[2.5rem])  xl:(text-[3rem] ) `,
  3: tw`text-2xl leading-[100%]  lg:(text-[2.5rem]) `,
  4: tw`text-[1.5rem] lg:(text-[2rem]) `,
  5: tw`text-[1.1rem] lg:(text-[1.5rem]) `,
};

const Typo = styled.h1(
  tw`font-bold`,
  ({ level }: { level: keyof typeof headingStyles }) => [
    tw`text-dark-100`,
    headingStyles[level],
  ]
);

const H1 = ({ children, ...otherProps }: TypographyProps) => (
  <Typo as="h1" level={1} {...otherProps}>
    {children}
  </Typo>
);

const H2 = ({ children, ...otherProps }: TypographyProps) => (
  <Typo as="h2" level={2} {...otherProps}>
    {children}
  </Typo>
);

const H3 = ({ children, ...otherProps }: TypographyProps) => (
  <Typo as="h3" level={3} {...otherProps}>
    {children}
  </Typo>
);

const H4 = ({ children, ...otherProps }: TypographyProps) => (
  <Typo as="h4" level={4} {...otherProps}>
    {children}
  </Typo>
);

const H5 = ({ children, ...otherProps }: TypographyProps) => (
  <Typo as="h5" level={5} {...otherProps}>
    {children}
  </Typo>
);

const P = ({ children, isGrey, ...otherProps }: TypographyTextProps) => {
  return isGrey ? (
    <p tw="text-[rgba(0, 0, 0, 0.5)] lg:(text-xl)" {...otherProps}>
      {children}
    </p>
  ) : (
    <p tw="text-dark-100 lg:(text-xl)" {...otherProps}>
      {children}
    </p>
  );
};

export default function Typography() {
  return <h1></h1>;
}

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.P = P;
