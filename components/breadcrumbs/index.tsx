import tw from "twin.macro";
import BreadCrumbItem, { BreadCrumbItemProps } from "./breadCrumbItem";
import { useMemo } from "react";
import { useRouter } from "next/router";

export type BreadCrumbsProps = {
  options: Omit<BreadCrumbItemProps, "index">[];
  showProgressBar?: boolean;
};

export default function BreadCrumbs({
  options,
  showProgressBar,
}: BreadCrumbsProps) {
  const router = useRouter();
  const currentStepIndex = router?.query?.step
    ? parseInt(router.query.step.toString())
    : 0;

  const progressBarLength = useMemo(() => {
    const result = (currentStepIndex / options.length) * 100;

    return `${result + 8}%`;
  }, [currentStepIndex, options.length]);

  return (
    <nav tw="px-5 py-1 overflow-hidden relative border border-common-border border-t-0 border-r-0 border-l-0">
      <ul tw="flex items-center gap-4 overflow-scroll" className="hide-scroll">
        {options?.map((op, index) => {
          return (
            <li key={op.title}>
              <BreadCrumbItem {...{ index, ...op }} />
            </li>
          );
        })}
      </ul>

      <span
        tw="absolute transition-all left-0 block bottom-0 h-0.5 bg-accent-green"
        role="progressbar"
        style={{
          visibility: showProgressBar ? "visible" : "hidden",
          width: progressBarLength,
        }}
      ></span>
    </nav>
  );
}
