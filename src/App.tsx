import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext} from "react";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme } = useTheme()
    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <Link to={'/'}>
            Главная
        </Link>
        <Link to={'/about'}>
            О сайте
        </Link>
        <Suspense>
           <Routes>
                   <Route path={'/about'} element={<AboutPageAsync />}/>
                   <Route path={'/'} element={<MainPageAsync />}/>
           </Routes>
        </Suspense>
    </div>
}

export default App