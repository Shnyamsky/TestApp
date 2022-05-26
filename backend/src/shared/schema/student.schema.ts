import { Type } from "@sinclair/typebox"

export const Student = Type.Object({
  name: Type.String(),
  surName: Type.String(),
  studyYear: Type.Number(),
  studyGroup: Type.String()
})
