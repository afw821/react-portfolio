import http from "./httpService";
import { apiUrl } from "../config.json";

export function getProjects() {
  return http.get(apiUrl + "/projects");
}

export function addProject(title, description, technologies, deployedUrl, gitHubUrl, imgUrl) {
  const obj = {
    title,
    description,
    technologies,
    deployedUrl,
    gitHubUrl,
    imgUrl
  }
  return http.post(apiUrl + "/projects", obj);
}

export function deleteProject(id) {
  return http.delete(apiUrl + `/projects/${id}`);
}
