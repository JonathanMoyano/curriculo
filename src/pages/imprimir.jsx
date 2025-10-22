import React, { useState } from 'react';
import { cvData } from '@/data/cv-data';

const PrintStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Arial:wght@400;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body { 
      font-family: Arial, sans-serif;
      background: #ffffff;
      color: #000000;
      line-height: 1.4;
    }
    
    .cv-wrapper {
      min-height: 100vh;
      background: #ffffff;
      padding: 2rem 1rem;
    }
    
    .cv-container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
    }

    /* Controles */
    .controls-bar {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .language-selector {
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border: 2px solid #333;
    }

    .language-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.5rem;
      text-align: center;
      display: block;
    }

    .language-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .language-button {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 600;
      font-size: 0.875rem;
      border: 2px solid #333;
      cursor: pointer;
      transition: all 0.2s;
      background: white;
      color: #000;
    }

    .language-button.active {
      background: #000;
      color: white;
    }

    .language-button:hover {
      opacity: 0.8;
    }

    .print-button {
      background: #000;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-weight: 600;
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .print-button:hover {
      background: #333;
    }
    
    /* Header */
    .header {
      text-align: center;
      padding-bottom: 0.75rem;
      border-bottom: 3px solid #000;
      margin-bottom: 1rem;
    }
    
    .name {
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;
    }

    .contact-line {
      font-size: 0.85rem;
      color: #000;
      margin-bottom: 0.25rem;
    }

    .contact-line strong {
      font-weight: 700;
    }

    .linkedin-link {
      font-size: 0.85rem;
      color: #000;
      text-decoration: none;
    }
    
    .title {
      font-size: 0.95rem;
      color: #000;
      font-weight: 700;
      margin-top: 0.75rem;
      text-transform: uppercase;
    }
    
    /* Sections */
    .section {
      margin-bottom: 1.5rem;
      page-break-inside: avoid;
    }
    
    .section-title {
      font-size: 1rem;
      font-weight: 700;
      color: #000;
      background: #d3d3d3;
      padding: 0.4rem 0.5rem;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
    }
    
    .section-content {
      font-size: 0.9rem;
      color: #000;
      line-height: 1.5;
      text-align: justify;
    }

    .section-content ul {
      list-style: disc;
      margin-left: 1.25rem;
      text-align: justify;
    }

    .section-content ul li {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.5;
      text-align: justify;
    }

    /* Skills Grid */
    .skills-list {
      list-style: disc;
      margin-left: 1.25rem;
    }

    .skills-list li {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Education */
    .education-item {
      margin-bottom: 1rem;
    }

    .education-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.15rem;
    }

    .education-meta {
      font-size: 0.85rem;
      color: #000;
      margin-bottom: 0.1rem;
    }

    .education-meta strong {
      font-weight: 700;
    }
    
    /* Experience */
    .experience-item {
      margin-bottom: 1.25rem;
      page-break-inside: avoid;
    }
    
    .experience-header {
      margin-bottom: 0.4rem;
    }
    
    .experience-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.15rem;
    }
    
    .experience-period {
      font-size: 0.85rem;
      color: #000;
      font-style: italic;
      margin-bottom: 0.4rem;
    }

    .experience-description {
      font-size: 0.9rem;
      color: #000;
      line-height: 1.5;
      text-align: justify;
    }
    
    /* Certifications */
    .certifications-list {
      list-style: disc;
      margin-left: 1.25rem;
    }

    .certifications-list li {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Languages */
    .languages-list {
      margin-left: 1.25rem;
    }

    .languages-list li {
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .cv-wrapper {
        padding: 1rem 0.5rem;
      }

      .cv-container {
        padding: 1.5rem 1rem;
      }

      .controls-bar {
        position: static;
        margin-bottom: 1rem;
      }

      .name {
        font-size: 1.75rem;
      }
    }
    
    /* Print Styles - OTIMIZADO PARA REDUZIR LACUNAS */
    @media print {
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      body { 
        background: white;
        font-size: 8.5pt;
        line-height: 1.15;
      }
      
      .controls-bar { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 1cm 1.3cm;
      }
      
      .cv-wrapper {
        padding: 0;
        background: white;
        min-height: auto;
      }
      
      .cv-container {
        max-width: 100%;
        padding: 0;
      }
      
      .header {
        margin-bottom: 0.4rem;
        padding-bottom: 0.3rem;
        border-bottom: 2.5px solid #000;
      }
      
      .name {
        font-size: 14pt;
        margin-bottom: 0.15rem;
      }

      .contact-line {
        font-size: 7.5pt;
        margin-bottom: 0.1rem;
      }

      .linkedin-link {
        font-size: 7.5pt;
      }
      
      .title {
        font-size: 8.5pt;
        margin-top: 0.25rem;
      }
      
      .section {
        margin-bottom: 0.45rem;
        page-break-inside: avoid;
      }
      
      .section-title {
        font-size: 9pt;
        padding: 0.2rem 0.35rem;
        margin-bottom: 0.25rem;
        background: #d3d3d3 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        text-align: center;
      }
      
      .section-content {
        font-size: 8pt;
        line-height: 1.2;
        text-align: justify;
      }

      .section-content ul {
        margin-left: 0.9rem;
        margin-top: 0.15rem;
        text-align: justify;
        list-style: disc;
      }

      .section-content ul li {
        margin-bottom: 0.15rem;
        font-size: 8pt;
        line-height: 1.2;
        text-align: justify;
      }

      .skills-list {
        margin-left: 0.9rem;
        margin-top: 0.15rem;
        list-style: disc;
      }

      .skills-list li {
        margin-bottom: 0.15rem;
        font-size: 8pt;
        line-height: 1.15;
      }

      .education-item {
        margin-bottom: 0.4rem;
      }

      .education-title {
        font-size: 8.5pt;
        margin-bottom: 0.08rem;
      }

      .education-meta {
        font-size: 7.5pt;
        margin-bottom: 0.04rem;
      }
      
      .experience-item {
        margin-bottom: 0.5rem;
      }
      
      .experience-title {
        font-size: 8.5pt;
        margin-bottom: 0.08rem;
      }
      
      .experience-period {
        font-size: 7.5pt;
        margin-bottom: 0.2rem;
      }

      .experience-description {
        font-size: 8pt;
        line-height: 1.2;
        text-align: justify;
      }
      
      .certifications-list {
        margin-left: 0.9rem;
        margin-top: 0.15rem;
        list-style: disc;
      }

      .certifications-list li {
        margin-bottom: 0.15rem;
        font-size: 8pt;
        line-height: 1.15;
      }

      .languages-list {
        margin-left: 0.9rem;
        margin-top: 0.15rem;
      }

      .languages-list li {
        margin-bottom: 0.15rem;
        font-size: 8pt;
        line-height: 1.15;
      }
    }
  `}</style>
);

const ImprimirPage = () => {
  const [lang, setLang] = useState('pt');

  const handlePrint = () => window.print();

  const sectionTitles = {
    pt: {
      objective: 'OBJETIVO PROFISSIONAL',
      summary: 'RESUMO PROFISSIONAL',
      education: 'FORMAÇÃO ACADÊMICA',
      experience: 'EXPERIÊNCIA PROFISSIONAL',
      certifications: 'CURSOS PROFISSIONALIZANTES',
      skills: 'HABILIDADES E COMPETÊNCIAS'
    },
    en: {
      objective: 'PROFESSIONAL OBJECTIVE',
      summary: 'PROFESSIONAL SUMMARY',
      education: 'ACADEMIC BACKGROUND',
      experience: 'PROFESSIONAL EXPERIENCE',
      certifications: 'PROFESSIONAL COURSES',
      skills: 'SKILLS AND COMPETENCIES'
    },
    es: {
      objective: 'OBJETIVO PROFESIONAL',
      summary: 'RESUMEN PROFESIONAL',
      education: 'FORMACIÓN ACADÉMICA',
      experience: 'EXPERIENCIA PROFESIONAL',
      certifications: 'CURSOS PROFESIONALES',
      skills: 'HABILIDADES Y COMPETENCIAS'
    }
  };

  // LISTA COMPLETA DE CURSOS (24 CURSOS)
  const allCertifications = [
    { name: 'Windows Server', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Windows: Prompt - Utilizando o CMD', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Terminal - Comandos para Executar Tarefas', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Gerenciando Diretórios, Arquivos e Processos', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Redes: Implementando Roteamento, DNS e IPv6', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Redes Wi-Fi: Criando uma Rede Sem Fio Segura', institution: 'Alura', date: 'Ago/2025' },
    { name: 'Linux: Fundamentos', institution: 'FIAP', date: 'Jul/2025' },
    { name: 'Redes: Dos Conceitos Iniciais à Criação de Intranet', institution: 'Alura', date: 'Jul/2025' },
    { name: 'Redes: Construindo Projeto com VLANs e Políticas de Acesso', institution: 'Alura', date: 'Jul/2025' },
    { name: 'Introdução ao Desenvolvimento Moderno de Software', institution: 'DIO', date: 'Jun/2024' },
    { name: 'Gestão de Infraestrutura de TI', institution: 'FIAP', date: 'Mai/2025' },
    { name: 'Microsoft Azure Data Fundamentals (DP-900)', institution: 'Ka Solution', date: 'Abr/2024' },
    { name: 'GKE: Backups Inteligentes na Google Cloud Platform', institution: 'DIO', date: 'Abr/2024' },
    { name: 'Google Cloud Fundamentals: Core Infrastructure', institution: 'Coursera', date: 'Jan/2024' },
    { name: 'IT Service Management: Serviços de TI (ITSM)', institution: 'Udemy', date: 'Ago/2023' },
    { name: 'ChatGPT para Python', institution: 'Udemy', date: 'Ago/2023' },
    { name: 'Banco de Dados SQL do Zero ao Avançado', institution: 'Udemy', date: 'Jul/2023' },
    { name: 'Programação Python do Zero ao Avançado', institution: 'Udemy', date: 'Jul/2023' },
    { name: 'Banco de Dados Oracle SQL', institution: 'Udemy', date: 'Jun/2023' },
    { name: 'Google Cloud Associate Engineer (GCP)', institution: 'Udemy', date: 'Jun/2023' },
    { name: 'Introdução à Ciência de Dados 3.0', institution: 'Data Science Academy', date: 'Jun/2023' },
    { name: 'AWS Amazon Cloud Computing - Iniciante', institution: 'Udemy', date: 'Mai/2023' },
    { name: 'CC50: Introdução à Ciência da Computação - Harvard', institution: 'Fundação Estudar', date: 'Jan/2023' },
    { name: 'Algoritmos e Lógica de Programação', institution: 'Udemy', date: 'Set/2022' },
    { name: 'Reparo Avançado em Placas e Circuitos Eletrônicos', institution: 'MasterNet Cursos', date: 'Fev/2021' }
  ];

  const t = sectionTitles[lang];

  const getText = (obj) => typeof obj === 'object' && obj !== null && obj[lang] ? obj[lang] : obj;

  return (
    <>
      <PrintStyles />
      
      {/* Controles */}
      <div className="controls-bar">
        <div className="language-selector">
          <span className="language-label">IDIOMA / LANGUAGE</span>
          <div className="language-buttons">
            <button 
              onClick={() => setLang('pt')} 
              className={`language-button ${lang === 'pt' ? 'active' : ''}`}
            >
              🇧🇷 PT
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`language-button ${lang === 'en' ? 'active' : ''}`}
            >
              🇺🇸 EN
            </button>
            <button 
              onClick={() => setLang('es')} 
              className={`language-button ${lang === 'es' ? 'active' : ''}`}
            >
              🇪🇸 ES
            </button>
          </div>
        </div>

        <button onClick={handlePrint} className="print-button">
          🖨️ {lang === 'pt' ? 'IMPRIMIR / PDF' : lang === 'en' ? 'PRINT / PDF' : 'IMPRIMIR / PDF'}
        </button>
      </div>

      <div className="cv-wrapper">
        <div className="cv-container">
          
          {/* HEADER */}
          <header className="header">
            <h1 className="name">{cvData.profile?.name || 'Nome'}</h1>
            
            <div className="contact-line">
              <strong>
                {lang === 'pt' ? 'Endereço:' : lang === 'en' ? 'Address:' : 'Dirección:'}
              </strong> {cvData.profile?.address || 'São Vicente, SP'}
            </div>
            
            <div className="contact-line">
              <strong>
                {lang === 'pt' ? 'Celular:' : lang === 'en' ? 'Mobile:' : 'Celular:'}
              </strong> {cvData.contact?.[1]?.value || '(13) 97412-4438'}
              {cvData.contact?.[2]?.value && (
                <span> / {cvData.contact[2].value} ({cvData.contact[2].label || 'Contato'})</span>
              )}
              {' | '}
              <strong>E-mail:</strong> {cvData.contact?.[0]?.value || 'email@email.com'}
            </div>
            
            <a 
              href={cvData.contact?.[3]?.href || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              {cvData.contact?.[3]?.displayValue || 'linkedin.com/in/profile'}
            </a>

            <p className="title">{getText(cvData.profile?.title)}</p>
          </header>

          {/* OBJETIVO PROFISSIONAL */}
          {cvData.profile?.objective && (
            <section className="section">
              <h2 className="section-title">{t.objective}</h2>
              <div className="section-content">
                {getText(cvData.profile.objective)}
              </div>
            </section>
          )}

          {/* RESUMO PROFISSIONAL */}
          {cvData.profile?.summary && (
            <section className="section">
              <h2 className="section-title">{t.summary}</h2>
              <div className="section-content">
                {getText(cvData.profile.summary)}
              </div>
            </section>
          )}

          {/* FORMAÇÃO ACADÊMICA */}
          {cvData.education?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.education}</h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-title">{getText(edu.degree)}</div>
                  <div className="education-meta">
                    <strong>
                      {lang === 'pt' ? 'Instituição:' : lang === 'en' ? 'Institution:' : 'Institución:'}
                    </strong> {edu.institution}
                  </div>
                  <div className="education-meta">
                    <strong>
                      {lang === 'pt' ? 'Conclusão:' : lang === 'en' ? 'Completion:' : 'Conclusión:'}
                    </strong> {getText(edu.period)}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* EXPERIÊNCIA PROFISSIONAL */}
          {cvData.experience?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.experience}</h2>
              {cvData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-title">{getText(exp.role)}, {getText(exp.company)}</div>
                    <div className="experience-period">{getText(exp.period)}</div>
                  </div>
                  {exp.tasks?.length > 0 && (
                    <div className="experience-description">
                      {exp.tasks.map((task, taskIndex) => (
                        <span key={taskIndex}>
                          {getText(task)}
                          {taskIndex < exp.tasks.length - 1 ? '; ' : '.'}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* CURSOS PROFISSIONALIZANTES - 25 CURSOS */}
          <section className="section">
            <h2 className="section-title">{t.certifications}</h2>
            <ul className="certifications-list">
              {allCertifications.map((cert, index) => (
                <li key={index}>
                  {cert.name} - {cert.institution} ({cert.date});
                </li>
              ))}
            </ul>
          </section>

          {/* HABILIDADES E COMPETÊNCIAS */}
          <section className="section">
            <h2 className="section-title">{t.skills}</h2>
            <ul className="skills-list">
              {/* Competências Técnicas */}
              {cvData.skills?.principal?.map((skill, index) => (
                <li key={`principal-${index}`}>{getText(skill)};</li>
              ))}
              
              {/* Soft Skills */}
              {cvData.softSkills?.map((skill, index) => (
                <li key={`soft-${index}`}>{getText(skill)};</li>
              ))}

              {/* Idiomas */}
              {cvData.languages?.map((item, index) => (
                <li key={`lang-${index}`}>
                  {getText(item.language)}: {getText(item.level)};
                </li>
              ))}

              {/* Trabalho em equipe */}
              <li>
                {lang === 'pt' ? 'Trabalho em equipe' : lang === 'en' ? 'Teamwork' : 'Trabajo en equipo'}.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
};

export default ImprimirPage;
