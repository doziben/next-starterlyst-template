import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, useCallback, useMemo } from "react";
import tw from "twin.macro";

export type BreadCrumbItemProps = {
  index: number;
  title: string;
  href: string;
  disabled?: boolean;
};

type WrapperStyle = {
  isDisabled?: boolean;
  isCurrent?: boolean;
  isFilled?: boolean;
};

const Wrapper = styled.button(
  ({ isCurrent, isDisabled, isFilled }: WrapperStyle) => [
    tw`transition-all w-[max-content]  p-2 flex gap-2 items-center font-bold hover:(scale-90)`,
    isCurrent && tw`text-primary-200`,
    isFilled && tw`text-common-black`,
    isDisabled && tw`text-common-grayText`,
  ]
);

const Icon = styled.span(
  ({ isCurrent, isDisabled, isFilled }: WrapperStyle) => [
    tw`transition-all rounded-full text-xs font-normal h-6 w-6 grid place-content-center`,
    isCurrent && tw`bg-primary-300`,
    isFilled && tw`bg-common-border`,
    isDisabled && tw`bg-common-border opacity-60`,
  ]
);

export default function BreadCrumbItem({
  href,
  index,
  title,
  disabled,
}: BreadCrumbItemProps) {
  const router = useRouter();

  const properties = useMemo(() => {
    const currentPath = router.asPath;
    const currentStepIndex = router?.query?.step
      ? parseInt(router.query.step.toString())
      : 0;

    return {
      isCurrent: currentPath === href,
      isFilled: index < currentStepIndex,
      isDisabled: disabled || index > currentStepIndex,
      currentStepIndex,
    };
  }, [router, href, disabled, index]);

  const onClick = useCallback(() => {
    router.push(href);
  }, [router, href]);

  return (
    <Wrapper role="tab" {...{ onClick, ...properties }}>
      <Icon {...properties}>{index + 1}</Icon>
      <Fragment>{title}</Fragment>
    </Wrapper>
  );
}
