import { useEffect, useState } from 'react';
import { getUser } from '../api/api';

function useGetUser(userId) {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser(userId);
      setUser(response.data[0]);
    };

    loadUser();
  }, []);

  return { user };
}

export default useGetUser;
