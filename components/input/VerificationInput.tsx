import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import tw from "twin.macro";

type VerificationInputProps = {
  length: number;
  label?: string;
  loading?: boolean;
  onComplete: (code: string) => void;
};

export default function VerificationInput({
  length,
  label,
  loading,
  onComplete,
}: VerificationInputProps) {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      (inputs.current as any)[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      (inputs.current as any)[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <label className="code-label">{label}</label>
      <div className="code-inputs">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
            />
          );
        })}
      </div>
    </div>
  );
}
