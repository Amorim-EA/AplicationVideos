import { useState, useEffect } from 'react';
import { getVideo } from '../../functions/handlerAcessAPI';
import { useParams, useNavigate } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import './style.scss';

export default function VideoPage() {
    const { videoId } = useParams();
    const [ video, setVideo ] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [ linkToVideo, setLinkToVideo ] = useState('');
    const navigate = useNavigate();
    
    const pegarId = (set) => {
       try {
          return set.link.split('/')[3].split('?')[0];
       } catch {
          return "lSLXS0bjSCs";
       }
    }
    
    useEffect(() => {
        async function loadVideo(){
            const response = await getVideo(videoId);
            setVideo({ 
                  title: response.title, 
                  description: response.description, 
                  link: pegarId(response)
            });
            setTimeout(() => setIsLoading(false), 1000);
        }
        loadVideo();
    },[videoId])
    
    return (
        <main>
            {(isLoading) ? (
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
            <section>
                <iframe className="iframe" src={`https://www.youtube.com/embed/${video.link}`} allowFullScreen></iframe>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                
                <button className="green" onClick={()=>{navigate(`/video/manage/${videoId}`)}}>Gerenciar Video</button>
            </section>
            )}
        </main>
    );
}