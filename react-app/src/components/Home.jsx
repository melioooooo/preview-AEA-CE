import React from 'react';
import Hero from './Hero';
import RulesBar from './RulesBar';
import VideoTeaser from './VideoTeaser';
import Parcours from './Parcours';
import Cities from './Cities';
import DiscordInvite from './DiscordInvite';

const Home = () => {
    return (
        <main id="view-home">
            <Hero />
            <RulesBar />
            <VideoTeaser />
            <Parcours />
            <Cities />
            <DiscordInvite />
        </main>
    );
};

export default Home;
