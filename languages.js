/* SISU DTH language selector. English is deliberately the default on every load. */
(() => {
  const selector = document.querySelector('#site-language');
  if (!selector) return;
  const translations = {
    fr: {
      'Home':'Accueil','About':'À propos','Services':'Services','Price':'Tarifs','Discuss a project':'Parlons de votre projet','Privacy Policy':'Politique de confidentialité','Privacy notice':'Politique de confidentialité',
      'LONDON-BASED DIGITAL DEVELOPMENT':'DÉVELOPPEMENT NUMÉRIQUE BASÉ À LONDRES',
      'WHAT WE DO':'NOS SERVICES','WHY SISU DTH':'POURQUOI SISU DTH','HOW WE WORK':'NOTRE MÉTHODE',
      'OUR SELECTED WORK':'NOS RÉALISATIONS','A BETTER WAY TO BUILD':'UNE MEILLEURE FAÇON DE CRÉER',
      'LET\'S BUILD SOMETHING USEFUL':'CRÉONS QUELQUE CHOSE D’UTILE','Have a project in mind?':'Vous avez un projet en tête?',
      'Explore our services ↗':'Découvrir nos services ↗','Explore our services':'Découvrir nos services',
      'Web Development & Maintenance':'Développement et maintenance web',
      'Custom Software & System Integration':'Logiciels sur mesure et intégration de systèmes',
      'SEO & Performance':'Référencement et performance',
      'Practical technology for your next step.':'Des solutions technologiques pour avancer.',
      'Thoughtful work. Clear communication.':'Un travail soigné. Une communication claire.',
      'From idea to launch.':'De l’idée au lancement.',
      'Discover':'Découvrir','Design':'Concevoir','Develop':'Développer','Launch & support':'Lancer et accompagner',
      'Website design & development':'Conception et développement web','Custom software':'Logiciels sur mesure',
      'System integration & automation':'Intégration et automatisation',
      'E-commerce & booking':'Commerce en ligne et réservations','Maintenance & support':'Maintenance et assistance',
      'STRAIGHTFORWARD STARTING PRICES':'TARIFS DE DÉPART TRANSPARENTS',
      'Know where you stand.':'Des tarifs clairs dès le départ.',
      'Starter Website':'Site web de démarrage','Business Website':'Site web professionnel','Custom Digital Solution':'Solution numérique sur mesure',
      'SUPPORT AFTER LAUNCH':'ASSISTANCE APRÈS LE LANCEMENT',
      'GOOD TO KNOW':'BON À SAVOIR','Questions, answered.':'Vos questions, nos réponses.',
      'HAVE A PROJECT IN MIND?':'VOUS AVEZ UN PROJET?',
      'PROJECT BRIEF':'VOTRE PROJET','A few details to get started.':'Quelques détails pour commencer.',
      'Your name':'Votre nom','Email address':'Adresse e-mail','What do you need?':'De quoi avez-vous besoin?',
      'Approximate budget':'Budget approximatif','Tell us a little about your project':'Parlez-nous de votre projet',
      'Send project enquiry':'Envoyer votre demande',
      'Key Features':'Fonctionnalités principales','Technology:':'Technologie :',
      'Not a deployed app':'Application non déployée',
      'Privacy notice.':'Politique de confidentialité.'
    },
    es: {
      'Home':'Inicio','About':'Nosotros','Services':'Servicios','Price':'Precios','Discuss a project':'Hablemos de tu proyecto',
      'LONDON-BASED DIGITAL DEVELOPMENT':'DESARROLLO DIGITAL EN LONDRES',
      'WHAT WE DO':'QUÉ HACEMOS','WHY SISU DTH':'POR QUÉ SISU DTH','HOW WE WORK':'CÓMO TRABAJAMOS',
      'OUR SELECTED WORK':'TRABAJOS DESTACADOS','A BETTER WAY TO BUILD':'UNA MEJOR FORMA DE CREAR',
      'LET\'S BUILD SOMETHING USEFUL':'CREEMOS ALGO ÚTIL','Have a project in mind?':'¿Tienes un proyecto en mente?',
      'Explore our services ↗':'Explorar nuestros servicios ↗','Explore our services':'Explorar nuestros servicios',
      'Web Development & Maintenance':'Desarrollo y mantenimiento web',
      'Custom Software & System Integration':'Software a medida e integración de sistemas',
      'SEO & Performance':'SEO y rendimiento',
      'Practical technology for your next step.':'Tecnología práctica para dar el siguiente paso.',
      'Thoughtful work. Clear communication.':'Trabajo cuidado. Comunicación clara.',
      'From idea to launch.':'De la idea al lanzamiento.',
      'Discover':'Descubrir','Design':'Diseñar','Develop':'Desarrollar','Launch & support':'Lanzar y dar soporte',
      'Website design & development':'Diseño y desarrollo web','Custom software':'Software a medida',
      'System integration & automation':'Integración y automatización de sistemas',
      'E-commerce & booking':'Comercio electrónico y reservas','Maintenance & support':'Mantenimiento y soporte',
      'STRAIGHTFORWARD STARTING PRICES':'PRECIOS INICIALES CLAROS',
      'Know where you stand.':'Precios claros desde el principio.',
      'Starter Website':'Sitio web inicial','Business Website':'Sitio web empresarial','Custom Digital Solution':'Solución digital a medida',
      'SUPPORT AFTER LAUNCH':'SOPORTE DESPUÉS DEL LANZAMIENTO',
      'GOOD TO KNOW':'INFORMACIÓN ÚTIL','Questions, answered.':'Preguntas y respuestas.',
      'HAVE A PROJECT IN MIND?':'¿TIENES UN PROYECTO?',
      'PROJECT BRIEF':'RESUMEN DEL PROYECTO','A few details to get started.':'Algunos detalles para empezar.',
      'Your name':'Tu nombre','Email address':'Correo electrónico','What do you need?':'¿Qué necesitas?',
      'Approximate budget':'Presupuesto aproximado','Tell us a little about your project':'Cuéntanos sobre tu proyecto',
      'Send project enquiry':'Enviar consulta sobre el proyecto',
      'Key Features':'Funciones principales','Technology:':'Tecnología:',
      'Not a deployed app':'Aplicación no publicada',
      'Privacy notice.':'Aviso de privacidad.'
    }
  };

  // Expanded copy translations. English remains the source of truth on reload.
  const expanded = {
    fr: {
      "Digital solutions.":"Solutions numériques.","Built around":"Conçues pour","your business.":"votre entreprise.",
      "We design and develop thoughtful websites, custom software and connected systems that help businesses work smarter and grow online.":"Nous concevons des sites web, des logiciels sur mesure et des systèmes connectés pour aider les entreprises à travailler plus efficacement et à se développer en ligne.",
      "Let's discuss your project":"Parlons de votre projet","Personal service. Practical technology.":"Un service personnalisé. Une technologie utile.",
      "Direct communication from first conversation to launch.":"Un échange direct, du premier contact jusqu’au lancement.",
      "Made for your goals":"Adapté à vos objectifs","Discuss · Design · Develop ·":"Échanger · Concevoir · Développer ·",
      "From a professional online presence to software that simplifies everyday work, we build solutions around real business needs.":"D’une présence en ligne professionnelle aux logiciels qui simplifient le quotidien, nous créons des solutions adaptées aux besoins réels des entreprises.",
      "Responsive websites, ongoing updates, maintenance and support to keep your online presence running smoothly.":"Des sites web adaptatifs, des mises à jour, de la maintenance et une assistance pour assurer le bon fonctionnement de votre présence en ligne.",
      "Explore web services ↗":"Découvrir les services web ↗",
      "Purpose-built applications and connected systems that support your workflows, share information and reduce manual work.":"Des applications sur mesure et des systèmes intégrés pour faciliter vos processus, partager les informations et réduire les tâches manuelles.",
      "Explore software & integrations ↗":"Découvrir les logiciels et intégrations ↗",
      "Improve website discoverability, loading speed and usability through practical optimisation.":"Améliorez la visibilité, la vitesse de chargement et l’ergonomie de votre site grâce à des optimisations concrètes.",
      "Explore SEO & performance ↗":"Découvrir le SEO et la performance ↗",
      "Built for your needs":"Adapté à vos besoins","We start with your goals rather than a one-size-fits-all solution.":"Nous partons de vos objectifs, pas d’une solution universelle.",
      "Direct collaboration":"Collaboration directe","Discuss your requirements directly with the developer doing the work.":"Échangez directement avec le développeur chargé de votre projet.",
      "Clear project scope":"Un périmètre clair","Agree deliverables, timelines and costs before development begins.":"Convenons des livrables, des délais et des coûts avant le développement.",
      "Support after launch":"Assistance après lancement","Ask about ongoing maintenance and improvements as your needs change.":"Découvrez les possibilités de maintenance et d’amélioration continue.",
      "Understand your goals and requirements.":"Comprendre vos objectifs et vos besoins.","Plan the experience and solution.":"Concevoir l’expérience et la solution.",
      "Build, refine and test the project.":"Développer, améliorer et tester le projet.","Deploy and discuss ongoing care.":"Mettre en ligne et prévoir le suivi.",
      "Learn about our process →":"Découvrir notre méthode →",
      "Whether you need a professional website, custom software or help streamlining your workflows, tell us what you have in mind.":"Que vous ayez besoin d’un site professionnel, d’un logiciel sur mesure ou d’automatiser vos processus, parlez-nous de votre idée.",
      "GET IN TOUCH":"CONTACTEZ-NOUS","Tell us about your project.":"Parlez-nous de votre projet.",
      "Choose a service":"Choisissez un service","E-commerce website":"Site e-commerce","System integration / automation":"Intégration de systèmes / automatisation",
      "SEO and performance":"SEO et performance","Maintenance and support":"Maintenance et assistance","Not sure yet":"Je ne sais pas encore",
      "Thoughtful websites. Practical software.":"Des sites soignés. Des logiciels utiles.","Digital solutions built around your business.":"Des solutions numériques adaptées à votre entreprise.",
      "Back to top ↑":"Retour en haut ↑","Sisu DTH. All rights reserved.":"Sisu DTH. Tous droits réservés.","London, United Kingdom":"Londres, Royaume-Uni",
      "Project form ↗":"Formulaire de projet ↗",
      "Technology should solve problems—not create more of them.":"La technologie doit résoudre des problèmes, pas en créer de nouveaux.",
      "Sisu DTH is a London-based digital development business working with clients to turn ideas and requirements into useful, reliable digital products.":"Sisu DTH est une entreprise de développement numérique basée à Londres qui transforme les idées et les besoins de ses clients en produits numériques utiles et fiables.",
      "Some projects need a flexible platform. Others need custom code. We choose an approach around your objectives, budget and timeline—not a one-size-fits-all solution.":"Certains projets nécessitent une plateforme flexible, d’autres du code sur mesure. Nous adaptons notre approche à vos objectifs, votre budget et vos délais.",
      "Tell us what you’re planning":"Parlez-nous de votre projet","Ideas made":"Des idées rendues","visible.":"visibles.",
      "Explore selected work across business websites, Python development and interface design, including completed sites and projects in development.":"Découvrez une sélection de sites professionnels, de logiciels Python et de créations d’interfaces, achevés ou en cours de développement.",
      "A published restaurant website showcasing menu information, business details and customer contact options.":"Un site de restauration publié présentant le menu, les informations de l’établissement et les moyens de contact.",
      "A live website presenting Almazina’s AI- and robotics-driven healthcare focus, with a digital presence designed to communicate its work and vision.":"Un site en ligne présentant l’activité d’Almazina dans la santé, l’intelligence artificielle et la robotique, ainsi que sa vision.",
      "Key Features":"Fonctionnalités principales","Automated Market Analysis":"Analyse automatisée des marchés",
      "Algorithmic Trading Strategies":"Stratégies de trading algorithmique","Automated Trade Execution":"Exécution automatisée des transactions",
      "Risk Management and Position Sizing":"Gestion du risque et taille des positions","Strategy Back-testing and Paper Trading":"Tests rétrospectifs et simulation de trading",
      "Not a deployed app":"Application non déployée",
      "Clear steps.":"Des étapes claires.","Thoughtful delivery.":"Une réalisation soignée.",
      "You stay informed at each stage, with scope, milestones and expectations agreed before development starts.":"Vous êtes informé à chaque étape, avec un périmètre, des jalons et des attentes définis avant le début du développement.",
      "Plan & quote":"Planification et devis","Build & review":"Développement et révision","Test & launch":"Tests et lancement",
      "Digital services for":"Des services numériques pour","real-world ambitions.":"vos ambitions concrètes.",
      "From your first business website to a bespoke business system, get practical technical support tailored to your needs.":"De votre premier site professionnel à un système sur mesure, bénéficiez d’un accompagnement technique adapté.",
      "Explore pricing":"Voir les tarifs","Discuss a solution":"Discuter d’une solution","Connect your systems":"Connecter vos systèmes",
      "Improve your visibility":"Améliorer votre visibilité","Plan your website":"Planifier votre site","View care plans":"Voir les offres de maintenance",
      "Every project is different. These guide prices help you plan; we confirm a written scope and final quote before work begins.":"Chaque projet est différent. Ces tarifs indicatifs vous aident à prévoir votre budget ; nous confirmons le périmètre et le devis par écrit avant de commencer.",
      "A professional starting point for a small business.":"Une première présence professionnelle pour une petite entreprise.",
      "A more tailored website built to support growth.":"Un site plus personnalisé pour accompagner votre croissance.",
      "For workflows and functionality beyond a standard site.":"Pour des processus et fonctionnalités allant au-delà d’un site classique.",
      "Enquire about this":"Demander un devis","Discuss your idea":"Parlons de votre idée",
      "Need something specific?":"Un besoin particulier ?","Your website shouldn’t be a one-off task.":"Votre site mérite un suivi après sa mise en ligne.",
      "Ask about a care plan":"Demander une offre de maintenance",
      "If your question isn’t covered, send us a message and tell us what you need.":"Vous ne trouvez pas votre réponse ? Envoyez-nous un message.",
      "Let’s make your next idea":"Donnons vie à votre prochaine idée","work harder.":"et faisons-la avancer.",
      "Tell us what you’re trying to achieve. We’ll use your brief to understand the project and discuss suitable next steps.":"Expliquez-nous votre objectif. Votre demande nous aidera à comprendre le projet et à définir les prochaines étapes.",
      "PROJECT ENQUIRIES":"DEMANDES DE PROJET","Use the project request form":"Utilisez le formulaire de projet",
      "OR USE OUR DETAILED PROJECT FORM":"OU UTILISEZ NOTRE FORMULAIRE DÉTAILLÉ",
      "Open Microsoft project form ↗":"Ouvrir le formulaire Microsoft ↗"
    },
    es: {
      "Digital solutions.":"Soluciones digitales.","Built around":"Diseñadas para","your business.":"tu negocio.",
      "We design and develop thoughtful websites, custom software and connected systems that help businesses work smarter and grow online.":"Diseñamos sitios web, software a medida y sistemas conectados que ayudan a las empresas a trabajar mejor y crecer en internet.",
      "Let's discuss your project":"Hablemos de tu proyecto","Personal service. Practical technology.":"Atención personalizada. Tecnología práctica.",
      "Direct communication from first conversation to launch.":"Comunicación directa desde la primera conversación hasta el lanzamiento.",
      "Made for your goals":"Pensado para tus objetivos","Discuss · Design · Develop ·":"Hablar · Diseñar · Desarrollar ·",
      "From a professional online presence to software that simplifies everyday work, we build solutions around real business needs.":"Desde una presencia profesional en internet hasta programas que simplifican el trabajo diario, creamos soluciones para necesidades reales.",
      "Responsive websites, ongoing updates, maintenance and support to keep your online presence running smoothly.":"Sitios web adaptables, actualizaciones, mantenimiento y asistencia para mantener tu presencia digital funcionando correctamente.",
      "Explore web services ↗":"Explorar servicios web ↗",
      "Purpose-built applications and connected systems that support your workflows, share information and reduce manual work.":"Aplicaciones a medida y sistemas conectados que facilitan tus procesos, comparten información y reducen tareas manuales.",
      "Explore software & integrations ↗":"Explorar software e integraciones ↗",
      "Improve website discoverability, loading speed and usability through practical optimisation.":"Mejora la visibilidad, la velocidad de carga y la facilidad de uso de tu web mediante optimizaciones prácticas.",
      "Explore SEO & performance ↗":"Explorar SEO y rendimiento ↗",
      "Built for your needs":"Adaptado a tus necesidades","We start with your goals rather than a one-size-fits-all solution.":"Partimos de tus objetivos, no de una solución única para todos.",
      "Direct collaboration":"Colaboración directa","Discuss your requirements directly with the developer doing the work.":"Habla directamente con el desarrollador responsable de tu proyecto.",
      "Clear project scope":"Alcance claro","Agree deliverables, timelines and costs before development begins.":"Acordamos entregables, plazos y costes antes de empezar.",
      "Support after launch":"Soporte tras el lanzamiento","Ask about ongoing maintenance and improvements as your needs change.":"Consulta las opciones de mantenimiento y mejoras continuas.",
      "Understand your goals and requirements.":"Comprender tus objetivos y necesidades.","Plan the experience and solution.":"Diseñar la experiencia y la solución.",
      "Build, refine and test the project.":"Desarrollar, mejorar y probar el proyecto.","Deploy and discuss ongoing care.":"Publicar y planificar el mantenimiento.",
      "Learn about our process →":"Conoce nuestro proceso →",
      "Whether you need a professional website, custom software or help streamlining your workflows, tell us what you have in mind.":"Tanto si necesitas una web profesional, software a medida o automatizar procesos, cuéntanos tu idea.",
      "GET IN TOUCH":"CONTACTO","Tell us about your project.":"Cuéntanos tu proyecto.",
      "Choose a service":"Elige un servicio","E-commerce website":"Tienda online","System integration / automation":"Integración de sistemas / automatización",
      "SEO and performance":"SEO y rendimiento","Maintenance and support":"Mantenimiento y soporte","Not sure yet":"Todavía no lo sé",
      "Thoughtful websites. Practical software.":"Sitios web bien diseñados. Software práctico.","Digital solutions built around your business.":"Soluciones digitales adaptadas a tu negocio.",
      "Back to top ↑":"Volver arriba ↑","Sisu DTH. All rights reserved.":"Sisu DTH. Todos los derechos reservados.","London, United Kingdom":"Londres, Reino Unido",
      "Project form ↗":"Formulario de proyecto ↗",
      "Technology should solve problems—not create more of them.":"La tecnología debe resolver problemas, no crear otros nuevos.",
      "Sisu DTH is a London-based digital development business working with clients to turn ideas and requirements into useful, reliable digital products.":"Sisu DTH es un negocio de desarrollo digital con sede en Londres que convierte ideas y necesidades en productos digitales útiles y fiables.",
      "Some projects need a flexible platform. Others need custom code. We choose an approach around your objectives, budget and timeline—not a one-size-fits-all solution.":"Algunos proyectos necesitan plataformas flexibles y otros código a medida. Adaptamos el enfoque a tus objetivos, presupuesto y plazos.",
      "Tell us what you’re planning":"Cuéntanos tus planes","Ideas made":"Ideas hechas","visible.":"visibles.",
      "Explore selected work across business websites, Python development and interface design, including completed sites and projects in development.":"Descubre una selección de webs empresariales, desarrollo en Python y diseño de interfaces, tanto terminados como en desarrollo.",
      "A published restaurant website showcasing menu information, business details and customer contact options.":"Una web de restaurante publicada que presenta el menú, información del negocio y opciones de contacto.",
      "A live website presenting Almazina’s AI- and robotics-driven healthcare focus, with a digital presence designed to communicate its work and vision.":"Una web activa que presenta la actividad de Almazina en salud, inteligencia artificial y robótica, así como su visión.",
      "Key Features":"Funciones principales","Automated Market Analysis":"Análisis automatizado de mercados",
      "Algorithmic Trading Strategies":"Estrategias de trading algorítmico","Automated Trade Execution":"Ejecución automática de operaciones",
      "Risk Management and Position Sizing":"Gestión de riesgos y tamaño de posiciones","Strategy Back-testing and Paper Trading":"Pruebas retrospectivas y trading simulado",
      "Not a deployed app":"Aplicación no publicada",
      "Clear steps.":"Pasos claros.","Thoughtful delivery.":"Entrega cuidadosa.",
      "You stay informed at each stage, with scope, milestones and expectations agreed before development starts.":"Te mantenemos informado en cada etapa, con alcance, hitos y expectativas acordados antes de empezar.",
      "Plan & quote":"Planificación y presupuesto","Build & review":"Desarrollo y revisión","Test & launch":"Pruebas y lanzamiento",
      "Digital services for":"Servicios digitales para","real-world ambitions.":"ambiciones reales.",
      "From your first business website to a bespoke business system, get practical technical support tailored to your needs.":"Desde tu primera web empresarial hasta un sistema a medida, recibe asistencia técnica adaptada a tus necesidades.",
      "Explore pricing":"Ver precios","Discuss a solution":"Hablar de una solución","Connect your systems":"Conectar tus sistemas",
      "Improve your visibility":"Mejorar tu visibilidad","Plan your website":"Planificar tu web","View care plans":"Ver planes de mantenimiento",
      "Every project is different. These guide prices help you plan; we confirm a written scope and final quote before work begins.":"Cada proyecto es diferente. Estos precios orientativos te ayudan a planificar; confirmamos el alcance y el presupuesto por escrito antes de empezar.",
      "A professional starting point for a small business.":"Un comienzo profesional para una pequeña empresa.",
      "A more tailored website built to support growth.":"Una web más personalizada para apoyar el crecimiento.",
      "For workflows and functionality beyond a standard site.":"Para procesos y funciones que van más allá de una web estándar.",
      "Enquire about this":"Solicitar presupuesto","Discuss your idea":"Hablemos de tu idea",
      "Need something specific?":"¿Necesitas algo específico?","Your website shouldn’t be a one-off task.":"Tu web merece atención después del lanzamiento.",
      "Ask about a care plan":"Consultar planes de mantenimiento",
      "If your question isn’t covered, send us a message and tell us what you need.":"¿No encuentras tu respuesta? Envíanos un mensaje.",
      "Let’s make your next idea":"Hagamos realidad tu próxima idea","work harder.":"y llevémosla más lejos.",
      "Tell us what you’re trying to achieve. We’ll use your brief to understand the project and discuss suitable next steps.":"Cuéntanos qué quieres conseguir. Usaremos tu descripción para comprender el proyecto y definir los próximos pasos.",
      "PROJECT ENQUIRIES":"CONSULTAS DE PROYECTOS","Use the project request form":"Usa el formulario de proyecto",
      "OR USE OUR DETAILED PROJECT FORM":"O USA NUESTRO FORMULARIO DETALLADO",
      "Open Microsoft project form ↗":"Abrir formulario de Microsoft ↗"
    }
  };
  Object.assign(translations.fr,expanded.fr);
  Object.assign(translations.es,expanded.es);
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const eligible = 'h1,h2,h3,h4,p,li,a,button,label,option,small,strong,span,div';
  function textNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement.closest('.language-switcher,script,style,svg')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[];while(walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }
  const nodes = textNodes(document.body);
  nodes.forEach(node => originalText.set(node,node.nodeValue));
  const translatableAttrs = [...document.querySelectorAll('input[placeholder],textarea[placeholder],input[aria-label],button[aria-label]')];
  translatableAttrs.forEach(el => originalAttrs.set(el,{placeholder:el.getAttribute('placeholder'),aria:el.getAttribute('aria-label')}));
  const phrases = {
    fr: [
      [/Your enquiry will be sent to Sisu DTH by our form delivery provider\./g,'Votre demande sera transmise à Sisu DTH par notre prestataire de formulaire.'],
      [/Please do not include passwords or other sensitive information\./g,'Veuillez ne pas inclure de mots de passe ni d’informations sensibles.'],
      [/For details about how enquiries are handled, see our/g,'Pour savoir comment vos demandes sont traitées, consultez notre'],
      [/privacy notice/g,'politique de confidentialité'],
      [/12 MONTHS/g,'12 MOIS'],[/TECHNICAL MAINTENANCE/g,'DE MAINTENANCE TECHNIQUE'],
      [/Website development/g,'Développement web'],[/Custom software/g,'Logiciels sur mesure'],
      [/Your project/g,'Votre projet'],[/Please select/g,'Veuillez choisir']
    ],
    es: [
      [/Your enquiry will be sent to Sisu DTH by our form delivery provider\./g,'Tu consulta se enviará a Sisu DTH mediante nuestro proveedor de formularios.'],
      [/Please do not include passwords or other sensitive information\./g,'No incluyas contraseñas ni otros datos sensibles.'],
      [/For details about how enquiries are handled, see our/g,'Para saber cómo gestionamos las consultas, consulta nuestro'],
      [/privacy notice/g,'aviso de privacidad'],
      [/12 MONTHS/g,'12 MESES'],[/TECHNICAL MAINTENANCE/g,'DE MANTENIMIENTO TÉCNICO'],
      [/Website development/g,'Desarrollo web'],[/Custom software/g,'Software a medida'],
      [/Your project/g,'Tu proyecto'],[/Please select/g,'Selecciona una opción']
    ]
  };
  function translate(original,lang) {
    if(lang==='en') return original;
    const dict=translations[lang], trimmed=original.trim();
    if(dict[trimmed]) return original.replace(trimmed,dict[trimmed]);
    let out=original;
    for(const [re,value] of phrases[lang]) out=out.replace(re,value);
    return out;
  }
  function apply(lang) {
    document.documentElement.lang=lang==='en'?'en-GB':lang;
    nodes.forEach(node=>{if(node.isConnected) node.nodeValue=translate(originalText.get(node),lang)});
    translatableAttrs.forEach(el=>{
      const orig=originalAttrs.get(el);
      if(orig.placeholder!==null) el.setAttribute('placeholder',translate(orig.placeholder,lang));
      if(orig.aria!==null) el.setAttribute('aria-label',translate(orig.aria,lang));
    });
    selector.value = lang;
  }
  selector.addEventListener('change',()=>apply(selector.value));
  apply('en'); // Never persist a choice: refreshed and reopened pages start in English.
})();
