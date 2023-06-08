import api from "./api";

export async function signUp(email, password, confirmPassword) {
  const response = await api.post("/register", { email, password, confirmPassword });
  return response.data;
}
