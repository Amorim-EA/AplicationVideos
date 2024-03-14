import { Link } from 'react-router-dom';
import { Play as IconLogo } from 'lucide-react';
import './style.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logoUl">
                <IconLogo />
                <ul>
                    <li>
                        <Link to="/">Videos</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">Cadastrar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}