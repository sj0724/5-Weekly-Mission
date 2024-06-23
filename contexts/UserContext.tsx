import { getUser } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext } from 'react';

export const UserContext = createContext({
  id: '',
  created_at: new Date(),
  name: '',
  image_source: '',
  email: '',
  auth_id: '',
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  return (
    <UserContext.Provider value={user?.[0]}>{children}</UserContext.Provider>
  );
};

export const useLoadUser = () => {
  const user = useContext(UserContext);

  return { user };
};
