export type EditTestState = {
  title: string
  questions: Question[]
}

type Question = {
  text: string
  answers: Answer[]
}

type Answer = {
  text: string
  points: number
}
