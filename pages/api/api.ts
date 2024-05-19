import axios from '../../instance/instance';

export async function getSampleUser() {
  try {
    const { data } = await axios.get('/sample/user');
    return data;
  } catch (error) {
    console.error('Error fetching sample user:', error);
    throw error;
  }
}

interface Link {
  imageSource?: string;
  image_source: string;
  createdAt?: string;
  created_at: string;
}

export async function getSampleFolder() {
  try {
    const { data } = await axios.get('/sample/folder');
    if (data && data.folder && data.folder.links) {
      data.folder.links.forEach((link: Link) => {
        if (link.imageSource) {
          link.image_source = link.imageSource;
          delete link.imageSource;
        }
        if (link.createdAt) {
          link.created_at = link.createdAt;
          delete link.createdAt;
        }
      });
    }
    return data;
  } catch (error) {
    console.error('Error fetching sample folder:', error);
    throw error;
  }
}

export async function getFolder(id: string) {
  try {
    const { data } = await axios.get(`/users/${id}/folders`);
    return data;
  } catch (error) {
    console.error('Error fetching folder:', error);
    throw error;
  }
}

export async function getFolderList(id: string, folderId: number) {
  if (folderId) {
    try {
      const query = `/${id}/links?folderId=${folderId}`;
      const { data } = await axios.get(`/users${query}`);
      return data.data;
    } catch (error) {
      console.error('Error fetching folderList:', error);
      throw error;
    }
  } else if (!folderId) {
    try {
      const query = `/${id}/links`;
      const { data } = await axios.get(`/users${query}`);
      return data.data;
    } catch (error) {
      console.error('Error fetching folderList:', error);
      throw error;
    }
  }
}

export async function getUser(accessToken: string) {
  try {
    const { data } = await axios.get('/users', {
      headers: {
        Authorization: accessToken,
      },
    });
    return data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function postSignIn(id: string, password: string) {
  try {
    const { data } = await axios.post('/sign-in', {
      email: id,
      password: password,
    });
    localStorage.setItem('token', data.data.accessToken);
    window.location.href = '/';
    return data;
  } catch (error) {
    console.error('Error fetching sign-in:', error);
    alert('로그인할 수 없습니다! 아이디와 비밀번호를 확인해주세요!');
  }
}

export async function postCheckEmail(email: string) {
  try {
    const { data } = await axios.post('/check-email', {
      email: email,
    });
    return data;
  } catch (error) {
    console.error('Error fetching sign-in:', error);
    alert('이미 가입된 이메일입니다!');
  }
}

export async function postSignUp(id: string, password: string) {
  try {
    const { data } = await axios.post('/sign-up', {
      email: id,
      password: password,
    });
    localStorage.setItem('token', data.data.accessToken);
    alert('회원가입이 완료되었습니다!');
    window.location.href = '/';
    return data;
  } catch (error) {
    console.error('Error fetching sign-in:', error);
    alert('회원가입할 수 없습니다! 아이디와 비밀번호를 확인해주세요!');
  }
}

export async function postFolder(name: string) {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      '/folders',
      {
        name: name,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}

export async function deleteFolder(folderId: number) {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(`/folders/${folderId}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}

export async function postLink(folderId: number, url: string) {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      '/links',
      {
        url: url,
        folderId: folderId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    alert('url과 폴더를 지정해주세요!');
    console.error('Error fetching post folder:', error);
  }
}

export async function deleteLink(linkId: number) {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(`/links/${linkId}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching post folder:', error);
  }
}
