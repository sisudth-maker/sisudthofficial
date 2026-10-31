/* SISU DTH language selector. English is deliberately the default on every load. */
(() => {
  const buttons = [...document.querySelectorAll('.language-switcher [data-lang]')];
  if (!buttons.length) return;
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
    buttons.forEach(button=>{
      const selected=button.dataset.lang===lang;
      button.setAttribute('aria-pressed',String(selected));
      button.classList.toggle('active',selected);
    });
  }
  buttons.forEach(button=>button.addEventListener('click',()=>apply(button.dataset.lang)));
  apply('en'); // Never persist a choice: refreshed and reopened pages start in English.
})();
