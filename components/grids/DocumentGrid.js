"use client";

import { useMemo } from "react";
import { documents } from "@/data/documents";
import GridContainer from "./GridContainer";

export function DocumentGrid() {
  const memoizedCourses = useMemo(() => documents, []);
  return <GridContainer items={memoizedCourses} />;
}
