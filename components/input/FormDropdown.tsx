import tw from "twin.macro";
import { FormDropdownProps } from "../../types/components";

export default function FormDropdown<T>({
  options,
  handleChange,
  ...otherProps
}: FormDropdownProps<T>) {
  return (
    <section>
      {otherProps?.name && (
        <div tw="flex mb-3 items-center justify-between">
          <label tw="text-xs tracking-wide uppercase text-common-grayText">
            {otherProps?.name ?? "Title"}
          </label>
        </div>
      )}

      <div tw="px-4 py-3 transition-all rounded-full flex gap-2 items-center bg-common-grayBg">
        <select
          tw="outline-none w-full bg-transparent "
          onChange={(e) =>
            handleChange?.changeHandler(handleChange.id, e.target.value)
          }
          {...otherProps}
        >
          {options.map((v, i) => {
            return <option key={otherProps?.name + " " + i}>{v}</option>;
          })}
        </select>
      </div>
    </section>
  );
}
