import React from 'react';
import './App.css';

function App() {
  return (
    <div className="instagram-wrapper">
      <div className="instagram-phone">
        <img src="celular instagram.png" alt="celular" />
      </div>

      <div className="instagram-continue">
        <div className="grupo">
          <div className="logo">
            <img src="nome instagram.png" alt="instagram" />
          </div>
          <div className="profile-foto">
            <img src="foto perfil.webp" alt="perfil" />
          </div>
          <a href="#" className="instagram-login">Continue como mhelenaxz</a>
          <a href="#" className="instagram-logout">Remover conta</a>
        </div>
        <div className="grupo">
          <p className="not-account"> Não é mhelenaxz? </p>
          <p className="notaccount">
            <span className="link-blue">Alternar conta</span>
            <span className="not-account"> ou </span>
            <span className="link-blue">Inscreva-se</span>
          </p>
        </div>
        <div className="baixe">
          <p className="app">Baixe o aplicativo</p>
          <div className="baixar">
            <img src="apple-play.png" alt="aplicativos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
