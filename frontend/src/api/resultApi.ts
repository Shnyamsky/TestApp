import axios from "axios"

export const saveResult = (result) => axios.post(`/api/result`, { result })

export const getCurrentResults = (slug: string) => () => axios.get(`/api/result/${slug}`).then((res) => res.data)
