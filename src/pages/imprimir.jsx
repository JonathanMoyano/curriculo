import React, { useState } from 'react';
import { cvData } from '@/data/cv-data';

const PrintStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    /* ========================================
      ESTILOS PARA TELA E IMPRESSÃO (IGUAIS)
      ======================================== */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body { 
      font-family: 'Inter', sans-serif; 
      background: #f5f5f5;
      color: #1f2937;
    }
    
    .cv-wrapper {
      min-height: 100vh;
      background: #f5f5f5;
      padding: 2rem 1rem;
    }
    
    .cv-container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 3rem;
    }

    /* Controles de idioma e impressão */
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
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 2px solid #1e40af;
    }

    .language-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #4b5563;
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
      font-weight: 500;
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      background: #f3f4f6;
      color: #374151;
    }

    .language-button.active {
      background: #1e40af;
      color: white;
    }

    .language-button:hover {
      opacity: 0.9;
    }

    .print-button {
      background: #16a34a;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-weight: 500;
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
      background: #15803d;
    }
    
    /* Header */
    .header {
      text-align: center;
      padding-bottom: 1.5rem;
      border-bottom: 3px solid #1e40af;
      margin-bottom: 2rem;
    }
    
    .name {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 0.5rem;
    }
    
    .title {
      font-size: 1.1rem;
      color: #4b5563;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .contact-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      font-size: 0.85rem;
      color: #4b5563;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .contact-divider {
      color: #d1d5db;
    }
    
    /* Sections */
    .section {
      margin-bottom: 2rem;
      page-break-inside: avoid;
    }
    
    .section-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e7eb;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .section-content {
      font-size: 0.95rem;
      color: #374151;
      line-height: 1.7;
      text-align: justify;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .skill-category {
      margin-bottom: 1rem;
    }

    .skill-category-title {
      font-size: 1rem;
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
    }

    .skill-item {
      font-size: 0.9rem;
      color: #374151;
      margin-bottom: 0.5rem;
      padding-left: 1.25rem;
      position: relative;
      line-height: 1.5;
    }

    .skill-item:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
      font-size: 1.2rem;
    }

    /* Soft Skills */
    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem 1rem;
    }

    /* Languages */
    .languages-list {
      display: flex;
      gap: 2rem;
    }

    .language-item {
      font-size: 0.95rem;
    }

    .language-name {
      font-weight: 600;
      color: #1f2937;
    }

    .language-level {
      color: #6b7280;
      margin-left: 0.5rem;
    }
    
    /* Experience */
    .experience-item {
      margin-bottom: 1.5rem;
      page-break-inside: avoid;
    }
    
    .experience-header {
      margin-bottom: 0.75rem;
    }
    
    .experience-role {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }
    
    .experience-company {
      font-size: 0.95rem;
      color: #1e40af;
      font-weight: 600;
    }
    
    .experience-period {
      font-size: 0.85rem;
      color: #6b7280;
      margin-left: 0.5rem;
    }
    
    .experience-tasks {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .experience-tasks li {
      padding-left: 1.5rem;
      position: relative;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      line-height: 1.6;
      color: #374151;
    }
    
    .experience-tasks li:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
    
    /* Education */
    .education-item {
      margin-bottom: 1rem;
    }
    
    .education-degree {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }
    
    .education-institution {
      font-size: 0.9rem;
      color: #1e40af;
      font-weight: 500;
    }

    .education-period {
      font-size: 0.85rem;
      color: #6b7280;
      margin-left: 0.5rem;
    }
    
    /* Certifications Grid */
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem 1rem;
    }
    
    .certification-item {
      font-size: 0.85rem;
      line-height: 1.5;
      color: #374151;
      padding-left: 1rem;
      position: relative;
    }
    
    .certification-item:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
    
    .cert-name {
      font-weight: 600;
      color: #1f2937;
    }
    
    .cert-divider {
      margin: 0 0.25rem;
      color: #9ca3af;
    }
    
    .cert-institution {
      color: #1e40af;
      font-weight: 500;
    }
    
    .cert-date {
      color: #6b7280;
      font-size: 0.8rem;
    }
    
    /* Footer */
    .footer {
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 0.8rem;
      color: #6b7280;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .cv-wrapper {
        padding: 1rem 0.5rem;
      }

      .cv-container {
        padding: 2rem 1.5rem;
      }

      .controls-bar {
        position: static;
        margin-bottom: 1rem;
      }

      .name {
        font-size: 2rem;
      }

      .skills-grid,
      .soft-skills-grid {
        grid-template-columns: 1fr;
      }

      .certifications-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .contact-info {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    
    /* ========================================
       ESTILOS PARA IMPRESSÃO
       ======================================== */
    @media print {
      body { 
        background: white;
      }
      
      .controls-bar { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 1.5cm;
      }
      
      .cv-wrapper {
        padding: 0;
        background: white;
      }
      
      .cv-container {
        box-shadow: none;
        max-width: 100%;
        padding: 0;
      }
      
      .header {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
      }
      
      .name {
        font-size: 20pt;
        margin-bottom: 0.3rem;
      }
      
      .title {
        font-size: 10pt;
      }

      .contact-info {
        font-size: 8pt;
        gap: 0.75rem;
        padding-top: 0.75rem;
      }
      
      .section {
        margin-bottom: 1.2rem;
        page-break-inside: avoid;
      }
      
      .section-title {
        font-size: 11pt;
        margin-bottom: 0.6rem;
        padding-bottom: 0.3rem;
      }
      
      .section-content {
        font-size: 9pt;
        line-height: 1.4;
      }

      .skills-grid {
        gap: 1rem;
      }

      .skill-category-title {
        font-size: 9pt;
        margin-bottom: 0.5rem;
      }

      .skill-item {
        font-size: 8pt;
        margin-bottom: 0.3rem;
        line-height: 1.3;
      }

      .soft-skills-grid {
        gap: 0.3rem 0.75rem;
      }

      .languages-list {
        gap: 1.5rem;
      }

      .language-item {
        font-size: 9pt;
      }
      
      .experience-item {
        margin-bottom: 1rem;
      }
      
      .experience-role {
        font-size: 10pt;
        margin-bottom: 0.2rem;
      }
      
      .experience-company {
        font-size: 9pt;
      }
      
      .experience-period {
        font-size: 8pt;
      }
      
      .experience-tasks li {
        font-size: 8pt;
        margin-bottom: 0.25rem;
        line-height: 1.3;
      }
      
      .education-degree {
        font-size: 9pt;
      }
      
      .education-institution {
        font-size: 8pt;
      }

      .education-period {
        font-size: 7.5pt;
      }
      
      .certifications-grid {
        gap: 0.3rem 0.75rem;
      }
      
      .certification-item {
        font-size: 7.5pt;
        line-height: 1.3;
      }
      
      .cert-date {
        font-size: 7pt;
      }
      
      .footer {
        margin-top: 1.5rem;
        padding-top: 0.75rem;
        font-size: 7pt;
      }
    }
  `}</style>
);

const ImprimirPage = () => {
  const [lang, setLang] = useState('pt');

  const handlePrint = () => window.print();

  const sectionTitles = {
    pt: {
      summary: 'RESUMO PROFISSIONAL',
      skills: 'COMPETÊNCIAS TÉCNICAS',
      softSkills: 'HABILIDADES PROFISSIONAIS',
      languages: 'IDIOMAS',
      experience: 'EXPERIÊNCIA PROFISSIONAL',
      education: 'FORMAÇÃO ACADÊMICA',
      certifications: 'CERTIFICAÇÕES E CURSOS',
      updatedOn: 'Atualizado em'
    },
    en: {
      summary: 'PROFESSIONAL SUMMARY',
      skills: 'TECHNICAL SKILLS',
      softSkills: 'PROFESSIONAL SKILLS',
      languages: 'LANGUAGES',
      experience: 'PROFESSIONAL EXPERIENCE',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS AND COURSES',
      updatedOn: 'Updated on'
    },
    es: {
      summary: 'RESUMEN PROFESIONAL',
      skills: 'COMPETENCIAS TÉCNICAS',
      softSkills: 'HABILIDADES PROFESIONALES',
      languages: 'IDIOMAS',
      experience: 'EXPERIENCIA PROFESIONAL',
      education: 'FORMACIÓN ACADÉMICA',
      certifications: 'CERTIFICACIONES Y CURSOS',
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
      <PrintStyles />
      
      {/* Controles */}
      <div className="controls-bar">
        <div className="language-selector">
          <span className="language-label">Language / Idioma</span>
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
          🖨️ {lang === 'pt' ? 'Imprimir / PDF' : lang === 'en' ? 'Print / PDF' : 'Imprimir / PDF'}
        </button>
      </div>

      <div className="cv-wrapper">
        <div className="cv-container">
          
          {/* HEADER */}
          <header className="header">
            <h1 className="name">{cvData.profile?.name || 'Nome'}</h1>
            <p className="title">{getText(cvData.profile?.title)}</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span>📧</span>
                <span>{cvData.contact?.[0]?.value}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-item">
                <span>📱</span>
                <span>{cvData.contact?.[1]?.value}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-item">
                <span>💼</span>
                <span>{cvData.contact?.[3]?.displayValue}</span>
              </div>
              <span className="contact-divider">|</span>
              <div className="contact-item">
                <span>📍</span>
                <span>São Vicente, SP</span>
              </div>
            </div>
          </header>

          {/* RESUMO PROFISSIONAL */}
          {cvData.profile?.summary && (
            <section className="section">
              <h2 className="section-title">{t.summary}</h2>
              <p className="section-content">{getText(cvData.profile.summary)}</p>
            </section>
          )}

          {/* COMPETÊNCIAS TÉCNICAS */}
          {cvData.skills && (
            <section className="section">
              <h2 className="section-title">{t.skills}</h2>
              <div className="skills-grid">
                
                {/* Coluna 1 */}
                <div>
                  {cvData.skills.principal?.length > 0 && (
                    <div className="skill-category">
                      <h3 className="skill-category-title">
                        {lang === 'pt' ? 'Principais' : lang === 'en' ? 'Main' : 'Principales'}
                      </h3>
                      {cvData.skills.principal.map((skill, index) => (
                        <div key={index} className="skill-item">{getText(skill)}</div>
                      ))}
                    </div>
                  )}

                  {cvData.skills.sistemas?.length > 0 && (
                    <div className="skill-category">
                      <h3 className="skill-category-title">
                        {lang === 'pt' ? 'Sistemas' : lang === 'en' ? 'Systems' : 'Sistemas'}
                      </h3>
                      {cvData.skills.sistemas.map((skill, index) => (
                        <div key={index} className="skill-item">{getText(skill)}</div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Coluna 2 */}
                <div>
                  {cvData.skills.infraestrutura?.length > 0 && (
                    <div className="skill-category">
                      <h3 className="skill-category-title">
                        {lang === 'pt' ? 'Infraestrutura' : lang === 'en' ? 'Infrastructure' : 'Infraestructura'}
                      </h3>
                      {cvData.skills.infraestrutura.map((skill, index) => (
                        <div key={index} className="skill-item">{getText(skill)}</div>
                      ))}
                    </div>
                  )}

                  {cvData.skills.nuvem?.length > 0 && (
                    <div className="skill-category">
                      <h3 className="skill-category-title">
                        {lang === 'pt' ? 'Cloud Computing' : lang === 'en' ? 'Cloud Computing' : 'Computación en la Nube'}
                      </h3>
                      {cvData.skills.nuvem.map((skill, index) => (
                        <div key={index} className="skill-item">{getText(skill)}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* HABILIDADES PROFISSIONAIS */}
          {cvData.softSkills?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.softSkills}</h2>
              <div className="soft-skills-grid">
                {cvData.softSkills.map((skill, index) => (
                  <div key={index} className="skill-item">{getText(skill)}</div>
                ))}
              </div>
            </section>
          )}

          {/* IDIOMAS */}
          {cvData.languages?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.languages}</h2>
              <div className="languages-list">
                {cvData.languages.map((item, index) => (
                  <div key={index} className="language-item">
                    <span className="language-name">{getText(item.language)}:</span>
                    <span className="language-level">{getText(item.level)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EXPERIÊNCIA PROFISSIONAL */}
          {cvData.experience?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.experience}</h2>
              {cvData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-role">{getText(exp.role)}</h3>
                    <div>
                      <span className="experience-company">{getText(exp.company)}</span>
                      <span className="experience-period">| {getText(exp.period)}</span>
                    </div>
                  </div>
                  {exp.tasks?.length > 0 && (
                    <ul className="experience-tasks">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{getText(task)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* FORMAÇÃO ACADÊMICA */}
          {cvData.education?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.education}</h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-degree">{getText(edu.degree)}</div>
                  <span className="education-institution">{edu.institution}</span>
                  <span className="education-period">• {getText(edu.period)}</span>
                </div>
              ))}
            </section>
          )}

          {/* CERTIFICAÇÕES */}
          {cvData.certifications?.length > 0 && (
            <section className="section">
              <h2 className="section-title">{t.certifications}</h2>
              <div className="certifications-grid">
                {cvData.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-divider">•</span>
                    <span className="cert-institution">{cert.institution}</span>
                    <span className="cert-divider">•</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FOOTER */}
          <footer className="footer">
            {t.updatedOn} {formatDate(lang)}
          </footer>
        </div>
      </div>
    </>
  );
};

export default ImprimirPage;
