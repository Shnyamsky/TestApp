import axios from "axios"
import { PartialTest, Test } from "../types"

export const createTest = (test: PartialTest) => axios.post(`/api/tests`, { test })

export const saveTest = (test: PartialTest) => axios.put(`/api/tests`, { test })

export const updateTest = (test: PartialTest) => axios.put(`/api/tests`, { test })

export const getPassingTest = (slug: string) => (): Promise<Test> =>
  axios.get(`/api/tests/${slug}`).then((res) => res.data)

export const getTests = () => axios.get("/api/tests").then((res) => res.data)

export const deleteTest = (slug: string) => () => axios.delete(`/api/tests/${slug}`).then((res) => res.data)
