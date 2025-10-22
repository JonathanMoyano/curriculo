// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: {
      pt: 'Analista de Infraestrutura de TI Pleno | Especialista em Redes, Servidores e Suporte Técnico N3',
      en: 'Mid-Level IT Infrastructure Analyst | Specialist in Networks, Servers, and Tier 3 (T3) Technical Support',
      es: 'Analista de Infraestructura de TI Pleno | Especialista en Redes, Servidores y Soporte Técnico Nivel 3 (N3)'
    },
    image: '/jonathan.jpeg',
    address: 'Av. Nove de Julho, 610 - Vila Cascatinha, São Vicente, SP',
    
    objective: {
      pt: 'Analista de Infraestrutura Pleno ou Analista de Suporte Técnico N3 com foco em ambientes corporativos.',
      en: 'Mid-Level Infrastructure Analyst or Tier 3 (T3) Technical Support Analyst, focused on corporate environments.',
      es: 'Analista de Infraestructura Pleno o Analista de Soporte Técnico Nivel 3 (N3), con enfoque en entornos corporativos.'
    },
    
    summary: {
      pt: 'Analista de Infraestrutura com mais de 10 anos de experiência em suporte técnico, administração de servidores e manutenção de ambientes corporativos. Atuo como referência técnica para equipes de suporte, orientando profissionais N1/N2 no desenvolvimento de visão analítica e autonomia para resolução de problemas. Experiência consolidada em administração de servidores Windows Server e Linux, gerenciamento de redes corporativas, Active Directory, virtualização com Hyper-V e sistemas ERP. Conhecimento prático em segurança de redes com implementação de firewall PFSense e proxy corporativo Squid integrado ao Active Directory. Diferenciais técnicos incluem expertise em cabeamento estruturado, diagnóstico avançado de hardware e reparo de componentes eletrônicos. Busco continuamente atualização técnica através de certificações em redes, cloud computing e infraestrutura de TI.',
      en: 'Infrastructure Analyst with over 10 years of experience in technical support, server administration and corporate environment maintenance. I act as technical reference for support teams, guiding N1/N2 professionals in developing analytical vision and autonomy for problem resolution. Consolidated experience in Windows Server and Linux server administration, corporate network management, Active Directory, Hyper-V virtualization and ERP systems. Practical knowledge in network security with PFSense firewall implementation and Squid corporate proxy integrated with Active Directory. Technical differentials include expertise in structured cabling, advanced hardware diagnostics and electronic component repair. I continuously seek technical updates through certifications in networks, cloud computing and IT infrastructure.',
      es: 'Analista de Infraestructura con más de 10 años de experiencia en soporte técnico, administración de servidores y mantenimiento de ambientes corporativos. Actúo como referencia técnica para equipos de soporte, orientando profesionales N1/N2 en el desarrollo de visión analítica y autonomía para resolución de problemas. Experiencia consolidada en administración de servidores Windows Server y Linux, gestión de redes corporativas, Active Directory, virtualización con Hyper-V y sistemas ERP. Conocimiento práctico en seguridad de redes con implementación de firewall PFSense y proxy corporativo Squid integrado con Active Directory. Diferenciales técnicos incluyen expertise en cableado estructurado, diagnóstico avanzado de hardware y reparación de componentes electrónicos. Busco continuamente actualización técnica a través de certificaciones en redes, cloud computing e infraestructura de TI.'
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
        pt: 'Administração Windows Server e Linux',
        en: 'Windows Server and Linux Administration',
        es: 'Administración Windows Server y Linux'
      },
      {
        pt: 'Suporte Técnico Avançado (N3)',
        en: 'Advanced Technical Support (N3)',
        es: 'Soporte Técnico Avanzado (N3)'
      },
      {
        pt: 'Active Directory e Google Workspace',
        en: 'Active Directory and Google Workspace',
        es: 'Active Directory y Google Workspace'
      },
      {
        pt: 'Segurança de Redes (Firewall e Proxy)',
        en: 'Network Security (Firewall and Proxy)',
        es: 'Seguridad de Redes (Firewall y Proxy)'
      },
      {
        pt: 'Virtualização (Hyper-V)',
        en: 'Virtualization (Hyper-V)',
        es: 'Virtualización (Hyper-V)'
      },
      {
        pt: 'Hardware e Eletrônica Avançada',
        en: 'Hardware and Advanced Electronics',
        es: 'Hardware y Electrónica Avanzada'
      },
      {
        pt: 'ITSM e Gestão de Tickets (JIRA)',
        en: 'ITSM and Ticket Management (JIRA)',
        es: 'ITSM y Gestión de Tickets (JIRA)'
      }
    ],
    sistemas: [
      {
        pt: 'Windows Server (2012/2016/2019/2022)',
        en: 'Windows Server (2012/2016/2019/2022)',
        es: 'Windows Server (2012/2016/2019/2022)'
      },
      {
        pt: 'Linux Server (Ubuntu, CentOS)',
        en: 'Linux Server (Ubuntu, CentOS)',
        es: 'Linux Server (Ubuntu, CentOS)'
      },
      {
        pt: 'Windows 10/11',
        en: 'Windows 10/11',
        es: 'Windows 10/11'
      },
      {
        pt: 'Sistemas ERP (TOTVS RM, GVDasa)',
        en: 'ERP Systems (TOTVS RM, GVDasa)',
        es: 'Sistemas ERP (TOTVS RM, GVDasa)'
      }
    ],
    infraestrutura: [
      {
        pt: 'Redes Corporativas (VLANs, Roteamento)',
        en: 'Corporate Networks (VLANs, Routing)',
        es: 'Redes Corporativas (VLANs, Enrutamiento)'
      },
      {
        pt: 'Firewall PFSense',
        en: 'PFSense Firewall',
        es: 'Firewall PFSense'
      },
      {
        pt: 'Proxy Squid/SquidGuard com Active Directory',
        en: 'Squid/SquidGuard Proxy with Active Directory',
        es: 'Proxy Squid/SquidGuard con Active Directory'
      },
      {
        pt: 'Cabeamento Estruturado',
        en: 'Structured Cabling',
        es: 'Cableado Estructurado'
      },
      {
        pt: 'Monitoramento (Zabbix)',
        en: 'Monitoring (Zabbix)',
        es: 'Monitoreo (Zabbix)'
      },
      {
        pt: 'CFTV (Intelbras)',
        en: 'CCTV (Intelbras)',
        es: 'CCTV (Intelbras)'
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
        pt: 'Google Cloud Platform',
        en: 'Google Cloud Platform',
        es: 'Google Cloud Platform'
      },
      {
        pt: 'Microsoft Azure',
        en: 'Microsoft Azure',
        es: 'Microsoft Azure'
      }
    ]
  },
  softSkills: [
    {
      pt: 'Mentoria técnica para equipes de suporte',
      en: 'Technical mentoring for support teams',
      es: 'Mentoría técnica para equipos de soporte'
    },
    {
      pt: 'Visão analítica para diagnóstico de problemas',
      en: 'Analytical vision for problem diagnosis',
      es: 'Visión analítica para diagnóstico de problemas'
    },
    {
      pt: 'Resolução de incidentes complexos',
      en: 'Complex incident resolution',
      es: 'Resolución de incidentes complejos'
    },
    {
      pt: 'Comunicação técnica clara',
      en: 'Clear technical communication',
      es: 'Comunicación técnica clara'
    },
    {
      pt: 'Organização e gestão de prioridades',
      en: 'Organization and priority management',
      es: 'Organización y gestión de prioridades'
    },
    {
      pt: 'Aprendizado contínuo',
      en: 'Continuous learning',
      es: 'Aprendizaje continuo'
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
        pt: 'Intermediário (A2)',
        en: 'Intermediate (A2)',
        es: 'Intermedio (A2)'
      }
    }
  ],
  experience: [
    {  
      role: {
        pt: 'Analista de Infraestrutura Pleno e Suporte Técnico N3',
        en: 'Mid-Level Infrastructure Analyst and Tier 3 Technical Support',
        es: 'Analista de Infraestructura Semi-Senior y Soporte Técnico Nivel 3'
      },
      company: 'Colégio Jean Piaget', 
      period: {
        pt: 'Jan/2024 - Presente',
        en: 'Jan/2024 - Present',
        es: 'Ene/2024 - Presente'
      },
      tasks: [
        {
          pt: 'Administro infraestrutura completa de TI incluindo servidores físicos e virtualizados (Hyper-V), rede corporativa segmentada com VLANs, firewall PFSense e proxy Squid/SquidGuard integrado ao Active Directory para controle de acesso web',
          en: 'I manage complete IT infrastructure including physical and virtualized servers (Hyper-V), segmented corporate network with VLANs, PFSense firewall and Squid/SquidGuard proxy integrated with Active Directory for web access control',
          es: 'Administro infraestructura completa de TI incluyendo servidores físicos y virtualizados (Hyper-V), red corporativa segmentada con VLANs, firewall PFSense y proxy Squid/SquidGuard integrado con Active Directory para control de acceso web'
        },
        {
          pt: 'Atuo como referência técnica para a equipe de suporte N1/N2, orientando na análise de incidentes, desenvolvimento de raciocínio lógico para troubleshooting e autonomia na resolução de problemas técnicos complexos',
          en: 'I act as technical reference for N1/N2 support team, guiding in incident analysis, logical reasoning development for troubleshooting and autonomy in solving complex technical problems',
          es: 'Actúo como referencia técnica para el equipo de soporte N1/N2, orientando en análisis de incidentes, desarrollo de razonamiento lógico para troubleshooting y autonomía en resolución de problemas técnicos complejos'
        },
        {
          pt: 'Resolvo incidentes N3 registrados via JIRA, incluindo problemas complexos de infraestrutura, falhas de servidores, questões de rede e integração de sistemas',
          en: 'I resolve N3 incidents registered via JIRA, including complex infrastructure problems, server failures, network issues and system integration',
          es: 'Resuelvo incidentes N3 registrados vía JIRA, incluyendo problemas complejos de infraestructura, fallas de servidores, cuestiones de red e integración de sistemas'
        },
        {
          pt: 'Executo cabeamento estruturado categoria 6, organização de racks, instalação e configuração de servidores físicos, incluindo configuração de RAID e sistemas de storage',
          en: 'I execute category 6 structured cabling, rack organization, physical server installation and configuration, including RAID configuration and storage systems',
          es: 'Ejecuto cableado estructurado categoría 6, organización de racks, instalación y configuración de servidores físicos, incluyendo configuración RAID y sistemas de storage'
        },
        {
          pt: 'Opero e monitoro sistemas de vigilância através do Zabbix para infraestrutura e CFTV Intelbras para segurança física, realizando manutenção preventiva e corretiva',
          en: 'I operate and monitor surveillance systems through Zabbix for infrastructure and Intelbras CCTV for physical security, performing preventive and corrective maintenance',
          es: 'Opero y monitoreo sistemas de vigilancia a través de Zabbix para infraestructura y CCTV Intelbras para seguridad física, realizando mantenimiento preventivo y correctivo'
        },
        {
          pt: 'Gerencio contas de usuários, grupos e políticas de segurança no Active Directory e Google Workspace Admin, incluindo provisionamento e desprovisionamento de acessos',
          en: 'I manage user accounts, groups and security policies in Active Directory and Google Workspace Admin, including access provisioning and deprovisioning',
          es: 'Gestiono cuentas de usuarios, grupos y políticas de seguridad en Active Directory y Google Workspace Admin, incluyendo aprovisionamiento y desaprovisionamiento de accesos'
        },
        {
          pt: 'Presto suporte técnico ao sistema ERP GVDasa, realizo manutenção de servidores Hyper-V e troubleshooting de máquinas virtuais',
          en: 'I provide technical support for GVDasa ERP system, perform Hyper-V server maintenance and virtual machine troubleshooting',
          es: 'Presto soporte técnico al sistema ERP GVDasa, realizo mantenimiento de servidores Hyper-V y troubleshooting de máquinas virtuales'
        },
        {
          pt: 'Realizo manutenção avançada de hardware incluindo reparo de placas-mãe em nível de componentes eletrônicos, diagnóstico com multímetro e substituição de capacitores e circuitos integrados',
          en: 'I perform advanced hardware maintenance including motherboard repair at electronic component level, multimeter diagnostics and capacitor and integrated circuit replacement',
          es: 'Realizo mantenimiento avanzado de hardware incluyendo reparación de placas madre a nivel de componentes electrónicos, diagnóstico con multímetro y sustitución de capacitores y circuitos integrados'
        },
        {
          pt: 'Elaboro laudos técnicos detalhados de equipamentos, documentação de procedimentos operacionais e bases de conhecimento para o time de suporte',
          en: 'I prepare detailed technical reports for equipment, operational procedure documentation and knowledge bases for the support team',
          es: 'Elaboro informes técnicos detallados de equipos, documentación de procedimientos operacionales y bases de conocimiento para el equipo de soporte'
        },
        {
          pt: 'Mantenho sistema de telefonia analógica com PABX e ramais distribuídos, realizando troubleshooting de linhas e configuração de rotas',
          en: 'I maintain analog telephony system with PABX and distributed extensions, performing line troubleshooting and route configuration',
          es: 'Mantengo sistema de telefonía analógica con PABX y extensiones distribuidas, realizando troubleshooting de líneas y configuración de rutas'
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
          pt: 'Orientei tecnicamente a equipe de suporte N1 através de acompanhamento diário, ensinando metodologias de troubleshooting e desenvolvendo autonomia para resolução de problemas',
          en: 'I technically guided the N1 support team through daily follow-up, teaching troubleshooting methodologies and developing autonomy for problem resolution',
          es: 'Orienté técnicamente al equipo de soporte N1 a través de acompañamiento diario, enseñando metodologías de troubleshooting y desarrollando autonomía para resolución de problemas'
        },
        {
          pt: 'Executei manutenção preventiva e corretiva em equipamentos de informática incluindo desktops, notebooks, impressoras e periféricos',
          en: 'I performed preventive and corrective maintenance on computer equipment including desktops, notebooks, printers and peripherals',
          es: 'Ejecuté mantenimiento preventivo y correctivo en equipos de informática incluyendo desktops, notebooks, impresoras y periféricos'
        },
        {
          pt: 'Atendi chamados de Help Desk via sistema de tickets para comunidade acadêmica (alunos, professores e administrativo), resolvendo problemas de hardware, software e acesso a sistemas',
          en: 'I handled Help Desk calls via ticket system for academic community (students, teachers and administrative), solving hardware, software and system access problems',
          es: 'Atendí llamados de Help Desk vía sistema de tickets para comunidad académica (alumnos, profesores y administrativo), resolviendo problemas de hardware, software y acceso a sistemas'
        },
        {
          pt: 'Conduzi análise técnica completa do sistema de CFTV institucional, propondo modernização da infraestrutura de vigilância com equipamentos Intelbras',
          en: 'I conducted complete technical analysis of institutional CCTV system, proposing modernization of surveillance infrastructure with Intelbras equipment',
          es: 'Conduje análisis técnico completo del sistema de CCTV institucional, proponiendo modernización de infraestructura de vigilancia con equipos Intelbras'
        },
        {
          pt: 'Gerenciei inventário de ativos de TI através de controle de entrada/saída de equipamentos e elaboração de solicitações de compras técnicas',
          en: 'I managed IT asset inventory through equipment entry/exit control and preparation of technical purchase requests',
          es: 'Gestioné inventario de activos de TI a través de control de entrada/salida de equipos y elaboración de solicitudes de compras técnicas'
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
          pt: 'Prestei suporte ao sistema ERP TOTVS nos módulos RM (acadêmico) e RM Saúde para usuários finais, incluindo cadastros, parametrizações e resolução de erros',
          en: 'I provided support for TOTVS ERP system in RM (academic) and RM Health modules for end users, including registrations, parameterizations and error resolution',
          es: 'Presté soporte al sistema ERP TOTVS en módulos RM (académico) y RM Salud para usuarios finales, incluyendo registros, parametrizaciones y resolución de errores'
        },
        {
          pt: 'Administrei contas de usuários, grupos e permissões no Active Directory, realizando criação, modificação e desativação de contas conforme políticas de segurança',
          en: 'I managed user accounts, groups and permissions in Active Directory, performing creation, modification and deactivation of accounts according to security policies',
          es: 'Administré cuentas de usuarios, grupos y permisos en Active Directory, realizando creación, modificación y desactivación de cuentas según políticas de seguridad'
        },
        {
          pt: 'Realizei manutenção de servidores Windows Server on-premises e operei sistema de monitoramento Zabbix para acompanhamento de disponibilidade de serviços',
          en: 'I performed maintenance on on-premises Windows Server and operated Zabbix monitoring system for service availability tracking',
          es: 'Realicé mantenimiento de servidores Windows Server on-premises y operé sistema de monitoreo Zabbix para seguimiento de disponibilidad de servicios'
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
          pt: 'Atendi residências e pequenas empresas com serviços técnicos especializados incluindo diagnóstico, reparo e manutenção de equipamentos de informática',
          en: 'I served homes and small businesses with specialized technical services including diagnosis, repair and maintenance of computer equipment',
          es: 'Atendí residencias y pequeñas empresas con servicios técnicos especializados incluyendo diagnóstico, reparación y mantenimiento de equipos de informática'
        },
        {
          pt: 'Realizei diagnóstico avançado e reparo de hardware em desktops, notebooks e impressoras, incluindo substituição de componentes e atualização de peças',
          en: 'I performed advanced diagnostics and hardware repair on desktops, notebooks and printers, including component replacement and parts upgrade',
          es: 'Realicé diagnóstico avanzado y reparación de hardware en desktops, notebooks e impresoras, incluyendo sustitución de componentes y actualización de piezas'
        },
        {
          pt: 'Instalei e configurei sistemas operacionais Windows (7/8/10) e distribuições Linux (Ubuntu, Mint) incluindo drivers, aplicativos e configurações de segurança',
          en: 'I installed and configured Windows operating systems (7/8/10) and Linux distributions (Ubuntu, Mint) including drivers, applications and security settings',
          es: 'Instalé y configuré sistemas operativos Windows (7/8/10) y distribuciones Linux (Ubuntu, Mint) incluyendo drivers, aplicaciones y configuraciones de seguridad'
        },
        {
          pt: 'Executei recuperação de dados de discos rígidos danificados, remoção de malware e vírus, e prestei suporte remoto via TeamViewer e AnyDesk',
          en: 'I performed data recovery from damaged hard drives, malware and virus removal, and provided remote support via TeamViewer and AnyDesk',
          es: 'Ejecuté recuperación de datos de discos duros dañados, eliminación de malware y virus, y presté soporte remoto vía TeamViewer y AnyDesk'
        }
      ] 
    },
    { 
      role: {
        pt: 'Bombeiro Civil - Líder de Equipe',
        en: 'Civil Firefighter - Team Leader',
        es: 'Bombero Civil - Líder de Equipo'
      },
      company: 'Bracell, Grupo Mendes, Santos FC', 
      period: {
        pt: '2018 - 2022',
        en: '2018 - 2022',
        es: '2018 - 2022'
      },
      tasks: [
        {
          pt: 'Coordenei equipes de bombeiros civis em resposta a emergências, incluindo incêndios, resgates e atendimentos pré-hospitalares',
          en: 'I coordinated civil firefighter teams in emergency response, including fires, rescues and pre-hospital care',
          es: 'Coordiné equipos de bomberos civiles en respuesta a emergencias, incluyendo incendios, rescates y atenciones prehospitalarias'
        },
        {
          pt: 'Implementei protocolos de segurança empresarial e conduzi treinamentos de brigada de incêndio para colaboradores',
          en: 'I implemented corporate security protocols and conducted fire brigade training for employees',
          es: 'Implementé protocolos de seguridad empresarial y conduje entrenamientos de brigada de incendio para colaboradores'
        },
        {
          pt: 'Gerenciei situações de crise com tomada de decisão rápida em ambientes de alto risco, priorizando segurança de pessoas e patrimônio',
          en: 'I managed crisis situations with quick decision-making in high-risk environments, prioritizing safety of people and property',
          es: 'Gestioné situaciones de crisis con toma de decisión rápida en ambientes de alto riesgo, priorizando seguridad de personas y patrimonio'
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
      period: {
        pt: 'Concluído',
        en: 'Completed',
        es: 'Concluido'
      }
    }
  ],
  certifications: [
    { name: 'Windows Server', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Windows: Prompt - Utilizando o CMD', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Terminal - Comandos para Executar Tarefas', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Gerenciando Diretórios, Arquivos e Processos', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Redes: Implementando Roteamento, DNS e IPv6', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Redes Wi-Fi: Criando uma Rede Sem Fio Segura', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Fundamentos', institution: 'FIAP', date: 'Jul/2025' },
    { name: 'Redes: Dos Conceitos Iniciais à Criação de Intranet', institution: 'Alura', date: 'Jul/2025' },
    { name: 'Redes: Construindo Projeto com VLANs e Políticas de Acesso', institution: 'Alura', date: 'Jul/2025' },
    { name: 'Gestão de Infraestrutura de TI', institution: 'FIAP', date: 'Mai/2025' },
    { name: 'Microsoft Azure Data Fundamentals (DP-900)', institution: 'Ka Solution', date: 'Abr/2024' },
    { name: 'GKE: Backups Inteligentes na Google Cloud Platform', institution: 'DIO', date: 'Abr/2024' },
    { name: 'Google Cloud Fundamentals: Core Infrastructure', institution: 'Coursera', date: 'Jan/2024' },
    { name: 'Google Cloud Associate Engineer (GCP)', institution: 'Udemy', date: 'Jun/2023' },
    { name: 'AWS Amazon Cloud Computing - Iniciante', institution: 'Udemy', date: 'Mai/2023' },
    { name: 'CC50: Introdução à Ciência da Computação - Harvard', institution: 'Fundação Estudar', date: 'Jan/2023' },
    { name: 'Reparo Avançado em Placas e Circuitos Eletrônicos', institution: 'MasterNet Cursos', date: 'Fev/2021' }
  ]
};
