// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: 'Analista de Infraestrutura | Especialista em Suporte N2',
    image: '/jonathan.jpeg',
    summary: 'Profissional de TI com mais de 10 anos de experiência, combinando sólida base técnica com formação superior. Minha trajetória única, incluindo 4 anos de liderança como bombeiro civil, forjou uma capacidade ímpar de resolver problemas complexos e gerenciar crises com precisão e calma.',
  },
  contact: [
    { type: 'email', icon: Mail, value: 'contato@jonathanmoyano.com.br', href: 'mailto:contato@jonathanmoyano.com.br' },
    { type: 'phone', icon: Phone, value: '(13) 97412-4438', href: 'tel:+5513974124438' },
    { type: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathansouzamoyano/', displayValue: 'linkedin.com/in/jonathansouzamoyano' },
    { type: 'github', icon: Github, value: 'GitHub', href: 'https://github.com/JonathanMoyano', displayValue: 'github.com/JonathanMoyano' },
  ],
  skills: [
    { name: 'Infraestrutura de Redes & Servidores', level: 70 },
    { name: 'Suporte Técnico N1/N2 & Help Desk', level: 90 },
    { name: 'DevOps & Cloud Computing', level: 35 },
    { name: 'Hardware & Reparo Eletrônico', level: 98 },
    { name: 'Sistemas ERP (TOTVS, GVDasa)', level: 75 },
    { name: 'Segurança da Informação', level: 50 },
  ],
  experience: [
    { role: 'Analista de Infraestrutura & Suporte de TI N2', company: 'Colégio Jean Piaget', period: 'Jan/2024 - Presente', tasks: ['Suporte técnico especializado (N2) e apoio a usuários.', 'Manutenção da infraestrutura de rede, servidores e equipamentos de rack.', 'Elaboração de laudos técnicos e documentação de sistemas.','Realizar cadastro e gerenciamento de usuários no Active Directory, Google Admin, ClassApp, Matific e ERP.','Monitorar o sistema Zabbix, direcionando alertas aos responsáveis.','Suporte ao sistema ERP GVDasa.','Troca e passagem de cabeamento de rede.','Manutenção corretiva de qualquer equipamento eletronico que apresentar problemas.','Suporte em Help Desk para toda a comunidade acadêmica.','Organização dos equipamentos de TI.','Solicitação de compras para reposição de equipamentos de TI.','Instalação e manutenção do Hyper-V.',' Configuração do PFSense e configuração do Proxy Transparente com Squid e Squid Guard.'] },
    { role: 'Assistente de Suporte de TI', company: 'Colégio Jean Piaget', period: 'Out/2023 - Jan/2024', tasks: ['Manutenção preventiva e corretiva de computadores, Chromebooks e notebooks.', 'Suporte em Help Desk para toda a comunidade acadêmica.', 'Análise e modernização do sistema de CFTV.', 'Entregas de Chromebooks', 'Controle de saida e entrada de materiais', 'Organização dos equipamentos de TI', 'Solicitação de compras e reposição de equipamentos de TI'] },
    { role: 'Estágio de Suporte de TI', company: 'Colégio da Polícia Militar - Cruz Azul SP', period: 'Out/2022 - Out/2023', tasks: ['Suporte ao Sistema ERP TOTVS (RM e RM Saúde).', 'Gerenciamento de contas e permissões no Active Directory.', 'Manutenção preventiva no servidor local e sistemas de monitoramento.'] },
    { role: 'Técnico de Informática', company: 'Autonomo', period: 'Jan/2010 - Out/2023', tasks: ['Diagnóstico e reparo avançado em placas eletrônicas.', 'Instalação e configuração de sistemas operacionais e software.', 'Recuperação de dados e remoção de vírus.','Instalaçao e configurações de impressoras.', 'Configuração e manutenção em Redes e Roteadores.','Suporte via TeamViewer aos clientes.','Upgrade em desktop e Notebooks.'] },
    { role: 'Bombeiro Civil (Líder)', company: 'Bracell, Grupo Mendes, Santos FC, etc.', period: 'Aprox. 4 anos (2018 - 2022)', tasks: ['Liderança e coordenação de equipes de resposta a emergências.', 'Implementação de protocolos de segurança.', 'Desenvolvimento de habilidades em gestão de crises e tomada de decisão sob pressão.'] },
  ],
  education: [
    //{ degree: 'Pós-Graduação em Arquitetura e Gestão de Infraestrutura em TI', institution: 'Anhanguera', status: 'Concluido' },
    //{ degree: 'Pós-Graduação em Cloud Computing', institution: 'Anhanguera', status: 'Concluido' },
    //{ degree: 'Pós-Graduação em DevOps & Arquitetura Cloud', institution: 'FIAP', status: 'Cursando' },
    { degree: 'Análise e Desenvolvimento de Sistemas', institution: 'UNIBR', status: 'Concluído' },
  ],
courses: [
{
  "title": "Linux: Gerenciando diretórios, arquivos, permissões e processos",
  "institution": "Alura",
  "date": "Ago de 2025",
  "category": "Linux",
  "link": "https://cursos.alura.com.br/certificate/jonathan-moyano-48e0-438d-83b7-e16016c6defa",
  "credentialId": "jonathan-moyano-48e0-438d-83b7-e16016c6defa",
  "description": "Curso focado no gerenciamento de diretórios, arquivos, permissões de acesso e processos dentro do sistema operacional Linux."
}
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
  title: "Linux Fundamentos",
  institution: "FIAP - Centro Universitário",
  date: "Jul de 2025",
  category: "Sistemas Operacionais",
  link: "https://on.fiap.com.br/local/nanocourses/validar-certificado",
  credentialId: "76c24889e60c25ace21a3b5f7b4819a8",
  description: "Curso abordando os fundamentos do sistema operacional Linux, incluindo comandos básicos, gerenciamento de arquivos e diretórios, processos, usuários e sistemas de arquivos."
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
      title: 'Redes: Construindo um projeto com Vlans, politicas de acesso e conexão com internet',
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
      description: 'Governança de TI, gerenciamento de serviços (ITIL), segurança e planejamento estratégico de infraestrutura.'
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
      title: 'ChatGPT para Python',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Dados & IA',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6e403c81-1e3e-48bd-bd68-dd93ee21a808.pdf',
      credentialId: 'UC-6c403c81-1e3e-48bd-bd68-dd93ee21a808',
      description: 'Desenvolvimento de aplicações e scripts Python integrados com a API do ChatGPT para automação e geração de conteúdo.'
    },
    {
      title: 'IT Service Managent: Gestão de serviços de TI (ITSM/GSTI)',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Infraestrutura',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-57bb2a19-6d12-4769-9650-3d3c5b705990.pdf',
      credentialId: 'UC-57bb2a19-6d12-4769-9650-3d3c5b705990',
      description: 'Fundamentos do gerenciamento de serviços de TI, baseado nas melhores práticas do framework ITIL.'
    },
    {
      title: 'Microsoft Office Excel - Avançado',
      institution: 'Udemy',
      date: 'Ago de 2023',
      category: 'Software',
      link: 'https://www.udemy.com/certificate/UC-273c6319-d2f8-40e2-bccc-f2ff84e01c86/',
      credentialId: 'UC-273c6319-d2f8-40e2-bccc-f2ff84e01c86',
      description: 'Domínio de funções avançadas, tabelas dinâmicas, macros e análise de dados com Microsoft Excel.'
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
      title: 'Programação Python do Zero ao Avançado',
      institution: 'Udemy',
      date: 'Jul de 2023',
      category: 'Desenvolvimento',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0b2a2c15-17e1-4ca6-b35c-61280139c1b2.jpg',
      credentialId: 'UC-00b2a2c15-17e1-4ca6-b35c-61280139c1b2',
      description: 'Formação completa em Python, desde a sintaxe básica até estruturas de dados, orientação a objetos e principais bibliotecas.'
    },
    {
      title: 'Banco de dados Oracle SQL - Especialista',
      institution: 'Udemy',
      date: 'Jun de 2023',
      category: 'Desenvolvimento',
      link: 'https://www.udemy.com/certificate/UC-18124ac0-3ff8-4717-b29d-1866da745d6e/',
      credentialId: 'UC-18124ac0-3ff8-4717-b29d-1666da745d6e',
      description: 'Aprofundamento na linguagem SQL específica para Oracle Database, com foco em recursos de especialista.'
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
      title: 'Introdução à Ciência de Dados 3.0',
      institution: 'Data Science Academy',
      date: 'Jun de 2023',
      category: 'Dados & IA',
      link: 'https://mycourse.app/ZLyNnxzzSXuqBShE7',
      credentialId: '64959a5d8b4880becf06818c',
      description: 'Fundamentos de Data Science, Big Data, e os primeiros passos na análise de dados com Python e R.'
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
