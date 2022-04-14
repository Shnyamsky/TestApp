import { Static, Type } from "@sinclair/typebox"

export const UserReply = Type.Object({
  user: Type.Object({
    email: Type.String({ format: "email" }),
    surName: Type.String(),
    name: Type.String()
  })
})

export type UserReplyType = Static<typeof UserReply>
