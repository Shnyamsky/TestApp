export type UserState = {
  name: string | null
  surName: string | null
  isAuthorized: boolean
  isAdmin: boolean
}

export type EnterPayload = {
  name: string
  surName: string
}
