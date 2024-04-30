import tw from "twin.macro";
import { InputFieldProps } from "../../types/components";
import { useId, useState } from "react";
import OptionChip from "./OptionChip";
import styled from "@emotion/styled";

type i = { focused: boolean; errored: boolean };

const InputWrapper = styled.div(({ focused, errored }: i) => [
  tw`px-4 py-3 transition-all rounded-full flex gap-2 items-center bg-common-grayBg`,
  focused && tw`border bg-transparent border-primary-200`,
  errored && tw`border bg-transparent border-status-bad`,
]);

export default function FormInput<T>({
  handleChange,
  endOptions,
  onSelectEndOption,
  error,
  ...otherProps
}: InputFieldProps<T>) {
  const id = useId();

  const [inputState, setInputState] = useState({
    focused: false,
    hovered: false,
  });

  return (
    <section className="group">
      {otherProps?.name && (
        <label tw="text-xs tracking-wide uppercase mb-3 text-common-black">
          {otherProps?.name ?? "Title"}
        </label>
      )}

      <InputWrapper
        focused={inputState?.hovered || inputState.focused}
        errored={!!error}
      >
        <input
          tw="outline-none w-full bg-transparent placeholder:(text-common-grayText) text-common-black"
          onChange={(e) => {
            !!handleChange
              ? handleChange?.changeHandler(handleChange.id, e.target.value)
              : otherProps.onChange && otherProps.onChange(e);
          }}
          onFocus={(e) => {
            setInputState((p) => ({ ...p, focused: true }));
          }}
          onBlur={(e) => {
            setInputState((p) => ({ ...p, focused: false }));
          }}
          {...otherProps}
        />

        {endOptions && (
          <ul tw="flex gap-2">
            {endOptions?.map((v) => {
              function handleSelect() {
                onSelectEndOption && onSelectEndOption(v.title);
              }
              return (
                <OptionChip
                  key={v.title}
                  isSelected={v.isSelected}
                  onClick={handleSelect}
                >
                  {v.title}
                </OptionChip>
              );
            })}
          </ul>
        )}
      </InputWrapper>

      {!!error && (
        <h5 title="Error" tw="text-sm mt-3 text-status-bad">
          {error}
        </h5>
      )}
    </section>
  );
}
