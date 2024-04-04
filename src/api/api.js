const url = "https://bootcamp-api.codeit.kr/api";

export async function getSampleUser() {
  const response = await fetch(`${url}/sample/user`);
  const result = response.json();
  return result;
}

export async function getSampleFolder() {
  const response = await fetch(`${url}/sample/folder`);
  const result = response.json();
  return result;
}

export async function getFolder(id) {
  const response = await fetch(`${url}/users/${id}/folders`);
  const result = response.json();
  return result;
}

export async function getFolderList({ folderId = "", userId }) {
  const query = `/${userId}/links?folderId=${folderId}`;
  const response = await fetch(`${url}/users${query}`);
  const result = response.json();
  return result;
}

export async function getUser(id) {
  const response = await fetch(`${url}/users/${id}`);
  const result = response.json();
  return result;
}
