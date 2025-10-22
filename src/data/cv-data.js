// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: {
      pt: 'Analista de Infraestrutura Pleno | Redes, Sistemas e Suporte N3',
      en: 'Mid-Level Infrastructure Analyst | Networks, Systems and N3 Support',
      es: 'Analista de Infraestructura Pleno | Redes, Sistemas y Soporte N3'
    },
    image: '/jonathan.jpeg',
    address: 'Av. Nove de Julho, 610 - Vila Cascatinha, São Vicente, SP',
    
    objective: {
      pt: 'Analista de Infraestrutura Pleno ou Analista de Suporte Pleno.',
      en: 'Work as Mid-Level Infrastructure Analyst or Mid-Level Support Analyst',
      es: 'Analista de Infraestructura Pleno o Analista de Soporte Pleno.'
    },
    
    summary: {
      pt: 'Profissional de TI com mais de 10 anos de experiência em infraestrutura, suporte técnico e manutenção de ambientes corporativos. Sólida experiência técnica e comprovada capacidade em atuar como mentor, desenvolvendo a visão analítica e as competências técnicas das equipes de Suporte N1 e N2, visando a autonomia e a excelência na resolução de problemas complexos. Experiência em administração de servidores Windows e Linux, gerenciamento de redes (VLANs, roteamento, firewall), virtualização (Hyper-V), Active Directory e sistemas ERP. Conhecimento em segurança de redes com implementação de firewalls PFSense e proxy corporativo. Experiência prática em cabeamento estruturado, diagnóstico avançado de hardware e reparo de equipamentos eletrônicos em nível de componentes. Busco constantemente atualização técnica através de cursos e certificações nas áreas de redes, cloud computing e infraestrutura.',
      en: 'IT professional with over 10 years of experience in infrastructure, technical support, and corporate environment maintenance. Strong technical experience and proven ability to act as a mentor, developing the analytical vision and technical skills of N1 and N2 Support teams, aiming for autonomy and excellence in complex problem resolution. Experience in Windows and Linux server administration, network management (VLANs, routing, firewall), virtualization (Hyper-V), Active Directory, and ERP systems. Knowledge in network security with PFSense firewall and corporate proxy implementation. Hands-on experience in structured cabling, advanced hardware diagnostics, and electronic equipment repair at component level. Continuously seeking technical updates through courses and certifications in networking, cloud computing, and infrastructure.',
      es: 'Profesional de TI con más de 10 años de experiencia en infraestructura, soporte técnico y mantenimiento de ambientes corporativos. Sólida experiencia técnica y comprobada capacidad para actuar como mentor, desarrollando la visión analítica y las competencias técnicas de los equipos de Soporte N1 y N2, con el objetivo de lograr autonomía y excelencia en la resolución de problemas complejos. Experiencia en administración de servidores Windows y Linux, gestión de redes (VLANs, enrutamiento, firewall), virtualización (Hyper-V), Active Directory y sistemas ERP. Conocimiento en seguridad de redes con implementación de firewalls PFSense y proxy corporativo. Experiencia práctica en cableado estructurado, diagnóstico avanzado de hardware y reparación de equipos electrónicos a nivel de componentes. Busco constantemente actualización técnica a través de cursos y certificaciones en redes, cloud computing e infraestructura.'
    }
  },
  contact: [
    { type: 'email', icon: Mail, value: 'jonathan.moyano@outlook.com.br', href: 'mailto:jonathan.moyano@outlook.com.br' },
    { type: 'phone', icon: Phone, value: '(13) 97412-4438', href: 'tel:+5513974124438' },
    { type: 'phone', icon: Phone, value: '(13) 97412-8143', href: 'tel:+5513974128143', label: 'Esposa' },
    { type: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathansouzamoyano/', displayValue: 'linkedin.com/in/jonathansouzamoyano' },
    { type: 'github', icon: Github, value: 'GitHub', href: 'https://github.com/JonathanMoyano', displayValue: 'github.com/JonathanMoyano' },
  ],
  skills: {
    principal: [
      {
        pt: 'Infraestrutura de Redes e Servidores',
        en: 'Network and Server Infrastructure',
        es: 'Infraestructura de Redes y Servidores'
      },
      {
        pt: 'Suporte Técnico Avançado (N3)',
        en: 'Advanced Technical Support (N3)',
        es: 'Soporte Técnico Avanzado (N3)'
      },
      {
        pt: 'Hardware & Eletrônica Avançada',
        en: 'Hardware & Advanced Electronics',
        es: 'Hardware y Electrónica Avanzada'
      },
      {
        pt: 'Diagnóstico e Reparo de Circuitos',
        en: 'Circuit Diagnostics and Repair',
        es: 'Diagnóstico y Reparación de Circuitos'
      },
      {
        pt: 'Help Desk & ITSM (JIRA)',
        en: 'Help Desk & ITSM (JIRA)',
        es: 'Help Desk e ITSM (JIRA)'
      }
    ],
    sistemas: [
      {
        pt: 'Windows Server',
        en: 'Windows Server',
        es: 'Windows Server'
      },
      {
        pt: 'Windows Desktop',
        en: 'Windows Desktop',
        es: 'Windows Desktop'
      },
      {
        pt: 'Linux Server',
        en: 'Linux Server',
        es: 'Linux Server'
      },
      {
        pt: 'Linux Desktop',
        en: 'Linux Desktop',
        es: 'Linux Desktop'
      },
      {
        pt: 'Sistemas ERP (TOTVS, GVDasa)',
        en: 'ERP Systems (TOTVS, GVDasa)',
        es: 'Sistemas ERP (TOTVS, GVDasa)'
      },
      {
        pt: 'Virtualização (Hyper-V, Oracle VM)',
        en: 'Virtualization (Hyper-V, Oracle VM)',
        es: 'Virtualización (Hyper-V, Oracle VM)'
      }
    ],
    infraestrutura: [
      {
        pt: 'Cabeamento Estruturado e Rack',
        en: 'Structured Cabling and Rack',
        es: 'Cableado Estructurado y Rack'
      },
      {
        pt: 'Active Directory & Google Workspace',
        en: 'Active Directory & Google Workspace',
        es: 'Active Directory y Google Workspace'
      },
      {
        pt: 'Redes (VLANs, Roteamento) & Firewall (PFSense)',
        en: 'Networks (VLANs, Routing) & Firewall (PFSense)',
        es: 'Redes (VLANs, Enrutamiento) y Firewall (PFSense)'
      },
      {
        pt: 'Monitoramento (Zabbix, CFTV Intelbras)',
        en: 'Monitoring (Zabbix, Intelbras CCTV)',
        es: 'Monitoreo (Zabbix, CCTV Intelbras)'
      },
      {
        pt: 'Proxy Corporativo (Squid/SquidGuard)',
        en: 'Corporate Proxy (Squid/SquidGuard)',
        es: 'Proxy Corporativo (Squid/SquidGuard)'
      },
      {
        pt: 'Telefonia Analógica',
        en: 'Analog Telephony',
        es: 'Telefonía Analógica'
      }
    ],
    nuvem: [
      {
        pt: 'AWS (EC2, S3, RDS)',
        en: 'AWS (EC2, S3, RDS)',
        es: 'AWS (EC2, S3, RDS)'
      },
      {
        pt: 'Google Cloud Platform (GCP)',
        en: 'Google Cloud Platform (GCP)',
        es: 'Google Cloud Platform (GCP)'
      },
      {
        pt: 'Microsoft Azure',
        en: 'Microsoft Azure',
        es: 'Microsoft Azure'
      }
    ],
        // NOVA SEÇÃO DE HABILIDADES ADICIONADA PARA REFORÇO
        lideranca: [
            {
                pt: 'Mentoria Técnica (N1/N2) e Desenvolvimento de Talentos',
                en: 'Technical Mentoring (N1/N2) and Talent Development',
                es: 'Mentoría Técnica (N1/N2) y Desarrollo de Talentos'
            },
            {
                pt: 'Foco no Olhar Analítico e Autonomia Profissional',
                en: 'Focus on Analytical View and Professional Autonomy',
                es: 'Foco en la Visión Analítica y Autonomía Profesional'
            }
        ]
  },
  softSkills: [
    {
      pt: 'Perfil analítico para diagnóstico de falhas',
      en: 'Analytical profile for troubleshooting',
      es: 'Perfil analítico para diagnóstico de fallas'
    },
    {
      pt: 'Raciocínio lógico e resolução de problemas',
      en: 'Logical reasoning and problem-solving',
      es: 'Razonamiento lógico y resolución de problemas'
    },
    {
      pt: 'Proatividade e iniciativa técnica',
      en: 'Proactivity and technical initiative',
      es: 'Proactividad e iniciativa técnica'
    },
    {
      pt: 'Comunicação eficaz com usuários e equipes',
      en: 'Effective communication with users and teams',
      es: 'Comunicación eficaz con usuarios y equipos'
    },
    {
      pt: 'Organização e priorização de demandas',
      en: 'Organization and prioritization of demands',
      es: 'Organización y priorización de demandas'
    },
    {
      pt: 'Colaboração e melhoria contínua',
      en: 'Collaboration and continuous improvement',
      es: 'Colaboración y mejora continua'
    },
    {
      pt: 'Atenção aos detalhes técnicos',
      en: 'Attention to technical details',
      es: 'Atención a los detalles técnicos'
    },
    {
      pt: 'Adaptabilidade a novas tecnologias',
      en: 'Adaptability to new technologies',
      es: 'Adaptabilidad a nuevas tecnologías'
    }
  ],
  languages: [
    { 
      language: {
        pt: 'Português',
        en: 'Portuguese',
        es: 'Portugués'
      },
      level: {
        pt: 'Nativo',
        en: 'Native',
        es: 'Nativo'
      }
    },
    { 
      language: {
        pt: 'Inglês',
        en: 'English',
        es: 'Inglés'
      },
      level: {
        pt: 'A2 - Em andamento',
        en: 'A2 - In progress',
        es: 'A2 - En curso'
      }
    }
  ],
  experience: [
    {  
      role: {
        pt: 'Analista de Infraestrutura e Suporte Técnico Pleno',
        en: 'Mid-Level Infrastructure and Technical Support Analyst',
        es: 'Analista de Infraestructura y Soporte Técnico Pleno'
      },
      company: 'Colégio Jean Piaget', 
      period: {
        pt: 'Jan/2024 - Presente',
        en: 'Jan/2024 - Present',
        es: 'Ene/2024 - Presente'
      },
      tasks: [
        {
          pt: 'Atuação como mentor técnico para o time de Suporte N1/N2, desenvolvendo o raciocínio analítico e a autonomia dos profissionais na resolução de incidentes básicos e avançados.',
          en: 'Acting as a technical mentor for the N1/N2 Support team, developing the analytical reasoning and autonomy of professionals in resolving basic and advanced incidents.',
          es: 'Actuación como mentor técnico para el equipo de Soporte N1/N2, desarrollando el razonamiento analítico y la autonomía de los profesionales en la resolución de incidentes básicos y avanzados.'
        },
        {
          pt: 'Operação e manutenção da infraestrutura de TI: redes, servidores, virtualização e segurança',
          en: 'IT infrastructure operation and maintenance: networks, servers, virtualization and security',
          es: 'Operación y mantenimiento de infraestructura de TI: redes, servidores, virtualización y seguridad'
        },
        {
          pt: 'Suporte técnico N3 e resolução de incidentes complexos via ITSM (JIRA)',
          en: 'N3 technical support and complex incident resolution via ITSM (JIRA)',
          es: 'Soporte técnico N3 y resolución de incidentes complejos vía ITSM (JIRA)'
        },
        {
          pt: 'Execução de cabeamento estruturado, organização de racks e manutenção de servidores físicos',
          en: 'Structured cabling execution, rack organization and physical server maintenance',
          es: 'Ejecución de cableado estructurado, organización de racks y mantenimiento de servidores físicos'
        },
        {
          pt: 'Operação e monitoramento de sistemas de vigilância (Zabbix, CFTV Intelbras)',
          en: 'Surveillance systems operation and monitoring (Zabbix, Intelbras CCTV)',
          es: 'Operación y monitoreo de sistemas de vigilancia (Zabbix, CCTV Intelbras)'
        },
        {
          pt: 'Configuração e manutenção de firewall PFSense e proxy corporativo (Squid/SquidGuard no Linux Ubuntu Server) com integração AD',
          en: 'PFSense firewall and corporate proxy (Squid/SquidGuard on Linux Ubuntu Server) configuration and maintenance with AD integration',
          es: 'Configuración y mantenimiento de firewall PFSense y proxy corporativo (Squid/SquidGuard en Linux Ubuntu Server) con integración AD'
        },
        {
          pt: 'Gerenciamento de contas de usuários no Active Directory e Google Workspace Admin',
          en: 'User account management in Active Directory and Google Workspace Admin',
          es: 'Gestión de cuentas de usuarios en Active Directory y Google Workspace Admin'
        },
        {
          pt: 'Suporte ao sistema ERP GVDasa e manutenção do ambiente Hyper-V',
          en: 'GVDasa ERP system support and Hyper-V environment maintenance',
          es: 'Soporte al sistema ERP GVDasa y mantenimiento del ambiente Hyper-V'
        },
        {
          pt: 'Manutenção corretiva avançada de equipamentos eletrônicos e reparo de placas-mãe',
          en: 'Advanced corrective maintenance of electronic equipment and motherboard repair',
          es: 'Mantenimiento correctivo avanzado de equipos electrónicos y reparación de placas madre'
        },
        {
          pt: 'Elaboração de laudos técnicos e documentação de procedimentos',
          en: 'Technical report preparation and procedure documentation',
          es: 'Elaboración de informes técnicos y documentación de procedimientos'
        },
        {
          pt: 'Manutenção de telefonia analógica e suporte a infraestrutura de rede',
          en: 'Analog telephony maintenance and network infrastructure support',
          es: 'Mantenimiento de telefonía analógica y network infrastructure support'
        }
      ]
    },
    { 
      role: {
        pt: 'Assistente de Suporte Técnico N1/N2',
        en: 'N1/N2 Technical Support Assistant',
        es: 'Asistente de Soporte Técnico N1/N2'
      },
      company: 'Colégio Jean Piaget', 
      period: {
        pt: 'Out/2023 - Jan/2024',
        en: 'Oct/2023 - Jan/2024',
        es: 'Oct/2023 - Ene/2024'
      },
      tasks: [
            {
          pt: 'Mentoria e desenvolvimento do time de Suporte (N1), ensinando conhecimentos básicos e avançados em suporte técnico e nas atividades de rotina.',
          en: 'Mentoring and development of the Support team (N1), teaching basic and advanced knowledge in technical support and routine activities.',
          es: 'Mentoría y desarrollo del equipo de Soporte (N1), enseñando conocimientos básicos y avanzados en soporte técnico y actividades de rutina.'
        },
        {
          pt: 'Manutenção preventiva e corretiva de equipamentos de informática (desktops, notebooks, impressoras)',
          en: 'Preventive and corrective maintenance of computer equipment (desktops, notebooks, printers)',
          es: 'Mantenimiento preventivo y correctivo de equipos de informática (desktops, notebooks, impresoras)'
        },
        {
          pt: 'Atendimento de Help Desk para comunidade acadêmica através de sistema de tickets',
          en: 'Help Desk support for academic community through ticket system',
          es: 'Soporte Help Desk para comunidad académica a través de sistema de tickets'
        },
        {
          pt: 'Análise técnica e modernização do sistema de CFTV institucional',
          en: 'Technical analysis and modernization of institutional CCTV system',
          es: 'Análisis técnico y modernización del sistema de CCTV institucional'
        },
        {
          pt: 'Controle de inventário de ativos de TI e solicitação de compras',
          en: 'IT asset inventory control and purchase requests',
          es: 'Control de inventario de activos de TI y solicitud de compras'
        }
      ] 
    },
    { 
      role: {
        pt: 'Estágio de Suporte Técnico N1',
        en: 'N1 Technical Support Intern',
        es: 'Pasantía de Soporte Técnico N1'
      },
      company: 'Colégio da Polícia Militar - Cruz Azul SP', 
      period: {
        pt: 'Out/2022 - Out/2023',
        en: 'Oct/2022 - Oct/2023',
        es: 'Oct/2022 - Oct/2023'
      },
      tasks: [
        {
          pt: 'Suporte ao Sistema ERP TOTVS (módulos RM e RM Saúde) para usuários finais',
          en: 'Support for TOTVS ERP System (RM and RM Health modules) for end users',
          es: 'Soporte al Sistema ERP TOTVS (módulos RM y RM Salud) para usuarios finales'
        },
        {
          pt: 'Administração de contas de usuários no Active Directory',
          en: 'User account administration in Active Directory',
          es: 'Administración de cuentas de usuarios en Active Directory'
        },
        {
          pt: 'Manutenção de servidores Windows Server locais e sistemas de monitoramento Zabbix',
          en: 'Maintenance of local Windows Server and Zabbix monitoring systems',
          es: 'Mantenimiento de servidores Windows Server locales y sistemas de monitoreo Zabbix'
        }
      ] 
    },
    { 
      role: {
        pt: 'Consultor de TI Autônomo',
        en: 'Freelance IT Consultant',
        es: 'Consultor de TI Autónomo'
      },
      company: {
        pt: 'Prestação de Serviços Autônoma',
        en: 'Freelance Services',
        es: 'Prestación de Servicios Autónoma'
      },
      period: {
        pt: 'Jan/2010 - Out/2023',
        en: 'Jan/2010 - Oct/2023',
        es: 'Ene/2010 - Oct/2023'
      },
      tasks: [
        {
          pt: 'Atendimento técnico especializado a residências e pequenas empresas',
          en: 'Specialized technical support for homes and small businesses',
          es: 'Soporte técnico especializado para hogares y pequeñas empresas'
        },
        {
          pt: 'Diagnóstico e reparo de hardware (desktops, notebooks, impressoras)',
          en: 'Hardware diagnostics and repair (desktops, notebooks, printers)',
          es: 'Diagnóstico y reparación de hardware (desktops, notebooks, impresoras)'
        },
        {
          pt: 'Instalação e configuração de sistemas operacionais Windows e Linux',
          en: 'Installation and configuration of Windows and Linux operating systems',
          es: 'Instalación y configuración de sistemas operativos Windows y Linux'
        },
        {
          pt: 'Recuperação de dados, remoção de malware e suporte remoto',
          en: 'Data recovery, malware removal and remote support',
          es: 'Recuperación de datos, eliminación de malware y soporte remoto'
        }
      ] 
    },
    { 
      role: {
        pt: 'Bombeiro Civil (Líder de Equipe)',
        en: 'Civil Firefighter (Team Leader)',
        es: 'Bombero Civil (Líder de Equipo)'
      },
      company: 'Bracell, Grupo Mendes, Santos FC', 
      period: {
        pt: '2018 - 2022',
        en: '2018 - 2022',
        es: '2018 - 2022'
      },
      tasks: [
        {
          pt: 'Coordenação de equipes de bombeiros civis em resposta a emergências',
          en: 'Coordination of civil firefighter teams in emergency response',
          es: 'Coordinación de equipos de bomberos civiles en respuesta a emergencias'
        },
        {
          pt: 'Implementação de protocolos de segurança e treinamentos de brigada de incêndio',
          en: 'Implementation of safety protocols and fire brigade training',
          es: 'Implementación de protocolos de seguridad y entrenamientos de brigada de incendio'
        },
        {
          pt: 'Gestão de crises e tomada de decisões em situações de alto risco',
          en: 'Crisis management and decision-making in high-risk situations',
          es: 'Gestión de crisis y toma de decisiones en situaciones de alto riesgo'
        }
      ] 
    }
  ],
  education: [
    { 
      degree: {
        pt: 'Análise e Desenvolvimento de Sistemas',
        en: 'Systems Analysis and Development',
        es: 'Análisis y Desarrollo de Sistemas'
      },
      institution: 'UNIBR', 
      status: {
        pt: 'Concluído',
        en: 'Completed',
        es: 'Concluido'
      }
    }
  ],
  // CURSOS EM ORDEM CRONOLÓGICA (DO MAIS RECENTE PARA O MAIS ANTIGO)
  courses: [
    { title: 'Windows Server', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Windows: Prompt - Utilizando o CMD', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Linux: Terminal - Comandos para Executar Tarefas', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Linux: Gerenciando Diretórios, Arquivos e Processos', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Redes: Implementando Roteamento, DNS e IPv6', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Redes Wi-Fi: Criando uma Rede Sem Fio Segura', institution: 'Alura', date: 'Ago/2025' },
    { title: 'Linux: Fundamentos', institution: 'FIAP', date: 'Jul/2025' },
    { title: 'Redes: Dos Conceitos Iniciais à Criação de Intranet', institution: 'Alura', date: 'Jul/2025' },
    { title: 'Redes: Construindo Projeto com VLANs e Políticas de Acesso', institution: 'Alura', date: 'Jul/2025' },
    { title: 'Introdução ao Desenvolvimento Moderno de Software', institution: 'DIO', date: 'Jun/2024' },
    { title: 'Gestão de Infraestrutura de TI', institution: 'FIAP', date: 'Mai/2025' },
    { title: 'Microsoft Azure Data Fundamentals (DP-900)', institution: 'Ka Solution', date: 'Abr/2024' },
    { title: 'GKE: Backups Inteligentes na Google Cloud Platform', institution: 'DIO', date: 'Abr/2024' },
    { title: 'Google Cloud Fundamentals: Core Infrastructure', institution: 'Coursera', date: 'Jan/2024' },
    { title: 'IT Service Management: Serviços de TI (ITSM)', institution: 'Udemy', date: 'Ago/2023' },
    { title: 'ChatGPT para Python', institution: 'Udemy', date: 'Ago/2023' },
    { title: 'Banco de Dados SQL do Zero ao Avançado', institution: 'Udemy', date: 'Jul/2023' },
    { title: 'Programação Python do Zero ao Avançado', institution: 'Udemy', date: 'Jul/2023' },
    { title: 'Banco de Dados Oracle SQL', institution: 'Udemy', date: 'Jun/2023' },
    { title: 'Google Cloud Associate Engineer (GCP)', institution: 'Udemy', date: 'Jun/2023' },
    { title: 'Introdução à Ciência de Dados 3.0', institution: 'Data Science Academy', date: 'Jun/2023' },
    { title: 'AWS Amazon Cloud Computing - Iniciante', institution: 'Udemy', date: 'Mai/2023' },
    { title: 'CC50: Introdução à Ciência da Computação - Harvard', institution: 'Fundação Estudar', date: 'Jan/2023' },
    { title: 'Algoritmos e Lógica de Programação', institution: 'Udemy', date: 'Set/2022' },
    { title: 'Reparo Avançado em Placas e Circuitos Eletrônicos', institution: 'MasterNet Cursos', date: 'Fev/2021' }
  ]
};
