import axios from "../instance/axiosInstance";

export async function getSampleUser() {
  const { data } = await axios.get("/sample/user");
  return data;
}

export async function getSampleFolder() {
  const { data } = await axios.get("/sample/folder");
  return data;
}

export async function getFolder(id) {
  const { data } = await axios.get(`/users/${id}/folders`);
  return data;
}

export async function getFolderList({ folderId = "", userId }) {
  const query = `/${userId}/links?folderId=${folderId}`;
  const { data } = await axios.get(`/users${query}`);
  return data;
}

export async function getUser(id) {
  const { data } = await axios.get(`/users/${id}`);
  return data;
}
