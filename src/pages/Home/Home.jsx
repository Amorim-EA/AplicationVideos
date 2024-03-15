import { useState, useEffect, Suspense } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { getAllVideos } from '../../functions/handlerAcessAPI';
import { Audio } from 'react-loader-spinner';
import './style.scss';

export default function Home() {
    const [ videosAll, setVideosAll ] = useState([]);
   
    useEffect(() => {
        async function loadVideos(){
            try {
                const response = await getAllVideos();
                setVideosAll(response);
            } catch {
                console.error("Erro ao obter os vídeos:");
            }
        };
        loadVideos();
    }, []);
  
    return (
        <main>
            <Suspense fallback={
                <div className="carregando">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="#DDD"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                    <h3>Aguarde, carregando</h3>
                </div>
            } />
            <CardList videos={videosAll} />
        </main>
    );
}