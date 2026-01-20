import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const RegistrationForm = () => {
    const { cityId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eaid: '',
        birthdate: '',
        discord: '',
        phone: '',
        city: cityId ? cityId.charAt(0).toUpperCase() + cityId.slice(1) : ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const cityNames = {
        reims: 'REIMS',
        metz: 'METZ',
        strasbourg: 'STRASBOURG'
    };

    const cityName = cityNames[cityId] || 'INSCRIPTION';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = window.playinConfig?.apiUrl || '/wp-json/playin/v1/register';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setShowModal(true);
            } else {
                throw new Error('Server returned an error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            <div className="city-page-header" style={{ backgroundImage: `url(${getAssetPath(`assets/images/city_${cityId}.png`)})` }}>
                <div className="playin-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.6)' }}>{cityName}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ddd' }}>playIN DÉPARTEMENT {cityId === 'reims' ? '51' : cityId === 'metz' ? '57' : '67'}</p>
                </div>
            </div>

            <div className="city-page-content">
                <button className="btn btn-back" onClick={() => navigate('/')}>
                    <i className="fa-solid fa-arrow-left"></i> RETOUR
                </button>

                <div className="registration-box">
                    <h2 style={{ marginBottom: '20px', color: 'var(--ce-red)' }}>FORMULAIRE D'INSCRIPTION</h2>
                    <p style={{ marginBottom: '30px', color: '#aaa' }}>
                        Remplis ce formulaire pour valider ta participation au qualifier de {formData.city}. Assure-toi d'être disponible le jour J.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nom complet</label>
                            <input type="text" name="name" className="form-input" placeholder="Ex: Jean Dupont" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-input" placeholder="Ex: jean.dupont@email.com" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="form-group">
                                <label className="form-label">Pseudo EA ID</label>
                                <input type="text" name="eaid" className="form-input" placeholder="Ton ID FC26" value={formData.eaid} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Date de Naissance</label>
                                <input type="date" name="birthdate" className="form-input" value={formData.birthdate} onChange={handleChange} required />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="form-group">
                                <label className="form-label">Pseudo Discord</label>
                                <input type="text" name="discord" className="form-input" placeholder="Ex: Jean#1234" value={formData.discord} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Numéro de téléphone</label>
                                <input type="tel" name="phone" className="form-input" placeholder="Ex: 06 12 34 56 78" value={formData.phone} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Confirme ta ville de qualification</label>
                            <select name="city" className="form-input" value={formData.city} onChange={handleChange} required>
                                <option value="">-- Sélectionne une ville --</option>
                                <option value="Reims">Reims - 18 Avril 2026</option>
                                <option value="Metz">Metz - 3 Mai 2026</option>
                                <option value="Strasbourg">Strasbourg - 20 Juin 2026</option>
                            </select>
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" id="rgpd" required />
                            <label htmlFor="rgpd">J'accepte le règlement officiel et j'autorise l'Alsace Esport Arena à me
                                contacter pour l'organisation du tournoi.</label>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                            {isSubmitting ? 'ENVOI EN COURS...' : 'VALIDER MON INSCRIPTION'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">INSCRIPTION RÉUSSIE !</h2>
                        <div className="summary-grid">
                            <span className="summary-label">Nom</span> <span className="summary-value">{formData.name}</span>
                            <span className="summary-label">Email</span> <span className="summary-value">{formData.email}</span>
                            <span className="summary-label">EA ID</span> <span className="summary-value">{formData.eaid}</span>
                            <span className="summary-label">Naissance</span> <span className="summary-value">{formData.birthdate}</span>
                            <span className="summary-label">Discord</span> <span className="summary-value">{formData.discord}</span>
                            <span className="summary-label">Téléphone</span> <span className="summary-value">{formData.phone}</span>
                            <span className="summary-label">Ville</span> <span className="summary-value" style={{ color: 'var(--ce-red)', fontWeight: 900 }}>{formData.city}</span>
                        </div>
                        <p style={{ textAlign: 'center', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
                            Un email de confirmation vous sera envoyé prochainement.
                        </p>
                        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => navigate('/')}>FERMER</button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default RegistrationForm;
