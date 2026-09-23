import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  pt: {
    nav: {
      home: "Home",
      problem: "Problema",
      systems: "Sistemas",
      method: "Método",
      timeline: "Processo",
      ecosystem: "Ecossistema",
      stats: "Números",
      cases: "Cases",
      offices: "Sedes",
      about: "Sobre",
      contact: "Contato"
    },
    hero: {
      sub: "Multi-Channel Network",
      title: "Estratégia e operação para marcas em movimento [global].",
      lead: "A GOON é um ecossistema de aceleração para moda, design, beleza e cuidados pessoais. Conectamos cultura, dados e design à execução multicanal.",
      waBtn: "Falar no WhatsApp",
      talkBtn: "LET'S GOON!",
      methodBtn: "Como operamos"
    },
    marquee: ["Branding", "Produto", "Operação", "Growth", "Social Commerce", "Gestão"],
    statements: {
      one: {
        text: "Canais mudam. Mercados mudam.",
        span: "Marcas com sistema permanecem."
      },
      two: {
        text: "Não construímos empresas para o mercado local.",
        span: "Construímos para competir com o mundo."
      }
    },
    problem: {
      title: "O problema",
      lead: "A maioria das empresas tenta crescer por partes. Marketing de um lado. Produto de outro. Operação correndo atrás. Gestão apagando incêndio.",
      label: "SINTOMA",
      tab1: "Branding",
      tab2: "Marketing",
      tab3: "Produto",
      tab4: "Gestão",
      p1: { title: "Branding sozinho não resolve.", desc: "Marca sem produto, operação e canal vira promessa sem entrega.", solution: "Na GOON, unimos posicionamento à sua cadeia de suprimentos e canais de escala." },
      p2: { title: "Marketing sozinho não escala.", desc: "Campanha gera pico. Sistema gera crescimento consistente.", solution: "Desenvolvemos canais próprios, parcerias com criadores e supply integrados." },
      p3: { title: "Produto sozinho não vende.", desc: "Produto precisa de narrativa, canal, margem, estoque e ritmo.", solution: "Estruturamos coleções inteligentes, análise de margem e precificação de produto-âncora." },
      p4: { title: "Gestão sem execução trava.", desc: "Planejamento só importa quando vira ritual, KPI e cobrança.", solution: "Implementamos rituais diários, semanais e mensais de checagem com heads dedicados." }
    },
    systems: {
      title: "Uma marca. Todos os canais.",
      lead: "Estratégia e operação B2B, B2C, D2C e Social Commerce sob a mesma visão — com processos para crescer de forma sustentável e consistente.",
      s1: { title: "Posicionamento", desc: "Território de marca, narrativa, ICP e linguagem para definir um lugar próprio no mercado." },
      s2: { title: "Direção criativa", desc: "Produto, mix e calendário conectados à identidade e ao comportamento do consumidor." },
      s3: { title: "Supply chain", desc: "Fornecedores, qualidade e produção integrados a uma cadeia previsível e escalável." },
      s4: { title: "Operação", desc: "Processos, rituais, indicadores e responsabilidades que transformam estratégia em rotina." },
      s5: { title: "Distribuição", desc: "Canais B2B, B2C, D2C e Social Commerce operando com coerência e inteligência de dados." }
    },
    method: {
      title: "GOON Method",
      lead: "Uma metodologia para transformar visão em estrutura, estrutura em execução e execução em escala.",
      p1: { title: "Position", desc: "Definimos o jogo: mercado, cliente, marca, diferenciação e plano de voo." },
      p2: { title: "Build", desc: "Construímos os ativos: produto, canais, processos, narrativas e sistemas." },
      p3: { title: "Operate", desc: "Entramos na operação com rituais, heads, KPIs e cadência executiva." },
      p4: { title: "Scale", desc: "Ajustamos rota, aceleramos vendas e preparamos a empresa para crescer." }
    },
    timeline: {
      title: "Estratégia que entra em operação.",
      lead: "Da leitura de contexto à execução: clareza para decidir, estrutura para operar e dados para evoluir.",
      step: "ETAPA",
      step1: { title: "Contexto", desc: "Lemos cultura, mercado, consumidor e operação para reconhecer o que realmente move o negócio." },
      step2: { title: "Direção", desc: "Alinhamos marca, produto, canais e prioridades em uma visão clara e compartilhada." },
      step3: { title: "Operação", desc: "Transformamos a direção em processos, ritmo de gestão, supply chain e execução multicanal." },
      step4: { title: "Evolução", desc: "Acompanhamos dados, refinamos decisões e ampliamos alcance com consistência." }
    },
    ecosystem: {
      title: "Uma rede. Quatro frentes.",
      lead: "Estratégia, cultura, canais e conhecimento conectados por uma mesma visão de marca e operação.",
      c1: { title: "GOON Advisor", desc: "Inteligência estratégica para decisões de marca, posicionamento, produto e expansão.", action: "Conhecer →" },
      c2: { title: "GOON What, Who & Where", desc: "Leitura de cultura, consumidor e mercado para orientar onde a marca deve estar e como deve se expressar.", action: "Conhecer →" },
      c3: { title: "GOON MCN", desc: "Rede multicanal que conecta marcas, distribuição, conteúdo e parceiros estratégicos.", action: "Conhecer →" },
      c4: { title: "GOON Mentorship", desc: "Conhecimento aplicado e troca estratégica para fortalecer lideranças e decisões de negócio.", action: "Conhecer →" },
      c5: { title: "GOON Club", desc: "Comunidade para empresários, operadores e marcas em construção.", action: "Enter →" },
      c6: { title: "GOON Events", desc: "Imersões, encontros e experiências para acelerar visão, conexão e execução.", action: "See events →" }
    },
    stats: {
      title1: "Cultura, dados e design.",
      title2: "Em uma só direção.",
      lead: "Visão criativa encontra disciplina operacional para construir marcas relevantes, consistentes e preparadas para diferentes mercados.",
      s1: "anos de experiência acumulada",
      s2: "países alcançados",
      s3: "em negócios construídos",
      s4: "canais conectados"
    },
    network: {
      eyebrow: "GLOBAL NETWORK / ATIVA",
      title: "Presença onde a cadeia acontece.",
      description: "Hubs próprios conectam estratégia, supply chain, distribuição e expansão entre as Américas, Europa e Oriente Médio.",
      locationsLabel: "Pontos de atuação da GOON",
      mapAria: "Mapa-múndi com os pontos de atuação da GOON em São Paulo, Caxias do Sul, Ciudad del Este, Doral, Londres e Dubai."
    },
    cases: {
      title: "Cases",
      lead: "Conectando marca, produto, operação e growth. Conheça as estratégias que levaram startups e e-commerces à escala internacional.",
      c1: {
        name: "AURA",
        tag: "BRAND BUILD · BRANDING GLOBAL",
        title: "Repensando o posicionamento global de marca",
        desc: "Como a GOON alinhou o posicionamento de luxo digital com a cadeia de suprimentos internacional, gerando recorde de retenção de clientes.",
        m1v: "+180%",
        m1l: "Crescimento de LTV",
        m2v: "3.2x",
        m2l: "ROI em Canais Digitais",
        quote: "A GOON não entregou apenas um design bonito; eles reestruturaram nossa lógica operacional de produto e posicionamento de marca internacional."
      },
      c2: {
        name: "VELO",
        tag: "COMMERCE SCALE · SOCIAL COMMERCE",
        title: "Estrutura multicanal de social commerce",
        desc: "Uma infraestrutura de social commerce integrando criadores parceiros, lives comerciais e logística de fast-fulfillment para responder a picos de demanda.",
        m1v: "$4.2M",
        m1l: "GMV em 90 dias",
        m2v: "250K+",
        m2l: "Clientes conquistados",
        quote: "A visão multicanal e a disciplina operacional da GOON conectaram marca, conteúdo e distribuição sem perder consistência."
      },
      c3: {
        name: "APEX",
        tag: "OPERATION SYSTEM · SUPPLY CHAIN",
        title: "Sistema operacional e cadeia de suprimentos",
        desc: "Implementação de rituais executivos, dashboards em tempo real e otimização de fornecedores globais para destravar gargalos de caixa e logística.",
        m1v: "-42%",
        m1l: "Redução de Lead Time",
        m2v: "+35%",
        m2l: "Eficiência de Estoque",
        quote: "Com a implementação dos rituais da GOON, nossa gestão de ponta a ponta passou a operar com a precisão de um relógio suíço."
      }
    },
    offices: {
      title: "Nossas Sedes",
      lead: "Presença física global estruturada para conectar sua marca e operação com os principais eixos comerciais do mundo.",
      br: "Brasil",
      py: "Paraguai",
      us: "Estados Unidos",
      eu: "Europa",
      af: "África",
      oc: "Oceania",
      ae: "Dubai"
    },
    contact: {
      title: "Vamos conversar",
      lead: "Escolha o canal. Respondemos rápido e sem enrolação — a primeira conversa já é diagnóstico.",
      waTitle: "WhatsApp",
      waDesc: "Resposta rápida, direto com o time. O caminho mais curto para começar.",
      waAction: "Chamar agora →",
      mailTitle: "E-mail",
      mailDesc: "Para propostas, parcerias e projetos executivos. contato@goon-global.com",
      mailAction: "Escrever →",
      igTitle: "Instagram",
      igDesc: "Bastidores, cases e a filosofia de operar em vez de apenas ensinar.",
      igAction: "Seguir →",
      finalTitle1: "GOON Global Network",
      finalTitle2: "Culture. Data. Design.",
      finalDesc: "Uma rede construída para conectar estratégia, execução e resultados em marcas de moda, design, beleza e cuidados pessoais.",
      finalWa: "Falar no WhatsApp",
      finalTalk: "Fale com a GOON",
      waMsg: "Olá! Vim pelo site da GOON e quero conversar sobre um projeto."
    },
    footer: {
      rights: "© 2026 GOON. Todos os direitos reservados.",
      credits: "Design por GOON."
    },
    leadForm: {
      eyebrow: "NOVO PROJETO / DIAGNÓSTICO",
      title: "Preencha seus dados e nosso time entrará em contato com você.",
      description: "Conte um pouco sobre a sua marca. Em seguida, você poderá continuar a conversa diretamente pelo WhatsApp.",
      name: "Nome Completo",
      phone: "Telefone / WhatsApp",
      company: "Nome da empresa ou marca",
      niche: "Nicho de atuação",
      salesChannel: "Principal canal de vendas",
      instagram: "Instagram da Empresa (@)",
      namePlaceholder: "Ex.: Richard Hey",
      phonePlaceholder: "Ex.: +55 (54) 99999-9999",
      companyPlaceholder: "Ex.: Nome da sua marca",
      nichePlaceholder: "Ex.: Moda, beleza ou design",
      salesChannelPlaceholder: "Ex.: E-commerce, lojas ou marketplaces",
      instagramPlaceholder: "Ex.: @suaempresa",
      submit: "Enviar dados e falar com a GOON",
      submitting: "Enviando…",
      privacy: "Seus dados serão usados apenas para este contato.",
      close: "Fechar formulário",
      waTemplate: "Olá GOON! Quero conversar sobre a minha marca:\n- *Nome:* {name}\n- *Telefone:* {phone}\n- *Empresa ou marca:* {company}\n- *Nicho:* {niche}\n- *Principal canal de vendas:* {salesChannel}\n- *Instagram:* {instagram}"
    }
  },
  en: {
    nav: {
      home: "Home",
      problem: "Problem",
      systems: "Systems",
      method: "Method",
      timeline: "Process",
      ecosystem: "Ecosystem",
      stats: "Numbers",
      cases: "Cases",
      offices: "Offices",
      about: "About",
      contact: "Contact"
    },
    hero: {
      sub: "Multi-Channel Network",
      title: "Strategy and operations for brands in [global] motion.",
      lead: "GOON is an acceleration ecosystem for fashion, design, beauty, and personal care. We connect culture, data, and design to multi-channel execution.",
      waBtn: "Talk on WhatsApp",
      talkBtn: "LET'S GOON!",
      methodBtn: "How we operate"
    },
    marquee: ["Branding", "Product", "Operations", "Growth", "Social Commerce", "Management"],
    statements: {
      one: {
        text: "Channels change. Markets change.",
        span: "Brands with systems endure."
      },
      two: {
        text: "We don't build companies for the local market.",
        span: "We build them to compete with the world."
      }
    },
    problem: {
      title: "The problem",
      lead: "Most companies try to grow in silos. Marketing on one side. Product on another. Operations running behind. Management putting out fires.",
      label: "SYMPTOM",
      tab1: "Branding",
      tab2: "Marketing",
      tab3: "Product",
      tab4: "Management",
      p1: { title: "Branding alone doesn't solve it.", desc: "Brand without product, operation, and channel becomes a promise without delivery.", solution: "At GOON, we unite positioning with your supply chain and scale channels." },
      p2: { title: "Marketing alone doesn't scale.", desc: "Campaigns generate spikes. Systems generate consistent growth.", solution: "We build owned channels, creator partnerships, and integrated supply." },
      p3: { title: "Product alone doesn't sell.", desc: "Products need narrative, channel, margin, inventory, and cadence.", solution: "We structure smart collections, margin analysis, and anchor-product pricing." },
      p4: { title: "Management without execution stalls.", desc: "Planning only matters when it becomes a ritual, KPI, and accountability.", solution: "We implement daily, weekly, and monthly check-in rituals with dedicated heads." }
    },
    systems: {
      title: "One brand. Every channel.",
      lead: "B2B, B2C, D2C, and Social Commerce strategy and operations under one vision — with processes built for sustainable, consistent growth.",
      s1: { title: "Positioning", desc: "Brand territory, narrative, ICP, and language that establish a distinct place in the market." },
      s2: { title: "Creative direction", desc: "Product, assortment, and calendar connected to identity and consumer behavior." },
      s3: { title: "Supply chain", desc: "Suppliers, quality, and production integrated into a predictable, scalable chain." },
      s4: { title: "Operations", desc: "Processes, rituals, metrics, and ownership that turn strategy into routine." },
      s5: { title: "Distribution", desc: "B2B, B2C, D2C, and Social Commerce channels operating with consistency and data intelligence." }
    },
    method: {
      title: "GOON Method",
      lead: "A methodology to turn vision into structure, structure into execution, and execution into scale.",
      p1: { title: "Position", desc: "We define the game: market, customer, brand, differentiation, and flight plan." },
      p2: { title: "Build", desc: "We build the assets: product, channels, processes, narratives, and systems." },
      p3: { title: "Operate", desc: "We run the operations with rituals, heads, KPIs, and executive cadence." },
      p4: { title: "Scale", desc: "We adjust the course, accelerate sales, and prepare the company to scale." }
    },
    timeline: {
      title: "Strategy that enters operations.",
      lead: "From context to execution: clarity to decide, structure to operate, and data to evolve.",
      step: "STAGE",
      step1: { title: "Context", desc: "We read culture, market, consumer, and operations to identify what truly moves the business." },
      step2: { title: "Direction", desc: "We align brand, product, channels, and priorities into a clear, shared vision." },
      step3: { title: "Operations", desc: "We translate direction into processes, management rhythm, supply chain, and multi-channel execution." },
      step4: { title: "Evolution", desc: "We track data, refine decisions, and expand reach with consistency." }
    },
    ecosystem: {
      title: "One network. Four fronts.",
      lead: "Strategy, culture, channels, and knowledge connected by a shared vision of brand and operations.",
      c1: { title: "GOON Advisor", desc: "Strategic intelligence for decisions across brand, positioning, product, and expansion.", action: "Discover →" },
      c2: { title: "GOON What, Who & Where", desc: "Culture, consumer, and market insight to guide where a brand should be and how it should express itself.", action: "Discover →" },
      c3: { title: "GOON MCN", desc: "A multi-channel network connecting brands, distribution, content, and strategic partners.", action: "Discover →" },
      c4: { title: "GOON Mentorship", desc: "Applied knowledge and strategic exchange that strengthen leadership and business decisions.", action: "Discover →" },
      c5: { title: "GOON Club", desc: "Community for entrepreneurs, operators, and brands in construction.", action: "Enter →" },
      c6: { title: "GOON Events", desc: "Imersions, meetups, and experiences to accelerate vision, connection, and execution.", action: "See events →" }
    },
    stats: {
      title1: "Culture, data, and design.",
      title2: "Moving in one direction.",
      lead: "Creative vision meets operational discipline to build relevant, consistent brands prepared for different markets.",
      s1: "years of combined experience",
      s2: "countries reached",
      s3: "in businesses built",
      s4: "connected channels"
    },
    network: {
      eyebrow: "GLOBAL NETWORK / ACTIVE",
      title: "Present where the value chain happens.",
      description: "Our hubs connect strategy, supply chain, distribution, and expansion across the Americas, Europe, and the Middle East.",
      locationsLabel: "GOON locations",
      mapAria: "World map showing GOON locations in São Paulo, Caxias do Sul, Ciudad del Este, Doral, London, and Dubai."
    },
    cases: {
      title: "Cases",
      lead: "Connecting brand, product, operations, and growth. Discover the strategies that drove startups and e-commerce companies to global scale.",
      c1: {
        name: "AURA",
        tag: "BRAND BUILD · GLOBAL BRANDING",
        title: "Rethinking global brand positioning",
        desc: "How GOON aligned luxury digital positioning with an international supply chain, yielding record-breaking customer retention.",
        m1v: "+180%",
        m1l: "LTV Growth",
        m2v: "3.2x",
        m2l: "Digital Channel ROI",
        quote: "GOON didn't just deliver beautiful design; they restructured our product operational logic and international brand positioning."
      },
      c2: {
        name: "VELO",
        tag: "COMMERCE SCALE · SOCIAL COMMERCE",
        title: "Multi-channel social commerce structure",
        desc: "A social commerce infrastructure integrating partner creators, commercial live streams, and fast-fulfillment logistics for massive sales spikes.",
        m1v: "$4.2M",
        m1l: "GMV in 90 days",
        m2v: "250K+",
        m2l: "Customers Acquired",
        quote: "GOON's multi-channel vision and operational discipline connected brand, content, and distribution without losing consistency."
      },
      c3: {
        name: "APEX",
        tag: "OPERATION SYSTEM · SUPPLY CHAIN",
        title: "Operating system & supply chain sync",
        desc: "Implementing executive rituals, real-time dashboards, and global vendor optimization to unlock cash flow and logistical bottlenecks.",
        m1v: "-42%",
        m1l: "Lead Time Reduction",
        m2v: "+35%",
        m2l: "Inventory Efficiency",
        quote: "With the implementation of GOON's rituals, our end-to-end management began operating with Swiss-watch precision."
      }
    },
    offices: {
      title: "Our Offices",
      lead: "Global physical presence structured to connect your brand and operations with the world's main commercial hubs.",
      br: "Brazil",
      py: "Paraguay",
      us: "United States",
      eu: "Europe",
      af: "Africa",
      oc: "Oceania",
      ae: "Dubai"
    },
    contact: {
      title: "Let's talk",
      lead: "Choose the channel. We respond quickly and directly — the first conversation is already a diagnosis.",
      waTitle: "WhatsApp",
      waDesc: "Fast response, directly with the team. The shortest path to start.",
      waAction: "Chat now →",
      mailTitle: "E-mail",
      mailDesc: "For proposals, partnerships, and executive projects. contato@goon-global.com",
      mailAction: "Write →",
      igTitle: "Instagram",
      igDesc: "Behind the scenes, cases, and the philosophy of operating instead of just teaching.",
      igAction: "Follow →",
      finalTitle1: "GOON Global Network",
      finalTitle2: "Culture. Data. Design.",
      finalDesc: "A network built to connect strategy, execution, and results across fashion, design, beauty, and personal care brands.",
      finalWa: "Talk on WhatsApp",
      finalTalk: "Talk to GOON",
      waMsg: "Hello! I came through the GOON website and want to discuss a project."
    },
    footer: {
      rights: "© 2026 GOON. All rights reserved.",
      credits: "Design by GOON."
    },
    leadForm: {
      eyebrow: "NEW PROJECT / DIAGNOSIS",
      title: "Fill in your details and our team will contact you.",
      description: "Tell us a little about your brand. You can then continue the conversation directly on WhatsApp.",
      name: "Full Name",
      phone: "Phone / WhatsApp",
      company: "Company or brand name",
      niche: "Business niche",
      salesChannel: "Main sales channel",
      instagram: "Company Instagram (@)",
      namePlaceholder: "E.g.: Richard Hey",
      phonePlaceholder: "E.g.: +1 555 123 4567",
      companyPlaceholder: "E.g.: Your brand name",
      nichePlaceholder: "E.g.: Fashion, beauty or design",
      salesChannelPlaceholder: "E.g.: E-commerce, stores or marketplaces",
      instagramPlaceholder: "E.g.: @yourcompany",
      submit: "Send details and talk to GOON",
      submitting: "Sending…",
      privacy: "Your information will only be used for this contact.",
      close: "Close form",
      waTemplate: "Hello GOON! I would like to talk about my brand:\n- *Name:* {name}\n- *Phone:* {phone}\n- *Company or brand:* {company}\n- *Niche:* {niche}\n- *Main sales channel:* {salesChannel}\n- *Instagram:* {instagram}"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      problem: "Problema",
      systems: "Sistemas",
      method: "Método",
      timeline: "Proceso",
      ecosystem: "Ecosistema",
      stats: "Números",
      cases: "Casos",
      offices: "Sedes",
      about: "Sobre",
      contact: "Contacto"
    },
    hero: {
      sub: "Multi-Channel Network",
      title: "Estrategia y operación para marcas en movimiento [global].",
      lead: "GOON es un ecosistema de aceleración para moda, diseño, belleza y cuidado personal. Conectamos cultura, datos y diseño con la ejecución multicanal.",
      waBtn: "Hablar por WhatsApp",
      talkBtn: "LET'S GOON!",
      methodBtn: "Cómo operamos"
    },
    marquee: ["Branding", "Producto", "Operaciones", "Growth", "Social Commerce", "Gestión"],
    statements: {
      one: {
        text: "Los canales cambian. Los mercados cambian.",
        span: "Las marcas con sistema permanecen."
      },
      two: {
        text: "No construimos empresas para el mercado local.",
        span: "Construimos para competir con el mundo."
      }
    },
    problem: {
      title: "El problema",
      lead: "La mayoría de las empresas intentan crecer por partes. Marketing por un lado. Producto por el otro. Operación corriendo detrás. Gestión apagando incendios.",
      label: "SÍNTOMA",
      tab1: "Branding",
      tab2: "Marketing",
      tab3: "Producto",
      tab4: "Gestión",
      p1: { title: "El branding solo no lo resuelve.", desc: "Una marca sin producto, operación y canal se convierte en una promesa sin entrega.", solution: "En GOON, unimos el posicionamiento con tu cadena de suministro y canales de escala." },
      p2: { title: "El marketing solo no escala.", desc: "Las campañas generan picos. Un sistema genera un crecimiento constante.", solution: "Desarrollamos canales propios, alianzas con creadores y suministro integrado." },
      p3: { title: "El producto solo no se vende.", desc: "Un producto necesita narrativa, canal, margen, stock y ritmo.", solution: "Estructuramos colecciones inteligentes, análisis de margen y precios de producto ancla." },
      p4: { title: "La gestión sin execução se estanca.", desc: "La planificación solo importa cuando se convierte en ritual, KPI y exigencia.", solution: "Implementamos rituales diarios, semanales y mensuales de control con directores dedicados." }
    },
    systems: {
      title: "Una marca. Todos los canales.",
      lead: "Estrategia y operación B2B, B2C, D2C y Social Commerce bajo una misma visión, con procesos para crecer de forma sostenible y consistente.",
      s1: { title: "Posicionamiento", desc: "Territorio de marca, narrativa, ICP y lenguaje para definir un lugar propio en el mercado." },
      s2: { title: "Dirección creativa", desc: "Producto, mix y calendario conectados con la identidad y el comportamiento del consumidor." },
      s3: { title: "Supply chain", desc: "Proveedores, calidad y producción integrados en una cadena predecible y escalable." },
      s4: { title: "Operación", desc: "Procesos, rituales, indicadores y responsabilidades que convierten estrategia en rutina." },
      s5: { title: "Distribución", desc: "Canales B2B, B2C, D2C y Social Commerce operando con coherencia e inteligencia de datos." }
    },
    method: {
      title: "GOON Method",
      lead: "Una metodología para transformar visión en estructura, estructura en ejecución y ejecución a escala.",
      p1: { title: "Position", desc: "Definimos el juego: mercado, cliente, marca, diferenciación y plan de vuelo." },
      p2: { title: "Build", desc: "Construimos los activos: producto, canales, procesos, narrativas y sistemas." },
      p3: { title: "Operate", desc: "Entramos en la operación con rituales, directores, KPIs y cadencia ejecutiva." },
      p4: { title: "Scale", desc: "Ajustamos rumbo, aceleramos ventas y preparamos la empresa para crecer." }
    },
    timeline: {
      title: "Estrategia que entra en operación.",
      lead: "De la lectura del contexto a la ejecución: claridad para decidir, estructura para operar y datos para evolucionar.",
      step: "ETAPA",
      step1: { title: "Contexto", desc: "Leemos cultura, mercado, consumidor y operación para reconocer qué mueve realmente el negocio." },
      step2: { title: "Dirección", desc: "Alineamos marca, producto, canales y prioridades en una visión clara y compartida." },
      step3: { title: "Operación", desc: "Convertimos la dirección en procesos, ritmo de gestión, supply chain y ejecución multicanal." },
      step4: { title: "Evolución", desc: "Seguimos los datos, refinamos decisiones y ampliamos el alcance con consistencia." }
    },
    ecosystem: {
      title: "Una red. Cuatro frentes.",
      lead: "Estrategia, cultura, canales y conocimiento conectados por una misma visión de marca y operación.",
      c1: { title: "GOON Advisor", desc: "Inteligencia estratégica para decisiones de marca, posicionamiento, producto y expansión.", action: "Conocer →" },
      c2: { title: "GOON What, Who & Where", desc: "Lectura de cultura, consumidor y mercado para orientar dónde debe estar la marca y cómo debe expresarse.", action: "Conocer →" },
      c3: { title: "GOON MCN", desc: "Una red multicanal que conecta marcas, distribución, contenido y socios estratégicos.", action: "Conocer →" },
      c4: { title: "GOON Mentorship", desc: "Conocimiento aplicado e intercambio estratégico para fortalecer liderazgos y decisiones de negocio.", action: "Conocer →" },
      c5: { title: "GOON Club", desc: "Comunidad para empresarios, operadores y marcas en construcción.", action: "Enter →" },
      c6: { title: "GOON Events", desc: "Inmersiones, encuentros y experiencias para acelerar visión, conexión y ejecución.", action: "See events →" }
    },
    stats: {
      title1: "Cultura, datos y diseño.",
      title2: "En una sola dirección.",
      lead: "La visión creativa se une con la disciplina operativa para construir marcas relevantes, consistentes y preparadas para distintos mercados.",
      s1: "años de experiencia acumulada",
      s2: "países alcanzados",
      s3: "en negocios construidos",
      s4: "canales conectados"
    },
    network: {
      eyebrow: "GLOBAL NETWORK / ACTIVA",
      title: "Presencia donde sucede la cadena.",
      description: "Nuestros hubs conectan estrategia, supply chain, distribución y expansión entre América, Europa y Oriente Medio.",
      locationsLabel: "Puntos de actuación de GOON",
      mapAria: "Mapa mundial con los puntos de actuación de GOON en São Paulo, Caxias do Sul, Ciudad del Este, Doral, Londres y Dubái."
    },
    cases: {
      title: "Casos",
      lead: "Conectando marca, producto, operación y growth. Conozca las estrategias que llevaron a startups y e-commerces a la escala internacional.",
      c1: {
        name: "AURA",
        tag: "BRAND BUILD · BRANDING GLOBAL",
        title: "Repensando el posicionamiento de marca global",
        desc: "Cómo GOON alineó el posicionamiento de lujo digital con la cadena de suministro internacional, generando un récord de retención de clientes.",
        m1v: "+180%",
        m1l: "Crecimiento de LTV",
        m2v: "3.2x",
        m2l: "ROI en Canales Digitales",
        quote: "GOON no solo entregó un diseño hermoso; reestructuraron nuestra lógica operativa de producto y posicionamiento de marca internacional."
      },
      c2: {
        name: "VELO",
        tag: "COMMERCE SCALE · SOCIAL COMMERCE",
        title: "Estructura multicanal de social commerce",
        desc: "Una infraestructura de social commerce que integra creadores asociados, transmisiones en vivo y logística de fast-fulfillment para picos de ventas.",
        m1v: "$4.2M",
        m1l: "GMV en 90 días",
        m2v: "250K+",
        m2l: "Clientes Adquiridos",
        quote: "La visión multicanal y la disciplina operativa de GOON conectaron marca, contenido y distribución sin perder consistencia."
      },
      c3: {
        name: "APEX",
        tag: "OPERATION SYSTEM · SUPPLY CHAIN",
        title: "Sistema operativo y cadena de suministro",
        desc: "Implementación de rituales ejecutivos, tableros en tiempo real y optimización de proveedores globales para liberar cuellos de botella de caja y logística.",
        m1v: "-42%",
        m1l: "Reducción de Lead Time",
        m2v: "+35%",
        m2l: "Eficiencia de Inventario",
        quote: "Con la implementación de los rituales de GOON, nuestra gestión de extremo a extremo comenzó a operar con precisión de reloj suizo."
      }
    },
    offices: {
      title: "Nuestras Sedes",
      lead: "Presencia física global estructurada para conectar tu marca y operación con los principales ejes comerciales del mundo.",
      br: "Brasil",
      py: "Paraguay",
      us: "Estados Unidos",
      eu: "Europa",
      af: "África",
      oc: "Oceania",
      ae: "Dubái"
    },
    contact: {
      title: "Hablemos",
      lead: "Elige el canal. Respondemos rápido y directo: la primera conversación ya es un diagnóstico.",
      waTitle: "WhatsApp",
      waDesc: "Respuesta rápida, directamente con el equipo. El camino más corto para empezar.",
      waAction: "Llamar ahora →",
      mailTitle: "E-mail",
      mailDesc: "Para propuestas, alianzas y proyectos ejecutivos. contato@goon-global.com",
      mailAction: "Escribir →",
      igTitle: "Instagram",
      igDesc: "Detrás de escena, casos y la filosofía de operar en lugar de solo enseñar.",
      igAction: "Seguir →",
      finalTitle1: "GOON Global Network",
      finalTitle2: "Culture. Data. Design.",
      finalDesc: "Una red creada para conectar estrategia, ejecución y resultados en marcas de moda, diseño, belleza y cuidado personal.",
      finalWa: "Hablar por WhatsApp",
      finalTalk: "Habla con GOON",
      waMsg: "¡Hola! Vine por el sitio web de GOON e quiero conversar sobre un proyecto."
    },
    footer: {
      rights: "© 2026 GOON. Todos los derechos reservados.",
      credits: "Diseño por GOON."
    },
    leadForm: {
      eyebrow: "NUEVO PROYECTO / DIAGNÓSTICO",
      title: "Completa tus datos y nuestro equipo se pondrá en contacto contigo.",
      description: "Cuéntanos un poco sobre tu marca. Después podrás continuar la conversación directamente por WhatsApp.",
      name: "Nombre Completo",
      phone: "Teléfono / WhatsApp",
      company: "Nombre de la empresa o marca",
      niche: "Nicho de actuación",
      salesChannel: "Principal canal de ventas",
      instagram: "Instagram de la Empresa (@)",
      namePlaceholder: "Ej.: Richard Hey",
      phonePlaceholder: "Ej.: +34 600 000 000",
      companyPlaceholder: "Ej.: Nombre de tu marca",
      nichePlaceholder: "Ej.: Moda, belleza o diseño",
      salesChannelPlaceholder: "Ej.: E-commerce, tiendas o marketplaces",
      instagramPlaceholder: "Ej.: @tuempresa",
      submit: "Enviar datos y hablar con GOON",
      submitting: "Enviando…",
      privacy: "Tus datos se utilizarán únicamente para este contacto.",
      close: "Cerrar formulario",
      waTemplate: "¡Hola GOON! Quiero hablar sobre mi marca:\n- *Nombre:* {name}\n- *Teléfono:* {phone}\n- *Empresa o marca:* {company}\n- *Nicho:* {niche}\n- *Principal canal de ventas:* {salesChannel}\n- *Instagram:* {instagram}"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('goon_lang') || 'pt';
  });

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('goon_lang', lang);
    }
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current[key] !== undefined) {
        current = current[key];
      } else {
        return keyPath;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
