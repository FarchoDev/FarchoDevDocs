"use client";

import { useMemo } from "react";
import { complementary } from "@/data/complementary";
import GridContainer from "./GridContainer";

export function ComplementaryGrid() {
  const memoizedCourses = useMemo(() => complementary, []);
  return <GridContainer items={memoizedCourses} />;
}
