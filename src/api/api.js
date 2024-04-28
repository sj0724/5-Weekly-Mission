import axios from '../instance/axiosInstance';

export async function getSampleUser() {
  const { data } = await axios.get('/sample/user');
  return data;
}

export async function getSampleFolder() {
  const { data } = await axios.get('/sample/folder');
  for (let i = 1; i < data.folder.count; i++) {
    data.folder.links[i].image_source = data.folder.links[i].imageSource;
    delete data.folder.links[i].imageSource;
  }
  return data;
}

export async function getFolder(id) {
  const { data } = await axios.get(`/users/${id}/folders`);
  return data;
}

export async function getFolderList(folderId, id) {
  const query = `/${id}/links?folderId=${folderId}`;
  const { data } = await axios.get(`/users${query}`);
  return data;
}

export async function getUser(id) {
  const { data } = await axios.get(`/users/${id}`);
  return data;
}
