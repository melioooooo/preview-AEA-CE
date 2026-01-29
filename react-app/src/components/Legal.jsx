
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Legal = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getAssetPath = (path) => {
        const baseUrl = window.playinConfig?.assetsUrl || '';
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${baseUrl}${cleanPath}`;
    };

    return (
        <main className="view-section active">
            <div className="city-page-header" style={{ backgroundImage: `url(${getAssetPath('assets/images/hero_bg.png')})`, height: '40vh', minHeight: '300px' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.6)' }}>MENTIONS LÉGALES</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ddd' }}>PlayIN Grand Est</p>
                </div>
            </div>

            <div className="city-page-content">
                <button className="btn btn-back" onClick={() => navigate('/')}>
                    <i className="fa-solid fa-arrow-left"></i> RETOUR
                </button>

                <div className="registration-box" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', color: '#ccc', lineHeight: '1.6' }}>
                    <h2 style={{ color: 'var(--ce-red)', marginBottom: '20px' }}>ÉDITEUR DU SITE</h2>
                    <p>
                        <strong>Hoplan.gg et HopLan sont des marques associées et gérées par la société suivante :</strong><br />
                        Alsace Esport Arena<br />
                        9 rue la fayette 67100 Strasbourg<br />
                        SARL au capital de 5000€<br />
                        RCS STRASBOURG : 833837073<br />
                        SIRET : 878 868 850 00024<br />
                        APE : 9329Z<br />
                        <strong>Responsable de la publication du site :</strong> NAEGELEN Quentin, Elio Baumann
                    </p>

                    <h2 style={{ color: 'var(--ce-red)', marginTop: '40px', marginBottom: '20px' }}>DÉCLARATION DE CONFIDENTIALITÉ</h2>
                    <p>
                        La présente constitue la déclaration de confidentialité de L’Alsace Esport Arena. Alsace Esport Arena (sigle AEA) : société à responsabilités limitées au capital de 5000 euros, dont le siège social se situe 9 rue la fayette, 67100 Strasbourg, immatriculée au Registre du Commerce et des Sociétés de Strasbourg sous le numéro 878 868 850.
                    </p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Pourquoi cette déclaration de confidentialité ?</h3>
                    <p>
                        Si vous êtes membre à L’Alsace Esport Arena, souhaitez souscrire un abonnement L’Alsace Esport Arena, souhaitez acheter des heures de gaming, si vous visitez notre site internet par intérêt, utilisez notre application ou répondez à nos publications sur les réseaux sociaux, nous avons besoin de certaines données personnelles vous concernant. Nous voulons être transparents sur le traitement de vos données personnelles par L’Alsace Esport Arena, d’où cette déclaration de confidentialité.<br />
                        L’Alsace Esport Arena traite vos données personnelles avec le plus grand soin et respecte les lois et règlements en matière de protection des données personnelles, comme le Règlement général sur la protection des données (RGPD).<br />
                        Nous avons répertorié ci-dessous pour vous les données que nous traitons, les bases légal utilisées, les raisons pour lesquelles nous le faisons et comment nous traitons vos données à caractère personnel. En outre, nous vous expliquons comment vous pouvez influencer le traitement de vos données à caractère personnel par L’Alsace Esport Arena.
                    </p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Quelles données à caractère personnel traitons-nous ?</h3>
                    <p>
                        L’Alsace Esport Arena traite des données à caractère personnel. Selon le RGPD, les données à caractère personnel sont « toute information concernant une personne physique identifiée ou identifiable ». Il s’agit de toutes les informations qui ramènent directement ou indirectement à votre personne.<br />
                        Nous recevons les données directement de votre part, lorsque vous vous inscrivez à L’Alsace Esport Arena, lorsque que vous visitez le site Web ou bien lorsque vous nous contactez via les réseaux sociaux.
                    </p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Données de nos membres</h4>
                    <p>
                        Lorsque vous souscrivez à L’Alsace Esport Arena, nous traitons en tout état de cause vos nom, adresse, lieu de résidence, numéro de téléphone, adresse électronique, numéro de compte bancaire, sexe et date de naissance.<br />
                        Même si vous avez déjà un abonnement à L’Alsace Esport Arena, nous continuerons à traiter ce type de données à caractère personnel vous concernant. En cas d’utilisation des services de L’Alsace Esport Arena, en fonction des services achetés, les données personnelles suivantes sont également traitées : numéro de membre, login d’accès, pseudo, canal par lequel vous êtes devenu membre, visite d’inscription du club, type d’abonnement, nombre d’heures achetées, suppléments souscrits, profil esportif si l’enquête a été complétée, toute information que vous avez pu fournir à notre service Clients, votre état financier avec L’Alsace Esport Arena (services et produits achetés et s’ils ont été payés ou non), tout score NPS si vous avez participé à une enquête de satisfaction des membres.<br />
                        Enfin, Nous avons des caméras au sein du club. Il est donc possible que vous soyez filmé par ce système de vidéosurveillance. Aucune caméra n’est installée dans les toilettes et la salle bootcamp et nous ne visionnons et conservons les images que si cela est nécessaire et pour une durée limitée. Nous utilisons la vidéosurveillance pour assurer le contrôle de l’accès ainsi que la sécurité des biens et des personnes présentes dans le club.
                    </p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Données des visiteurs de notre site internet</h4>
                    <p>
                        Les données à caractère personnel des visiteurs de notre site internet sont également traitées. Il s’agit des données personnelles que vous complétez vous-même, entre autres, sur la page de contact ou dans la boutique en ligne, telles que votre adresse électronique, votre nom, votre adresse, votre lieu de résidence, votre club actuel ou numéro de téléphone.
                    </p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Présence sur les réseaux sociaux</h4>
                    <p>
                        Les données que vous remplissez vous-même sur les réseaux sociaux ou que nous recueillons à la suite de vos réactions dues à votre présence sur les réseaux sociaux sont traitées par L’Alsace Esport Arena. Il peut s’agir de données à caractère personnel que vous complétez vous-même sur la page de contact de la plate-forme en question, telles que votre adresse électronique, nom, adresse, lieu de résidence ou un numéro de téléphone.
                    </p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Quelles sont les bases légal pour le traitement?</h3>
                    <p>Nous ne pouvons traiter vos données personnelles que s’il existe une base légale. Le traitement sera légal :</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Lorsque vous avez donné votre permission pour cela. Cette permission peut toujours être retirée ;</li>
                        <li>Lorsque le traitement est nécessaire à l’exécution du contrat que vous avez conclu avec L’Alsace Esport Arena ;</li>
                        <li>Lorsque le traitement est nécessaire au respect d’une obligation légale de L’Alsace Esport Arena ;</li>
                        <li>Lorsque le traitement est nécessaire à l’accomplissement d’une mission effectuée dans l’intérêt public ou dans l’exercice de pouvoirs publics ; et</li>
                        <li>Lorsque le traitement est nécessaire aux fins des intérêts légitimes poursuivis par L’Alsace Esport Arena.</li>
                    </ul>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>À quelles fins traitons-nous vos données ?</h3>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Prestations de service</h4>
                    <p>L’Alsace Esport Arena traite vos données pour pouvoir vous fournir un service adapté à vos besoins.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Informer</h4>
                    <p>L’Alsace Esport Arena traite vos données afin de pouvoir vous informer principalement par courriel (ou dans quelques cas par lettre ou par téléphone). Vous recevez des informations sur votre abonnement auxquelles vous ne pouvez pas vous désabonner. Vous recevez également des informations sur les produits et services de L’Alsace Esport Arena, tels que la confirmation des horaires d’entraînement, les invitations aux tournois, les offres de stages, de coaching et lors de promotions spéciales. Vous pouvez vous désabonner de ces messages à tout moment.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Activités de marketing et de vente</h4>
                    <p>Lors de votre inscription, nous vous demandons si vous souhaitez également recevoir des informations sur d’autres types de produits et services de L’Alsace Esport Arena, des produits et services de tiers et si nous pouvons utiliser vos données pour vous envoyer des informations correspondant à votre profil. Si vous indiquez que vous ne souhaitez pas recevoir ces informations, vous ne les recevrez pas. Vous pouvez toujours vous désabonner de ces informations, indiquer et modifier votre choix via le lien approprié ou par l’intermédiaire du site internet. Pour être clair : nous ne vendons pas les données personnelles de nos membres à des tiers pour qu’ils puissent utiliser ces données pour leurs activités de marketing direct.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Analyses et enquête (de marché)</h4>
                    <p>Nous pouvons utiliser vos données personnelles à des fins de recherche et d’analyse, dans le but d’améliorer les services de L’Alsace Esport Arena. Nous pouvons également vous proposer de participer à une étude de clientèle ou de marché sans engagement afin d’améliorer notre service. Dans ce cas, vous décidez vous-même si vous souhaitez y participer ou non en donnant votre consentement.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Rapports</h4>
                    <p>L’Alsace Esport Arena traite les données des membres pour réaliser des analyses statistiques et établir des rapports de gestion. Sur la base de ces analyses et rapports, des décisions sont prises, les produits et services sont évalués et l’efficacité des campagnes est examinée. Les données des membres sont utilisées à cette fin à un niveau agrégé. Agrégé, signifie que les données ne contiennent pas d’informations sur les membres individuels, mais seulement des informations sur certains groupes en fonction de l’utilisation, de l’âge ou des nouveaux membres.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Contacts avec le membre</h4>
                    <p>Si vous nous contactez ou si nous vous contactons par téléphone, courrier électronique, réseaux sociaux, chat ou tout autre moyen, vos informations seront enregistrées. Les collaborateurs de L’Alsace Esport Arena peuvent voir ultérieurement qu’il y a eu un contact préalable avec vous et sur quel sujet. Nous pouvons ainsi vous aider plus rapidement et d’une meilleure manière. Songez, par exemple, aux questions sur les prestations de service, les plaintes, les factures et les paiements, si vous participez à des études de marché et à des conversations commerciales.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Obligations légales</h4>
                    <p>L’Alsace Esport Arena peut être tenue par la loi ou la réglementation de traiter vos données à caractère personnel et/ou de les fournir à des tiers. Par exemple, lorsqu’une autorité compétente telle que la police en fait la demande dans le cadre d’une enquête criminelle.</p>

                    <h4 style={{ color: 'white', marginTop: '20px', fontSize: '1.1rem' }}>Autres objectifs</h4>
                    <p>Si L’Alsace Esport Arena souhaite utiliser des données personnelles dans un autre contexte que celui décrit précédemment, il vous sera demandé votre permission.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Utilisons- nous des cookies ?</h3>
                    <p>L’Alsace Esport Arena utilise des cookies lorsqu’elle offre ses services. Vous pouvez lire ce que sont les cookies, et quels types de cookies L’Alsace Esport Arena utilise dans la Déclaration en matière de cookies de L’Alsace Esport Arena, telle que publiée sur notre site www.alsacearena.com.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Comment gérons-nous la sécurité de vos données ?</h3>
                    <p>L’Alsace Esport Arena veille à prendre les mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données à caractère personnel contre, entre autres, la perte, la destruction ou l’endommagement, l’accès non autorisé ou toute autre forme de traitement illicite de vos données personnelles. Nous le faisons, entre autres, en prenant des mesures physiques et organisationnelles de sécurité d’accès, en protégeant chaque poste de travail avec un nom d’utilisateur, un mot de passe et une gestion des autorisations, afin que vos données ne puissent pas être consultées par tous les collaborateurs de L’Alsace Esport Arena. Mais la mise à jour des logiciels et les tests réguliers de nos mesures de sécurité en font également partie.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Combien de temps conservons-nous vos données ?</h3>
                    <p>Nous conservons vos données dans la mesure où cela est nécessaire à la réalisation des finalités pour lesquelles nous les traitons et pour une durée n’excédant pas celle autorisée par la loi. Le délai de conservation final diffère par type de données personnelles. Si vous êtes membre, nous conserverons en tout cas vos données pendant toute la durée de votre affiliation. Après l’expiration de la période de conservation, vos données personnelles seront anonymisées ou effacées.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Est-ce que nous utilisons les services de tiers pour le traitement des données ?</h3>
                    <p>L’Alsace Esport Arena utilise les services de tierces parties. Cela ne se produit qu’après un contrôle de sécurité et de protection de la vie privée et après que l’entreprise ait signé un accord concernant l’utilisation et la protection des données à caractère personnel. Les activités dans lesquelles des tierces parties sont impliquées sont: l’offre de cours d’introduction, le marketing (en ligne), les études de marché, la collecte, la publicité et l’analyse de l’efficacité des annonces, l’analyse Internet et les services d’applications/SaaS utilisés dans le contexte du recrutement et de la sélection, l’administration des membres, le service Clients et le marketing, les applications mobiles, les contacts téléphoniques et les services bancaires.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Est-ce que nous fournissons des données à des tiers ?</h3>
                    <p>En principe, L’Alsace Esport Arena ne fournit ou ne vend pas de données à des tiers. L’Alsace Esport Arena peut toutefois être tenue par la loi ou la réglementation de traiter vos données à caractère personnel et/ou de les fournir à des tiers. Par exemple, lorsqu’une autorité compétente telle que la police en fait la demande dans le cadre d’une enquête pénale.</p>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Comment pouvez-vous influencer le traitement de vos données personnelles ?</h3>
                    <p>Un certain nombre de droits des parties concernées sont définis dans le RGPD. Toute personne a le droit d’accéder à ses données personnelles, de les faire effacer, de demander une limitation du traitement, de les faire transférer et de s’opposer au traitement de ses données à caractère personnel. Voici une brève explication des différents droits.</p>

                    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '10px' }}>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Accès aux données :</strong> Vous avez le droit de consulter vos données personnelles et d’en recevoir une copie.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Rectification des données :</strong> Vous avez le droit de faire rectifier vos données à caractère personnel si elles sont incorrectes, et de les faire compléter si elles sont incomplètes.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Effacement des données :</strong> Vous pouvez demander que vos informations personnelles soient supprimées et cela sera respecté dans les cas suivants : parce que les données ne sont plus nécessaires aux fins pour lesquelles elles ont été collectées ou traitées, parce que vous avez retiré votre consentement, parce que vous vous êtes opposé avec succès au traitement, parce que les données personnelles ont été traitées illégalement ou pour satisfaire à une obligation légale.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Limitation du traitement :</strong> Vous avez le droit de demander et d’obtenir la limitation d’un traitement dans un certain nombre de cas spécifiques: pendant la période de contestation de l’exactitude des données personnelles et de leur vérification, si le traitement s’est avéré illégal, mais que vous ne voulez pas que les données soient supprimées, si L’Alsace Esport Arena n’a plus besoin des données, mais que vous avez toujours besoin des données pour une action en justice; et si vous vous êtes opposé au traitement et attendez toujours la réponse à l’objection. Pour ainsi dire, vous demandez le blocage temporaire de ces données afin d’en limiter le traitement à l’avenir.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Portabilité des données :</strong> Vous avez le droit de faire transférer vos données. Cela vous permet de demander et de recevoir une copie de vos données personnelles qui peuvent être utilisées, par exemple, par un autre fournisseur de services. Les données seront fournies sous une forme structurée, usuelle et lisible par machine. Pensez à un fichier Excel, à un fichier CSV ou à des fichiers qui seront téléchargeables. Ce droit ne s’applique que si le traitement des données est fondé sur un consentement ou un contrat et si le traitement est effectué au moyen de procédures automatisées.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Opposition au traitement :</strong> Vous avez toujours le droit de vous opposer pour des raisons liées à votre situation spécifique: au traitement de vos données personnelles sur la base d’une tâche d’intérêt général ou d’une mission de l’autorité publique, si L’Alsace Esport Arena s’est vu confier une telle mission et si le traitement est nécessaire à la sauvegarde des intérêts légitimes de L’Alsace Esport Arena ou d’un tiers, si vos intérêts sont plus importants que ceux de L’Alsace Esport Arena. Lorsque vos données personnelles sont traitées à des fins de marketing direct, vous pouvez toujours vous opposer à ce traitement ainsi qu’au profilage lié au marketing direct.</li>
                        <li style={{ marginBottom: '10px' }}><strong style={{ color: 'white' }}>Soumettre une plainte :</strong> Vous avez le droit de soumettre une réclamation sur la manière dont nous traitons vos données. Lorsque vous soumettez une réclamation, nous préférons la résoudre nous-même. De plus, vous avez toujours le droit de contacter l’autorité compétente qui supervise la protection des données à caractère personnel avec votre réclamation.</li>
                    </ul>

                    <h3 style={{ color: 'white', marginTop: '30px' }}>Si vous souhaitez exercer l’un de vos droits, procédez comme suit :</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Vous pouvez envoyer votre demande via l’email de contact <a href="mailto:contact@alsacearena.com" style={{ color: 'var(--ce-red)' }}>contact@alsacearena.com</a>.</li>
                        <li>Veuillez toujours indiquer dans votre demande de quelle type de demande il s’agit : « demande d’accès », « demande de rectification », etc., et indiquez vos nom, adresse et numéro de téléphone.</li>
                        <li>A des fins de vérification, nous vous enverrons un courriel à l’adresse électronique fournie à L’Alsace Esport Arena, vous invitant à confirmer votre demande.</li>
                        <li>Vous recevrez une réponse au plus tard un mois suivant la réception de la demande.</li>
                    </ul>

                    <p style={{ marginTop: '30px' }}>
                        Si vous avez des questions à propos de la présente déclaration de confidentialité et à propos de la politique de L’Alsace Esport Arena, vous pouvez vous adresser à <a href="mailto:contact@alsacearena.com" style={{ color: 'var(--ce-red)' }}>contact@alsacearena.com</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Legal;
