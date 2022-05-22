import { Condition } from "./Condition"
import { Question } from "./Question"

export type Test = {
  title: string
  questions: Question[]
  conditions: Condition[]
  slug: string
}

export type PartialTest = {
  title: string
  questions: Question[]
  conditions: Condition[]
  slug?: string
}
