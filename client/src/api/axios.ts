import dotenv from "dotenv"

dotenv.config()

import axios from "axios"

export const api = axios.create({
    baseURL: process.env.ROUT
})