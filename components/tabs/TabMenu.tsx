import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import tw from "twin.macro";

export interface TabMenuOptionProps {
  isActive?: boolean;
  title: string;
  route?: string;
  onClick?: MouseEventHandler;
}

interface TabMenuProps {
  triggerType: "route" | "state";
  options: TabMenuOptionProps[];
}

interface Styles {
  isActive: boolean;
}

const StyledAnchor = styled.a(({ isActive }: Styles) => [
  tw`transition-all w-full text-center py-2.5 font-semibold text-gray-400  `,
  isActive &&
    tw`border border-primary-200 border-b-[1.5px] border-t-0 border-l-0 border-r-0  text-black `,
]);

export default function TabMenu({ options, triggerType }: TabMenuProps) {
  const isRoute = triggerType === "route";
  const router = useRouter();
  console.log(router);

  return (
    <nav tw="flex w-full items-center border border-[#e8e8e8] border-t-0 border-r-0 border-l-0">
      {options.map(({ title, isActive, route, onClick }) => {
        return isRoute ? (
          <Link key={title} href={route!} passHref>
            <StyledAnchor isActive={router.asPath === route}>
              {title}
            </StyledAnchor>
          </Link>
        ) : (
          <StyledAnchor
            key={title}
            isActive={isActive!}
            className="ease-transition"
            onClick={onClick}
          >
            {title}
          </StyledAnchor>
        );
      })}
    </nav>
  );
}
