const url = "https://bootcamp-api.codeit.kr/api/sample";

export async function getUser() {
  const response = await fetch(`${url}/user`);
  const result = response.json();
  return result;
}

export async function getFolder() {
  const response = await fetch(`${url}/folder`);
  const result = response.json();
  return result;
}
