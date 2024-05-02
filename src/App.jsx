import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared/Shared';
import Main from './pages/Main/Main';
import Layout from './components/Layout';
import Folder from './pages/Folder/Folder';
import './App.css';
import UserContext from './contexts/UserContext';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  const userId = 1;

  return (
    <BrowserRouter>
      <UserContext.Provider value={userId}>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/shared" element={<Shared />} />
            </Route>
            <Route path="/folder/:id" element={<Folder />} />
          </Routes>
        </ModalProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
