import { Brand } from "./brand"

export type Email = Brand<string, "Email">

export function createEmail(value: string): Email {
  if (!value.includes("@")) {
    throw new Error("Invalid email")
  }

  return value as Email
}