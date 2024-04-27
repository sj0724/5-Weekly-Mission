import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shared from './pages/Shared/Shared';
import Main from './pages/Main/Main';
import Layout from './components/Layout';
import Folder from './pages/Folder/Folder';
import './App.css';
import UserContext from './contexts/UserContext';
import EditModal from './components/Modal/EditModal/EditModal';
import DeleteModal from './components/Modal/DeleteModal/DeleteModal';
import ShareModal from './components/Modal/ShareModal/ShareModal';
import AddModal from './components/Modal/AddModal/AddModal';

function App() {
  const userId = 1;

  return (
    <BrowserRouter>
      <UserContext.Provider value={userId}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/shared" element={<Shared />} />
          </Route>
          <Route path="/folder/:id" element={<Folder />} />
          <Route path="/modal" element={<AddModal />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
