import { useEffect, useState } from 'react';
import { getUser } from '../api/api';

interface User {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

function useGetUser(userId: number) {
  const [user, setUser] = useState<User>({
    id: 0,
    created_at: new Date(),
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser(userId);
      setUser(response);
    };

    loadUser();
  }, [userId]);

  return { user };
}

export default useGetUser;
