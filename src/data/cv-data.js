// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: 'Analista de Suporte N2 | Infraestrutura',
    image: '/jonathan.jpeg',
    summary: 'Profissional de TI com mais de 10 anos de experiência em suporte técnico, manutenção de hardware e configuração de sistemas. Atuação sólida em diagnóstico de problemas, reparo eletrônico e atendimento a usuários.',
  },
  contact: [
    { type: 'email', icon: Mail, value: 'contato@jonathanmoyano.com.br', href: 'mailto:contato@jonathanmoyano.com.br' },
    { type: 'phone', icon: Phone, value: '(13) 97412-4438', href: 'tel:+5513974124438' },
    { type: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathansouzamoyano/', displayValue: 'linkedin.com/in/jonathansouzamoyano' },
    { type: 'github', icon: Github, value: 'GitHub', href: 'https://github.com/JonathanMoyano', displayValue: 'github.com/JonathanMoyano' },
  ],
  skills: {
    principal: ['Suporte Técnico N1/N2', 'Help Desk', 'Hardware & Reparo Eletrônico'],
    sistemas: ['Windows Server & Desktop', 'Linux Básico', 'Sistemas ERP (TOTVS, GVDasa)'],
    infraestrutura: ['Active Directory', 'Virtualização (Hyper-V)', 'Redes & Firewall (PFSense)', 'Monitoramento (Zabbix)', 'Google Workspace Admin'],
    nuvem: ['Cloud Computing (AWS, GCP, Azure)']
  },
  softSkills: [
    'Proatividade na identificação e resolução de problemas',
    'Boa comunicação para interação com usuários e equipes técnicas', 
    'Capacidade de organização e priorização de demandas',
    'Postura colaborativa e orientada a melhoria contínua'
  ],
  experience: [
    { role: 'Analista de Suporte Técnico N2 & Infraestrutura', company: 'Colégio Jean Piaget', period: 'Jan/2024 - Presente', tasks: ['Suporte técnico N2 e resolução de chamados complexos', 'Manutenção da infraestrutura de rede, servidores e equipamentos de rack', 'Elaboração de laudos técnicos e documentação de sistemas','Cadastro e gerenciamento de usuários no Active Directory, Google Admin, ClassApp, Matific e ERP','Monitoramento do sistema Zabbix e encaminhamento de alertas aos responsáveis','Suporte ao sistema ERP GVDasa','Passagem e organização de cabeamento de rede','Manutenção corretiva de equipamentos eletrônicos','Atendimento Help Desk para toda a comunidade acadêmica','Organização e controle do inventário de equipamentos de TI','Solicitação e acompanhamento de compras de equipamentos','Manutenção do ambiente Hyper-V','Configuração básica do PFSense'] },
    { role: 'Assistente de Suporte Técnico N1', company: 'Colégio Jean Piaget', period: 'Out/2023 - Jan/2024', tasks: ['Manutenção preventiva e corretiva de computadores, Chromebooks e notebooks', 'Suporte em Help Desk para toda a comunidade acadêmica', 'Análise e modernização do sistema de CFTV', 'Entregas de Chromebooks', 'Controle de saída e entrada de materiais', 'Organização dos equipamentos de TI', 'Solicitação de compras e reposição de equipamentos de TI'] },
    { role: 'Estágio de Suporte Técnico', company: 'Colégio da Polícia Militar - Cruz Azul SP', period: 'Out/2022 - Out/2023', tasks: ['Suporte ao Sistema ERP TOTVS (RM e RM Saúde)', 'Administração de contas e permissões no Active Directory', 'Manutenção preventiva no servidor local e sistemas de monitoramento'] },
    { role: 'Consultor de TI', company: 'Prestação de Serviços Autônoma', period: 'Jan/2010 - Out/2023', tasks: ['Atendimento técnico a residências e pequenas empresas da região', 'Diagnóstico e reparo de hardware (desktops, notebooks, impressoras)', 'Instalação e configuração de sistemas operacionais Windows/Linux', 'Recuperação de dados e remoção de malware', 'Configuração de redes domésticas e roteadores', 'Suporte remoto via TeamViewer e manutenção preventiva', 'Upgrade de componentes e consultoria em aquisições de TI'] },
    { role: 'Bombeiro Civil (Líder)', company: 'Bracell, Grupo Mendes, Santos FC, etc.', period: 'Aprox. 4 anos (2018 - 2022)', tasks: ['Coordenação de equipes de resposta a emergências', 'Implementação de protocolos de segurança', 'Operação de crises e tomada de decisão sob pressão'] },
  ],
  education: [
    { degree: 'Análise e Desenvolvimento de Sistemas', institution: 'UNIBR', status: 'Concluído' },
  ],
  courses: [
    {
      title: "Windows Prompt: Utilizando o CMD",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Linux",
      link: "https://cursos.alura.com.br/certificate/858009a3-028d-49f0-9ecf-677495f5a4ea",
      credentialId: "858009a3-028d-49f0-9ecf-677495f5a4ea",
      description: "Curso focado no aprendizado de comandos do prompt do Windows (CMD) para executar tarefas e otimizar o fluxo de trabalho no dia a dia."
    },
    {
    title: "Terminal: Aprenda comandos para executar tarefas",
    institution: "Alura",
    date: "Ago de 2025",
    category: "Linux",
    link: "https://cursos.alura.com.br/certificate/5ea94275-866f-4045-8f33-d5aeebc0059e",
    credentialId: "5ea94275-866f-4045-8f33-d5aeebc0059e",
    description: "Curso focado no aprendizado de comandos do terminal para executar tarefas e otimizar o fluxo de trabalho no dia a dia."
    },
    {
      title: "Linux: Gerenciando diretórios, arquivos, permissões e processos",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Linux",
      link: "https://cursos.alura.com.br/certificate/3adc7947-96e3-43b9-87e7-4fb7fcccbe1c",
      credentialId: "3adc7947-96e3-43b9-87e7-4fb7fcccbe1c",
      description: "Curso focado no gerenciamento de diretórios, arquivos, permissões de acesso e processos dentro do sistema operacional Linux."
    },
    {                                                                                                                                            
      title: "Linux Fundamentos",
      institution: "FIAP - Centro Universitário",
      date: "Jul de 2025",
      category: "Linux",
      link: "https://on.fiap.com.br/local/nanocourses/validar-certificado",
      credentialId: "76c24889e60c25ace21a3b5f7b4819a8",
      description: "Curso abordando os fundamentos do sistema operacional Linux, incluindo comandos básicos, gerenciamento de arquivos e diretórios, processos, usuários e sistemas de arquivos."
    },
    {
      title: "Redes: implementando roteamento, DNS e IPv6",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Redes",
      link: "https://cursos.alura.com.br/certificate/5e759859-8187-453f-9e8a-45293f900588",
      credentialId: "5e759859-8187-453f-9e8a-45293f900588",
      description: "Curso abordando os tópicos de redes, incluindo roteamento interno e externo, sistemas de nomes de domínio (DNS), a nova versão do protocolo IP (IPv6) e as diferenças entre IPv6 e IPv4."
    },
    {
      title: "Redes Wi-Fi: Criando uma Rede Sem Fio de Modo Seguro",
      institution: "Alura",
      date: "Ago de 2025",
      category: "Redes",
      link: "https://cursos.alura.com.br/certificate/23f03b42-4b62-4578-b08a-ed3a8ae3cdb3",
      credentialId: "23f03b42-4b62-4578-b08a-ed3a8ae3cdb3",
      description: "Curso que aborda os conceitos para a criação e configuração de uma rede sem fio (Wi-Fi), com foco em estabelecer uma conexão de modo seguro."
    },
    {
      title: 'Redes: dos conceitos iniciais à criação de uma intranet',
      institution: 'Alura',
      date: 'Jul de 2025',
      category: 'Redes',
      link: 'https://cursos.alura.com.br/formalCertificate/c946c1d3-80ac-4854-ae33-3c9f719774d2', 
      credentialId: 'c946c1d3-80ac-4854-ae33-3c9f719774d2',
      description: 'Fundamentos de redes (protocolos e camadas), endereçamento IP, configuração de switches e roteadores, monitoramento de tráfego e implementação de intranets.'
    },
    {
      title: 'Redes: Construindo um projeto com Vlans, políticas de acesso e conexão com internet',
      institution: 'Alura',
      date: 'Jul de 2025',
      category: 'Redes',
      link: 'https://cursos.alura.com.br/formalCertificate/d3966b25-9254-49aa-b978-5c1b3cb89424', 
      credentialId: '05e817d7c6d9fa2bbd466d6842551511',
      description: 'Arquitetura de redes locais, implementação de VLANs, configuração de roteadores e switches, políticas de acesso (ACLs) e conexão à internet (NAT).'
    },
    {
      title: 'Gestão de Infraestrutura de TI',
      institution: 'FIAP - Centro Universitário',
      date: 'Mai de 2025',
      category: 'Infraestrutura',
      link: 'https://on.fiap.com.br/validar-certificado/', 
      credentialId: 'd3966b25-9254-49aa-b978-5c1b3cb89424',
      description: 'Governança de TI, gerenciamento de serviços (ITIL), segurança e planejamento de infraestrutura.'
    },
    {
      title: 'GKE: Backups Inteligente na Google Cloud Platform',
      institution: 'DIO',
      date: 'Abr de 2024',
      category: 'Cloud',
      link: '#',
      credentialId: '9F6X8V9L',
      description: 'Curso focado em estratégias e ferramentas para a realização de backups inteligentes de aplicações no Google Kubernetes Engine (GKE).'
    },
    {
      title: 'Microsoft Azure Data Fundamentals (DP-900)',
      institution: 'Ka Solution',
      date: 'Abr de 2024',
      category: 'Cloud',
      link: 'https://www.kasolution.com.br/certificado',
      credentialId: '06352-71737',
      description: 'Preparatório para a certificação DP-900, cobrindo os conceitos fundamentais de dados no Microsoft Azure.'
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      institution: 'Coursera',
      date: 'Jan de 2024',
      category: 'Cloud',
      link: 'https://coursera.org/verify/62QPF65UCG7N',
      credentialId: '62QPF65UCG7N',
      description: 'Treinamento oficial do Google sobre a infraestrutura da GCP, incluindo Compute Engine, Cloud Storage, VPC e IAM.'
    },
    {
      title: 'Google Cloud Associate Engineer (GCP)',
      institution: 'Udemy',
      date: 'Jun de 2023',
      category: 'Cloud',
      link: 'https://www.udemy.com/certificate/UC-80a79a81-49a3-408f-bf76-8d95876cd234/',
      credentialId: 'UC-80a79a81-49a3-408f-bf76-8d95876cd234',
      description: 'Curso preparatório abrangente para a certificação GCP Associate Cloud Engineer, cobrindo todos os domínios do exame.'
    },
    {
      title: 'AWS Amazon Cloud Computing - Iniciante',
      institution: 'Udemy',
      date: 'Mai de 2023',
      category: 'Cloud',
      link: 'https://www.udemy.com/certificate/UC-01edbfeb-7c04-4506-bcd0-013fa2c4b8ef/',
      credentialId: 'UC-01edbfeb-7c04-4506-bcd0-013fa2c4b8ef',
      description: 'Introdução à plataforma AWS, seus principais serviços (EC2, S3, RDS) e fundamentos de arquitetura na nuvem.'
    },
    {
      title: 'IT Service Management: Serviços de TI (ITSM/GSTI)',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Infraestrutura',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-57bb2a19-6d12-4769-9650-3d3c5b705990.pdf',
      credentialId: 'UC-57bb2a19-6d12-4769-9650-3d3c5b705990',
      description: 'Fundamentos do gerenciamento de serviços de TI, baseado nas melhores práticas do framework ITIL.'
    },
    {
      title: 'Banco de Dados SQL do Zero ao Avançado',
      institution: 'Udemy',
      date: 'Jul de 2023',
      category: 'Desenvolvimento',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-67b75454-9a0d-4396-b9cc-ea5daf4e194f.pdf',
      credentialId: 'UC-67b75454-9a0d-4396-b9cc-ea5daf4e194f',
      description: 'Formação completa em SQL, desde consultas básicas até tópicos avançados de modelagem e otimização de banco de dados.'
    },
    {
      title: 'Banco de dados Oracle SQL',
      institution: 'Udemy',
      date: 'Jun de 2023',
      category: 'Desenvolvimento',
      link: 'https://www.udemy.com/certificate/UC-18124ac0-3ff8-4717-b29d-1866da745d6e/',
      credentialId: 'UC-18124ac0-3ff8-4717-b29d-1866da745d6e',
      description: 'Aprofundamento na linguagem SQL específica para Oracle Database, com foco em recursos avançados.'
    },
    {
      title: 'CC50: Introdução à Ciência da Computação - Harvard',
      institution: 'Fundação Estudar',
      date: 'Jan de 2023',
      category: 'Desenvolvimento',
      link: '',
      credentialId: null,
      description: 'Versão brasileira do renomado curso de Harvard (CS50), cobrindo os pilares da ciência da computação, de C a Python.'
    },
    {
      title: 'Algoritmos e Lógica de Programação',
      institution: 'Udemy',
      date: 'Set de 2022',
      category: 'Desenvolvimento',
      link: 'https://www.udemy.com/certificate/UC-3f49dd51-4a52-4a10-9274-08be6e811528/',
      credentialId: 'UC-3f49dd51-4a52-4a10-9274-08be6e811528',
      description: 'Base sólida em lógica de programação e algoritmos, essencial para o desenvolvimento de qualquer software.'
    },
    {
      title: 'Programação Python do Zero ao Avançado',
      institution: 'Udemy',
      date: 'Jul de 2023',
      category: 'Desenvolvimento',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0b2a2c15-17e1-4ca6-b35c-61280139c1b2.jpg',
      credentialId: 'UC-00b2a2c15-17e1-4ca6-b35c-61280139c1b2',
      description: 'Formação completa em Python, desde a sintaxe básica até estruturas de dados, orientação a objetos e principais bibliotecas.'
    },
    {
      title: 'Introdução ao Desenvolvimento Moderno de Software',
      institution: 'DIO',
      date: 'Jun de 2024',
      category: 'Desenvolvimento',
      link: '#',
      credentialId: null,
      description: 'Fundamentos sobre ciclos de vida de software, metodologias ágeis e ferramentas de desenvolvimento modernas.'
    },
    {
      title: 'Introdução à Ciência de Dados 3.0',
      institution: 'Data Science Academy',
      date: 'Jun de 2023',
      category: 'Dados & IA',
      link: 'https://mycourse.app/ZLyNnxzzSXuqBShE7',
      credentialId: '64959a5d8b4880becf06818c',
      description: 'Fundamentos de Data Science, Big Data, e os primeiros passos na análise de dados com Python e R.'
    },
    {
      title: 'ChatGPT para Python',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Dados & IA',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6e403c81-1e3e-48bd-bd68-dd93ee21a808.pdf',
      credentialId: 'UC-6c403c81-1e3e-48bd-bd68-dd93ee21a808',
      description: 'Desenvolvimento de aplicações e scripts Python integrados com a API do ChatGPT para automação e geração de conteúdo.'
    },
    {
      title: 'Reparo Avançado em Placas e Circuito Eletrônico',
      institution: 'MasterNet Cursos',
      date: 'Fev de 2021',
      category: 'Hardware',
      link: '',
      credentialId: null,
      description: 'Técnicas avançadas de diagnóstico e reparo de componentes eletrônicos em placas-mãe e outros circuitos.'
    },
  ]
};
