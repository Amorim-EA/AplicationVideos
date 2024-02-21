import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

export default function Cadastrar() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
      });
    
    const handlerFormSubmit = async (event) => {
        event.preventDefault();
        try{
            toast.sucess("Sucesso ao cadastrar!!");
        } catch {
            toast.error("Erro ao cadastrar!!");
        }
      }

    return (
        <section className="container">
            <form className="cadastrar-form" onSubmit={handlerFormSubmit}>
                <h2>Cadastrar</h2>
                <input
                    placeholder='Nome'
                    type="text"
                    
                    onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
                </input>
                <input
                    placeholder='autor'
                    type="text"
                    
                    onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
                </input>
                <input
                    placeholder='ano'
                    type='text'
                    
                    onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
                </input>
                <button>Salvar</button>
            </form>
            <ToastContainer />
        </section>
    );
}