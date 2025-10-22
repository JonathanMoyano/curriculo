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
    
    /* Print Styles - OTIMIZADO COM MENOS ESPAÇAMENTO */
    @media print {
      body { 
        background: white;
        font-size: 9pt;
        line-height: 1.2;
      }
      
      .controls-bar { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 1.2cm 1.5cm;
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
        margin-bottom: 0.5rem;
        padding-bottom: 0.4rem;
      }
      
      .name {
        font-size: 15pt;
        margin-bottom: 0.2rem;
      }

      .contact-line {
        font-size: 8pt;
        margin-bottom: 0.15rem;
      }

      .linkedin-link {
        font-size: 8pt;
      }
      
      .title {
        font-size: 9pt;
        margin-top: 0.3rem;
      }
      
      .section {
        margin-bottom: 0.6rem;
        page-break-inside: avoid;
      }
      
      .section-title {
        font-size: 9.5pt;
        padding: 0.25rem 0.4rem;
        margin-bottom: 0.35rem;
      }
      
      .section-content {
        font-size: 8.5pt;
        line-height: 1.25;
        text-align: justify;
      }

      .section-content ul {
        margin-left: 1rem;
        margin-top: 0.2rem;
        text-align: justify;
      }

      .section-content ul li {
        margin-bottom: 0.2rem;
        font-size: 8.5pt;
        line-height: 1.25;
        text-align: justify;
      }

      .skills-list {
        margin-left: 1rem;
        margin-top: 0.2rem;
      }

      .skills-list li {
        margin-bottom: 0.2rem;
        font-size: 8.5pt;
        line-height: 1.2;
      }

      .education-item {
        margin-bottom: 0.5rem;
      }

      .education-title {
        font-size: 9pt;
        margin-bottom: 0.1rem;
      }

      .education-meta {
        font-size: 8pt;
        margin-bottom: 0.05rem;
      }
      
      .experience-item {
        margin-bottom: 0.65rem;
      }
      
      .experience-title {
        font-size: 9pt;
        margin-bottom: 0.1rem;
      }
      
      .experience-period {
        font-size: 8pt;
        margin-bottom: 0.25rem;
      }

      .experience-description {
        font-size: 8.5pt;
        line-height: 1.25;
        text-align: justify;
      }
      
      .certifications-list {
        margin-left: 1rem;
        margin-top: 0.2rem;
      }

      .certifications-list li {
        margin-bottom: 0.2rem;
        font-size: 8.5pt;
        line-height: 1.2;
      }

      .languages-list {
        margin-left: 1rem;
        margin-top: 0.2rem;
      }

      .languages-list li {
        margin-bottom: 0.2rem;
        font-size: 8.5pt;
        line-height: 1.2;
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

          {/* CURSOS PROFISSIONALIZANTES */}
          {cvData.certifications?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.certifications}</h2>
              <ul className="certifications-list">
                {cvData.certifications.map((cert, index) => (
                  <li key={index}>
                    {cert.name} - {cert.institution} ({cert.date});
                  </li>
                ))}
              </ul>
            </section>
          )}

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
