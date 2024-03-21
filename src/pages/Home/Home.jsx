import { useState, useEffect } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { getAllVideos } from '../../functions/handlerAcessAPI';
import { Blocks } from 'react-loader-spinner';
import './style.scss';

export default function Home() {
    const [videosAll, setVideosAll] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        async function loadVideos(){
            try {
                const response = await getAllVideos();
                setVideosAll(response);
                setTimeout(() => setIsLoading(false), 800);
            } catch {
                console.error("Erro ao obter os vídeos:");
                setTimeout(() => setIsLoading(false), 800);
            }
        };
        loadVideos();
    }, []);
  
    return (
        <main>
            {(isLoading || videosAll.length === 0) ? (
                <div className="carregando">
                    <Blocks
                        height="80"
                        width="80"
                        color="white"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}
                    />
                    <h4>Aguarde, carregando</h4>
                </div>
            ) : (
                <CardList videos={videosAll} />
            )}
        </main>
    );
}
