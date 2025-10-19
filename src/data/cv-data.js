// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: 'Analista de Infraestrutura Pleno | Redes, Sistemas e Suporte N3',
    image: '/jonathan.jpeg',
    summary: 'Profissional de TI com mais de 10 anos de experiência em infraestrutura, suporte técnico avançado (N3) e manutenção de ambientes corporativos. Expertise em execução de cabeamento estruturado, operação de racks e servidores, diagnóstico eletrônico avançado, virtualização, sistemas de monitoramento (CFTV/Zabbix) e resolução de problemas complexos.',
  },
  contact: [
    { type: 'email', icon: Mail, value: 'jonathan.moyano@outlook.com.br', href: 'mailto:jonathan.moyano@outlook.com.br' },
    { type: 'phone', icon: Phone, value: '(13) 97412-4438', href: 'tel:+5513974124438' },
    { type: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathansouzamoyano/', displayValue: 'linkedin.com/in/jonathansouzamoyano' },
    { type: 'github', icon: Github, value: 'GitHub', href: 'https://github.com/JonathanMoyano', displayValue: 'github.com/JonathanMoyano' },
  ],
  skills: {
    principal: [
      'Infraestrutura de Redes e Servidores',
      'Suporte Técnico Avançado (N3)', 
      'Hardware & Eletrônica Avançada', 
      'Diagnóstico e Reparo de Circuitos',
      'Help Desk & ITSM (JIRA)'
    ],
    sistemas: [
      'Windows Server & Desktop', 
      'Linux Ubuntu Server', 
      'Sistemas ERP (TOTVS, GVDasa)',
      'Virtualização (Hyper-V, Oracle VM)'
    ],
    infraestrutura: [
      'Cabeamento Estruturado e Rack',
      'Active Directory & Google Workspace',
      'Redes (VLANs, Roteamento) & Firewall (PFSense)', 
      'Monitoramento (Zabbix, CFTV Intelbras)',
      'Proxy Corporativo (Squid/SquidGuard)',
      'Telefonia Analógica'
    ],
    nuvem: [
      'AWS (EC2, S3, RDS)', 
      'Google Cloud Platform (GCP)', 
      'Microsoft Azure'
    ]
  },
  softSkills: [
    'Perfil analítico para diagnóstico de falhas',
    'Raciocínio lógico e resolução de problemas',
    'Proatividade e iniciativa técnica',
    'Comunicação eficaz com usuários e equipes',
    'Organização e priorização de demandas',
    'Colaboração e melhoria contínua',
    'Atenção aos detalhes técnicos',
    'Adaptabilidade a novas tecnologias',
  ],
  languages: [
    { language: 'Português', level: 'Nativo' },
    { language: 'Inglês', level: 'Intermediário (Leitura Técnica)' },
  ],
  experience: [
    {  
    role: 'Analista de Infraestrutura e Suporte Técnico Pleno', 
    company: 'Colégio Jean Piaget', 
    period: 'Jan/2024 - Presente', 
    tasks: [
      'Operação e manutenção da infraestrutura de TI: redes, servidores, virtualização e segurança',
      'Suporte técnico N3 e resolução de incidentes complexos via ITSM (JIRA)', 
      'Execução de cabeamento estruturado, organização de racks e manutenção de servidores físicos',
      'Operação e monitoramento de sistemas de vigilância (Zabbix, CFTV Intelbras)',
      'Configuração e manutenção de firewall PFSense e proxy corporativo (Squid/SquidGuard no Linux Ubuntu Server) com integração AD',
      'Gerenciamento de contas de usuários no Active Directory e Google Workspace Admin',
      'Suporte ao sistema ERP GVDasa e manutenção do ambiente Hyper-V',
      'Manutenção corretiva avançada de equipamentos eletrônicos e reparo de placas-mãe',
      'Elaboração de laudos técnicos e documentação de procedimentos',
      'Manutenção de telefonia analógica e suporte a infraestrutura de rede'
    ] 
  },
    { 
      role: 'Assistente de Suporte Técnico N1/N2', 
      company: 'Colégio Jean Piaget', 
      period: 'Out/2023 - Jan/2024', 
      tasks: [
        'Manutenção preventiva e corretiva de equipamentos', 
        'Suporte Help Desk para comunidade acadêmica', 
        'Análise e modernização do sistema de CFTV', 
        'Controle de inventário e solicitação de compras de TI'
      ] 
    },
    { 
      role: 'Estágio de Suporte Técnico N1', 
      company: 'Colégio da Polícia Militar - Cruz Azul SP', 
      period: 'Out/2022 - Out/2023', 
      tasks: [
        'Suporte ao Sistema ERP TOTVS (RM e RM Saúde)', 
        'Administração de contas no Active Directory', 
        'Manutenção de servidores locais e sistemas de monitoramento'
      ] 
    },
    { 
      role: 'Consultor de TI', 
      company: 'Prestação de Serviços Autônoma', 
      period: 'Jan/2010 - Out/2023', 
      tasks: [
        'Atendimento técnico especializado a residências e pequenas empresas', 
        'Diagnóstico e reparo de hardware (desktops, notebooks, impressoras)', 
        'Instalação e configuração de sistemas Windows/Linux', 
        'Recuperação de dados, remoção de malware e suporte remoto'
      ] 
    },
    { 
      role: 'Bombeiro Civil (Líder)', 
      company: 'Bracell, Grupo Mendes, Santos FC', 
      period: '2018 - 2022', 
      tasks: [
        'Coordenação de equipes de resposta a emergências', 
        'Implementação de protocolos de segurança', 
        'Operação de crises e tomada de decisão sob pressão'
      ] 
    },
  ],
  education: [
    { degree: 'Análise e Desenvolvimento de Sistemas', institution: 'UNIBR', status: 'Concluído' },
  ],
  courses: [
    // === SISTEMAS OPERACIONAIS ===
    {
      title: "Windows Server",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Sistemas Operacionais",
      link: "https://cursos.alura.com.br/certificate/a0fd3ea2-ba77-486e-8c02-55e67d4ac43b",
      credentialId: "a0fd3ea2-ba77-486e-8c02-55e67d4ac43b",
      description: "Instalação e administração do Windows Server, domínio, DNS, sub-redes, gerenciamento de usuários e permissões."
    },
    {
      title: "Windows: Prompt - Utilizando o CMD",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Sistemas Operacionais",
      link: "https://cursos.alura.com.br/certificate/858009a3-028d-49f0-9ecf-677495f5a4ea",
      credentialId: "858009a3-028d-49f0-9ecf-677495f5a4ea",
      description: "Comandos avançados do prompt do Windows (CMD) para otimização do fluxo de trabalho."
    },
    {
      title: "Linux: Terminal - Comandos para Executar Tarefas",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Sistemas Operacionais",
      link: "https://cursos.alura.com.br/certificate/5ea94275-866f-4045-8f33-d5aeebc0059e",
      credentialId: "5ea94275-866f-4045-8f33-d5aeebc0059e",
      description: "Comandos essenciais do terminal Linux para executar tarefas e otimizar o fluxo de trabalho."
    },
    {
      title: "Linux: Gerenciando Diretórios, Arquivos e Processos",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Sistemas Operacionais",
      link: "https://cursos.alura.com.br/certificate/3adc7947-96e3-43b9-87e7-4fb7fcccbe1c",
      credentialId: "3adc7947-96e3-43b9-87e7-4fb7fcccbe1c",
      description: "Gerenciamento avançado de diretórios, arquivos, permissões de acesso e processos no Linux."
    },
    {                                                                                                                                            
      title: "Linux: Fundamentos",
      institution: "FIAP",
      date: "Jul de 2025",
      category: "Sistemas Operacionais",
      link: "https://on.fiap.com.br/local/nanocourses/validar-certificado",
      credentialId: "76c24889e60c25ace21a3b5f7b4819a8",
      description: "Fundamentos do Linux: comandos básicos, gerenciamento de arquivos, processos, usuários e sistemas de arquivos."
    },

    // === REDES ===
    {
      title: "Redes: Implementando Roteamento, DNS e IPv6",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Redes",
      link: "https://cursos.alura.com.br/certificate/5e759859-8187-453f-9e8a-45293f900588",
      credentialId: "5e759859-8187-453f-9e8a-45293f900588",
      description: "Roteamento interno/externo, DNS, IPv6 e diferenças entre IPv6 e IPv4."
    },
    {
      title: "Redes Wi-Fi: Criando uma Rede Sem Fio Segura",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Redes",
      link: "https://cursos.alura.com.br/certificate/23f03b42-4b62-4578-b08a-ed3a8ae3cdb3",
      credentialId: "23f03b42-4b62-4578-b08a-ed3a8ae3cdb3",
      description: "Configuração e implementação de redes Wi-Fi seguras com foco em segurança."
    },
    {
      title: 'Redes: Dos Conceitos Iniciais à Criação de Intranet',
      institution: 'Alura',
      date: 'Jul de 2025',
      category: 'Redes',
      link: 'https://cursos.alura.com.br/certificate/c946c1d3-80ac-4854-ae33-3c9f719774d2', 
      credentialId: 'c946c1d3-80ac-4854-ae33-3c9f719774d2',
      description: 'Fundamentos de redes, protocolos, endereçamento IP, switches, roteadores e implementação de intranets.'
    },
    {
      title: 'Redes: Construindo Projeto com VLANs e Políticas de Acesso',
      institution: 'Alura',
      date: 'Jul de 2025',
      category: 'Redes',
      link: 'https://cursos.alura.com.br/certificate/d3966b25-9254-49aa-b978-5c1b3cb89424', 
      credentialId: 'd3966b25-9254-49aa-b978-5c1b3cb89424',
      description: 'Arquitetura de redes locais, VLANs, configuração de equipamentos, ACLs e conexão à internet (NAT).'
    },

    // === INFRAESTRUTURA ===
    {
      title: 'Gestão de Infraestrutura de TI',
      institution: 'FIAP',
      date: 'Mai de 2025',
      category: 'Infraestrutura',
      link: 'https://on.fiap.com.br/local/nanocourses/validar-certificado', 
      credentialId: 'd3966b25-9254-49aa-b978-5c1b3cb89424',
      description: 'Governança de TI, gerenciamento de serviços (ITIL), segurança e planejamento de infraestrutura.'
    },
    {
      title: 'IT Service Management: Serviços de TI (ITSM)',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Infraestrutura',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-57bb2a19-6d12-4769-9650-3d3c5b705990.pdf',
      credentialId: 'UC-57bb2a19-6d12-4769-9650-3d3c5b705990',
      description: 'Gerenciamento de serviços de TI baseado nas melhores práticas do framework ITIL.'
    },

    // === CLOUD COMPUTING ===
    {
      title: 'Microsoft Azure Data Fundamentals (DP-900)',
      institution: 'Ka Solution',
      date: 'Abr de 2024',
      category: 'Cloud Computing',
      link: 'https://www.kasolution.com.br/certificado',
      credentialId: '06352-71737',
      description: 'Curso preparatório DP-900: conceitos fundamentais de dados no Microsoft Azure.'
    },
    {
      title: 'GKE: Backups Inteligentes na Google Cloud Platform',
      institution: 'DIO',
      date: 'Abr de 2024',
      category: 'Cloud Computing',
      link: 'https://www.dio.me/certificate/9F6X8V9L',
      credentialId: '9F6X8V9L',
      description: 'Estratégias e ferramentas para backups inteligentes de aplicações no Google Kubernetes Engine.'
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      institution: 'Coursera',
      date: 'Jan de 2024',
      category: 'Cloud Computing',
      link: 'https://coursera.org/verify/62QPF65UCG7N',
      credentialId: '62QPF65UCG7N',
      description: 'Infraestrutura da GCP: Compute Engine, Cloud Storage, VPC, IAM e outros serviços essenciais.'
    },
    {
      title: 'Google Cloud Associate Engineer (GCP)',
      institution: 'Udemy',
      date: 'Jun de 2023',
      category: 'Cloud Computing',
      link: 'https://www.udemy.com/certificate/UC-80a79a81-49a3-408f-bf76-8d95876cd234/',
      credentialId: 'UC-80a79a81-49a3-408f-bf76-8d95876cd234',
      description: 'Curso preparatório completo para o exame GCP Associate Cloud Engineer - todos os domínios.'
    },
    {
      title: 'AWS Amazon Cloud Computing - Iniciante',
      institution: 'Udemy',
      date: 'Mai de 2023',
      category: 'Cloud Computing',
      link: 'https://www.udemy.com/certificate/UC-01edbfeb-7c04-4506-bcd0-013fa2c4b8ef/',
      credentialId: 'UC-01edbfeb-7c04-4506-bcd0-013fa2c4b8ef',
      description: 'Introdução à AWS: EC2, S3, RDS e fundamentos de arquitetura na nuvem.'
    },

    // === DESENVOLVIMENTO ===
    {
      title: 'Introdução ao Desenvolvimento Moderno de Software',
      institution: 'DIO',
      date: 'Jun de 2024',
      category: 'Desenvolvimento',
      link: 'https://www.dio.me/certificate/INTRO-DEV-2024',
      credentialId: 'INTRO-DEV-2024',
      description: 'Ciclos de vida de software, metodologias ágeis e ferramentas de desenvolvimento modernas.'
    },
    {
      title: 'Banco de Dados SQL do Zero ao Avançado',
      institution: 'Udemy',
      date: 'Jul de 2023',
      category: 'Desenvolvimento',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-67b75454-9a0d-4396-b9cc-ea5daf4e194f.pdf',
      credentialId: 'UC-67b75454-9a0d-4396-b9cc-ea5daf4e194f',
      description: 'SQL completo: desde consultas básicas até modelagem e otimização avançada de banco de dados.'
    },
    {
      title: 'Programação Python do Zero ao Avançado',
      institution: 'Udemy',
      date: 'Jul de 2023',
      category: 'Desenvolvimento',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0b2a2c15-17e1-4ca6-b35c-61280139c1b2.jpg',
      credentialId: 'UC-0b2a2c15-17e1-4ca6-b35c-61280139c1b2',
      description: 'Python completo: sintaxe básica, estruturas de dados, POO e principais bibliotecas.'
    },
    {
      title: 'Banco de Dados Oracle SQL',
      institution: 'Udemy',
      date: 'Jun de 2023',
      category: 'Desenvolvimento',
      link: 'https://www.udemy.com/certificate/UC-18124ac0-3ff8-4717-b29d-1866da745d6e/',
      credentialId: 'UC-18124ac0-3ff8-4717-b29d-1866da745d6e',
      description: 'SQL para Oracle Database com foco em recursos avançados e específicos da plataforma.'
    },
    {
      title: 'CC50: Introdução à Ciência da Computação - Harvard',
      institution: 'Fundação Estudar',
      date: 'Jan de 2023',
      category: 'Desenvolvimento',
      link: 'https://certificados.estudar.org.br/verify/cc50',
      credentialId: 'CC50-2023-HARVARD',
      description: 'Versão brasileira do CS50 de Harvard: pilares da ciência da computação, de C a Python.'
    },
    {
      title: 'Algoritmos e Lógica de Programação',
      institution: 'Udemy',
      date: 'Set de 2022',
      category: 'Desenvolvimento',
      link: 'https://www.udemy.com/certificate/UC-3f49dd51-4a52-4a10-9274-08be6e811528/',
      credentialId: 'UC-3f49dd51-4a52-4a10-9274-08be6e811528',
      description: 'Fundamentos sólidos em lógica de programação e algoritmos essenciais.'
    },

    // === DADOS & IA ===
    {
      title: 'ChatGPT para Python',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Dados & IA',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6e403c81-1e3e-48bd-bd68-dd93ee21a808.pdf',
      credentialId: 'UC-6e403c81-1e3e-48bd-bd68-dd93ee21a808',
      description: 'Desenvolvimento de aplicações Python integradas com API do ChatGPT para automação.'
    },
    {
      title: 'Introdução à Ciência de Dados 3.0',
      institution: 'Data Science Academy',
      date: 'Jun de 2023',
      category: 'Dados & IA',
      link: 'https://mycourse.app/ZLyNnxzzSXuqBShE7',
      credentialId: '64959a5d8b4880becf06818c',
      description: 'Fundamentos de Data Science, Big Data e análise de dados com Python e R.'
    },

    // === HARDWARE ===
    {
      title: 'Reparo Avançado em Placas e Circuitos Eletrônicos',
      institution: 'MasterNet Cursos',
      date: 'Fev de 2021',
      category: 'Hardware',
      link: 'https://masternet.com.br/certificados',
      credentialId: 'MN-2021-REPAIR-ADV',
      description: 'Técnicas avançadas de diagnóstico e reparo de componentes eletrônicos em placas-mãe.'
    },
  ]
};
