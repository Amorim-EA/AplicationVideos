import { useState, useEffect } from 'react';
import { getVideo, delVideo, putVideo } from '../../functions/handlerAcessAPI';
import { useParams, useNavigate } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

export default function ManageVideo() {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [linkToVideo, setLinkToVideo] = useState('');
    const [show, setShow] = useState("none");
    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadVideo(){
            const response = await getVideo(videoId);
            setVideo({ 
                  title: response.title, 
                  description: response.description, 
                  link: response.link
            });
            setTimeout(() => setIsLoading(false), 1000);
        }
        loadVideo();
    }, [videoId]);
    
    const handlerFormSubmit = async (event) => {
        event.preventDefault();
        try{
            await putVideo(videoId, video);
            setTimeout(() => {
                toast.success("Video atualizado com sucesso!!");
            }, 1000);
        } catch(error) {
            toast.error("Erro ao atualizar o video!!");
        }
    }
    
    const deleteVideo = async (event) => {
        event.preventDefault();
        try {
            await delVideo(videoId);
            toast.success("Video deletado com sucesso!!");
            setTimeout(()=>{
              navigate('/');
            }, 1700);
        } catch {
            toast.error("Erro ao deletar o video!!");
        }
    }
    
    return (
        <>
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
                <section className="container">
                    <div className="sombra">
                        <form className="manage-form" onSubmit={handlerFormSubmit}>
                            <h3 className="title">Gerencie aqui os seus videos favoritos</h3>
                            <input
                                placeholder='Atualize aqui o titulo do video'
                                type="text"
                                required
                                onChange={(e) => setVideo({ ...video, title: e.target.value })}
                                value={video.title}
                            />
                            <input
                                placeholder='Atualize uma pequena descrição do video'
                                type="text"
                                required
                                onChange={(e) => setVideo({ ...video, description: e.target.value })}
                                value={video.description}
                            />
                            <input
                                placeholder='Cole aqui link de preferencia do youtube'
                                type='text'
                                required
                                onChange={(e) => setVideo({ ...video, link: e.target.value })}
                                value={video.link}
                            />
                            <div className="buttons">
                                <button className="green" type="button" onClick={() => navigate(`/video/${videoId}`)}>Voltar</button>
                                <button className="yellow" type="submit">Atualizar</button>
                                <button className="red" type="button" onClick={() => setShow("block")}>Deletar</button>
                            </div>
                        </form>
                    </div>
                    <div className="popup" style={{display: show}}>
                        <div className="alinharEmColuna">
                            <h4>Atenção</h4>
                            <p>Deseja mesmo deletar esse video em definitivo?</p>
                            <div className="botoes"> 
                                <button className="red" onClick={deleteVideo}>Confirmar</button>
                                <button className="yellow" onClick={() => setShow("none")}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </section>
            )}
        </>
    );
}