import coreAxios from "../axios"

export const loadUser= async()=>{
    return (await coreAxios.get("/accounts/userView/"))?.data
}