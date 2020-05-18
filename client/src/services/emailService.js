import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export async function sendMessage(email, message, name) {
  const { data } = await http.post(apiUrl + "/messages", {
    email: email,
    message: message,
    name: name,
  });
  return data.sent;
}
