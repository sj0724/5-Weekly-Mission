import { BrowserRouter, Route, Routes } from "react-router-dom";
import Folder from "./pages/Folder";
import Main from "./pages/Main";
import Application from "./components/Application";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route path="/" element={<Main />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
