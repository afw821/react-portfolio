import http from './httpService';
import { apiUrl, deployedApiUrl } from "../config.json";

export function getTechnologies() {
    return http.get(deployedApiUrl + "/technologies");
}