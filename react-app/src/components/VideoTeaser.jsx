import React from 'react';

const VideoTeaser = () => {
    return (
        <section className="video-section">
            <div className="playin-container">
                <div className="video-wrapper">
                    <div className="video-text">
                        <h2>TENTE TA CHANCE !</h2>
                        <p>Tente ta qualif et prépare toi à vivre une expérience esportive professionelle grâce à la Caisse d'Epargne. Une production exclusive pour te plonger au cœur de la compétition.</p>
                        <div className="stats-bar">
                            <div className="stat-item">
                                <span className="stat-value">12+</span>
                                <span className="stat-label">Âge Minimum</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value stat-highlight">0€</span>
                                <span className="stat-label">Inscription</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">1000€</span>
                                <span className="stat-label">Cashprize</span>
                            </div>
                        </div>
                    </div>

                    <div className="phone-mockup">
                        <div className="video-container" style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <iframe
                                src="https://www.youtube.com/embed/5Sf_F1Du20o?si=IjXgtXms0JY3Zg2r&autoplay=0&rel=0&modestbranding=1"
                                title="PlayIN Teaser"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '20px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTeaser;
