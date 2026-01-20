import React from 'react';

const VideoTeaser = () => {
    return (
        <section className="video-section">
            <div className="playin-container">
                <div className="video-wrapper">
                    <div className="video-text" data-aos="fade-right">
                        <h2>DÉCOUVRE L'EXPÉRIENCE <span style={{ color: 'var(--ce-red)' }}>playIN</span></h2>
                        <p>Une compétition unique au cœur du Grand Est. Rejoins des centaines de joueurs et tente de devenir
                            le champion de ta région.</p>
                        <ul style={{ marginBottom: '30px' }}>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <i className="fa-solid fa-check" style={{ color: 'var(--ce-red)' }}></i>
                                <span>Étapes qualificatives physiques</span>
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <i className="fa-solid fa-check" style={{ color: 'var(--ce-red)' }}></i>
                                <span>Cast professionnel en direct</span>
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <i className="fa-solid fa-check" style={{ color: 'var(--ce-red)' }}></i>
                                <span>1500€ de dotation globale</span>
                            </li>
                        </ul>
                    </div>

                    <div className="phone-mockup" data-aos="zoom-in">
                        <div className="video-placeholder">
                            <div className="play-btn-overlay">
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <span style={{ marginTop: '20px', fontSize: '0.8rem', letterSpacing: '2px' }}>VOIR LE
                                TEASER</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTeaser;
