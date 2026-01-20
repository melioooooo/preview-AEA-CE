import React from 'react';
import { getAssetPath } from '../utils/paths';

const Footer = () => {
    return (
        <div className="playin-footer">
            <div className="playin-container" style={{ textAlign: 'center' }}>
                <div className="footer-logos-container">
                    <img src={getAssetPath('assets/images/logo_ce_new.png')} alt="Caisse d'Épargne" className="footer-logo" />
                    <img src={getAssetPath('assets/images/logo_hoplan.png')} alt="HopLan" className="footer-logo" />
                    <img src={getAssetPath('assets/images/logo_aea.png')} alt="Alsace Esport Arena" className="footer-logo" />
                </div>

                <p style={{ marginBottom: '20px' }}>
                    Esports Play In Grand Est - Une initiative pour le développement de l'esport amateur.<br />
                    Organisé et administré par l'Alsace Esport Arena avec le soutien de la Caisse d'Epargne Grand Est. *CF
                    Règlement pour détail.
                </p>

                <div className="footer-links">
                    <a href={getAssetPath('assets/RÈGLEMENT OFFICIEL – ESPORTS PLAY-INS GRAND EST – FC26.pdf')} target="_blank">Règlement
                        Officiel</a>
                    <a href="#">Mentions Légales</a>
                    <a href="mailto:contact@alsacearena.com">Contact</a>
                </div>

                <p style={{ marginTop: '30px', fontSize: '0.8rem', color: '#444' }}>
                    Ce tournoi n'est pas affilié à Electronic Arts Inc.
                    <br />© 2026 Tous droits réservés.
                </p>
            </div>
        </div>
    );
};

export default Footer;
