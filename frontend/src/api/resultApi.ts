import axios from "axios"
import { Result } from "../types"

export const saveResult = (result: Result) => axios.post(`/api/result`, { result })

export const getCurrentResults = (slug: string) => () => axios.get(`/api/result/${slug}`).then((res) => res.data)
