import { useState, useEffect } from 'react';
import { getVideo } from '../../functions/handlerAcessAPI';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function VideoPage() {
    const { videoId } = useParams();
    const { video, setVideo } = useState({});
    
    useEffect(() => {
        async function loadVideo(){
            const response = await getVideo(videoId);
            setVideo({ ...video, 
                  title: response.title, 
                  description: response.description, 
                  link: response.link 
            });
        }
        loadVideo();
    },[])
    
    const codigoVideo = video.link.split('/')[3].split('?')[0];
    const linkToVideo = `https://www.youtube.com/embed/${codigoVideo}`
    //zGyKzPsmxF8
    return (
        <main>
            <iframe width="560" height="315" src={linkToVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
        </main>
    );
}