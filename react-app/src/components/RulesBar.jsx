import React from 'react';
import { getAssetPath } from '../utils/paths';

const RulesBar = () => {
    return (
        <div className="rules-bar">
            <div className="playin-container rules-content">
                <div className="rules-text">
                    <h3>RÈGLEMENT OFFICIEL</h3>
                    <p>Consulte les règles de la compétition pour chaque ville.</p>
                </div>
                <a href={getAssetPath('assets/reglement-complet-qualifiers-fc26-hoplan-2026.pdf')}
                    target="_blank"
                    className="btn btn-outline">
                    TÉLÉCHARGER LE PDF
                </a>
            </div>
        </div>
    );
};

export default RulesBar;
