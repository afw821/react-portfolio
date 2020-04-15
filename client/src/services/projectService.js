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
  console.log('projects serive obj', obj);
  return http.post(apiUrl + "/projects", obj);
}
