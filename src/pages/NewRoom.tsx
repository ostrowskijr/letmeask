import React from 'react';
import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from './../components/Button';

type homeProps = {

};

const NewRoom = (props: homeProps) => {
    //const { user, signInWithGoogle } = useAuth(AppContext);
    //
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Toda Pergunta tem uma resposta.</strong>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>                
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />                    
                    <h2>Criar uma nova Sala</h2>
                    <form action="">
                        <input type="text" placeholder="Nome da Sala"/>
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export {NewRoom};