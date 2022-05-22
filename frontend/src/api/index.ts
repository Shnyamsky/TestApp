import * as resultApi from "./resultApi"
import * as testApi from "./testApi"
import * as userApi from "./userApi"

const API = { ...testApi, ...userApi, ...resultApi }

export { API }
