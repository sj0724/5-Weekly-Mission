import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Shared";
import Main from "./pages/Main/Main";
import Application from "./components/Layout";
import Folder from "./pages/Folder/Folder";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route path="/" element={<Main />} />
          <Route path="shared" element={<Shared />} />
        </Route>
        <Route path="folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
