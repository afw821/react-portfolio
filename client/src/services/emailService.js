import http from "./httpService";

const apiUrl = "http://localhost:3900/api";

export async function sendMessage(email, message, name) {
  await http.get(apiUrl + `/messages/${name}/${email}/${message}`);
}
