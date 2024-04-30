import { Fragment } from "react";
import ButtonSpinner from "./ButtonSpinner";
import tw from "twin.macro";
import { UploadButtonProps } from "../../types/components";

export default function UploadButton({
  children,
  isLoading,
  id,
  ...otherInputProps
}: UploadButtonProps) {
  return (
    <Fragment>
      <label
        className="sleek-shadow ease-transition"
        tw="py-2 px-3 cursor-pointer flex gap-2 rounded-xl justify-center items-center border-[#e8e8e8] border hocus:(bg-common-grayBg) "
        htmlFor={id}
      >
        {isLoading ? ButtonSpinner : children}
      </label>

      <input type="file" id={id} hidden {...otherInputProps} />
    </Fragment>
  );
}
