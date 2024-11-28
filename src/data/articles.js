import React from "react";

function article_1() {
	return {
		date: "25 november 2024",
		title: "Kick Off en Git in Teamverband",
		description:
			"De start van het project Quizmaster. Waar we ingedeeld werden in onze teams, een SCRUM game speelden en 's middags worstelden met GIT.",
		keywords: [
			"GIT",
			"Scrum",
			"Version Control",
			"QBMK",
			"Quality Benchmark",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Kick Off</h2>
						<p>
							We zijn de dag begonnen met de kick-off waarbij de
							structuur en de gang van zaken van het project
							werden uitgelegd. Een belangrijke boodschap was dat
							we geacht werden het zelf uit te zoeken als we er
							niet uit kwamen.
						</p>
						<p>
							Daarna hadden we een korte teambuilding sessie
							waabij we een teamnaam kozen, een logo ontwierpen,
							en een powerpoint presentatie hebben laten genereren
							door ChatGPT.
						</p>
						<p>
							Het laatste onderdeel van de ochtend was een leuke
							scrum game. We moesten een productieproces opzetten
							voor papieren vliegtuigjes. Er was een scoresysteem
							en we leerden het belang van timeboxing en
							samenwerking, en ook de valkuilen die horen bij het
							inschatten van de hoeveelheid werk. Leuk en
							leerzaam.
						</p>
					</div>
					<img src={`${process.env.PUBLIC_URL}/plane.png`} alt="paper-plane" />
				</div>
				<div className="paragraph">
					<h2>GIT in Teams</h2>
					<p>
						Na de lunch zijn we met GIT aan de slag gegaan. We
						hebben twee workflows bekeken met ons nieuwe teampje.
						Het pullen, pushen en mergen van en naar de remote
						repository zorgde voor veel hilariteit en frustratie.
						Uiteindelijk na veel debuggen zijn we eruit gekomen.
					</p>
					<p>
						We hebben de dag afgesloten met de afspraak morgen in
						Hilversum samen te werken aan het project.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26 november 2024",
		title: "Quizmaster Dag 1 - ERD en eerste klassen",
		description: "Eerste dag - sprintplanning, ontwerp database",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			`,
		keywords: ["ERD", "QBMK", "Database", "Sprintplanning"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>ERD en sprintplanning spint 1</h1>
					<div>
						<h2>ERD</h2>
						<p>
							We zijn begonnen met het ontwerpen van de Database.
							Van 10 tot 11 hebben we een open discussie gevoerd
							in een van de kamertjes in Hilversum. Aanvankelijk
							hebben we een draftontwerp gemaakt op het
							whiteboard. Dat ging vrij soepel. We hebben wel af
							en toe wat uit moeten vegen.
						</p>
						<p>
							Het tweede deel van de ochtend hebben we de ERD
							uitgewerkt tot een model dat we met onze PO willen
							bespreken.
						</p>
						<img src={`${process.env.PUBLIC_URL}/erd.png`} alt="entity-relationship diagram" />
					</div>
					
					<div>
						<h2>De eerste klassen</h2>
						<p>
							In de middag zijn we begonnen met een soort sprint
							planning. Nog niet super gestructureerd - kans voor
							improvement. We hebben de deliverables van deze week
							bekeken en ons sprint board gevuld met de tasks en
							deze verdeeld.
						</p>
						<p>
							Ik heb de basis voor de klasse Vraag gecodeerd en
							daarna met Bogdan samen in een Code With Me sessie
							ge-peer-programmed aan het inlezen van de .csv
							bestanden. Aanvankelijk was ons idee om een INSERT
							script te genereren, maar het escapen van alle
							gemene speciale karakters in de wachtwoorden belette
							ons dat te doen. We hebben voor een oplossing
							gekozen met gebruik van Prepared Statement.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const article_3 = () => {
	return {
		date: "27 november 2024",
		title: "Quizmaster Dag 2",
		description: "Eerste standup, Maven, MVC",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
			`,
		keywords: ["MVC", "QBMK", "Maven", "Standup"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Standup</h2>
						<p>Vandaag was de eerste standup onder begeleiding van Francine. Quang heeft zich als Scrummaster opgeworpen.</p>
						<p>We hebben ons goed aan de timeboxing gehouden. Er waren zeker wel nog talking points om na de stand up op te pakken.</p>
					</div>
					<div className="paragraph">
						<h2>Maven</h2>
						<p>Henk heeft ons na de standups uitgelegd hoe een Maven project in elkaar zit. Actieputen die uit deze les voortkwamen: 
							instellingen in onze respectievelijke projecten aanpassen en de dependencies updaten.
						</p>
					</div>
					<div className="paragraph">
						<h2>MVC</h2>
						<p>
							Na de lunch zijn we in de MVC architectuur gedoken door het MVCWorkshopDemo project te doorlopen. Naast inzicht in de MVC
							architectuur gaf dit ook inspiratie voor de implementatie van de deliverables voor de huidige sprint.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
};

const article_4 = () => {
	return {
		date: "28 november 2024",
		title: "Quizmaster Dag 3",
		description: "Text I/O, Login Scene, Working From Home, Code",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.randImage {
				align-self: center;
				outline: 2px solid red;
			}
			`,
		keywords: ["Text I/O", "Testing", "WFH"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Working From Home</h2>
						<p>Als team hebben we besloten om vandaag van huis te werken.</p>
						<p>De start van de dag was een stand up. Die verliep prima - geen inhoudelijke discussie. Pure updates.</p>
						<p>Na de stand up heb ik met Bogdan gebeld om even een plan van aanpak te bespreken voor de werkzaamheden van de dag.</p>
					</div>
					<div className="paragraph">
						<h2>Text I/O</h2>
						<p>We hadden een kleine taakwissel om wat beter uit te komen met afhankelijkheden. Dus ik heb in de ochtend de code geschreven voor het inlezen van de Curussen.</p>
					</div>
					<div className="paragraph">
						<h2>Progress meeting</h2>
						<p>
							In de vroege middag hebben we een progressmeeting gehouden waarbij we allemaal onze code presenteerden aan het team.
							Daaruit zijn nog wat zaken naar voren gekomen die we wilden finetunen, en daarmee zijn we in de middag aan de slag gegaan.
							In deze vergadering hebben we ook onze code getest - het inlezen van de csv bestanden ging goed en het login en welomsscherm werkte goed.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
};



const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
