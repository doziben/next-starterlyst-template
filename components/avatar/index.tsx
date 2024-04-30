import styled from "@emotion/styled";
import Image from "next/image";
import tw from "twin.macro";
import useRandomColor from "../../hooks/custom/useRandomColor";

type AvatarProps = {
  userName?: string;
  imgSrc?: string;
  size: "small" | "medium" | "large";
  className?: string;
  allowEdit?: boolean;
};

type styles = {
  size: AvatarProps["size"];
};

const styles = {
  small: tw`w-10 h-10 `,
  medium: tw`w-14 h-14  `,
  large: tw`w-24 h-24 `,
};

const Figure = styled.figure(({ size }: styles) => [
  tw`overflow-hidden  bg-blue-200 rounded-full `,
  styles[size],
]);

export default function Avatar({
  imgSrc = "",
  size,
  userName = "",
  className,
}: AvatarProps) {
  const hasImg = imgSrc.length > 3; //&& imgSrc?.length > 10;

  const backgroundColor = useRandomColor();
  const userNameArr = typeof userName === "string" ? userName.split(" ") : [];

  const firstInitial = userNameArr[0].substring(0, 1).toUpperCase();
  const lastInitial =
    userNameArr.length - 1 !== 0
      ? userName[1].substring(0, 1).toUpperCase()
      : "";

  const initials = `${firstInitial}${lastInitial}`;

  return (
    <Figure
      tw="text-white rounded-full relative grid place-content-center overflow-hidden"
      style={{ backgroundColor }}
      size={size}
      className={className}
    >
      {hasImg ? (
        <Image
          src={imgSrc ?? ""}
          alt={userName}
          tw="rounded-full w-full"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <p>{initials}</p>
      )}
    </Figure>
  );
}
