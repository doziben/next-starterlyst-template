import tw from "twin.macro";
import { Children, HTMLAttributes, ReactNode } from "react";

type ListSpacerProps = {
  children: ReactNode;
  spacing: string | number;
};

export default function ListSpacer({
  children,
  spacing,
  ...otherProps
}: ListSpacerProps & HTMLAttributes<HTMLUListElement>) {
  return (
    <ul {...otherProps}>
      {Children.map(children, (child, index) => {
        if (child?.toString() === "li") {
          throw new Error("Children should not be list elements");
        }

        return (
          <li
            key={index}
            style={{
              marginBottom: spacing,
            }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}
