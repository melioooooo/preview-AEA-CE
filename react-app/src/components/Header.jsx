import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="playin-header">
            <div className="playin-container nav-content">
                <div className="logo-group" onClick={() => navigate('/')}>
                    <img src={getAssetPath('assets/images/logo_aea.png')} alt="Alsace Esport Arena" className="logo-header-aea" />
                    <div className="divider"></div>
                    <img src={getAssetPath('assets/images/logo_playin.png')} alt="PlayIn" className="logo-header-hoplan" />
                    <div className="divider"></div>
                    <img src={getAssetPath('assets/images/logo_ce_new.png')} alt="Caisse d'Épargne" className="logo-header-ce" />
                </div>
                <a href="#inscription" className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                        document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }}>
                    S'INSCRIRE
                </a>
            </div>
        </div>
    );
};

export default Header;
