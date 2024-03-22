import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const CardList = ({ videos }) => {
    const espera = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    espera()
    return (
        <section>
            {videos?.map((video, index) => {
               const pegarId = (set) => {
                   try {
                      return set.link.split('/')[3].split('?')[0];
                   } catch {
                      return "5BZLz21ZS_Y";
                   }
                }
                const codigoImg = pegarId(video);
                const linkToImg = `https://img.youtube.com/vi/${codigoImg}/mqdefault.jpg`;
                
                return(
                     <Link key={index} to={`/video/${video.id}`}>
                        <article key={index} className="card">
                            <img src={linkToImg} alt={linkToImg} />
                            <h3>{video.title}</h3>
                        </article>
                      </Link>
                )
            })}
        </section>
    );
}