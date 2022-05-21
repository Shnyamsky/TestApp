export type EditTestState = {
  title: string
  questions: Question[]
}

export type Question = {
  text: string
  answers: Answer[]
  answersType?: "checkbox" | "radio"
}

export type Answer = {
  text: string
  points: number
}
