import React, { useState } from 'react';
import { cvData } from '@/data/cv-data';

const PrintStylesV2 = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    /* ========================================
      ESTILOS PARA DISPOSITIVOS MÓVEIS (MAX-WIDTH: 768PX)
      ======================================== */
    @media (max-width: 768px) {
      
      .cv-wrapper {
        padding: 0; /* REMOVE O PADDING EXTERNO NO MOBILE */
        min-height: auto;
        background: white; /* Cor de fundo branca no mobile */
      }
      
      .cv-container {
        flex-direction: column; /* Empilha a barra lateral e o conteúdo principal */
        min-height: auto;
        box-shadow: none; /* Remove a sombra */
        width: 100%;
      }
      
      /* AJUSTE CRÍTICO: CONTROLES NO MOBILE */
      .no-print {
        position: static !important; /* Torna o bloco estático (non-fixed) */
        top: auto !important;
        right: auto !important;
        flex-direction: column !important; /* Volta a ser coluna para empilhar idioma e print */
        gap: 0.5rem !important;
        padding: 0.5rem; /* Padding para as bordas do celular */
        width: 100%;
        background: #f3f4f6; /* Adiciona um fundo para destaque */
        align-items: stretch; /* Estica os sub-elementos (idioma e print) */
      }

      /* Contêiner de Idioma */
      .no-print > div:first-child {
        border-color: #e5e7eb !important; /* Cor da borda mais suave */
      }

      /* COLUNA LATERAL ESQUERDA (SIDEBAR) */
      .sidebar {
        width: 100%; /* Largura total */
        padding: 1.5rem 1rem; /* Ajusta o padding */
      }

      /* COLUNA PRINCIPAL DIREITA (MAIN-CONTENT) */
      .main-content {
        width: 100%; /* Largura total */
        padding: 1.5rem 1rem; /* Ajusta o padding */
      }

      /* Ajustes de Fonte para Mobile */
      .name-title {
        font-size: 2rem;
      }
      .job-title, .section-title-main {
        font-size: 1rem;
      }
      .section-content-main,
      .experience-tasks li,
      .course-item-simple,
      .sidebar-content {
        font-size: 0.8rem;
      }
      .profile-photo-sidebar {
        width: 100px;
        height: 100px;
      }
    }
    
    /* ========================================
       ESTILOS PARA TELA (VISUALIZAÇÃO)
       ======================================== */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body { 
      font-family: 'Inter', sans-serif; 
      background: #f3f4f6;
      color: #1f2937;
    }
    
    .cv-wrapper {
      min-height: 100vh;
      background: #f3f4f6;
      padding: 2rem;
    }
    
    .cv-container {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      min-height: 100vh;
    }

    /* ESTILOS PARA O BLOCO DE CONTROLE NO DESKTOP */
    .no-print {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column; /* Padrão Desktop: empilhado */
      gap: 1rem;
    }
    
    /* COLUNA LATERAL ESQUERDA - 30% */
    .sidebar {
      width: 30%;
      background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
      color: white;
      padding: 2rem 1.5rem;
    }
    
    .sidebar-section {
      margin-bottom: 2rem;
    }
    
    .sidebar-title {
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.8rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid rgba(255,255,255,0.3);
    }
    
    .sidebar-content {
      font-size: 0.85rem;
      line-height: 1.5;
    }
    
    .profile-photo-sidebar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 5px solid white;
      margin: 0 auto 1.5rem;
      display: block;
      object-fit: cover;
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.6rem;
      font-size: 0.8rem;
      line-height: 1.4;
      word-break: break-word;
    }
    
    .contact-icon {
      margin-right: 0.5rem;
      flex-shrink: 0;
      font-size: 1rem;
    }
    
    /* COMPETÊNCIAS E SOFT SKILLS - SEM BACKGROUND, APENAS TEXTO */
    .skill-text {
      font-size: 0.8rem;
      line-height: 1.6;
      margin-bottom: 0.4rem;
      color: rgba(255,255,255,0.95);
    }
    
    /* IDIOMAS - ESTILO MANTIDO */
    .language-item-sidebar {
      margin-bottom: 0.8rem;
      font-size: 0.85rem;
    }
    
    .language-name {
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
    
    .language-level {
      font-size: 0.75rem;
      opacity: 0.9;
    }
    
    /* COLUNA PRINCIPAL DIREITA - 70% */
    .main-content {
      width: 70%;
      padding: 2rem 2.5rem;
      background: white;
      overflow-y: auto;
    }
    
    .header-main {
      margin-bottom: 2rem;
      border-bottom: 3px solid #1e40af;
      padding-bottom: 1rem;
    }
    
    .name-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }
    
    .job-title {
      font-size: 1.1rem;
      color: #4b5563;
      font-weight: 500;
    }
    
    .section-main {
      margin-bottom: 1.5rem;
    }
    
    .section-title-main {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 0.8rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e7eb;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    
    .section-content-main {
      font-size: 0.9rem;
      color: #374151;
      line-height: 1.6;
      text-align: justify;
    }
    
    /* Objetivo - MESMO ESTILO DAS OUTRAS SEÇÕES */
    .objective-section {
      margin-bottom: 1.5rem;
    }
    
    /* Experiência */
    .experience-item {
      margin-bottom: 1.5rem;
    }
    
    .experience-header {
      margin-bottom: 0.6rem;
    }
    
    .experience-role {
      font-size: 1.05rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.3rem;
    }
    
    .experience-company {
      font-size: 0.9rem;
      color: #1e40af;
      font-weight: 600;
    }
    
    .experience-period {
      font-size: 0.8rem;
      color: #6b7280;
      font-weight: 400;
    }
    
    .experience-tasks {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }
    
    .experience-tasks li {
      padding-left: 1.5rem;
      position: relative;
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
      line-height: 1.5;
    }
    
    .experience-tasks li:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
    
    /* Educação */
    .education-item {
      margin-bottom: 1rem;
    }
    
    .education-degree {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.3rem;
    }
    
    .education-institution {
      font-size: 0.85rem;
      color: #1e40af;
      font-weight: 500;
    }
    
    /* CURSOS - LISTA SIMPLES (COMO NA IMAGEM) */
    .courses-section {
      
    }
    
    .courses-list {
      display: block;
    }
    
    .course-item-simple {
      font-size: 0.85rem;
      line-height: 1.6;
      margin-bottom: 0.4rem;
      color: #374151;
      display: flex;
      align-items: baseline;
    }
    
    .course-item-simple:before {
      content: "•";
      color: #1e40af;
      font-weight: bold;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
    
    .course-name {
      font-weight: 600;
      color: #1f2937;
    }
    
    .course-divider {
      margin: 0 0.4rem;
      color: #9ca3af;
    }
    
    .course-institution {
      color: #1e40af;
      font-weight: 500;
    }
    
    .course-date {
      color: #6b7280;
      font-size: 0.8rem;
    }
    
    /* Footer */
    .footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
      font-size: 0.75rem;
      color: #6b7280;
      text-align: center;
    }
    
    /* ========================================
       ESTILOS PARA IMPRESSÃO
       ======================================== */
    @media print {
      body { 
        -webkit-print-color-adjust: exact; 
        print-color-adjust: exact;
        font-size: 9pt;
        line-height: 1.25;
        margin: 0;
        padding: 0;
        background: white;
      }
      
      .no-print { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 0; 
      }
      
      .cv-wrapper {
        padding: 0;
        background: white;
      }
      
      .cv-container {
        display: flex;
        width: 100%;
        max-width: none;
        box-shadow: none;
        margin: 0;
        min-height: auto;
      }
      
      /* SIDEBAR na impressão */
      .sidebar {
        width: 30%;
        padding: 1.2cm 0.8cm;
      }
      
      .sidebar-section {
        margin-bottom: 1em;
      }
      
      .sidebar-title {
        font-size: 9pt;
        margin-bottom: 0.5em;
        padding-bottom: 0.3em;
      }
      
      .sidebar-content {
        font-size: 8pt;
        line-height: 1.3;
      }
      
      .profile-photo-sidebar {
        width: 90px !important;
        height: 90px !important;
        margin: 0 auto 1em;
      }
      
      .contact-item {
        margin-bottom: 0.4em;
        font-size: 7.5pt;
        line-height: 1.2;
      }
      
      .skill-text {
        font-size: 7.5pt;
        line-height: 1.4;
        margin-bottom: 0.3em;
      }
      
      .language-item-sidebar {
        margin-bottom: 0.5em;
        font-size: 8pt;
      }
      
      .language-level {
        font-size: 7pt;
      }
      
      /* MAIN CONTENT na impressão */
      .main-content {
        width: 70%;
        padding: 1.2cm 1cm;
      }
      
      .header-main {
        margin-bottom: 1.2em;
        padding-bottom: 0.6em;
      }
      
      .name-title {
        font-size: 20pt;
        margin-bottom: 0.2em;
      }
      
      .job-title {
        font-size: 10pt;
      }
      
      .section-main {
        margin-bottom: 1em;
        page-break-inside: avoid;
      }
      
      .section-title-main {
        font-size: 10pt;
        margin-bottom: 0.4em;
        padding-bottom: 0.3em;
      }
      
      .section-content-main {
        font-size: 8.5pt;
        line-height: 1.35;
        text-align: justify;
      }
      
      .objective-section {
        margin-bottom: 1em;
      }
      
      .experience-item {
        margin-bottom: 0.8em;
        page-break-inside: avoid;
      }
      
      .experience-header {
        margin-bottom: 0.3em;
      }
      
      .experience-role {
        font-size: 9.5pt;
        margin-bottom: 0.1em;
      }
      
      .experience-company {
        font-size: 8pt;
      }
      
      .experience-period {
        font-size: 7pt;
      }
      
      .experience-tasks li {
        padding-left: 1em;
        margin-bottom: 0.2em;
        font-size: 7.5pt;
        line-height: 1.3;
      }
      
      .education-item {
        margin-bottom: 0.5em;
      }
      
      .education-degree {
        font-size: 9pt;
      }
      
      .education-institution {
        font-size: 7.5pt;
      }
      
      .page-break {
        page-break-before: always;
        padding-top: 0 !important;
      }
      
      .courses-section {
        margin-top: 1em;
      }
      
      .course-item-simple {
        font-size: 7.5pt;
        line-height: 1.4;
        margin-bottom: 0.25em;
        page-break-inside: avoid;
      }
      
      .course-date {
        font-size: 7pt;
      }
      
      .footer {
        margin-top: 1em;
        padding-top: 0.5em;
        font-size: 7pt;
      }
    }
  `}</style>
);

const PrintPageV2 = () => {
  const [lang, setLang] = useState('pt');

  const handlePrint = () => window.print();

  const sectionTitles = {
    pt: {
      contact: 'CONTATO',
      address: 'ENDEREÇO',
      skills: 'COMPETÊNCIAS',
      softSkills: 'HABILIDADES TÉCNICA',
      languages: 'IDIOMAS',
      objective: 'OBJETIVO PROFISSIONAL',
      summary: 'RESUMO PROFISSIONAL',
      experience: 'EXPERIÊNCIA PROFISSIONAL',
      education: 'FORMAÇÃO ACADÊMICA',
      courses: 'FORMAÇÃO COMPLEMENTAR',
      coursesCompleted: 'cursos concluídos',
      updatedOn: 'Atualizado em'
    },
    en: {
      contact: 'CONTACT',
      address: 'ADDRESS',
      skills: 'SKILLS',
      softSkills: 'SOFT SKILLS',
      languages: 'LANGUAGES',
      objective: 'PROFESSIONAL OBJECTIVE',
      summary: 'PROFESSIONAL SUMMARY',
      experience: 'PROFESSIONAL EXPERIENCE',
      education: 'EDUCATION',
      courses: 'COMPLEMENTARY TRAINING',
      coursesCompleted: 'completed courses',
      updatedOn: 'Updated on'
    },
    es: {
      contact: 'CONTACTO',
      address: 'DIRECCIÓN',
      skills: 'COMPETENCIAS',
      softSkills: 'HABILIDADES BLANDAS',
      languages: 'IDIOMAS',
      objective: 'OBJETIVO PROFESIONAL',
      summary: 'RESUMEN PROFESIONAL',
      experience: 'EXPERIENCIA PROFESIONAL',
      education: 'FORMACIÓN ACADÉMICA',
      courses: 'FORMACIÓN COMPLEMENTARIA',
      coursesCompleted: 'cursos completados',
      updatedOn: 'Actualizado el'
    }
  };

  const t = sectionTitles[lang];

  const formatDate = (lang) => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    switch(lang) {
      case 'en': return date.toLocaleDateString('en-US', options);
      case 'es': return date.toLocaleDateString('es-ES', options);
      default: return date.toLocaleDateString('pt-BR', options);
    }
  };

  const getText = (obj) => typeof obj === 'object' && obj !== null && obj[lang] ? obj[lang] : obj;

  return (
    <>
      <PrintStylesV2 />
      
      {/* Controles de impressão e idioma - REMOVIDOS ESTILOS INLINE DE POSIÇÃO PARA DEIXAR O CSS/MEDIA QUERY ASSUMIR */}
      <div className="no-print">
        <div style={{
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          padding: '1rem',
          border: '2px solid #1e40af',
          // Estilo para centralizar os botões (como na imagem)
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#4b5563',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}> Language / Idioma</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setLang('pt')} 
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: lang === 'pt' ? '#1e40af' : '#f3f4f6',
                color: lang === 'pt' ? 'white' : '#374151'
              }}
            >
              🇧🇷 PT
            </button>
            <button 
              onClick={() => setLang('en')} 
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: lang === 'en' ? '#1e40af' : '#f3f4f6',
                color: lang === 'en' ? 'white' : '#374151'
              }}
            >
              🇺🇸 EN
            </button>
            <button 
              onClick={() => setLang('es')} 
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: 500,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: lang === 'es' ? '#1e40af' : '#f3f4f6',
                color: lang === 'es' ? 'white' : '#374151'
              }}
            >
              🇪🇸 ES
            </button>
          </div>
        </div>

        <button 
          onClick={handlePrint} 
          style={{
            background: '#16a34a',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            fontWeight: 500,
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.background = '#15803d'}
          onMouseLeave={(e) => e.target.style.background = '#16a34a'}
        >
          🖨️ {lang === 'pt' ? 'Imprimir / PDF' : lang === 'en' ? 'Print / PDF' : 'Imprimir / PDF'}
        </button>
      </div>

      <div className="cv-wrapper">
        <div className="cv-container">
          {/* SIDEBAR ESQUERDA */}
          <aside className="sidebar">
            {/* Foto */}
            <img 
              src={cvData.profile.image} 
              alt={cvData.profile.name}
              className="profile-photo-sidebar"
            />

            {/* Endereço */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.address}</h3>
              <div className="sidebar-content">
                <div className="contact-item">
                  <span className="contact-icon"></span>
                  <span>{cvData.profile.address}</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.contact}</h3>
              <div className="sidebar-content">
                {cvData.contact.map((item, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">
                      {item.type === 'email'}
                      {item.type === 'phone'}
                      {item.type === 'linkedin'}
                      {item.type === 'github'}
                    </span>
                    <span>
                      {item.displayValue || item.value}
                      {item.label && ` (${item.label})`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competências Técnicas - APENAS TEXTO */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.skills}</h3>
              <div className="sidebar-content">
                {[...cvData.skills.principal, ...cvData.skills.sistemas, ...cvData.skills.nuvem].map((skill, index) => {
                  const skillText = getText(skill);
                  return <div key={index} className="skill-text">• {skillText}</div>;
                })}
              </div>
            </div>

            {/* Soft Skills - APENAS TEXTO */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.softSkills}</h3>
              <div className="sidebar-content">
                {cvData.softSkills.slice(0, 6).map((skill, index) => {
                  const skillText = getText(skill);
                  return <div key={index} className="skill-text">• {skillText}</div>;
                })}
              </div>
            </div>

            {/* Idiomas */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.languages}</h3>
              <div className="sidebar-content">
                {cvData.languages.map((langItem, index) => (
                  <div key={index} className="language-item-sidebar">
                    <div className="language-name">{getText(langItem.language)}</div>
                    <div className="language-level">{getText(langItem.level)}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* CONTEÚDO PRINCIPAL DIREITA */}
          <main className="main-content">
            {/* Header */}
            <header className="header-main">
              <h1 className="name-title">{cvData.profile.name}</h1>
              <h2 className="job-title">{getText(cvData.profile.title)}</h2>
            </header>

            {/* Objetivo - MESMO PADRÃO DAS OUTRAS SEÇÕES */}
            {cvData.profile.objective && (
              <section className="section-main objective-section">
                <h3 className="section-title-main">{t.objective}</h3>
                <div className="section-content-main">
                  <p>{getText(cvData.profile.objective)}</p>
                </div>
              </section>
            )}

            {/* Resumo */}
            <section className="section-main">
              <h3 className="section-title-main">{t.summary}</h3>
              <div className="section-content-main">
                <p>{getText(cvData.profile.summary)}</p>
              </div>
            </section>

            {/* Experiência */}
            <section className="section-main">
              <h3 className="section-title-main">{t.experience}</h3>
              <div className="section-content-main">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-role">{getText(job.role)}</div>
                      <div>
                        <span className="experience-company">{getText(job.company)}</span>
                        {' | '}
                        <span className="experience-period">{getText(job.period)}</span>
                      </div>
                    </div>
                    <ul className="experience-tasks">
                      {job.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{getText(task)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Educação */}
            <section className="section-main">
              <h3 className="section-title-main">{t.education}</h3>
              <div className="section-content-main">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-degree">{getText(edu.degree)}</div>
                    <div className="education-institution">
                      {edu.institution} - {getText(edu.status)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
      
              
            {/* Cursos - LISTA SIMPLES */}
            <section className="courses-section">
              <h3 className="section-title-main">{t.courses}</h3>

              <div className="courses-list">
                {cvData.courses.map((course, index) => (
                  <div key={index} className="course-item-simple">
                    <span className="course-name">{course.title}</span>
                    <span className="course-divider">•</span>
                    <span className="course-institution">{course.institution}</span>
                    <span className="course-divider">•</span>
                    <span className="course-date">{course.date}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="footer">
              <div>{t.updatedOn} {formatDate(lang)}</div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrintPageV2;
