import { useState, useEffect } from "react";

function useRandomColor(): string {
  const [color, setColor] = useState<string>("#000000");

  useEffect(() => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  return color;
}

export default useRandomColor;
