import { Test } from "../../../types"

export type EditTestState = Omit<Test, "slug">
