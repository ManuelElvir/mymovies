import APIClient from "../ApiClient"

const apiClient = new APIClient()

export interface signInProps {
    username : string,
    password: string
}

export interface signUpProps {
    username : string,
    email : string,
    password: string,
    user_key?: string | null
}

export const list = (page:number) => {
    return apiClient.get(`/movie/changes`, {page})
    .then((response:any) => response.json())
}

export const search = (search : string, page : number) => {
    return apiClient.get(`/movie/changes`, {page})
    .then((response:any) => response.json())
}

export const getHomeData = (page : number, language: string) => {
    return apiClient.get(`/movie/popular?`, {page, language})
    .then((response:any) => response.json())
}

export const getLiveData = (page : number, language: string) => {
    return apiClient.get(`/movie/now_playing?`, {page, language})
    .then((response:any) => response.json())
}
export const getUpcomingData = (page : number, language: string) => {
    return apiClient.get(`/movie/upcoming?`, {page, language})
    .then((response:any) => response.json())
}
export const getTrendsData = (page : number, language: string) => {
    return apiClient.get(`/movie/top_rated?`, {page, language})
    .then((response:any) => response.json())
}