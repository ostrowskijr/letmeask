import React from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from './../components/Button';
import { useAuth } from '../hooks/useAuth';

const Home = () => {    
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    const handleCreateRoom = async () => {
        if (!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }
    return (
        <div id="page-auth">            
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Crie salas de Q&amp;A ao-vivo</strong>
                    <p>Tire as dúvidas da sua audiência em tempo-real.</p>                
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>{user?.name}</h2>          
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logon com Google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form action="">
                        <input type="text" placeholder="Digite o código da sala"/>
                        <Button type="submit">Entrar na Sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export {Home};