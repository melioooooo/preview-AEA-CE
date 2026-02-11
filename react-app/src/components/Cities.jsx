import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const Cities = () => {
    const navigate = useNavigate();

    const cityData = [
        { id: 'reims', name: 'REIMS', date: '18 AVRIL 2026', tag: 'DÉPARTEMENT 51', inscriptionEnd: '23 MARS 2026', onlinePeriod: '26 MARS — 6 AVRIL' },
        { id: 'metz', name: 'METZ', date: '30 MAI 2026', tag: 'DÉPARTEMENT 57', inscriptionEnd: '27 AVRIL 2026', onlinePeriod: '30 AVRIL — 10 MAI' },
        { id: 'strasbourg', name: 'STRASBOURG', date: '20 JUIN 2026', tag: 'DÉPARTEMENT 67', inscriptionEnd: '22 MAI 2026', onlinePeriod: '26 MAI — 7 JUIN' }
    ];

    return (
        <section id="inscription" className="cities">
            <div className="playin-container">
                <h2 className="section-title">LES VILLES ÉTAPES</h2>
                <p className="section-subtitle">INSCRIS-TOI DANS LA VILLE DE TON CHOIX</p>

                <div className="cities-grid">
                    {cityData.map((city) => (
                        <div key={city.id} className={`city-card city-${city.id}`} onClick={() => navigate(`/register/${city.id}`)}>
                            <div className="city-img" style={{ backgroundImage: `url(${getAssetPath(`assets/images/city_${city.id}.png`)})` }}></div>
                            <div className="city-overlay"></div>
                            <div className="city-content">
                                <span className="city-tag">{city.tag}</span>
                                <h3 className="city-name">{city.name}</h3>
                                <p className="city-detail">{city.date} • CHAMPIONNAT RÉGIONAL</p>
                                <p className="city-detail" style={{ fontSize: '0.85rem', marginBottom: '5px', opacity: 0.85 }}>
                                    <i className="fa-solid fa-clock" style={{ marginRight: '5px', color: 'var(--ce-red)' }}></i>
                                    Fin des inscriptions : {city.inscriptionEnd}
                                </p>
                                <p className="city-detail" style={{ fontSize: '0.85rem', marginBottom: '15px', opacity: 0.85 }}>
                                    <i className="fa-solid fa-gamepad" style={{ marginRight: '5px', color: 'var(--ce-red)' }}></i>
                                    Online : {city.onlinePeriod}
                                </p>
                                <button className="btn city-btn">S'INSCRIRE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cities;
