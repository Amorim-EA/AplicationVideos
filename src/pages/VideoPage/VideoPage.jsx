import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function VideoPage() {
    const { videoId } = useParams();
    const { video, setVideo } = useState({});
    return (
        <div>
          Você está na página com o id {videoId}
        </div>
    );
}