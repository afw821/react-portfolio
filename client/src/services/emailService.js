import http from "./httpService";

const apiUrl = "http://localhost:3900/api";


export async function sendMessage(email, message, name) {
  const { data } = await http.post(apiUrl + "/messages", { email: email, message: message, name: name });
  console.log('data.sent', data.sent);
  return data.sent;
}
