import { Type } from "@sinclair/typebox"

export const ErrorReply = Type.Object({
  statusCode: Type.Number(),
  error: Type.String(),
  message: Type.String()
})
