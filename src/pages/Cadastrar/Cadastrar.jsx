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
            toast.success("Video salvo com sucesso!!"),
            setVideo({
                title: '',
                description: '',
                link: '',
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
                        placeholder='Digite aqui o titulo do seu video favorito'
                        type="text"
                        required
                        onChange={(e) => { setVideo({ ...video, title: e.target.value }) }}>
                    </input>
                    <input
                        placeholder='Digite uma pequena descrição do video'
                        type="text"
                        required
                        onChange={(e) => { setVideo({ ...video, description: e.target.value }) }}>
                    </input>
                    <input
                        placeholder='ex: (https://youtu.be/xxxxxx?si=xxxxx)'
                        type='text'
                        required
                        onChange={(e) => { setVideo({ ...video, link: e.target.value }) }}>
                    </input>
                    <div class="buttons">
                        <button class="green" type="submit" >Salvar</button>
                        <button class="red" type="reset" >Limpar</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
}