// src/data/cv-data.js
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const cvData = {
  profile: {
    name: 'Jonathan Souza Moyano',
    title: {
      pt: 'Analista de Suporte Técnico N2/N3 | Infraestrutura de TI',
      en: 'Technical Support Analyst N2/N3 | IT Infrastructure',
      es: 'Analista de Soporte Técnico N2/N3 | Infraestructura de TI'
    },
    image: '/jonathan.jpeg',
    address: 'Av. Nove de Julho, 610 - Vila Cascatinha, São Vicente, SP',
    
    objective: {
      pt: 'Analista de Suporte Técnico N2/N3',
      en: 'N2/N3 Technical Support Analyst.',
      es: 'Analista de Soporte Técnico N2/N3.'
    },
    
    summary: {
      pt: 'Analista de suporte Técnico N2/N3 com sólida trajetória em ambientes de infraestrutura. Experiência técnica em suporte a servidores Windows Server e Linux, redes corporativas, Active Directory e virtualização com Hyper-V. Possuo conhecimento prático em implementação de firewall PFSense e proxy Squid integrado ao Active Directory. Especialista em cabeamento estruturado, diagnóstico avançado de hardware e reparo de componentes eletrônicos. Foco na resolução técnica de incidentes complexos e manutenção da disponibilidade de serviços de TI.',
      en: 'Technical Support Analyst N2/N3 with a solid background in infrastructure environments. Technical experience in supporting Windows Server and Linux servers, corporate networks, Active Directory, and Hyper-V virtualization. Practical knowledge in implementing PFSense firewall and Squid proxy integrated with Active Directory. Specialist in structured cabling and hardware diagnostics.',
      es: 'Analista de soporte Técnico N2/N3 con sólida trayectoria en entornos de infraestructura. Experiencia técnica en soporte a servidores Windows Server y Linux, redes corporativas, Active Directory y virtualización con Hyper-V.'
    }
  },
  contact: [
    { type: 'email', icon: Mail, value: 'jonathan.moyano@outlook.com.br', href: 'mailto:jonathan.moyano@outlook.com.br' },
    { type: 'phone', icon: Phone, value: '(13) 97412-4438', href: 'tel:+5513974124438' },
    { type: 'phone', icon: Phone, value: '(13) 97412-8143', href: 'tel:+5513974128143' },
    { type: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathansouzamoyano/', displayValue: 'linkedin.com/in/jonathansouzamoyano' },
    { type: 'github', icon: Github, value: 'GitHub', href: 'https://github.com/JonathanMoyano', displayValue: 'github.com/JonathanMoyano' },
  ],
  skills: {
    principal: [
      { pt: 'Suporte Técnico Avançado (N3)', en: 'Advanced Technical Support (N3)', es: 'Soporte Técnico Avanzado (N3)' },
      { pt: 'Infraestrutura de Redes e Servidores', en: 'Network and Server Infrastructure', es: 'Infraestructura de Redes y Servidores' },
      { pt: 'Operação de Windows Server e Linux', en: 'Windows Server and Linux Operation', es: 'Operación Windows Server y Linux' },
      { pt: 'Segurança de Redes (Firewall e Proxy)', en: 'Network Security (Firewall and Proxy)', es: 'Seguridad de Redes' },
      { pt: 'Virtualização (Hyper-V)', en: 'Virtualization (Hyper-V)', es: 'Virtualización (Hyper-V)' },
      { pt: 'Hardware e Eletrônica Avançada', en: 'Hardware and Advanced Electronics', es: 'Hardware y Electrónica Avanzada' }
    ],
    sistemas: [
      { pt: 'Windows Server (2012 a 2022)', en: 'Windows Server (2012 to 2022)', es: 'Windows Server (2012 a 2022)' },
      { pt: 'Linux Server (Ubuntu, Mint)', en: 'Linux Server (Ubuntu, Mint)', es: 'Linux Server (Ubuntu, Mint)' },
      { pt: 'Sistemas ERP (GVDasa, TOTVS RM)', en: 'ERP Systems (GVDasa, TOTVS RM)', es: 'Sistemas ERP' }
    ],
    infraestrutura: [
      { pt: 'Equipamentos Unifi (AP, Switches, Roteadores)', en: 'Unifi Equipment', es: 'Equipos Unifi' },
      { pt: 'VLANs e Cabeamento Estruturado Cat6', en: 'VLANs and Cat6 Structured Cabling', es: 'VLANs y Cableado' },
      { pt: 'Monitoramento (Zabbix)', en: 'Monitoring (Zabbix)', es: 'Monitoreo (Zabbix)' },
      { pt: 'CFTV (Intelbras) e Telefonia PABX', en: 'CCTV and PABX Telephony', es: 'CCTV y Telefonía PABX' }
    ]
  },
  softSkills: [
    { pt: 'Resolução de incidentes complexos', en: 'Complex incident resolution', es: 'Resolución de incidentes complejos' },
    { pt: 'Execução técnica assertiva', en: 'Assertive technical execution', es: 'Ejecución técnica asertiva' },
    { pt: 'Visão analítica para troubleshooting', en: 'Analytical vision for troubleshooting', es: 'Visión analítica' },
    { pt: 'Organização e gestão de tickets (JIRA)', en: 'Organization and ticket management', es: 'Gestión de tickets' },
    { pt: 'Aprendizado contínuo', en: 'Continuous learning', es: 'Aprendizaje continuo' }
  ],
  experience: [
    {  
      role: { pt: 'Analista de Infraestrutura e Suporte Técnico N2/N3', en: 'Infrastructure and N2/N3 Technical Support Analyst', es: 'Analista de Infraestructura y Soporte N2/N3' },
      company: 'Colégio Jean Piaget',
      period: { pt: 'Jan/2024 - Presente', en: 'Jan/2024 - Present', es: 'Ene/2024 - Presente' },
      tasks: [
        { pt: 'Suporte técnico na operação de infraestrutura de TI, incluindo servidores Windows/Linux e ambientes virtualizados em Hyper-V.', en: 'Technical support in IT infrastructure operation, including Windows/Linux servers and Hyper-V environments', es: 'Soporte técnico en infraestructura' },
        { pt: 'Execução técnica de configurações em redes VLAN utilizando equipamentos Unifi, firewall PFSense e proxy Squid.', en: 'Technical execution of VLAN configurations using Unifi equipment, PFSense firewall, and Squid proxy', es: 'Ejecución técnica de redes' },
        { pt: 'Resolução de chamados técnicos de nível 3 (N3) via JIRA, tratando falhas de conectividade, servidores e integração de sistemas.', en: 'Resolution of level 3 (N3) technical tickets via JIRA, addressing connectivity and server failures', es: 'Resolución de tickets N3' },
        { pt: 'Manutenção física de infraestrutura: execução de cabeamento Cat6, organização de racks e instalação de hardware de servidores.', en: 'Physical infrastructure maintenance: Cat6 cabling, rack organization, and server hardware installation', es: 'Mantenimiento físico de infraestructura' },
        { pt: 'Operação de sistemas de monitoramento Zabbix e suporte técnico aos sistemas de CFTV Intelbras e telefonia PABX.', en: 'Operation of Zabbix monitoring systems and technical support for CCTV and PABX', es: 'Operación de monitoreo e suporte' },
        { pt: 'Provisionamento de contas de usuários e grupos no Active Directory e Google Workspace conforme solicitações recebidas.', en: 'Provisioning of user accounts and groups in Active Directory and Google Workspace', es: 'Aprovisionamiento de cuentas' },
        { pt: 'Manutenção corretiva de hardware em nível de componentes eletrônicos e suporte ao sistema ERP GVDasa.', en: 'Corrective hardware maintenance at electronic component level and GVDasa ERP support', es: 'Mantenimiento de hardware y ERP' }
      ]
    },
    { 
      role: { pt: 'Analista de Suporte Técnico N1/N2', en: 'N1/N2 Technical Support Analyst', es: 'Analista de Soporte Técnico N1/N2' },
      company: 'Colégio Jean Piaget',
      period: { pt: 'Out/2023 - Jan/2024', en: 'Oct/2023 - Jan/2024', es: 'Oct/2023 - Ene/2024' },
      tasks: [
        { pt: 'Atendimento de chamados via sistema de tickets, resolvendo problemas de hardware, software e acesso de usuários.', en: 'Ticket support resolving hardware, software, and user access problems', es: 'Atención de tickets' },
        { pt: 'Manutenção preventiva e corretiva em desktops, notebooks, impressoras e periféricos.', en: 'Preventive and corrective maintenance on computer equipment', es: 'Mantenimiento preventivo y correctivo' },
        { pt: 'Execução de inventário técnico de ativos de TI e suporte ao sistema de CFTV.', en: 'Execution of technical IT asset inventory and CCTV support', es: 'Inventario de activos y soporte CFTV' }
      ] 
    },
    { 
      role: { pt: 'Estágio de Suporte Técnico N1', en: 'N1 Technical Support Intern', es: 'Pasantía de Soporte Técnico N1' },
      company: 'Colégio da Polícia Militar - Cruz Azul SP',
      period: { pt: 'Out/2022 - Out/2023', en: 'Oct/2022 - Oct/2023', es: 'Oct/2022 - Oct/2023' },
      tasks: [
        { pt: 'Suporte operacional ao ERP TOTVS RM (Acadêmico e Saúde), auxiliando usuários em cadastros e erros de sistema.', en: 'Operational support for TOTVS RM ERP, assisting users with system errors', es: 'Soporte operacional ERP' },
        { pt: 'Criação e modificação de contas de usuários no Active Directory conforme solicitações.', en: 'Creation and modification of user accounts in Active Directory', es: 'Gestión de usuarios AD' },
        { pt: 'Monitoramento de disponibilidade de serviços via Zabbix e auxílio na manutenção de servidores Windows Server.', en: 'Service availability monitoring via Zabbix and support in server maintenance', es: 'Monitoreo y soporte de servidores' }
      ] 
    },
    { 
      role: { pt: 'Consultor de TI (Autônomo)', en: 'Freelance IT Consultant', es: 'Consultor de TI' },
      company: { pt: 'Serviços Técnicos de Informática', en: 'IT Technical Services', es: 'Servicios Técnicos' }, 
      period: { pt: 'Jan/2010 - Out/2023', en: 'Jan/2010 - Oct/2023', es: 'Ene/2010 - Oct/2023' },
      tasks: [
        { pt: 'Execução de diagnóstico, reparo e manutenção em desktops, notebooks e impressoras.', en: 'Execution of diagnosis, repair, and maintenance on desktops and laptops', es: 'Diagnóstico y reparación' },
        { pt: 'Instalação e configuração de sistemas Windows e Linux, remoção de malware e recuperação de dados.', en: 'Installation and configuration of operating systems and data recovery', es: 'Instalación y configuración de sistemas' }
      ] 
    }
  ],
  education: [
    { 
      degree: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development', es: 'Análisis y Desarrollo de Sistemas' },
      institution: 'UNIBR',
      period: { pt: 'Concluído (2025)', en: 'Completed (2025)', es: 'Concluido(2025)' }
    },
    { 
      degree: { pt: 'Especialização em Engenharia de Redes (Lato Sensu)', en: 'Postgraduate in Network Engineering', es: 'Especialización en Redes' },
      institution: 'PUC Minas',
      period: { pt: 'Previsão: 2026-2027', en: 'Expected: 2026-2027', es: 'Previsión: 2026-2027' }
    }
  ],
  certifications: [
    { name: 'Windows Server / Redes', institution: 'Alura', date: '2025' },
    { name: 'Gestão de Infraestrutura de TI', institution: 'FIAP', date: '2025' },
    { name: 'Microsoft Azure Data Fundamentals (DP-900)', institution: 'Ka Solution', date: '2024' },
    { name: 'Google Cloud Fundamentals', institution: 'Coursera', date: '2024' },
    { name: 'AWS Amazon Cloud Computing', institution: 'Udemy', date: '2023' },
    { name: 'Reparo Avançado em Placas Eletrônicas', institution: 'MasterNet', date: '2021' }
  ]
};
