const url = "https://bootcamp-api.codeit.kr/api";

export async function getUser() {
  const response = await fetch(`${url}/sample/user`);
  const result = response.json();
  return result;
}

export async function getFolder() {
  const response = await fetch(`${url}/sample/folder`);
  const result = response.json();
  return result;
}

export async function getLink() {
  const response = await fetch(`${url}/users/1/folders`);
  const result = response.json();
  return result;
}
