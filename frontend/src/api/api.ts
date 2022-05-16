import axios from "axios"

export const loginRequest = (loginData: { email: string; password: string }) =>
  axios.post(`/api/users/login`, { user: loginData }).then((res) => res.data)

export const getPassingTest = (slug: string) => () => {
  return axios.get(`/api/tests/${slug}`).then((res) => res.data)
}

export const saveTest = (test) => axios.put(`/api/tests`, { test })

export const saveResult = (result) => axios.post(`/api/result`, { result })

export const getResults = () => axios.get("/api/result").then((res) => res.data)

export const getTests = () => axios.get("/api/tests").then((res) => res.data)
