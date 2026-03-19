import { Brand } from "./brand"

export type EnrollmentId = Brand<string, "EnrollmentId">

export function createEnrollmentId(value: string): EnrollmentId | Error {
  const regex = /^ENR-.+/

  if (!regex.test(value)) {
    return new Error("Invalid EnrollmentId")
  }

  return value as EnrollmentId
}