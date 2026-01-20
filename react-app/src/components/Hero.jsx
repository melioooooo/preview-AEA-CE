const Hero = () => {
    const bgUrl = getAssetPath('assets/images/hero_bg.png');

    return (
        <section className="hero" style={{ backgroundImage: `url(${bgUrl})` }}>
            <div className="playin-container hero-content">
                <img src={getAssetPath('assets/images/logo_playin.png')} alt="ESPORT playIN GRAND-EST" className="hero-logo" />
                <div className="hero-label">Compétition FC26</div>
                <p>Participe au tournoi esportif playIN Grand Est by Caisse d'Epargne.<br />3 villes, 1 finale, un ticket
                    VIP pour la HopLan 2026 à gagner et 1500€ de cashprize à la clé !</p>

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
