import { Brand } from "./brand"

export type CourseId = Brand<string, "CourseId">

export function createCourseId(id: string): CourseId {
  if (!/^COURSE-\d+$/.test(id)) {
    throw new Error("Invalid CourseId format (expected COURSE-123)")
  }

  return id as CourseId
}