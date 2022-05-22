import axios from "axios"

type LoginData = { email: string; password: string }

export const login = (loginData: LoginData) =>
  axios.post(`/api/users/login`, { user: loginData }).then((res) => res.data)
