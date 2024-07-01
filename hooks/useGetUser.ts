import { useEffect, useState } from 'react';
import { getUser } from '../service/api';

function useGetUser() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser();
      setUser(response[0]);
    };

    loadUser();
  }, []);

  return { user };
}

export default useGetUser;
