"use client";

import { useMemo } from "react";
import { courses } from "@/data/courses";
import GridContainer from "./GridContainer";

export function CourseGrid() {
  const memoizedCourses = useMemo(() => courses, []);
  return <GridContainer items={memoizedCourses} />;
}
