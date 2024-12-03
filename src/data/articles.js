import React from "react";

function article_1() {
	return {
		date: "25 november 2024",
		title: "Quizmaster dag 0",
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
					.article-image {
				width: 50%;
				margin-left: auto;
				margin-right: auto;
				display: block;
			}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h1>Kick-off en Git in teamverband</h1>
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
					<img className="article-image" src={`${process.env.PUBLIC_URL}/plane.png`} alt="paper-plane" />
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
		title: "Quizmaster Dag 1",
		description: "Eerste dag - waar we een sprintplanning maakten, en begonnen aan het ontwerp van de database",
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.article-image {
				width: 50%;
				margin-left: auto;
				margin-right: auto;
				display: block;
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
						<img className="article-image" src={`${process.env.PUBLIC_URL}/ERD.png`} alt="entity-relationship diagram" />
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
		description: "Toen we onze eerste standup hielden, en leerden over Maven en MVC architectuur",
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
		description: "Toen we van huis werkten en onze code gezamenlijk testten in een code review meeting",
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

const article_5 = () => {
	return {
		date: "29 november 2024",
		title: "Quizmaster Dag 4",
		description: "Waarop we onze eerste sprintreview en -retro hadden, en we een klassediagram wilden maken",
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
		keywords: ["Sprint Review", "Sprint Retrospective"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Sprint Review</h2>
						<p>De ochtend begon met de Sprint Review. Sander had de pet van Product Owner op en we hebben het login scherm van onze applicatie aan hem laten zien.
						De review was gedetaileerder dan ik had verwacht. We moeten beter testen voor de volgende review. Ondanks een paar kleine foutjes, verliep de review soepel.</p>
						<p>
							Nadat we het login scherm goed hadden bekeken, zette Sander zijn PO-pet af, en wilde hij ook nog even in de code kijken. Ook daar kwamen wat zaken uit die we nog moeten bekijken. Die hebben we op het sprintbord gezet voor Sprint 2.
						</p>
						<p>
							Het is nu een stuk duidelijker wat de verwachtingen zijn. Dus ik heb zin in de volgende review waarin we beter voorbereid kunnen laten zien wat we hebben geleerd.
						</p>
					</div>
					<div className="paragraph">
						<h2>Sprint Retrospective</h2>
						<p>
							Na een kopje koffie, waren we direct begonnen met een evaluatie van de review. Later bleek dat dit ook bij de retro aan bod zou komen. Dat zorgde ervoor dat we zeer goed voorbereid aan de retro begonnen.
						</p>
						<p>In onze evaluatie/retro hebben we samenwerking, taakverdeling en planning besproken en afspraken gemaakt hoe we zaken in Sprint 2 wilden verbeteren.</p>
						<p>Francine begeleidde ons in de formele retro. Dat verliep redelijk soepel.</p>
					</div>
					<div className="paragraph">
						<h2>Progress meeting</h2>
						<p>
							In de vroege middag hebben we een progressmeeting gehouden waarbij we allemaal onze code presenteerden aan het team.
							Daaruit zijn nog wat zaken naar voren gekomen die we wilden finetunen, en daarmee zijn we in de middag aan de slag gegaan.
							In deze vergadering hebben we ook onze code getest - het inlezen van de csv bestanden ging goed en het login en welomsscherm werkte goed.
						</p>
					</div>
					<div className="paragraph">
						<h2>Storyboarding en Klassediagram</h2>
						<p>In de middag hebben we het storyboard uitgetekend op het whiteboard in ons kamertje. Nu is het duidelijker hoe de uiteindelijke applicatie eruit zal gaan zien. We hebben ook wat zaken gevonden die we met de PO zullen moeten bespreken. Dat is fijn want Sander had ons de feedback gegeven dat we (veel) te weinig vragen hadden gesteld.</p>
						<p>Na het storyboard hebben we geprobeerd een begin te maken aan een UML klassediagram, maar de moeheid zette in, en we hebben die taak opgesplitst om maandag weer op te pakken.</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
};

const article_6 = () => {
	return {
		date: "29 november 2024",
		title: "Quizmaster Sprint 2 - Dag 1",
		description: "Waarop we beter inzicht kregen in de applicatie en leerden over testen",
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
		keywords: ["testing", "Sprint 2"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h2>Testing</h2>
						<p>
							's Ochtends gaf Henk les over testen. De les duurde tot de lunch. Ik zal later de documentatie nog moeten doornemen, want ik kon mijn aandacht er niet bijhouden.
						</p>
					</div>
					<div className="paragraph">
						<h2>Klassediagram uitwerken</h2>
						<p>
							Na een korte lunch hebben we standup gehouden. Daarna hebben we gesproken over het centraal hosten van de database via Oege.
							En we hebben gekeken naar hoe de verschillende klassen nu met elkaar in verbinding staan. Het klassediagram krijgt zo een beetje beter vorm. We hebben besloten om bij een-op-veel relaties in het "kind" een verwijzing naar de "ouder" op te slaan.
						</p>
					</div>
					<div className="paragraph">
						<h2>Dagelijks werk</h2>
						<p>
							Na de vergadering zijn we naar huis gegaan om daar verder te werken. Ik heb thuis nog wat issues met ons ERD (overgebleven uit Sprint1) opgelost en een beginnetje gemaakt aan de service layer.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
};



const myArticles = [article_1, article_2, article_3, article_4, article_5, article_6];

export default myArticles;
