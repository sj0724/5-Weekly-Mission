import axios from '../instance/axiosInstance';

export async function getSampleUser() {
  try {
    const { data } = await axios.get('/sample/user');
    return data;
  } catch (error) {
    console.error('Error fetching sample user:', error);
    throw error;
  }
}

export async function getSampleFolder() {
  try {
    const { data } = await axios.get('/sample/folder');
    if (data && data.folder && data.folder.links) {
      data.folder.links.forEach((link) => {
        if (link.imageSource) {
          link.image_source = link.imageSource;
          delete link.imageSource;
        }
      });
    }
    return data;
  } catch (error) {
    console.error('Error fetching sample folder:', error);
    throw error;
  }
}

export async function getFolder(id) {
  try {
    const { data } = await axios.get(`/users/${id}/folders`);
    return data;
  } catch (error) {
    console.error('Error fetching folder:', error);
    throw error;
  }
}

export async function getFolderList(folderId, id) {
  try {
    const query = `/${id}/links?folderId=${folderId}`;
    const { data } = await axios.get(`/users${query}`);
    return data;
  } catch (error) {
    console.error('Error fetching folderList:', error);
    throw error;
  }
}

export async function getUser(id) {
  try {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
