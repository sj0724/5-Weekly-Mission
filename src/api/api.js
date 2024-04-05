import axios from "../instance/axiosInstance";

export async function getSampleUser() {
  const response = await axios.get("/sample/user");
  const result = response.data;
  return result;
}

export async function getSampleFolder() {
  const response = await axios.get("/sample/folder");
  const result = response.data;
  return result;
}

export async function getFolder(id) {
  const response = await axios.get(`/users/${id}/folders`);
  const result = response.data;
  return result;
}

export async function getFolderList({ folderId = "", userId }) {
  const query = `/${userId}/links?folderId=${folderId}`;
  const response = await axios.get(`/users${query}`);
  const result = response.data;
  return result;
}

export async function getUser(id) {
  const response = await axios.get(`/users/${id}`);
  const result = response.data;
  return result;
}
