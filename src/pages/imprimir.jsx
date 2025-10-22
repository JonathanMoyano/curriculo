import React, { useState } from 'react';
import { cvData } from '@/data/cv-data';

const PrintStylesV2 = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    /* ========================================
      ESTILOS BASE PARA TODOS OS DISPOSITIVOS
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
    
    /* ========================================
      ESTILOS PARA DESKTOP (MIN-WIDTH: 769PX)
      ======================================== */
    @media (min-width: 769px) {
      .cv-wrapper {
        min-height: 100vh;
        background: #f3f4f6;
        padding: 2rem;
      }
      
      .cv-container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 3rem;
      }

      .no-print {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    /* ========================================
      ESTILOS PARA TABLET (768PX ATÉ 1024PX)
      ======================================== */
    @media (min-width: 769px) and (max-width: 1024px) {
      .cv-wrapper {
        padding: 1.5rem;
      }
      
      .cv-container {
        padding: 2rem;
      }

      .no-print {
        top: 0.5rem;
        right: 0.5rem;
      }

      .header-main {
        margin-bottom: 1.5rem;
      }

      .name-title {
        font-size: 2rem;
      }

      .section-main {
        margin-bottom: 1.2rem;
      }
    }
    
    /* ========================================
      ESTILOS PARA DISPOSITIVOS MÓVEIS (MAX-WIDTH: 768PX)
      ======================================== */
    @media (max-width: 768px) {
      .cv-wrapper {
        padding: 0;
        min-height: auto;
        background: white;
      }
      
      .cv-container {
        min-height: auto;
        box-shadow: none;
        width: 100%;
        padding: 1rem;
      }
      
      /* CONTROLES NO MOBILE */
      .no-print {
        position: static !important;
        top: auto !important;
        right: auto !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 0.75rem !important;
        padding: 1rem;
        width: 100%;
        background: #f3f4f6;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: 1rem;
      }

      /* Container dos controles */
      .no-print > div {
        width: 100% !important;
        max-width: 100% !important;
      }

      /* Botões de idioma */
      .language-buttons {
        display: flex !important;
        justify-content: center !important;
        gap: 0.5rem !important;
        flex-wrap: wrap !important;
      }

      .language-buttons button {
        flex: 1 1 auto !important;
        min-width: 80px !important;
        padding: 0.75rem 1rem !important;
        font-size: 0.9rem !important;
      }

      /* Botão de impressão */
      .print-button {
        width: 100% !important;
        padding: 0.875rem 1.5rem !important;
        font-size: 1rem !important;
        text-align: center !important;
      }

      /* Ajustes de fonte para mobile */
      .name-title {
        font-size: 1.75rem !important;
        line-height: 1.3 !important;
      }

      .job-title {
        font-size: 0.95rem !important;
        line-height: 1.4 !important;
      }

      .section-title-main {
        font-size: 1.1rem !important;
        margin-bottom: 0.75rem !important;
      }

      .section-content-main {
        font-size: 0.875rem !important;
        line-height: 1.6 !important;
      }

      .experience-role {
        font-size: 1rem !important;
      }

      .experience-company,
      .experience-period {
        font-size: 0.85rem !important;
      }

      .experience-tasks li {
        font-size: 0.85rem !important;
        padding-left: 1.25rem !important;
        margin-bottom: 0.5rem !important;
      }

      .course-item-simple {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
      }

      .contact-info {
        font-size: 0.85rem !important;
      }

      /* Espaçamentos mobile */
      .header-main {
        margin-bottom: 1.5rem !important;
        padding-bottom: 1rem !important;
      }

      .section-main {
        margin-bottom: 1.25rem !important;
      }

      .experience-item {
        margin-bottom: 1.25rem !important;
      }
    }

    /* ========================================
      ESTILOS PARA MOBILE PEQUENO (MAX-WIDTH: 480PX)
      ======================================== */
    @media (max-width: 480px) {
      .cv-container {
        padding: 0.75rem;
      }

      .no-print {
        padding: 0.75rem;
      }

      .name-title {
        font-size: 1.5rem !important;
      }

      .job-title {
        font-size: 0.85rem !important;
      }

      .section-title-main {
        font-size: 1rem !important;
      }

      .section-content-main {
        font-size: 0.8rem !important;
      }

      .experience-tasks li {
        font-size: 0.8rem !important;
      }

      .course-item-simple {
        font-size: 0.8rem !important;
      }
    }

    /* ========================================
      ESTILOS COMUNS (TODOS OS TAMANHOS)
      ======================================== */
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
      line-height: 1.4;
    }

    /* Informações de contato no header */
    .contact-info {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      font-size: 0.85rem;
      color: #4b5563;
    }

    .contact-info-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .contact-divider {
      color: #d1d5db;
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
    
    /* Competências em colunas */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .skill-category {
      margin-bottom: 1rem;
    }

    .skill-category-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 0.5rem;
    }

    .skill-item {
      font-size: 0.85rem;
      color: #374151;
      margin-bottom: 0.3rem;
      padding-left: 1rem;
      position: relative;
    }

    .skill-item:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
    
    /* Experiência */
    .experience-item {
      margin-bottom: 1.5rem;
      page-break-inside: avoid;
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
      margin-left: 0.5rem;
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

    .education-period {
      font-size: 0.8rem;
      color: #6b7280;
    }
    
    /* Cursos - Grid de 3 colunas */
    .courses-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.3rem 1rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
      .courses-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.4rem 0.75rem;
      }
    }

    @media (max-width: 480px) {
      .courses-grid {
        grid-template-columns: 1fr;
        gap: 0.4rem;
      }
    }
    
    .course-item-simple {
      font-size: 0.8rem;
      line-height: 1.4;
      color: #374151;
      display: flex;
      align-items: baseline;
    }
    
    .course-item-simple:before {
      content: "•";
      color: #1e40af;
      font-weight: bold;
      margin-right: 0.4rem;
      flex-shrink: 0;
    }
    
    .course-name {
      font-weight: 600;
      color: #1f2937;
    }
    
    .course-divider {
      margin: 0 0.3rem;
      color: #9ca3af;
    }
    
    .course-institution {
      color: #1e40af;
      font-weight: 500;
    }
    
    .course-date {
      color: #6b7280;
      font-size: 0.75rem;
    }

    /* Idiomas inline */
    .languages-inline {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .language-item {
      font-size: 0.9rem;
    }

    .language-name {
      font-weight: 600;
      color: #1f2937;
    }

    .language-level {
      color: #6b7280;
      margin-left: 0.25rem;
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
        margin: 1.5cm 1.5cm 1.2cm 1.5cm;
      }
      
      .cv-wrapper {
        padding: 0;
        background: white;
      }
      
      .cv-container {
        width: 100%;
        max-width: none;
        box-shadow: none;
        margin: 0;
        padding: 0;
      }
      
      .header-main {
        margin-bottom: 1em;
        padding-bottom: 0.5em;
      }
      
      .name-title {
        font-size: 18pt;
        margin-bottom: 0.3em;
      }
      
      .job-title {
        font-size: 9.5pt;
      }

      .contact-info {
        font-size: 7.5pt;
        gap: 0.5rem;
        margin-top: 0.6em;
        padding-top: 0.6em;
      }
      
      .section-main {
        margin-bottom: 0.9em;
        page-break-inside: avoid;
      }
      
      .section-title-main {
        font-size: 9.5pt;
        margin-bottom: 0.4em;
        padding-bottom: 0.3em;
      }
      
      .section-content-main {
        font-size: 8pt;
        line-height: 1.35;
      }

      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.3rem 1rem;
      }

      .skill-category {
        margin-bottom: 0.6em;
      }

      .skill-category-title {
        font-size: 8.5pt;
        margin-bottom: 0.3em;
      }

      .skill-item {
        font-size: 7.5pt;
        margin-bottom: 0.2em;
      }
      
      .experience-item {
        margin-bottom: 0.8em;
        page-break-inside: avoid;
      }
      
      .experience-header {
        margin-bottom: 0.3em;
      }
      
      .experience-role {
        font-size: 9pt;
        margin-bottom: 0.1em;
      }
      
      .experience-company {
        font-size: 7.5pt;
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
        font-size: 8.5pt;
      }
      
      .education-institution {
        font-size: 7.5pt;
      }

      .education-period {
        font-size: 7pt;
      }

      .languages-inline {
        gap: 1rem;
      }

      .language-item {
        font-size: 8pt;
      }
      
      .courses-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.2rem 0.8rem;
        margin-top: 0.3em;
      }
      
      .course-item-simple {
        font-size: 7pt;
        line-height: 1.3;
        margin-bottom: 0;
        page-break-inside: avoid;
      }
      
      .course-date {
        font-size: 6.5pt;
      }
      
      .footer {
        margin-top: 0.8em;
        padding-top: 0.4em;
        font-size: 6.5pt;
      }

      .page-break {
        page-break-before: always;
      }
    }
  `}</style>
);

const PrintPageV2 = () => {
  const [lang, setLang] = useState('pt');

  const handlePrint = () => window.print();

  const sectionTitles = {
    pt: {
      contact: 'Contato',
      skills: 'Competências Técnicas',
      softSkills: 'Habilidades Profissionais',
      languages: 'Idiomas',
      summary: 'Resumo Profissional',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
      courses: 'Formação Complementar',
      updatedOn: 'Atualizado em'
    },
    en: {
      contact: 'Contact',
      skills: 'Technical Skills',
      softSkills: 'Professional Skills',
      languages: 'Languages',
      summary: 'Professional Summary',
      experience: 'Professional Experience',
      education: 'Education',
      courses: 'Complementary Training',
      updatedOn: 'Updated on'
    },
    es: {
      contact: 'Contacto',
      skills: 'Competencias Técnicas',
      softSkills: 'Habilidades Profesionales',
      languages: 'Idiomas',
      summary: 'Resumen Profesional',
      experience: 'Experiencia Profesional',
      education: 'Formación Académica',
      courses: 'Formación Complementaria',
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
      
      {/* Controles de impressão e idioma */}
      <div className="no-print">
        <div style={{
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          padding: '1rem',
          border: '2px solid #1e40af'
        }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#4b5563',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>Language / Idioma</p>
          <div className="language-buttons" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
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
          className="print-button"
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
            transition: 'all 0.3s',
            width: 'auto'
          }}
          onMouseEnter={(e) => e.target.style.background = '#15803d'}
          onMouseLeave={(e) => e.target.style.background = '#16a34a'}
        >
          🖨️ {lang === 'pt' ? 'Imprimir / PDF' : lang === 'en' ? 'Print / PDF' : 'Imprimir / PDF'}
        </button>
      </div>

      <div className="cv-wrapper">
        <div className="cv-container">
          
          {/* HEADER */}
          <header className="header-main">
            <h1 className="name-title">{cvData.profile.name}</h1>
            <p className="job-title">{getText(cvData.profile.title)}</p>
            
            {/* Informações de contato no header */}
            <div className="contact-info">
              <div className="contact-info-item">
                <span>📧</span>
                <span>{cvData.contact[0].value}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-info-item">
                <span>📱</span>
                <span>{cvData.contact[1].value}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-info-item">
                <span>💼</span>
                <span>{cvData.contact[3].displayValue}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-info-item">
                <span>📍</span>
                <span>São Vicente, SP</span>
              </div>
            </div>
          </header>

          {/* RESUMO PROFISSIONAL */}
          <section className="section-main">
            <h2 className="section-title-main">{t.summary}</h2>
            <p className="section-content-main">{getText(cvData.profile.summary)}</p>
          </section>

          {/* COMPETÊNCIAS TÉCNICAS */}
          <section className="section-main">
            <h2 className="section-title-main">{t.skills}</h2>
            <div className="skills-grid">
              <div className="skill-category">
                {cvData.skills.principal.map((skill, index) => (
                  <div key={index} className="skill-item">{getText(skill)}</div>
                ))}
              </div>
              <div className="skill-category">
                {cvData.skills.sistemas.map((skill, index) => (
                  <div key={index} className="skill-item">{getText(skill)}</div>
                ))}
                {cvData.skills.nuvem.map((skill, index) => (
                  <div key={index} className="skill-item">{getText(skill)}</div>
                ))}
              </div>
              <div className="skill-category">
                {cvData.skills.infraestrutura.map((skill, index) => (
                  <div key={index} className="skill-item">{getText(skill)}</div>
                ))}
              </div>
            </div>
          </section>

          {/* HABILIDADES PROFISSIONAIS */}
          <section className="section-main">
            <h2 className="section-title-main">{t.softSkills}</h2>
            <div className="skills-grid">
              {cvData.softSkills.map((skill, index) => (
                <div key={index} className="skill-item">{getText(skill)}</div>
              ))}
            </div>
          </section>

          {/* IDIOMAS */}
          <section className="section-main">
            <h2 className="section-title-main">{t.languages}</h2>
            <div className="languages-inline">
              {cvData.languages.map((item, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{getText(item.language)}:</span>
                  <span className="language-level">{getText(item.level)}</span>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIÊNCIA PROFISSIONAL */}
          <section className="section-main">
            <h2 className="section-title-main">{t.experience}</h2>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-role">{getText(exp.role)}</h3>
                  <div>
                    <span className="experience-company">{getText(exp.company)}</span>
                    <span className="experience-period">{getText(exp.period)}</span>
                  </div>
                </div>
                <ul className="experience-tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{getText(task)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* FORMAÇÃO ACADÊMICA */}
          <section className="section-main">
            <h2 className="section-title-main">{t.education}</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-degree">{getText(edu.degree)}</div>
                <div>
                  <span className="education-institution">{edu.institution}</span>
                  <span className="education-period"> • {getText(edu.period)}</span>
                </div>
              </div>
            ))}
          </section>

          {/* FORMAÇÃO COMPLEMENTAR */}
          <section className="section-main">
            <h2 className="section-title-main">{t.courses}</h2>
            <div className="courses-grid">
              {cvData.certifications.map((course, index) => (
                <div key={index} className="course-item-simple">
                  <span className="course-name">{course.name}</span>
                  <span className="course-divider">•</span>
                  <span className="course-institution">{course.institution}</span>
                  <span className="course-divider">•</span>
                  <span className="course-date">{course.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            {t.updatedOn} {formatDate(lang)}
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrintPageV2;
