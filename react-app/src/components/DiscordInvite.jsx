import React from 'react';

const DiscordInvite = () => {
    return (
        <section className="discord-section">
            <div className="playin-container">
                <div className="discord-content">
                    <h2>REJOINS LA COMMUNAUTÉ</h2>
                    <h3>LE DISCORD OFFICIEL</h3>
                    <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Retrouve tous les joueurs, pose tes questions au staff et reçois les infos en temps réel sur le
                        serveur Alsace Esport Arena.
                    </p>
                    <a href="https://discord.gg/JF44rhdGQt" target="_blank" className="discord-btn">
                        <i className="fa-brands fa-discord"></i> REJOINDRE LE SERVEUR
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DiscordInvite;
