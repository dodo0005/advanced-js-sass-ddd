import { Brand } from "./brand"

export type StudentId = Brand<string, "StudentId">

export function createStudentId(id: string): StudentId {
  if (!/^STU-\d+$/.test(id)) {
    throw new Error("Invalid StudentId format (expected STU-123)")
  }

  return id as StudentId
}