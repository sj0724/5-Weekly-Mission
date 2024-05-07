import { useEffect, useState } from 'react';
import { getUser } from '../api/api';

export interface User {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

function useGetUser(userId: number) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser(userId);
      setUser(response[0]);
    };

    loadUser();
  }, [userId]);

  return { user };
}

export default useGetUser;
