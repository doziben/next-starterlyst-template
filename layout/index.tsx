import tw from "twin.macro";
import { useEffect } from "react";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageMeta, PageMetaLayout } from "../types/components";
import AuthLayout from "./auth";
import toast from "react-hot-toast";
import PublicLayout from "./public";
import SEOConfig from "../components/SEO";

type layout = {
  [t in PageMetaLayout]: JSX.Element;
};

export default function Layout({ children, Component, PageProps }: any) {
  const meta: PageMeta = Component?.meta;
  const router = useRouter();

  const isLoggedIn = false;

  useEffect(() => {
    // if they are authenticated, send them to their role
    if (meta?.allowAccess === "noauth" && isLoggedIn) {
      toast.error("You are signed in already ✅");
      // authEngine?.currentUser &&
      //   router.replace(`/${authEngine?.currentUser?.role}`);
    }

    // if they are not authenticated, send them back to the login page (/)
    if (meta?.allowAccess === "auth" && !isLoggedIn) {
      toast.error("Unauthorized ⚠️");
      router.replace("/");
    }
  }, [meta?.allowAccess, isLoggedIn, router]);

  const layouts: layout = {
    blank: <>{children}</>,
    public: <PublicLayout {...PageProps}>{children}</PublicLayout>,
    auth: <AuthLayout {...PageProps}>{children}</AuthLayout>,
  };

  let render = layouts[(meta?.layout as keyof typeof layouts) ?? "blank"];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <SEOConfig title={meta?.title} />
      {render}
    </motion.div>
  );
}
