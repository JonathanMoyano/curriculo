// src/pages/imprimir.jsx

import React from 'react';
import { cvData } from '@/data/cv-data';

const PrintStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    @media print {
      * {
        box-sizing: border-box;
      }
      
      body { 
        -webkit-print-color-adjust: exact; 
        font-family: 'Inter', sans-serif; 
        font-size: 9.5pt;
        line-height: 1.15;
        color: #1f2937;
        margin: 0;
        padding: 0;
      }
      
      .no-print { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 0.5cm; 
      }
      
      .print-container {
        max-width: none !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: white !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }
      
      .print-content {
        padding: 0 !important;
        margin: 0 !important;
      }
      
      .page-break { 
        page-break-before: always; 
        margin-top: 0 !important;
        padding-top: 0.3em !important;
      }
      
      .avoid-break { 
        page-break-inside: avoid; 
        break-inside: avoid;
      }
      
      h1, h2, h3 { 
        page-break-after: avoid; 
        margin-top: 0.25em;
        margin-bottom: 0.15em;
      }
      
      .section-header { 
        background: linear-gradient(135deg, #1e40af, #3b82f6) !important; 
        color: white !important;
        margin-bottom: 0 !important;
        font-size: 10.5pt !important;
        font-weight: 700 !important;
        padding: 0.35em 0.6em !important;
      }
      
      .skill-tag { 
        background: #e0f2fe !important; 
        border: 1px solid #0277bd !important; 
        color: #01579b !important;
        font-size: 7.5pt !important;
        padding: 0.12em 0.45em !important;
        margin: 0.08em !important;
      }
      
      .soft-skill-tag {
        background: #f0f9ff !important;
        border: 1px solid #0ea5e9 !important;
        color: #075985 !important;
        font-size: 7.5pt !important;
        padding: 0.12em 0.45em !important;
        margin: 0.08em !important;
      }
      
      /* Header mais compacto */
      .header-section {
        margin-bottom: 0.35em !important;
      }
      
      .profile-photo {
        width: 55px !important;
        height: 55px !important;
      }
      
      .profile-name {
        font-size: 17pt !important;
        margin-bottom: 0.08em !important;
      }
      
      .profile-title {
        font-size: 11pt !important;
        margin-bottom: 0.15em !important;
      }
      
      .contact-info {
        font-size: 7.5pt !important;
        gap: 0.4em !important;
      }
      
      /* Seções mais compactas */
      .content-section {
        margin-bottom: 0.25em !important;
      }
      
      .section-content {
        padding: 0.35em !important;
        font-size: 8.5pt !important;
      }
      
      /* Experiência mais compacta */
      .experience-item {
        margin-bottom: 0.25em !important;
        padding-bottom: 0.15em !important;
      }
      
      .experience-title {
        font-size: 9.5pt !important;
        margin-bottom: 0.08em !important;
      }
      
      .experience-company {
        font-size: 8.5pt !important;
        margin-bottom: 0.15em !important;
      }
      
      .experience-tasks {
        font-size: 7.5pt !important;
        line-height: 1.08 !important;
        margin-left: 0.7em !important;
      }
      
      .experience-tasks li {
        margin-bottom: 0.03em !important;
      }
      
      /* Idiomas */
      .languages-section {
        display: flex !important;
        gap: 0.8em !important;
        font-size: 8.5pt !important;
      }
      
      .language-item {
        display: flex !important;
        align-items: center !important;
        gap: 0.3em !important;
      }
      
      /* Cursos otimizados - 3 COLUNAS */
      .courses-grid {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 0.25em !important;
        margin-bottom: 0.3em !important;
      }
      
      .course-card {
        padding: 0.25em !important;
        margin-bottom: 0 !important;
        border: 1px solid #e5e7eb !important;
        border-radius: 3px !important;
      }
      
      .course-title {
        font-size: 7pt !important;
        font-weight: 600 !important;
        margin-bottom: 0.08em !important;
        line-height: 1.05 !important;
      }
      
      .course-institution {
        font-size: 6.5pt !important;
        margin-bottom: 0.08em !important;
      }
      
      .course-date {
        font-size: 6.5pt !important;
      }
      
      .course-description {
        font-size: 6.5pt !important;
        line-height: 1.05 !important;
        margin-top: 0.08em !important;
      }
      
      /* Categories headers */
      .category-header {
        font-size: 9.5pt !important;
        margin-bottom: 0.25em !important;
        margin-top: 0.35em !important;
        padding-bottom: 0.08em !important;
      }
      
      .category-count {
        font-size: 6.5pt !important;
      }
      
      /* Footer */
      .print-footer {
        margin-top: 0.4em !important;
        padding-top: 0.25em !important;
        font-size: 7.5pt !important;
      }
    }

    @media screen {
      body { font-family: 'Inter', sans-serif; background: #f8fafc; }
    }
  `}</style>
);

const SkillTag = ({ skill }) => (
  <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 skill-tag">
    {skill}
  </span>
);

const SoftSkillTag = ({ skill }) => (
  <span className="inline-block bg-cyan-50 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full border border-cyan-200 soft-skill-tag">
    {skill}
  </span>
);

const PrintPage = () => {
  const handlePrint = () => window.print();

  // Agrupar cursos por categoria com melhor organização
  const coursesByCategory = cvData.courses.reduce((acc, course) => {
    let category = course.category;
    
    // Unificar categorias similares
    if (category === 'Linux' || category === 'Windows') {
      category = 'Sistemas Operacionais';
    }
    if (category === 'AWS' || category === 'Azure' || category === 'Cloud Computing') {
      category = 'Cloud Computing';
    }
    
    if (!acc[category]) acc[category] = [];
    acc[category].push(course);
    return acc;
  }, {});

  // Ordenar categorias por relevância e quantidade
  const categoryOrder = [
    'Redes',
    'Sistemas Operacionais', 
    'Cloud Computing',
    'Infraestrutura',
    'Hardware',
    'Desenvolvimento',
    'Dados & IA'
  ];

  const sortedCategories = Object.entries(coursesByCategory)
    .sort(([a], [b]) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });

  return (
    <>
      <PrintStyles />
      <div className="min-h-screen bg-gray-50 py-4 px-3">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print-container">
          
          {/* Print Button */}
          <button 
            onClick={handlePrint} 
            className="no-print fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl z-50 font-medium text-sm"
          >
            🖨️ Imprimir / Salvar PDF
          </button>

          <div className="p-4 print-content">
            {/* Header Section - Mais Compacto */}
            <section className="text-center mb-3 relative avoid-break header-section">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-lg -m-2"></div>
              <div className="relative z-10 p-2.5">
                <div className="flex items-center justify-center mb-1.5">
                  <img 
                    src={cvData.profile.image} 
                    alt={cvData.profile.name}
                    className="profile-photo w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover mr-3"
                  />
                  <div className="text-left">
                    <h1 className="profile-name text-2xl font-bold text-gray-900 mb-0.5">{cvData.profile.name}</h1>
                    <h2 className="profile-title text-base text-blue-700 font-semibold">{cvData.profile.title}</h2>
                  </div>
                </div>
                <div className="contact-info flex justify-center flex-wrap gap-x-2.5 gap-y-0.5 text-xs text-gray-600">
                  <span>📧 {cvData.contact.find(c => c.type === 'email')?.value}</span>
                  <span className="text-gray-400">•</span>
                  <span>📱 {cvData.contact.find(c => c.type === 'phone')?.value}</span>
                  <span className="text-gray-400">•</span>
                  <span>💼 {cvData.contact.find(c => c.type === 'linkedin')?.displayValue}</span>
                  <span className="text-gray-400">•</span>
                  <span>💻 {cvData.contact.find(c => c.type === 'github')?.displayValue}</span>
                </div>
              </div>
            </section>

            {/* Professional Summary */}
            <section className="mb-2.5 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 px-2.5 py-1.5 rounded-t-lg section-header">
                💼 Resumo Profissional
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 section-content">
                <p className="text-gray-700 leading-relaxed text-justify">{cvData.profile.summary}</p>
              </div>
            </section>

            {/* Skills - Layout Otimizado */}
            <section className="mb-2.5 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-500 px-2.5 py-1.5 rounded-t-lg section-header">
                ⚡ Competências Técnicas
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 space-y-2.5 section-content">
                <div className="grid grid-cols-2 gap-3">
                  {/* Coluna 1 */}
                  <div className="space-y-1.5">
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-0.5 uppercase tracking-wide">Suporte & Hardware</h4>
                      <div className="flex flex-wrap gap-0.5">
                        {cvData.skills.principal.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-0.5 uppercase tracking-wide">Infraestrutura & Redes</h4>
                      <div className="flex flex-wrap gap-0.5">
                        {cvData.skills.infraestrutura.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Coluna 2 */}
                  <div className="space-y-1.5">
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-0.5 uppercase tracking-wide">Sistemas Operacionais e ERP</h4>
                      <div className="flex flex-wrap gap-0.5">
                        {cvData.skills.sistemas.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-0.5 uppercase tracking-wide">Tecnologias em Nuvem</h4>
                      <div className="flex flex-wrap gap-0.5">
                        {cvData.skills.nuvem.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills */}
            <section className="mb-2.5 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-500 px-2.5 py-1.5 rounded-t-lg section-header">
                🤝 Competências Comportamentais
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 section-content">
                <div className="flex flex-wrap gap-0.5">
                  {cvData.softSkills.map((skill, index) => (
                    <SoftSkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="mb-2.5 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-purple-500 px-2.5 py-1.5 rounded-t-lg section-header">
                🌍 Idiomas
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 section-content">
                <div className="languages-section">
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className="language-item">
                      <span className="font-semibold text-gray-900">{lang.language}:</span>
                      <span className="text-gray-700">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-2.5 content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-600 px-2.5 py-1.5 rounded-t-lg section-header">
                🚀 Experiência Profissional
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 space-y-2.5 section-content">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-2.5 py-1.5 avoid-break experience-item">
                    <h4 className="experience-title font-semibold text-gray-900">{job.role}</h4>
                    <p className="experience-company font-medium text-indigo-700">
                      {job.company} | <span className="text-gray-600 font-normal">{job.period}</span>
                    </p>
                    <ul className="experience-tasks list-disc pl-3.5 mt-0.5 text-gray-700 space-y-0">
                      {job.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-2.5 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 px-2.5 py-1.5 rounded-t-lg section-header">
                🎓 Formação Acadêmica
              </h3>
              <div className="bg-gray-50 p-2.5 rounded-b-lg border border-gray-200 section-content">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-2.5 py-0.5">
                    <h4 className="text-sm font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="font-medium text-blue-700 text-xs">
                      {edu.institution} - <span className="text-gray-600 font-normal">{edu.status}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Page Break for Courses */}
            <div className="page-break"></div>
            
            {/* Detailed Courses Section - 3 COLUNAS */}
            <section>
              <h3 className="text-base font-bold text-white bg-gradient-to-r from-orange-700 to-orange-600 px-3 py-2.5 rounded-lg section-header mb-2.5">
                📚 Formação Complementar ({cvData.courses.length} cursos)
              </h3>
              
              <div className="space-y-3">
                {sortedCategories.map(([category, courses]) => (
                  <div key={category} className="avoid-break">
                    <h4 className="category-header font-semibold text-orange-800 border-b-2 border-orange-200 pb-0.5 flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="mr-1.5">
                          {category === 'Redes' && '🌐'}
                          {category === 'Sistemas Operacionais' && '💻'}
                          {category === 'Cloud Computing' && '☁️'}
                          {category === 'Desenvolvimento' && '⚡'}
                          {category === 'Infraestrutura' && '🏗️'}
                          {category === 'Hardware' && '🔧'}
                          {category === 'Dados & IA' && '🤖'}
                          {!['Redes', 'Sistemas Operacionais', 'Cloud Computing', 'Desenvolvimento', 'Infraestrutura', 'Hardware', 'Dados & IA'].includes(category) && '📚'}
                        </span>
                        {category === 'Cloud Computing' ? 'Cloud Computing & Virtualização' : category}
                      </span>
                      <span className="category-count bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full">
                        {courses.length}
                      </span>
                    </h4>
                    
                    <div className="courses-grid mt-1.5">
                      {courses
                        .sort((a, b) => {
                          const dateA = new Date(a.date.replace(/de /g, ''));
                          const dateB = new Date(b.date.replace(/de /g, ''));
                          return dateB - dateA;
                        })
                        .map((course, index) => (
                        <div key={index} className="course-card bg-white border rounded avoid-break">
                          <div className="flex justify-between items-start mb-0.5">
                            <h5 className="course-title text-gray-900 flex-1 pr-0.5">
                              {course.title}
                            </h5>
                            <span className="course-date text-gray-600 whitespace-nowrap bg-gray-100 px-0.5 py-0.5 rounded text-xs">
                              {course.date}
                            </span>
                          </div>
                          
                          <p className="course-institution text-orange-700 font-medium">
                            {course.institution}
                          </p>
                          
                          {course.description && course.description.length > 0 && (
                            <p className="course-description text-gray-600">
                              {course.description.length > 85 
                                ? course.description.substring(0, 85) + '...' 
                                : course.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="print-footer mt-3 pt-2.5 border-t border-gray-200 text-center text-gray-500">
              <div className="flex justify-between items-center">
                <p>📅 Atualizado em {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p>📊 Total: <strong>{cvData.courses.length} cursos concluídos</strong></p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPage;
