export type UserState = {
  name: string | null
  surName: string | null
  studyYear?: number
  studyGroup?: string
  isAuthorized: boolean
  isAdmin: boolean
}

export type EnterPayload = {
  name: string
  surName: string
}
