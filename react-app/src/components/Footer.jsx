import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

const Footer = () => {
    return (
        <div className="playin-footer">
            <div className="playin-container" style={{ textAlign: 'center' }}>
                <div className="footer-logos-container">
                    <img src={getAssetPath('assets/images/logo_ce_new.png')} alt="Caisse d'Épargne" className="footer-logo" />
                    <img src={getAssetPath('assets/images/logo_playin.png')} alt="PlayIn" className="footer-logo" />
                    <img src={getAssetPath('assets/images/logo_aea.png')} alt="Alsace Esport Arena" className="footer-logo" />
                </div>

                <p style={{ marginBottom: '20px' }}>
                    Tournoi de qualification de la HopLan 2026 by Caisse d’Epargne Grand Est Europe - Une initiative pour le développement de l'esport amateur.<br />
                    Organisé et administré par l'Alsace Esport Arena avec le soutien de la Caisse d'Epargne Grand Est Europe. CF{' '}
                    <a href={getAssetPath('assets/reglement-complet-qualifiers-fc26-hoplan-2026.pdf')} target="_blank" style={{ color: 'var(--ce-red)', textDecoration: 'underline' }}>Règlement</a>{' '}
                    pour détail.
                </p>

                <div className="footer-links">
                    <a href={getAssetPath('assets/reglement-complet-qualifiers-fc26-hoplan-2026.pdf')} target="_blank">Règlement
                        Officiel</a>
                    <Link to="/legal">Mentions Légales</Link>
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
