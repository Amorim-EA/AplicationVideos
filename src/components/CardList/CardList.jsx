import { Link } from 'react-router-dom';
import './style.scss';

export default function CardList({ videos }) {
    return (
        <section>
            {videos?.map((video, index) => {
                const codigoImg = video.link.split('/')[3].split('?')[0];
                const linkToImg = `https://img.youtube.com/vi/${codigoImg}/mqdefault.jpg`;
                
                return(
                    <article key={index} className="card">
                        <Link to={`/video/${video.id}`}>
                            <img src={linkToImg} alt={linkToImg} />
                            <div className="titleDescription">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </Link>
                    </article>
                )
            })}
        </section>
    );
}