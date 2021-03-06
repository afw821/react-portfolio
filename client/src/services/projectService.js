import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export function getProjects() {
  return http.get(deployedApiUrl + "/projects");
}

export function addProject(
  title,
  description,
  technologies,
  deployedUrl,
  gitHubUrl,
  imgUrl
) {
  const obj = {
    title,
    description,
    technologies,
    deployedUrl,
    gitHubUrl,
    imgUrl,
  };
  return http.post(deployedApiUrl + "/projects", obj);
}

export function getProjectById(projectId) {
  return http.get(deployedApiUrl + `/projects/${projectId}`);
}

export function deleteProject(id) {
  return http.delete(deployedApiUrl + `/projects/${id}`);
}

export function updateProject(
  _id,
  sequence,
  title,
  technologies,
  imgUrl,
  gitHubUrl,
  description,
  deployedUrl
) {
  const reqBody = {
    sequence: sequence,
    title: title,
    technologies: technologies,
    imgUrl: imgUrl,
    gitHubUrl: gitHubUrl,
    description: description,
    deployedUrl: deployedUrl,
  };

  return http.put(deployedApiUrl + `/projects/${_id}`, reqBody);
}
