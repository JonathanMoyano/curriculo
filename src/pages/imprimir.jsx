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
        font-size: 10pt;
        line-height: 1.2;
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
        padding-top: 0.5em !important;
      }
      
      .avoid-break { 
        page-break-inside: avoid; 
        break-inside: avoid;
      }
      
      h1, h2, h3 { 
        page-break-after: avoid; 
        margin-top: 0.3em;
        margin-bottom: 0.2em;
      }
      
      .section-header { 
        background: linear-gradient(135deg, #1e40af, #3b82f6) !important; 
        color: white !important;
        margin-bottom: 0 !important;
        font-size: 11pt !important;
        font-weight: 700 !important;
      }
      
      .skill-tag { 
        background: #e0f2fe !important; 
        border: 1px solid #0277bd !important; 
        color: #01579b !important;
        font-size: 8pt !important;
        padding: 0.15em 0.5em !important;
        margin: 0.1em !important;
      }
      
      .soft-skill-tag {
        background: #f0f9ff !important;
        border: 1px solid #0ea5e9 !important;
        color: #075985 !important;
        font-size: 8pt !important;
        padding: 0.15em 0.5em !important;
        margin: 0.1em !important;
      }
      
      /* Header mais compacto */
      .header-section {
        margin-bottom: 0.4em !important;
      }
      
      .profile-photo {
        width: 60px !important;
        height: 60px !important;
      }
      
      .profile-name {
        font-size: 18pt !important;
        margin-bottom: 0.1em !important;
      }
      
      .profile-title {
        font-size: 12pt !important;
        margin-bottom: 0.2em !important;
      }
      
      .contact-info {
        font-size: 8pt !important;
        gap: 0.5em !important;
      }
      
      /* Seções mais compactas */
      .content-section {
        margin-bottom: 0.3em !important;
      }
      
      .section-content {
        padding: 0.4em !important;
        font-size: 9pt !important;
      }
      
      /* Experiência mais compacta */
      .experience-item {
        margin-bottom: 0.3em !important;
        padding-bottom: 0.2em !important;
      }
      
      .experience-title {
        font-size: 10pt !important;
        margin-bottom: 0.1em !important;
      }
      
      .experience-company {
        font-size: 9pt !important;
        margin-bottom: 0.2em !important;
      }
      
      .experience-tasks {
        font-size: 8pt !important;
        line-height: 1.1 !important;
        margin-left: 0.8em !important;
      }
      
      .experience-tasks li {
        margin-bottom: 0.05em !important;
      }
      
      /* Cursos otimizados */
      .courses-grid {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0.3em !important;
        margin-bottom: 0.4em !important;
      }
      
      .course-card {
        padding: 0.3em !important;
        margin-bottom: 0 !important;
        border: 1px solid #e5e7eb !important;
        border-radius: 4px !important;
      }
      
      .course-title {
        font-size: 8pt !important;
        font-weight: 600 !important;
        margin-bottom: 0.1em !important;
        line-height: 1.1 !important;
      }
      
      .course-institution {
        font-size: 7pt !important;
        margin-bottom: 0.1em !important;
      }
      
      .course-date {
        font-size: 7pt !important;
      }
      
      .course-description {
        font-size: 7pt !important;
        line-height: 1.1 !important;
        margin-top: 0.1em !important;
      }
      
      /* Categories headers */
      .category-header {
        font-size: 10pt !important;
        margin-bottom: 0.3em !important;
        margin-top: 0.4em !important;
        padding-bottom: 0.1em !important;
      }
      
      .category-count {
        font-size: 7pt !important;
      }
      
      /* Footer */
      .print-footer {
        margin-top: 0.5em !important;
        padding-top: 0.3em !important;
        font-size: 8pt !important;
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
            <section className="text-center mb-4 relative avoid-break header-section">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-lg -m-2"></div>
              <div className="relative z-10 p-3">
                <div className="flex items-center justify-center mb-2">
                  <img 
                    src={cvData.profile.image} 
                    alt={cvData.profile.name}
                    className="profile-photo w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover mr-4"
                  />
                  <div className="text-left">
                    <h1 className="profile-name text-2xl font-bold text-gray-900 mb-1">{cvData.profile.name}</h1>
                    <h2 className="profile-title text-lg text-blue-700 font-semibold">{cvData.profile.title}</h2>
                  </div>
                </div>
                <div className="contact-info flex justify-center flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
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
            <section className="mb-3 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 px-3 py-2 rounded-t-lg section-header">
                💼 Resumo Profissional
              </h3>
              <div className="bg-gray-50 p-3 rounded-b-lg border border-gray-200 section-content">
                <p className="text-gray-700 leading-relaxed text-justify">{cvData.profile.summary}</p>
              </div>
            </section>

            {/* Skills - Layout Otimizado */}
            <section className="mb-3 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-500 px-3 py-2 rounded-t-lg section-header">
                ⚡ Competências Técnicas
              </h3>
              <div className="bg-gray-50 p-3 rounded-b-lg border border-gray-200 space-y-3 section-content">
                <div className="grid grid-cols-2 gap-4">
                  {/* Coluna 1 */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Suporte & Hardware</h4>
                      <div className="flex flex-wrap gap-1">
                        {cvData.skills.principal.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Infraestrutura & Redes</h4>
                      <div className="flex flex-wrap gap-1">
                        {cvData.skills.infraestrutura.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Coluna 2 */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Sistemas Operacionais</h4>
                      <div className="flex flex-wrap gap-1">
                        {cvData.skills.sistemas.map((skill, index) => (
                          <SkillTag key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Tecnologias em Nuvem</h4>
                      <div className="flex flex-wrap gap-1">
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
            <section className="mb-3 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-500 px-3 py-2 rounded-t-lg section-header">
                🤝 Competências Comportamentais
              </h3>
              <div className="bg-gray-50 p-3 rounded-b-lg border border-gray-200 section-content">
                <div className="flex flex-wrap gap-1">
                  {cvData.softSkills.map((skill, index) => (
                    <SoftSkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-3 content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-purple-700 to-purple-600 px-3 py-2 rounded-t-lg section-header">
                🚀 Experiência Profissional
              </h3>
              <div className="bg-gray-50 p-3 rounded-b-lg border border-gray-200 space-y-3 section-content">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-3 py-2 avoid-break experience-item">
                    <h4 className="experience-title font-semibold text-gray-900">{job.role}</h4>
                    <p className="experience-company font-medium text-purple-700">
                      {job.company} | <span className="text-gray-600 font-normal">{job.period}</span>
                    </p>
                    <ul className="experience-tasks list-disc pl-4 mt-1 text-gray-700 space-y-0">
                      {job.tasks.slice(0, 4).map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-3 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-600 px-3 py-2 rounded-t-lg section-header">
                🎓 Formação Acadêmica
              </h3>
              <div className="bg-gray-50 p-3 rounded-b-lg border border-gray-200 section-content">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-3 py-1">
                    <h4 className="text-sm font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="font-medium text-indigo-700 text-xs">
                      {edu.institution} - <span className="text-gray-600 font-normal">{edu.status}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Page Break for Courses */}
            <div className="page-break"></div>
            
            {/* Detailed Courses Section - Otimizada */}
            <section>
              <h3 className="text-lg font-bold text-white bg-gradient-to-r from-orange-700 to-orange-600 px-4 py-3 rounded-lg section-header mb-3">
                📚 Formação Complementar ({cvData.courses.length} cursos)
              </h3>
              
              <div className="space-y-4">
                {sortedCategories.map(([category, courses]) => (
                  <div key={category} className="avoid-break">
                    <h4 className="category-header font-semibold text-orange-800 border-b-2 border-orange-200 pb-1 flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="mr-2">
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
                      <span className="category-count bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        {courses.length}
                      </span>
                    </h4>
                    
                    <div className="courses-grid mt-2">
                      {courses
                        .sort((a, b) => {
                          const dateA = new Date(a.date.replace(/de /g, ''));
                          const dateB = new Date(b.date.replace(/de /g, ''));
                          return dateB - dateA;
                        })
                        .map((course, index) => (
                        <div key={index} className="course-card bg-white border rounded avoid-break">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="course-title text-gray-900 flex-1 pr-1">
                              {course.title}
                            </h5>
                            <span className="course-date text-gray-600 whitespace-nowrap bg-gray-100 px-1 py-0.5 rounded text-xs">
                              {course.date}
                            </span>
                          </div>
                          
                          <p className="course-institution text-orange-700 font-medium">
                            {course.institution}
                          </p>
                          
                          {course.description && course.description.length > 0 && (
                            <p className="course-description text-gray-600">
                              {course.description.length > 100 
                                ? course.description.substring(0, 100) + '...' 
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
            <footer className="print-footer mt-4 pt-3 border-t border-gray-200 text-center text-gray-500">
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
