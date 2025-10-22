import React, { useState } from 'react';
import { cvData } from '@/data/cv-data';

const PrintStylesV2 = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    /* ========================================
      ESTILOS PARA VISUALIZAÇÃO NA TELA
      (Mantém layout original com 2 colunas e foto)
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

    .no-print {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    /* COLUNA LATERAL ESQUERDA - 30% (TELA) */
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
    
    .skill-text {
      font-size: 0.8rem;
      line-height: 1.6;
      margin-bottom: 0.4rem;
      color: rgba(255,255,255,0.95);
    }
    
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
    
    /* COLUNA PRINCIPAL DIREITA - 70% (TELA) */
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
    
    .footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
      font-size: 0.75rem;
      color: #6b7280;
      text-align: center;
    }
    
    /* ========================================
       RESPONSIVIDADE MOBILE
       ======================================== */
    @media (max-width: 768px) {
      .cv-wrapper {
        padding: 0;
        min-height: auto;
        background: white;
      }
      
      .cv-container {
        flex-direction: column;
        min-height: auto;
        box-shadow: none;
        width: 100%;
      }
      
      .no-print {
        position: static !important;
        top: auto !important;
        right: auto !important;
        flex-direction: column !important;
        gap: 0.5rem !important;
        padding: 1rem;
        width: 100%;
        background: #f3f4f6;
        border-bottom: 2px solid #e5e7eb;
      }

      .no-print > div {
        width: 100% !important;
      }

      .sidebar {
        width: 100%;
        padding: 1.5rem 1rem;
      }

      .main-content {
        width: 100%;
        padding: 1.5rem 1rem;
      }

      .name-title {
        font-size: 2rem;
      }

      .job-title {
        font-size: 1rem;
      }

      .section-title-main {
        font-size: 1.1rem;
      }

      .profile-photo-sidebar {
        width: 100px;
        height: 100px;
      }
    }

    /* ========================================
       ESTILOS PARA IMPRESSÃO (OTIMIZADO PARA ATS)
       Layout simplificado SEM FOTO e SEM COLUNAS
       ======================================== */
    @media print {
      body { 
        -webkit-print-color-adjust: exact; 
        print-color-adjust: exact;
        font-size: 9pt;
        line-height: 1.3;
        margin: 0;
        padding: 0;
        background: white;
        color: #000;
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
        display: block !important;
        flex-direction: column !important;
        width: 100%;
        max-width: none;
        box-shadow: none;
        margin: 0;
        background: white;
      }
      
      /* ESCONDE A SIDEBAR AZUL NA IMPRESSÃO */
      .sidebar {
        display: none !important;
      }
      
      /* MAIN CONTENT OCUPA 100% NA IMPRESSÃO */
      .main-content {
        width: 100% !important;
        padding: 0 !important;
        background: white !important;
      }
      
      /* HEADER SIMPLIFICADO PARA IMPRESSÃO */
      .header-main {
        margin-bottom: 1em;
        padding-bottom: 0.5em;
        border-bottom: 2px solid #000;
        page-break-after: avoid;
      }
      
      .name-title {
        font-size: 18pt;
        font-weight: 700;
        color: #000;
        margin-bottom: 0.3em;
      }
      
      .job-title {
        font-size: 10pt;
        color: #333;
        margin-bottom: 0.5em;
      }

      /* ADICIONA INFORMAÇÕES DE CONTATO NO HEADER PARA IMPRESSÃO */
      .header-main::after {
        content: "Email: jonathan.moyano@outlook.com.br | Tel: (13) 97412-4438 | LinkedIn: linkedin.com/in/jonathansouzamoyano | São Vicente, SP";
        display: block;
        font-size: 8pt;
        color: #333;
        margin-top: 0.5em;
        padding-top: 0.5em;
        border-top: 1px solid #ddd;
      }
      
      .section-main {
        margin-bottom: 0.9em;
        page-break-inside: avoid;
      }
      
      .section-title-main {
        font-size: 10pt;
        font-weight: 700;
        color: #000;
        margin-bottom: 0.4em;
        padding-bottom: 0.3em;
        border-bottom: 1px solid #000;
        text-transform: uppercase;
      }
      
      .section-content-main {
        font-size: 8.5pt;
        line-height: 1.35;
        color: #000;
        text-align: justify;
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
        font-weight: 700;
        color: #000;
        margin-bottom: 0.1em;
      }
      
      .experience-company {
        font-size: 8.5pt;
        color: #000;
        font-weight: 600;
      }
      
      .experience-period {
        font-size: 7.5pt;
        color: #333;
      }
      
      .experience-tasks li {
        padding-left: 1em;
        margin-bottom: 0.2em;
        font-size: 7.5pt;
        line-height: 1.3;
        color: #000;
      }
      
      .experience-tasks li:before {
        color: #000;
      }
      
      .education-item {
        margin-bottom: 0.5em;
      }
      
      .education-degree {
        font-size: 9pt;
        color: #000;
      }
      
      .education-institution {
        font-size: 8pt;
        color: #000;
      }
      
      /* CURSOS EM 3 COLUNAS PARA IMPRESSÃO */
      .courses-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.2em 0.8em;
        margin-top: 0.3em;
      }
      
      .course-item-simple {
        font-size: 7pt;
        line-height: 1.3;
        margin-bottom: 0;
        page-break-inside: avoid;
        color: #000;
      }
      
      .course-item-simple:before {
        color: #000;
        margin-right: 0.3rem;
      }
      
      .course-name {
        color: #000;
      }
      
      .course-institution {
        color: #000;
      }
      
      .course-date {
        font-size: 6.5pt;
        color: #333;
      }
      
      .footer {
        margin-top: 0.8em;
        padding-top: 0.4em;
        font-size: 6.5pt;
        color: #666;
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
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
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
          {/* SIDEBAR ESQUERDA (VISÍVEL NA TELA, OCULTA NA IMPRESSÃO) */}
          <aside className="sidebar">
            {/* Foto */}
            <img 
              src={cvData.profile?.image || '/jonathan.jpeg'} 
              alt={cvData.profile?.name || 'Jonathan Souza Moyano'}
              className="profile-photo-sidebar"
            />

            {/* Endereço */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.address}</h3>
              <div className="sidebar-content">
                <div className="contact-item">
                  <span>{cvData.profile?.address || ''}</span>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.contact}</h3>
              <div className="sidebar-content">
                {cvData.contact?.map((item, index) => (
                  <div key={index} className="contact-item">
                    <span>
                      {item.displayValue || item.value}
                      {item.label && ` (${item.label})`}
                    </span>
                  </div>
                )) || null}
              </div>
            </div>

            {/* Competências Técnicas */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.skills}</h3>
              <div className="sidebar-content">
                {[
                  ...(cvData.skills?.principal || []),
                  ...(cvData.skills?.sistemas || []),
                  ...(cvData.skills?.infraestrutura || []),
                  ...(cvData.skills?.nuvem || [])
                ].map((skill, index) => {
                  const skillText = getText(skill);
                  return <div key={index} className="skill-text">• {skillText}</div>;
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.softSkills}</h3>
              <div className="sidebar-content">
                {cvData.softSkills?.slice(0, 6).map((skill, index) => {
                  const skillText = getText(skill);
                  return <div key={index} className="skill-text">• {skillText}</div>;
                }) || null}
              </div>
            </div>

            {/* Idiomas */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t.languages}</h3>
              <div className="sidebar-content">
                {cvData.languages?.map((item, index) => (
                  <div key={index} className="language-item-sidebar">
                    <div className="language-name">{getText(item.language)}</div>
                    <div className="language-level">{getText(item.level)}</div>
                  </div>
                )) || null}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT DIREITA */}
          <main className="main-content">
            {/* HEADER */}
            <header className="header-main">
              <h1 className="name-title">{cvData.profile?.name || 'Nome'}</h1>
              <p className="job-title">{getText(cvData.profile?.title)}</p>
            </header>

            {/* OBJETIVO */}
            {cvData.profile?.objective && (
              <section className="section-main">
                <h2 className="section-title-main">{t.objective}</h2>
                <p className="section-content-main">{getText(cvData.profile.objective)}</p>
              </section>
            )}

            {/* RESUMO PROFISSIONAL */}
            {cvData.profile?.summary && (
              <section className="section-main">
                <h2 className="section-title-main">{t.summary}</h2>
                <p className="section-content-main">{getText(cvData.profile.summary)}</p>
              </section>
            )}

            {/* EXPERIÊNCIA PROFISSIONAL */}
            <section className="section-main">
              <h2 className="section-title-main">{t.experience}</h2>
              {cvData.experience?.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-role">{getText(exp.role)}</h3>
                    <div>
                      <span className="experience-company">{getText(exp.company)}</span>
                      <span className="experience-period"> | {getText(exp.period)}</span>
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
              )) || null}
            </section>

            {/* FORMAÇÃO ACADÊMICA */}
            <section className="section-main">
              <h2 className="section-title-main">{t.education}</h2>
              {cvData.education?.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-degree">{getText(edu.degree)}</div>
                  <div>
                    <span className="education-institution">{edu.institution}</span>
                    <span> • {getText(edu.period)}</span>
                  </div>
                </div>
              )) || null}
            </section>

            {/* FORMAÇÃO COMPLEMENTAR */}
            <section className="section-main">
              <h2 className="section-title-main">{t.courses}</h2>
              <div className="courses-list">
                {cvData.certifications?.map((course, index) => (
                  <div key={index} className="course-item-simple">
                    <span className="course-name">{course.name}</span>
                    <span className="course-divider">•</span>
                    <span className="course-institution">{course.institution}</span>
                    <span className="course-divider">•</span>
                    <span className="course-date">{course.date}</span>
                  </div>
                )) || null}
              </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
              {t.updatedOn} {formatDate(lang)}
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrintPageV2;