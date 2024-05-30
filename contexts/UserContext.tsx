import { getUser } from '@/api/api';
import { User } from '@/hooks/useGetUser';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const UserContext = createContext({
  user: {
    id: '',
    created_at: new Date(),
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  },
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: '',
    created_at: new Date(),
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  useEffect(() => {
    const userAccess = localStorage.getItem('token');
    if (userAccess) {
      const loadUser = async () => {
        const response = await getUser(userAccess);
        setUser(response[0]);
      };
      loadUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useLoadUser = () => {
  const user = useContext(UserContext);

  return user;
};
