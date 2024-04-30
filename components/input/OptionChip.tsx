import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import tw from "twin.macro";

type OptionChipProps = {
  isSelected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Component = styled.div(({ isSelected }: OptionChipProps) => [
  tw`cursor-pointer transition-all px-3 py-1 text-sm  rounded-lg bg-[rgba(255, 255, 255, 0.05)] dark:(text-white)`,
  isSelected ? tw`opacity-100` : tw`opacity-50`,
]);

export default function OptionChip({
  onSelect,
  isSelected,
  children,
  ...otherProps
}: OptionChipProps) {
  return <Component {...{ ...otherProps, isSelected }}>{children}</Component>;
}
