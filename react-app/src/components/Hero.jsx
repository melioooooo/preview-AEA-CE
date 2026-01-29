import React from 'react';
import { getAssetPath } from '../utils/paths';

const Hero = () => {
    const bgUrl = getAssetPath('assets/images/hero_bg.png');

    return (
        <section className="hero" style={{ backgroundImage: `url(${bgUrl})` }}>
            <div className="playin-container hero-content">
                <img src={getAssetPath('assets/images/logo_playin.png')} alt="ESPORT playIN GRAND-EST" className="hero-logo" />
                <div className="hero-label">Compétition FC26</div>
                <p>Participe au tournoi de qualification de la HopLan 2026 by Caisse d’Epargne Grand Est Europe sur FC 26 !<br />1 phase de qualification online, 3 finales régionales, 3 champions sélectionnés pour la HopLan 2026 !</p>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <a href="#inscription" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                        JE PARTICIPE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

