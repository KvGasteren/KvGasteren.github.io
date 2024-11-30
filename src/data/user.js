const INFO = {
	main: {
		title: "MIW Portfolio - SOIA",
		name: "Koen van Gasteren",
		email: "gasteren@gmail.com",
		logo: `${process.env.PUBLIC_URL}/logo.png`,
	},

	socials: {
		github: "https://github.com/kvgasteren",
		linkedin: "https://www.linkedin.com/in/koenvangasteren/",
		instagram: "https://www.instagram.com/sokkenkoen/",
		stackoverflow: "https://stackoverflow.com/users/23525037/kvg",
	},

	homepage: {
		title: "Make-IT-Work Portfolio",
		description:
			"Op deze site presenteer ik mijn Make-IT-work portfolio. Hieronder staat per rubric een link naar de bewijsmaterialen voor die rubric. Ook is er een logboek waar ik per dag een korte samenvatting van het project geef.",
	},

	about: {
		title: "Koen van Gasteren",
		description:
			"Ik ben Koen, een enthousiaste ontwikkelaar. Tijdens make-IT-work werk ik samen met mijn team QBMK aan de projecten."
	},

	articles: {
		title: "Logboek",
		description:
			"Dagelijkse samenvatting van de vorderingen in het project Quizmaster",
	},

	projects: [
		{
			title: "Kwaliteits Software",
			description:
				"	Je bouwt gestructureerde, werkende, geteste, onderhoudbare software in een Model-ViewController architectuur. Je gebruikt persistentie in een zelf ontworpen en gebouwde database. De database is deels relationeel en deels documentstore. Je hebt unit tests gebruikt om functionaliteiten te testen en testdata gegenereerd tbv de tests. Je herkent code smells, lost die op en adviseert collega's om hun code ook clean te maken. Je werkt in teamverband en gebruikt versioning in Git om gezamenlijk aan code te kunnen werken.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},

		{
			title: "Text I/O",
			description:
				"Je maakt zelfstandig code met de juiste functionaliteiten om tekstbestanden voor complexere objecten in te lezen en weg te schrijven.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "WIP",
			link: "#",
		},

		{
			title: "MVC Basis",
			description:
				"Je kent zelfstandig de juiste functionaliteiten toe aan de juiste soort classes en implementeert daarin de juiste code. De model, view, controller classes hebben volledig werkende CRUDfunctionaliteit voor een eenvoudig object binnen het ontwerpmodel.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "WIP",
			link: "#",
		},

		{
			title: "Programmeer Vaardigheden",
			description:
				"	Je hebt geheel zelfstandig de code geschreven voor een view en controller met een hogere complexiteit.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},

		{
			title: "Persistentie in SQL",
			description:
				"Je hebt een Database Access Object class gemaakt voor een object uit het ontwerpmodel. De benodigde CRUD-functionaliteit is volledig aanwezig, en werkt zodanig dat alle data van het object toegevoegd aan, gewijzigd in , verwijderd en gelezen uit een SQL database kan worden.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},
		{
			title: "Persistentie in NoSQL",
			description:
				"Je hebt een Documentstore NoSQL database gebruikt voor het opslaan en ophalen van data binnen je project. De benodigde classes met schrijf- en leesfunctionaliteit zijn gemaakt en werken volledig.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},
		{
			title: "Software Maintenance",
			description:
				"Je geeft zelf advies over de code van collega’s tav R1, R2 en R10. Je schrijft code die clean is, doordat rules 1 t/m 7 van R10 zijn nageleefd. Geen significante violations voor R1 en R2",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},
		{
			title: "Testing",
			description:
				"Je maakt volledig werkende unittests om de werking van een methode te testen. Je identificeert hierbij edge cases correct en ontwerpt passende tests. Je ontwerpt tests op een manier zodat tests onafhankelijk gedraaid kunnen worden. Je zet hierbij de functionaliteit van een unittesting framework in.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},
		{
			title: "Tooling",
			description:
				"	Ontwikkelstraat: je gebruikt de voorgeschreven tooling en software. Je kunt geheel zelfstandig gebruik maken van Git zonder hulp van anderen. Je maakt versies op de server door het juiste gebruik van push en pull.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "WIP",
			link: "#",
		},
	],
};

export default INFO;
