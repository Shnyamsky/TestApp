import { Type } from "@sinclair/typebox"

export const Answer = Type.Object({
  text: Type.String(),
  points: Type.Number()
})
