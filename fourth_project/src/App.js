import s from "./components/Page.module.css";
import './App.css';
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className={s.container}>
          <NavLink className={s.colorText} to="/">
            <h3>Главная</h3>
          </NavLink>
          <NavLink className={s.colorText} to="/about">
            <h3>О нас</h3>
          </NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
