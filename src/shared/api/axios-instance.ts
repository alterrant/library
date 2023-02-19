import axios from "axios";
import { BASE_URL } from "shared/lib";

export const instance = axios.create({
    baseURL: BASE_URL,
});
