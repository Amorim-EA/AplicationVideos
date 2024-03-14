import { useState, useEffect } from 'react';
import { CardList } from "../../components/CardList/CardList";
import { getAllVideos } from '../../functions/handlerAcessAPI';
import { Blocks } from 'react-loader-spinner';
import './style.scss';

export default function Home() {
    const [videosAll, setVideosAll] = useState([]);
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
            {videosAll.length === 0 ? (
                <center>
                    <Blocks
                        height="80"
                        width="80"
                        radius="9"
                        color="#DDD"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                    <h3>Aguarde, carregando</h3>
                </center>
            ) : (
                <CardList videos={videosAll} />
            )}
        </main>
    );
}