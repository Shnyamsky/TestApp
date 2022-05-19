import slugify from "slugify"

const random5digits = () => Math.floor(Math.random() * 90000) + 10000
export const createSlug = (input: string) => slugify(input) + random5digits()
