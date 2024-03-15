import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Menu, X as Fechar, GalleryVerticalEnd as Home, Plus as Salvar } from 'lucide-react';
import './style.scss';

export default function NavBar() {
    const [ showMenu, setShowMenu ] = useState("-17rem");
  
    return (
      <header>
          <div>
              <Play />
              <Menu className="disapear" onClick={() => setShowMenu("0rem")} />
              <nav style={{right: showMenu}}>
                  <ul>
                      <li className="disapear" onClick={() => setShowMenu("-16rem")}>
                          <Fechar />
                          <p>Fechar</p>
                      </li>
                      <li className="espacar">
                          <Link to="/">
                              <Home className="disapear" />
                              Videos
                          </Link>
                      </li>
                      <li>
                          <Link to="/cadastrar">
                              <Salvar className="disapear" />   
                              Cadastrar
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
    );
}