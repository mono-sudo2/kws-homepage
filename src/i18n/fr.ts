import type { Translations } from "./de";

export const fr: Translations = {
	header: {
		nav: {
			start: "Accueil",
			preise: "Tarifs",
			oeffnungszeiten: "Horaires",
			ueberUns: "À propos",
			kontakt: "Contact",
			jobs: "Emplois",
		},
		cta: "Réserver",
	},
	hero: {
		title: "Bienvenue au Kletterwald Staufen",
		subtitle: "Aventure en Forêt-Noire",
		description:
			"Vivez l'aventure dans les cimes des arbres ! Escalade, balançoires et tyroliennes pour toute la famille – en pleine nature.",
		cta1: "Réserver",
		cta2: "Horaires",
	},
	erlebnis: {
		badge: "Votre Expérience",
		title: "Aventures dans les cimes",
		description:
			"Notre parc accrobranche propose des expériences inoubliables sur plusieurs parcours pour enfants, familles et aventuriers. De l'action pure vous attend au cœur de la Forêt-Noire !",
		features: [
			{
				title: "Nature pure",
				description:
					"Grimpez à travers la Forêt-Noire – entouré d'arbres centenaires et d'air frais.",
			},
			{
				title: "Plaisir pour tous",
				description:
					"Du parcours enfants au Base Jump – pour tous les âges et niveaux d'expérience.",
			},
			{
				title: "Pure aventure",
				description:
					"Tyroliennes, ponts suspendus et stations d'escalade pour de vraies montées d'adrénaline.",
			},
			{
				title: "Sécurité maximale",
				description:
					"Équipements de sécurité dernier cri et personnel formé – pour grimper l'esprit tranquille.",
			},
		],
	},
	parcours: {
		badge: "Nos Parcours",
		title: "Choisissez votre aventure",
		description:
			"Du plus facile au plus extrême – trouvez le parcours qui vous convient.",
		difficulty: "Difficulté :",
		items: [
			{
				name: "Parcours Enfants",
				duration: "env. 45 min.",
				minHeight: "à partir de 120 cm",
				description:
					"Le début parfait pour les petits aventuriers ! Faible hauteur, beaucoup de plaisir et des stations adaptées aux enfants.",
			},
			{
				name: "Débutants & Familles",
				duration: "env. 1h30",
				minHeight: "à partir de 140 cm",
				description:
					"Idéal pour les familles et les débutants en escalade. Des éléments variés à hauteur modérée.",
			},
			{
				name: "Tyroliennes & Free Jumps",
				duration: "env. 2h",
				minHeight: "à partir de 150 cm",
				description:
					"Tyroliennes rapides et sauts libres palpitants – pour ceux qui recherchent le frisson !",
			},
			{
				name: "Base Jump / Jump & Fly",
				duration: "env. 2h30",
				minHeight: "à partir de 160 cm",
				description:
					"La montée d'adrénaline ultime ! Sautez de hauteurs vertigineuses et volez à travers les cimes.",
			},
		],
	},
	preise: {
		badge: "Tarifs",
		title: "Des tarifs équitables pour chaque aventure",
		description:
			"Tous les tarifs incluent l'équipement de sécurité et l'instruction professionnelle.",
		categories: [
			{
				category: "Enfants",
				age: "6–13 ans",
				price: "19 €",
				note: "Parcours enfants inclus",
			},
			{
				category: "Adolescents",
				age: "14–17 ans",
				price: "25 €",
				note: "Tous parcours inclus",
			},
			{
				category: "Adultes",
				age: "à partir de 18 ans",
				price: "30 €",
				note: "Tous parcours inclus",
			},
		],
		hint: "💡 Réservation à l'avance recommandée. Le briefing sécurité dure env. 20 minutes et est inclus dans le prix. Enfants de moins de 14 ans uniquement accompagnés d'un adulte.",
		link: "Voir tous les tarifs & détails →",
		bestOffer: "Meilleure offre",
	},
	reservierung: {
		badge: "Horaires",
		title: "Nos horaires d'ouverture",
		description:
			"Les horaires varient selon la saison. Consultez le calendrier pour savoir quand nous sommes ouverts !",
		seasons: {
			hauptsaison: {
				label: "Haute saison (mai–sep)",
				time: "Mar–Ven 13h–19h / Sam-Dim 11h–19h",
			},
			uebergang: {
				label: "Intersaison (avr & oct)",
				time: "Sam/Dim/Jours fériés 11h–18h",
			},
			winterpause: { label: "Pause hivernale (nov–mar)", time: "Fermé" },
		},
		link: "Tous les horaires & détails",
	},
	events: {
		badge: "Événements & Groupes",
		title: "Grimper ensemble, vivre ensemble",
		description:
			"Anniversaire, événement d'entreprise ou sortie scolaire – nous avons le forfait parfait pour vous !",
		cta: "Réserver maintenant",
		items: [
			{
				title: "Anniversaires",
				description:
					"Fêtez votre anniversaire dans les cimes ! Aventure d'escalade incluse, espace pique-nique réservé et une petite surprise pour l'enfant fêté.",
				features: [
					"À partir de 6 enfants",
					"2h30 d'escalade",
					"Espace pique-nique réservé",
				],
			},
			{
				title: "Événements d'équipe",
				description:
					"Renforcez votre équipe avec une aventure partagée ! Nos parcours de team building favorisent la confiance, la communication et la collaboration.",
				features: [
					"À partir de 10 pers.",
					"Planification individuelle",
					"Casse-croûte vigneron",
				],
			},
			{
				title: "Classes scolaires",
				description:
					"Une sortie inoubliable ! Tarifs spéciaux pour les écoles et programmes pédagogiques encadrés pour tous les âges.",
				features: [
					"Tarifs spéciaux (23€ p.p.)",
					"À partir de 20 pers.",
					"Accompagnement pédagogique",
					"Bus ligne 23 direct",
				],
			},
		],
	},
	faq: {
		badge: "FAQ",
		title: "Questions fréquentes",
		description: "Tout ce que vous devez savoir avant votre visite",
		items: [
			{
				question: "À partir de quel âge peut-on grimper ?",
				answer: "Les enfants à partir de 6 ans et d'une taille minimale de 120 cm peuvent grimper sur notre parcours enfants. À partir de 140 cm, tous les parcours sont accessibles. Les enfants de moins de 14 ans doivent être accompagnés d'un adulte.",
			},
			{
				question: "Ai-je besoin d'expérience préalable ?",
				answer: "Non, aucune expérience n'est nécessaire ! Avant de commencer, vous recevrez un briefing sécurité d'env. 20 minutes par notre équipe formée. Ensuite, vous serez parfaitement préparé pour votre aventure d'escalade.",
			},
			{
				question: "Que dois-je apporter ?",
				answer: "Portez des vêtements confortables et sportifs et des chaussures fermées et robustes (pas de sandales ni de tongs). Les cheveux longs doivent être attachés. Nous fournissons tout l'équipement de sécurité.",
			},
			{
				question: "Combien de temps dure une visite ?",
				answer: "Prévoyez env. 2h30 à 3h30 – briefing sécurité inclus (env. 20 min.). Il n'y a pas de limite de temps sur les parcours, vous pouvez grimper aussi longtemps que vous le souhaitez !",
			},
			{
				question: "Peut-on grimper sous la pluie ?",
				answer: "La pluie légère ne pose aucun problème – cela rend l'aventure encore plus excitante ! En cas d'orage, de tempête ou de forte pluie, nous fermons le parc pour des raisons de sécurité. Renseignez-vous au préalable par téléphone.",
			},
			{
				question: "Faut-il réserver à l'avance ?",
				answer: "La réservation n'est pas obligatoire mais recommandée – surtout les week-ends et jours fériés. Cela garantit votre place et évite les temps d'attente.",
			},
		],
	},
	footer: {
		kontakt: "Contact",
		seiten: "Pages",
		folgeUns: "Suivez-nous",
		parking:
			"🚗 Parking gratuit directement au parc d'escalade. Transports en commun : Ligne S3, arrêt « Etzenbach ».",
		copyright: "Kletterwald Staufen – Aventure depuis 2010",
		copyrightYear: "© 2026 Kletterwald Staufen",
		impressum: "Mentions légales",
		datenschutz: "Confidentialité",
		agb: "CGV",
		oeffnungszeiten: "Horaires",
		preise: "Tarifs",
		ueberUns: "À propos",
		kontaktLink: "Contact",
		jobs: "Emplois",
	},
	preisePage: {
		badge: "Tarifs & Billets",
		title: "Des tarifs équitables pour chaque aventure",
		description:
			"Tous les tarifs incluent l'équipement de sécurité, l'instruction professionnelle et 3 heures d'escalade.",
		cta: "Réserver",
		reserve: "Réserver maintenant",
		studentNote:
			"* Les élèves, apprentis et étudiants grimpent au tarif jeune (25 €) – quel que soit l'âge. Merci de présenter une pièce d'identité valide.",
		extras: "Offres supplémentaires",
		extrasDescription:
			"Encore plus d'aventure pour les grimpeurs réguliers et les familles",
		bestChoice: "Meilleur choix",
		extrasItems: [
			{
				title: "Carte Famille",
				price: "99 €",
				description:
					"2 adultes + jusqu'à 3 enfants. Visite unique, tous parcours inclus.",
			},
			{
				title: "Pass Saison",
				price: "149 €",
				description:
					"Accès illimité pour toute la saison (avril–octobre). Valable pour une personne.",
			},
			{
				title: "Chasse au trésor",
				price: "65 €",
				description:
					"Parfait pour les anniversaires, etc. Prix hors billets d'entrée.",
			},
		],
		included: "Inclus dans le prix",
		includedItems: [
			"Équipement de sécurité complet",
			"Env. 20 min. de briefing sécurité",
			"3 heures d'escalade",
			"Encadrement par du personnel formé",
		],
		faqTitle: "Questions fréquentes sur les tarifs",
		faqs: [
			{
				question: "Qu'est-ce qui est inclus dans le prix ?",
				answer: "Le prix d'entrée comprend : équipement de sécurité (harnais, casque, gants), briefing sécurité professionnel (env. 20 min.) et accès illimité aux parcours autorisés pour toute la journée.",
			},
			{
				question: "Y a-t-il des réductions ?",
				answer: "Oui ! Réduction groupe à partir de 10 personnes (2 € de réduction p.p.), pass saison pour les grimpeurs réguliers et cartes famille spéciales. Les détenteurs de la Schwarzwald-Card bénéficient de 10% de réduction.",
			},
			{
				question: "Peut-on payer sur place ?",
				answer: "Oui, nous acceptons les espèces, la carte bancaire et la carte de crédit. La réservation en ligne ne nécessite pas de paiement anticipé – le paiement se fait sur place.",
			},
			{
				question: "Y a-t-il des restrictions d'âge ou de taille ?",
				answer: "Les enfants à partir de 6 ans et d'au moins 120 cm peuvent accéder au parcours enfants. À partir de 140 cm, tous les parcours sont accessibles. Les enfants de moins de 14 ans doivent être accompagnés d'un adulte.",
			},
		],
		ctaTitle: "Prêt pour l'aventure ?",
		ctaDescription:
			"Réservez votre place au Kletterwald Staufen – réservation à l'avance recommandée !",
		categories: [
			{
				category: "Enfants",
				age: "6–13 ans",
				price: "19 €",
				note: "Parcours enfants inclus",
				details:
					"Accès au parcours enfants & parcours débutants. Enfants de moins de 14 ans uniquement accompagnés d'un adulte.",
			},
			{
				category: "Adolescents",
				age: "14–17 ans",
				price: "25 €",
				note: "Tous parcours inclus",
				details:
					"Accès à tous les parcours. Les adolescents à partir de 14 ans peuvent grimper sans accompagnement (avec autorisation parentale).",
			},
			{
				category: "Adultes*",
				age: "à partir de 18 ans",
				price: "30 €",
				note: "Tous parcours inclus",
				details:
					"Accès illimité à tous les parcours incl. Base Jump & tyroliennes. Pas de limite de temps.",
			},
		],
	},
	oeffnungszeitenPage: {
		badge: "Horaires",
		title: "Quand pouvez-vous grimper ?",
		description:
			"Nos horaires d'ouverture varient selon la saison. Planifiez votre visite ici.",
		seasons: {
			hauptsaison: {
				label: "Haute saison (mai–sep)",
				time: "Mar–Ven 13h–19h / Sam-Dim 11h–19h",
			},
			uebergang: {
				label: "Intersaison (avr & oct)",
				time: "Sam/Dim/Jours fériés 11h–18h",
			},
			winterpause: { label: "Pause hivernale (nov–mar)", time: "Fermé" },
		},
		seasonDetails: [
			{
				name: "Haute saison (mai–sep)",
				hours: [
					{ days: "Lundi", time: "Fermé (jour de repos)" },
					{ days: "Mardi – Vendredi", time: "13h00 – 19h00" },
					{
						days: "Samedi, Dimanche & Jours fériés",
						time: "11h00 – 19h00",
					},
				],
				note: "Dernière entrée : 2 heures avant la fermeture",
			},
			{
				name: "Intersaison (avr & oct)",
				hours: [
					{ days: "Lundi – Vendredi", time: "Fermé" },
					{
						days: "Samedi, Dimanche & Jours fériés",
						time: "11h00 – 18h00",
					},
				],
				note: "Dernière entrée : 2 heures avant la fermeture",
			},
			{
				name: "Pause hivernale (nov–mar)",
				hours: [],
				note: "Le parc d'escalade est fermé pendant la pause hivernale. Événements de groupe sur demande.",
			},
		],
		holidays: "Jours fériés",
		holidaysDescription:
			"Réglementations les jours fériés du Bade-Wurtemberg",
		holidayItems: [
			{
				name: "Lundi de Pâques",
				date: "06/04/2026",
				status: "Ouvert (horaires haute saison)",
			},
			{
				name: "1er Mai",
				date: "01/05/2026",
				status: "Ouvert (horaires haute saison)",
			},
			{
				name: "Ascension",
				date: "14/05/2026",
				status: "Ouvert (horaires haute saison)",
			},
			{
				name: "Lundi de Pentecôte",
				date: "25/05/2026",
				status: "Ouvert (horaires haute saison)",
			},
			{
				name: "Fête de l'Unité allemande",
				date: "03/10/2026",
				status: "Ouvert (horaires haute saison)",
			},
			{ name: "Toussaint", date: "01/11/2026", status: "Fermé" },
			{
				name: "Réveillon & Noël",
				date: "24–26/12/2026",
				status: "Fermé (pause hivernale)",
			},
			{
				name: "Saint-Sylvestre & Nouvel An",
				date: "31/12–01/01",
				status: "Fermé (pause hivernale)",
			},
		],
		goodToKnow: "Bon à savoir",
		weather: {
			title: "Météo",
			description:
				"Nous sommes ouverts par pluie légère – cela fait partie de l'aventure ! En cas d'orage, de tempête ou de forte pluie, nous fermons pour des raisons de sécurité. Infos actuelles sur nos réseaux sociaux.",
		},
		parking: {
			title: "Accès & Parking",
			description:
				"Parking gratuit directement au parc d'escalade. Adresse : Etzenbach 1, 79219 Staufen im Breisgau. Facilement accessible par la B31.",
		},
		publicTransport: {
			title: "Transports en commun",
			description:
				"Ligne S3, arrêt « Etzenbach ». Environ 10 minutes depuis la gare de Staufen. Horaires sur VAG Freiburg.",
		},
		ctaTitle: "Planifiez votre visite",
		ctaDescription:
			"Réservez à l'avance et assurez votre place – particulièrement recommandé les week-ends et jours fériés !",
		ctaBook: "Réserver",
		ctaPrices: "Voir les tarifs",
	},
	ueberUnsPage: {
		badge: "À propos",
		title: "Qui sommes-nous",
		description:
			"Depuis plus de 15 ans, nous construisons le plus grand parc d'escalade du sud du Bade – avec passion, sécurité et beaucoup de nature.",
		historyTitle: "Notre histoire",
		historySubtitle: "De 3 parcours au plus grand parc du sud du Bade",
		milestones: [
			{
				year: "2009",
				title: "Fondation",
				description:
					"Ouverture avec 3 parcours et une grande vision – du plaisir d'escalade pour tous au cœur de la Forêt-Noire.",
			},
			{
				year: "2013",
				title: "Expansion",
				description:
					"Nouveaux parcours pour enfants et familles. Le parc devient une destination pour toute la région.",
			},
			{
				year: "2017",
				title: "Croissance",
				description:
					"10+ parcours et plus de 100 000 visiteurs. Le Kletterwald Staufen devient le plus grand parc du sud du Bade.",
			},
			{
				year: "2021",
				title: "Innovation",
				description:
					"Introduction de systèmes de sécurité dernier cri et de nouveaux formats comme l'escalade nocturne et les événements de team building.",
			},
			{
				year: "2024",
				title: "Jalon",
				description:
					"Plus grand parc d'escalade du sud du Bade avec 15+ parcours, 200+ éléments d'escalade et plus de 100 000 visiteurs par an.",
			},
			{
				year: "2026",
				title: "Réouverture",
				description:
					"Avec un nouveau partenaire et un jeune directeur plein d'idées, le Kletterwald Staufen entre dans une nouvelle ère – énergie fraîche, grands projets et beaucoup de plaisir d'escalade.",
			},
		],
		valuesTitle: "Ce que nous représentons",
		valuesSubtitle: "Nos valeurs guident tout ce que nous faisons",
		values: [
			{
				title: "Sécurité",
				description:
					"Systèmes de sécurité dernier cri et personnel régulièrement formé – pour que vous puissiez vous concentrer pleinement sur l'escalade.",
			},
			{
				title: "Nature",
				description:
					"Gestion durable de la forêt. Tous les arbres sont préservés et régulièrement inspectés par des arboristes.",
			},
			{
				title: "Communauté",
				description:
					"Un lieu pour les familles, amis et équipes. Les expériences partagées créent des souvenirs durables.",
			},
			{
				title: "Aventure",
				description:
					"Des défis pour chaque niveau – du débutant au pro. Chacun trouve son parcours.",
			},
		],
		statsTitle: "Chiffres & Faits",
		stats: [
			{ value: "15+", label: "Années d'expérience" },
			{ value: "100 000+", label: "Visiteurs" },
			{ value: "200+", label: "Éléments d'escalade" },
		],
		ctaTitle: "Vivez-le vous-même !",
		ctaDescription:
			"Venez découvrir notre parc d'escalade par vous-même – nous nous réjouissons de votre visite !",
		ctaButton: "Réserver",
	},
	kontaktPage: {
		badge: "Contact",
		title: "Contactez-nous",
		description:
			"Vous avez des questions ou souhaitez planifier un événement de groupe ? Nous sommes ravis de vous entendre !",
		formTitle: "Envoyez-nous un message",
		contactTitle: "Coordonnées",
		name: "Nom",
		namePlaceholder: "Votre nom",
		email: "E-mail",
		emailPlaceholder: "votre@email.fr",
		subject: "Objet",
		subjectPlaceholder: "De quoi s'agit-il ?",
		message: "Message",
		messagePlaceholder: "Votre message...",
		send: "Envoyer le message",
		successTitle: "Message envoyé !",
		successDescription:
			"Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
		contactInfo: [
			{
				label: "Adresse",
				value: "Etzenbach 1, 79219 Staufen im Breisgau",
			},
			{ label: "Téléphone", value: "+49 (0) 174 910 6186" },
			{ label: "E-mail", value: "info@kletterwald-staufen.de" },
			{
				label: "Transports en commun",
				value: "Arrêt Etzenbach, Ligne S3",
			},
		],
		mapTitle: "Localisation Kletterwald Staufen",
		captchaLabel: "Question de sécurité :",
		captchaPlaceholder: "Votre réponse",
		privacyText: "J'ai lu la",
		privacyLink: "Politique de confidentialité",
		privacyEnd: "et j'accepte le traitement de mes données.",
		wrongAnswer: "Mauvaise réponse, veuillez réessayer",
		acceptPrivacy: "Vous devez accepter la politique de confidentialité",
		ctaTitle: "Commencez maintenant",
		ctaDescription:
			"Réservez votre aventure d'escalade – nous nous réjouissons de votre visite !",
		ctaButton: "Réserver",
	},
	jobsPage: {
		badge: "Emplois",
		title: "Rejoignez notre équipe !",
		description:
			"Vous aimez la nature et le contact avec les gens ? Postulez maintenant au Kletterwald Staufen !",
		aboutBadge: "À propos",
		aboutTitle: "Travailler au parc d'escalade",
		aboutText1:
			"Depuis 2010, le Kletterwald Staufen fait partie intégrante de la région – en tant que plus grand parc d'escalade du sud du Bade, nous accueillons plus de 100 000 visiteurs par an dans nos cimes. Avec plus de 200 éléments d'escalade, nous offrons de l'aventure pour tous les âges.",
		aboutText2:
			"En 2026, nous entamons un nouveau chapitre avec un nouveau partenaire et une énergie fraîche – le moment idéal pour rejoindre notre équipe ! Que ce soit comme moniteur d'escalade perché dans les arbres, à la caisse en contact direct avec les visiteurs ou dans le marketing – une équipe familiale, des tâches variées et un lieu de travail en pleine nature vous attendent.",
		benefitsTitle: "Ce que nous offrons",
		benefits: [
			{
				title: "Travail en nature",
				desc: "Votre bureau est la forêt – air frais et chant des oiseaux inclus.",
			},
			{
				title: "Horaires flexibles",
				desc: "Horaires saisonniers, idéal pour les étudiants ou comme emploi secondaire.",
			},
			{
				title: "Escalade gratuite",
				desc: "En tant que membre de l'équipe, vous pouvez utiliser nos parcours gratuitement à tout moment.",
			},
			{
				title: "Super équipe",
				desc: "Une équipe motivée et jeune qui reste soudée et prend plaisir à travailler.",
			},
		],
		formTitle: "Formulaire de candidature",
		firstName: "Prénom",
		lastName: "Nom de famille",
		email: "E-mail",
		phone: "Téléphone (optionnel)",
		position: "Poste souhaité / Domaine",
		positionPlaceholder: "Veuillez choisir...",
		positions: ["Moniteur d'escalade", "Caisse", "Marketing", "Stage"],
		motivation: "Courte motivation",
		motivationPlaceholder:
			"Dites-nous brièvement pourquoi vous aimeriez travailler chez nous…",
		filesLabel: "Télécharger des fichiers (optionnel)",
		filesDragText: "Glissez les fichiers ici ou",
		filesBrowse: "parcourir",
		filesMax: "Max. 10 Mo au total",
		filesCount: "fichiers",
		fileCount: "fichier",
		captchaLabel: "Question de sécurité :",
		captchaPlaceholder: "Votre réponse",
		privacyText: "J'ai lu la",
		privacyLink: "Politique de confidentialité",
		privacyEnd: "et j'accepte le traitement de mes données.",
		submit: "Envoyer la candidature",
		successTitle: "Candidature envoyée !",
		successDescription:
			"Merci pour votre intérêt. Nous vous contacterons dans les plus brefs délais.",
		ctaTitle: "Nous nous réjouissons de vous entendre !",
		ctaDescription:
			"Pour toute question concernant la candidature, vous pouvez nous contacter via notre page de contact.",
		validation: {
			minChars: "Au moins 2 caractères",
			maxChars50: "Maximum 50 caractères",
			maxChars100: "Maximum 100 caractères",
			maxChars1000: "Maximum 1000 caractères",
			validEmail: "Veuillez entrer une adresse e-mail valide",
			selectPosition: "Veuillez choisir un poste",
			minMotivation: "Au moins 10 caractères",
			solveCaptcha: "Veuillez résoudre le calcul",
			wrongAnswer: "Mauvaise réponse, veuillez réessayer",
			acceptPrivacy:
				"Vous devez accepter la politique de confidentialité",
			fileTooLarge: "dépasse la limite de 10 Mo",
		},
	},
	meta: {
		home: {
			title: "Kletterwald Staufen – Aventure en Forêt-Noire",
			description:
				"Vivez des aventures d'escalade dans le plus grand parc d'escalade du sud du Bade. 15+ parcours, 200+ éléments – plaisir pour toute la famille en Forêt-Noire.",
		},
		impressum: {
			title: "Mentions légales · Kletterwald Staufen",
			description:
				"Mentions légales du Kletterwald Staufen – Informations conformes au § 5 TMG.",
		},
		ueberUns: {
			title: "À propos · Kletterwald Staufen",
			description:
				"Découvrez le Kletterwald Staufen – le plus grand parc d'escalade du sud du Bade depuis plus de 15 ans, avec passion, sécurité et nature.",
		},
		kontakt: {
			title: "Contact · Kletterwald Staufen",
			description:
				"Contactez le Kletterwald Staufen pour vos questions, réservations et demandes de groupe. Nous sommes là pour vous aider.",
		},
		preise: {
			title: "Tarifs & Billets · Kletterwald Staufen",
			description:
				"Tarifs équitables pour enfants, adolescents et adultes au Kletterwald Staufen. Réservez vos billets et vivez l'aventure d'escalade.",
		},
		oeffnungszeiten: {
			title: "Horaires · Kletterwald Staufen",
			description:
				"Horaires d'ouverture actuels du Kletterwald Staufen. Saison, jours fériés et horaires spéciaux en un coup d'œil.",
		},
		jobs: {
			title: "Emplois · Kletterwald Staufen",
			description:
				"Postes ouverts au Kletterwald Staufen. Rejoignez notre équipe et travaillez au cœur de la nature en Forêt-Noire.",
		},
		datenschutz: {
			title: "Confidentialité · Kletterwald Staufen",
			description:
				"Politique de confidentialité du Kletterwald Staufen – Informations sur le traitement de vos données.",
		},
		agb: {
			title: "CGV · Kletterwald Staufen",
			description: "Conditions générales du Kletterwald Staufen.",
		},
		notFound: {
			title: "Page non trouvée · Kletterwald Staufen",
			description: "La page demandée est introuvable.",
		},
	},
	impressumPage: { title: "Mentions légales", content: "Contenu à venir." },
	datenschutzPage: { title: "Confidentialité", content: "Contenu à venir." },
	agbPage: { title: "CGV", content: "Contenu à venir." },
	notFound: {
		title: "404",
		message: "Page non trouvée",
		link: "Retour à l'accueil",
	},
};
