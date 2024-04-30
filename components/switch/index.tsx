import tw, { theme } from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes } from "react";

export type SwitchProps = {
  isChecked?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Switch({ isChecked, ...divProps }: SwitchProps) {
  const green = theme`colors.accent.green`;
  const gray = theme`colors.common.grayBg`;

  return (
    <div
      tw="transition-all p-1.5 rounded-full w-[4.25rem] flex cursor-pointer"
      aria-checked={isChecked}
      role="checkbox"
      style={{
        backgroundColor: isChecked ? green : gray,
        // justifyContent: isChecked ? "flex-start" : "flex-end",
      }}
      {...divProps}
    >
      <motion.span
        tw="transition-all block w-6 rounded-full  h-6 shadow bg-white"
        style={{
          translateX: isChecked ? "130%" : "0",
        }}
      />
    </div>
  );
}
