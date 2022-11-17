import { NavLink } from "react-router-dom";
import { useAutentication } from "../hooks/useAutentication";

import { useAuthValue } from "../context/AuthContext";




import style from "./Navbar.module.css";

const Navbar = () => {
    const {user} = useAuthValue();
    const {logout} = useAutentication();

    return <nav className={style.navbar}>
        <NavLink to="/" className={style.brand}>
            Adolfo<span> Blog</span>
        </NavLink>
        <ul className={style.links_list}>
            <li>
                <NavLink to="/home" className={({ isActive }) => (isActive ? style.active : '')}>
                    Home
                </NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : '')}>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? style.active : '')}>
                            Cadastrar
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                 <>
                 <li>
                     <NavLink to="/post/create" className={({ isActive }) => (isActive ? style.active : '')}>
                         Novo Post
                     </NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard" className={({ isActive }) => (isActive ? style.active : '')}>
                         Dashboard
                     </NavLink>
                 </li>
             </>
            )}

            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : '')}>
                    Sobre
                </NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>

}

export default Navbar