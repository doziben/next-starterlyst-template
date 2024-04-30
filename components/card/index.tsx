import tw from "twin.macro";
import { CardProps } from "../../types/components";
import { useContext, useEffect, useId, useState } from "react";
import CardContext from "../../context/CardContext";

export default function Card({ children, ...otherProps }: CardProps) {
  const { focusedCard } = useContext(CardContext);
  const [opacity, setOpacity] = useState(1);

  const isCurrentlyFocused = focusedCard === otherProps?.id;
  const otherCardFocused = focusedCard?.length > 0;

  useEffect(() => {
    if (!isCurrentlyFocused && !otherCardFocused) {
      setOpacity(1);
    }

    if (isCurrentlyFocused) {
      setOpacity(1);
    }

    if (otherCardFocused && !isCurrentlyFocused) {
      setOpacity(0.3);
    }
  }, [opacity, isCurrentlyFocused, otherCardFocused]);

  return (
    <section
      tw="bg-white transition-all rounded-3xl p-5 md:(p-6)"
      {...otherProps}
      style={{
        opacity: opacity,
        ...otherProps.style,
      }}
    >
      {children}
    </section>
  );
}
