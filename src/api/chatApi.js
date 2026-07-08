import axios from "axios";

const API = axios.create({
  baseURL: "https://govassist-backend-ykkx.onrender.com",
});

export const askQuestion = async (question) => {
  const response = await API.post("/chat", {
    question,
  });

  return response.data;
};