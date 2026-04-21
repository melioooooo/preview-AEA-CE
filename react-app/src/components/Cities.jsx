import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const Cities = () => {
    const navigate = useNavigate();

    const cityData = [
        { id: 'reims', name: 'REIMS', date: '100% ONLINE', tag: 'DÉPARTEMENT 51', inscriptionEnd: '04 AVRIL 2026', onlinePeriod: '12 AVRIL — 25 AVRIL', closed: true },
        { id: 'metz', name: 'METZ', date: '100% ONLINE', tag: 'DÉPARTEMENT 57', inscriptionEnd: '1er MAI 2026', onlinePeriod: '11 MAI — 30 MAI' },
        { id: 'strasbourg', name: 'STRASBOURG', date: 'ONLINE ET ÉVÉNEMENT PHYSIQUE', tag: 'DÉPARTEMENT 67', inscriptionEnd: '08 MAI 2026', onlinePeriod: '26 MAI — 7 JUIN' }
    ];

    return (
        <section id="inscription" className="cities">
            <div className="playin-container">
                <h2 className="section-title">LES VILLES ÉTAPES</h2>
                <p className="section-subtitle">INSCRIS-TOI DANS LA VILLE DE TON CHOIX</p>

                <div className="cities-grid">
                    {cityData.map((city) => (
                        <div
                            key={city.id}
                            className={`city-card city-${city.id}${city.closed ? ' city-card--closed' : ''}`}
                            onClick={() => !city.closed && navigate(`/register/${city.id}`)}
                            style={city.closed ? { cursor: 'default', filter: 'grayscale(70%)', opacity: 0.6, pointerEvents: 'none' } : {}}
                        >
                            {city.closed && (
                                <div className="city-closed-badge">
                                    <i className="fa-solid fa-lock" style={{ marginRight: '6px' }}></i>
                                    INSCRIPTIONS FERMÉES
                                </div>
                            )}
                            <div className="city-img" style={{ backgroundImage: `url(${getAssetPath(`assets/images/city_${city.id}.png`)})` }}></div>
                            <div className="city-overlay"></div>
                            <div className="city-content">
                                <span className="city-tag">{city.tag}</span>
                                <h3 className="city-name">{city.name}</h3>
                                <p className="city-detail">{city.date}</p>
                                <p className="city-detail" style={{ fontSize: '0.85rem', marginBottom: '5px', opacity: 0.85 }}>
                                    <i className="fa-solid fa-clock" style={{ marginRight: '5px', color: city.closed ? '#888' : 'var(--ce-red)' }}></i>
                                    Fin des inscriptions : {city.inscriptionEnd}
                                </p>
                                <p className="city-detail" style={{ fontSize: '0.85rem', marginBottom: '15px', opacity: 0.85 }}>
                                    <i className="fa-solid fa-gamepad" style={{ marginRight: '5px', color: city.closed ? '#888' : 'var(--ce-red)' }}></i>
                                    Online : {city.onlinePeriod}
                                </p>
                                {city.closed ? (
                                    <button className="btn city-btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed', background: '#555', borderColor: '#555' }}>
                                        <i className="fa-solid fa-lock" style={{ marginRight: '6px' }}></i>
                                        INSCRIPTIONS FERMÉES
                                    </button>
                                ) : (
                                    <button className="btn city-btn">S'INSCRIRE</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
