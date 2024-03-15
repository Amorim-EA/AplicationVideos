import { useState, useEffect } from 'react';
import { getVideo } from '../../functions/handlerAcessAPI';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function VideoPage() {
    const { videoId } = useParams();
    const [ video, setVideo ] = useState({});
    const [ linkToVideo, setLinkToVideo ] = useState('');
    
    useEffect(() => {
        async function loadVideo(){
            const response = await getVideo(videoId);
            setVideo({ 
                  title: response.title, 
                  description: response.description, 
                  link: response.link.split('/')[3].split('?')[0]
            });
        }
        loadVideo();
    },[])
    
    return (
        <main>
            <iframe class="iframe" width="400" height="200" src={`https://www.youtube.com/embed/${video.link}`} allowFullScreen></iframe>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
        </main>
    );
}