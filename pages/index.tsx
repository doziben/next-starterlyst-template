import tw from "twin.macro";
import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { PageMeta } from "../types/components";

const Home = () => {
  return <main></main>;
};

const meta: PageMeta = {
  pageKey: "home",
  layout: "public",
  title: "Home",
  allowAccess: "all",
};

Home.meta = meta;

export default Home;
