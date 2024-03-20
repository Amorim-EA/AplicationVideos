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
    
    useEffect(() => {
        async function loadVideo(){
            const response = await getVideo(videoId);
            setVideo({ 
                  title: response.title, 
                  description: response.description, 
                  link: response.link.split('/')[3].split('?')[0]
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
                    <h3>Aguarde, carregando</h3>
                </div>
            ) : (
            <>
                <iframe class="iframe" width="400" height="200" src={`https://www.youtube.com/embed/${video.link}`} allowFullScreen></iframe>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                
                <button className="green" onClick={()=>{navigate(`/video/manage/${videoId}`)}}>Gerenciar Video</button>
            </>
            )}
        </main>
    );
}