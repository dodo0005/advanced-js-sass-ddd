import { Brand } from "./brand"

export type CourseCode = Brand<string, "CourseCode">

export function createCourseCode(value: string): CourseCode | Error {
  const regex = /^[A-Z]{2,4}\d{3}$/

  if (!regex.test(value)) {
    return new Error("Invalid CourseCode")
  }

  return value as CourseCode
}