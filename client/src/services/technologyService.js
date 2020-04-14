import http from './httpService';
import { apiUrl } from "../config.json";

export function getTechnologies() {
    return http.get(apiUrl + "/technologies");
}