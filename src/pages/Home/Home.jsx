import './style.scss';
import { Link } from 'react-router-dom';

export default function Home() {
   
    return (
        <div>
            <h1>Video 1 <Link to={`/video/${1}`}>Tap Here</Link></h1>
            <h1>Video 2 <Link to={`/video/${2}`}>Tap Here</Link></h1>
        </div>
    );
}