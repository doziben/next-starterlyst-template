import tw from "twin.macro";
import Typography from "../typography";
import { CloseCircle } from "iconsax-react";
import { ModalHeaderProps } from "../../types/components";

export default function ModalHeader({
  title,
  onClose,
  disableClose,
  icon,
  description,
}: ModalHeaderProps) {
  return (
    <header tw="p-4">
      <section tw="flex justify-between ">
        <div tw="flex gap-4 items-center">
          <span>{icon}</span>
          <div>
            <Typography.H3>{title}</Typography.H3>
          </div>
        </div>
        {!disableClose && (
          <button tw="" onClick={onClose}>
            <CloseCircle tw="hover:(scale-105) dark:(text-gray-400)" />
          </button>
        )}
      </section>
      {description && (
        <Typography.P tw="mt-2" isGrey>
          {description}
        </Typography.P>
      )}
    </header>
  );
}
