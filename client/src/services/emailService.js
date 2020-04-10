import http from "./httpService";

const apiUrl = "http://localhost:3900/api";

export async function sendMessage(email, message, name) {
  console.log('obj', email, message, name);
  const result = await http.post(apiUrl + "/messages", { email: email, message: message, name: name });
  console.log('result', result);
}
