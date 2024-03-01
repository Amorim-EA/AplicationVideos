import { Link } from 'react-router-dom'
import './style.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Videos</Link>
                </li>
                <li>
                    <Link to="/cadastrar">Cadastrar</Link>
                </li>
            </ul>
        </nav>
    );
}