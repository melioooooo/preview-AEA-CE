import React from 'react';
import { getAssetPath } from '../utils/paths';

const Parcours = () => {
    return (
        <section className="steps">
            <div className="playin-container">
                <h2 className="section-title" style={{ marginBottom: '50px' }}>LE PARCOURS</h2>

                <div className="steps-grid">
                    <div className="step-item">
                        <div className="step-header">
                            <span className="step-num">01</span>
                            <i className="fa-solid fa-wifi step-icon"></i>
                        </div>
                        <h3 className="step-title">QUALIFIERS ONLINE</h3>
                        <p className="step-desc">De chez toi, tente de remporter ta place pour la deuxième étape
                            qualificative dans une des 3 villes proposées. Format BO1 à élimination directe. NextGen
                            only & PC.</p>
                        <div className="platform-logos">
                            <img src={getAssetPath('assets/images/logo_ps5.png')} alt="PS5" className="platform-logo ps5-logo" />
                            <img src={getAssetPath('assets/images/logo_xbox.png')} alt="Xbox" className="platform-logo xbox-logo" />
                            <img src={getAssetPath('assets/images/logo_pc.png')} alt="PC" className="platform-logo pc-logo" />
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-header">
                            <span className="step-num">02</span>
                            <i className="fa-solid fa-location-dot step-icon"></i>
                        </div>
                        <h3 className="step-title">FINALES RÉGIONALES</h3>
                        <p className="step-desc">Le top 16 de chaque étape online se retrouvera en LAN à Strasbourg, Metz ou
                            Reims. Matériel
                            pro et arbitrage officiel.</p>
                    </div>

                    <div className="step-item">
                        <div className="step-header">
                            <span className="step-num">03</span>
                            <img src={getAssetPath('assets/images/logo_playin.png')} alt="PlayIn" className="hoplan-logo-step" />
                        </div>
                        <h3 className="step-title">OBJECTIF HOPLAN</h3>
                        <p className="step-desc">Les champions de chaque ville étape gagneront leur place tous frais payés*
                            (Transport, Repas, Ticket d'entrée, maillot personnalisé)
                            pour le tournoi FC26 de la HopLan 2026 qui se tiendra à Strasbourg le samedi 18 Juillet
                            2026. La dotation du tournoi final sera de 1000€.</p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Parcours;
