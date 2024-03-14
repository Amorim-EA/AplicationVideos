import React, { useState } from 'react';
import { postVideo } from '../../functions/handlerAcessAPI';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

export default function Cadastrar() {
    const [video, setVideo] = useState({
        title: '',
        description: '',
        link: '',
      });
    
    const handlerFormSubmit = async (event) => {
        event.preventDefault();
        try{
            await postVideo(video);
            await new Promise((resolve) => {
                setTimeout(resolve, 3000);
            });
            toast.success("Video salvo com sucesso!!"),
            setVideo({
                title: '',description: '',link: '',
            });
        } catch(error) {
            toast.error("Erro ao cadastra o videor!!");
        }
    }

    return (
        <section className="container">
            <div className="sombra">
                <form className="cadastrar-form" onSubmit={handlerFormSubmit}>
                    <h3>Salve aqui os seus videos favoritos</h3>
                    <input
                        placeholder='Write the title here'
                        type="text"
                        
                        onChange={(e) => { setVideo({ ...video, title: e.target.value }) }}>
                    </input>
                    <input
                        placeholder='Write a litle description of video'
                        type="text"
                        
                        onChange={(e) => { setVideo({ ...video, description: e.target.value }) }}>
                    </input>
                    <input
                        placeholder='Put here the link of preference be youtube'
                        type='text'
                        
                        onChange={(e) => { setVideo({ ...video, link: e.target.value }) }}>
                    </input>
                    <button>Salvar</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
}