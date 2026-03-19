import { Brand } from "./brand"

export type Semester = Brand<string, "Semester">

export function createSemester(value: string): Semester | Error {
  const regex = /^(Fall|Spring|Summer)\d{4}$/

  if (!regex.test(value)) {
    return new Error("Invalid semester format")
  }

  return value as Semester
}