import './App.css';
import Header from './Header';
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Post from './Post';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/> }/>
        <Route path="/register" element={<RegisterPage/> }/>
        </Route>
      </Routes>
  );
}

export default App;
