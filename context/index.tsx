import { Fragment, PropsWithChildren } from "react";

export default function Context({ children }: PropsWithChildren) {
  return (
    <Fragment>
      {/* All Context Providers will wrap children */}
      {children}
    </Fragment>
  );
}
