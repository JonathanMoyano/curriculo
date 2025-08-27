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
        font-size: 9pt;
        line-height: 1.1;
        color: #1f2937;
        margin: 0;
        padding: 0;
      }
      
      .no-print { 
        display: none !important; 
      }
      
      @page { 
        size: A4; 
        margin: 0.5cm 0.6cm; 
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
        padding-top: 0 !important;
      }
      
      .avoid-break { 
        page-break-inside: avoid; 
        break-inside: avoid;
      }
      
      h1, h2, h3 { 
        page-break-after: avoid; 
        margin-top: 0.2em;
        margin-bottom: 0.15em;
      }
      
      .section-header { 
        background: linear-gradient(135deg, #1e40af, #3b82f6) !important; 
        color: white !important;
        margin-bottom: 0 !important;
      }
      
      .skill-tag { 
        background: #e0f2fe !important; 
        border: 1px solid #0277bd !important; 
      }
      
      .soft-skill-tag {
        background: #e0f2fe !important;
        border: 1px solid #0277bd !important;
        color: #01579b !important;
      }
      
      /* Remover espaçamentos excessivos */
      .header-section {
        margin-bottom: 0.5em !important;
      }
      
      .content-section {
        margin-bottom: 0.4em !important;
      }
      
      .section-content {
        padding: 0.3em !important;
      }
      
      /* Otimizar espaços entre elementos */
      .experience-item,
      .education-item,
      .course-item {
        margin-bottom: 0.25em !important;
        padding-bottom: 0.15em !important;
      }
      
      /* Reduzir espaços nos cursos */
      .courses-grid {
        gap: 0.2em !important;
      }
      
      .course-card {
        padding: 0.25em !important;
        margin-bottom: 0.1em !important;
      }
      
      /* Footer mais compacto */
      .print-footer {
        margin-top: 0.5em !important;
        padding-top: 0.3em !important;
      }
    }

    @media screen {
      body { font-family: 'Inter', sans-serif; background: #f8fafc; }
    }
  `}</style>
);

const SkillTag = ({ skill }) => (
  <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 skill-tag m-1">
    {skill}
  </span>
);

const SoftSkillTag = ({ skill }) => (
  <span className="inline-block bg-cyan-50 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full border border-cyan-200 soft-skill-tag m-1">
    {skill}
  </span>
);

const PrintPage = () => {
  const handlePrint = () => window.print();

  const coursesByCategory = cvData.courses.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {});

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

          <div className="p-3 print-content">
            {/* Header Section */}
            <section className="text-center mb-3 relative avoid-break header-section">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-lg -m-2"></div>
              <div className="relative z-10 p-2">
                <div className="flex items-center justify-center mb-2">
                  <img 
                    src={cvData.profile.image} 
                    alt={cvData.profile.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover mr-4"
                  />
                  <div className="text-left">
                    <h1 className="text-2xl font-bold text-gray-900 mb-0.5">{cvData.profile.name}</h1>
                    <h2 className="text-base text-blue-700 font-semibold">{cvData.profile.title}</h2>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap gap-x-2 gap-y-0.5 text-xs text-gray-600">
                  <span>📧 {cvData.contact.find(c => c.type === 'email').value}</span>
                  <span className="text-gray-400">•</span>
                  <span>📱 {cvData.contact.find(c => c.type === 'phone').value}</span>
                  <span className="text-gray-400">•</span>
                  <span>💼 {cvData.contact.find(c => c.type === 'linkedin').displayValue}</span>
                  <span className="text-gray-400">•</span>
                  <span>💻 {cvData.contact.find(c => c.type === 'github').displayValue}</span>
                </div>
              </div>
            </section>

            {/* Professional Summary */}
            <section className="mb-2 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 px-3 py-1.5 rounded-t-lg section-header">
                💼 Resumo Profissional
              </h3>
              <div className="bg-gray-50 p-2 rounded-b-lg border border-gray-200 section-content">
                <p className="text-gray-700 leading-tight text-justify text-xs">{cvData.profile.summary}</p>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-2 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-500 px-3 py-1.5 rounded-t-lg">
                ⚡ Competências Técnicas
              </h3>
              <div className="bg-gray-50 p-2 rounded-b-lg border border-gray-200 space-y-2 section-content">
                {/* Suporte & Hardware */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Suporte & Hardware</h4>
                  <div className="flex flex-wrap gap-0.5">
                    {cvData.skills.principal.map((skill, index) => (
                      <SkillTag key={index} skill={skill} />
                    ))}
                  </div>
                </div>
                
                {/* Sistemas Operacionais */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Sistemas Operacionais</h4>
                  <div className="flex flex-wrap gap-0.5">
                    {cvData.skills.sistemas.map((skill, index) => (
                      <SkillTag key={index} skill={skill} />
                    ))}
                  </div>
                </div>
                
                {/* Infraestrutura & Redes */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Infraestrutura & Redes</h4>
                  <div className="flex flex-wrap gap-0.5">
                    {cvData.skills.infraestrutura.map((skill, index) => (
                      <SkillTag key={index} skill={skill} />
                    ))}
                  </div>
                </div>
                
                {/* Tecnologias em Nuvem */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">Tecnologias em Nuvem</h4>
                  <div className="flex flex-wrap gap-0.5">
                    {cvData.skills.nuvem.map((skill, index) => (
                      <SkillTag key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Soft Skills */}
            <section className="mb-2 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-cyan-500 px-3 py-1.5 rounded-t-lg">
                🤝 Competências Comportamentais
              </h3>
              <div className="bg-gray-50 p-2 rounded-b-lg border border-gray-200 section-content">
                <div className="flex flex-wrap gap-0.5">
                  {cvData.softSkills.map((skill, index) => (
                    <SoftSkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-2 content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-purple-700 to-purple-600 px-3 py-1.5 rounded-t-lg section-header">
                🚀 Experiência Profissional
              </h3>
              <div className="bg-gray-50 p-2 rounded-b-lg border border-gray-200 space-y-2 section-content">
                {cvData.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-3 py-1.5 avoid-break experience-item">
                    <h4 className="text-sm font-semibold text-gray-900">{job.role}</h4>
                    <p className="font-medium text-purple-700 text-xs">
                      {job.company} | <span className="text-gray-600 font-normal">{job.period}</span>
                    </p>
                    <ul className="list-disc pl-3 mt-1 text-gray-700 text-xs space-y-0">
                      {job.tasks.map((task, taskIndex) => <li key={taskIndex}>{task}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-2 avoid-break content-section">
              <h3 className="text-sm font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-600 px-3 py-1.5 rounded-t-lg section-header">
                🎓 Formação Acadêmica
              </h3>
              <div className="bg-gray-50 p-2 rounded-b-lg border border-gray-200 section-content">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-3 py-1.5 education-item">
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
            
            {/* Detailed Courses Section */}
            <section>
              <h3 className="text-lg font-bold text-white bg-gradient-to-r from-orange-700 to-orange-600 px-4 py-3 rounded-lg section-header mb-3">
                📚 Cursos por Categoria
              </h3>
              
              <div className="space-y-4">
                {Object.entries(coursesByCategory)
                  .sort(([,a], [,b]) => b.length - a.length)
                  .map(([category, courses]) => (
                  <div key={category} className="avoid-break">
                    <h4 className="text-sm font-semibold text-orange-800 mb-2 border-b-2 border-orange-200 pb-1 flex items-center">
                      <span className="mr-2">
                        {category === 'Redes' && '🌐'}
                        {category === 'Sistemas Operacionais' && '💻'}
                        {category === 'Cloud' && '☁️'}
                        {category === 'Desenvolvimento' && '💻'}
                        {category === 'Infraestrutura' && '🏗️'}
                        {category === 'Hardware' && '🔧'}
                        {category === 'Dados & IA' && '🤖'}
                      </span>
                      {category === 'Redes' && 'Redes & Infraestrutura de Rede'}
                      {category === 'Sistemas Operacionais' && 'Sistemas Operacionais'}
                      {category === 'Cloud' && 'Cloud Computing & Virtualização'}
                      {category === 'Desenvolvimento' && 'Desenvolvimento & Programação'}
                      {category === 'Infraestrutura' && 'Infraestrutura de TI'}
                      {category === 'Hardware' && 'Hardware & Eletrônica'}
                      {category === 'Dados & IA' && 'Dados & Inteligência Artificial'}
                      <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        {courses.length} cursos
                      </span>
                    </h4>
                    
                    <div className="grid gap-1 courses-grid">
                      {courses
                        .sort((a, b) => {
                          const dateA = new Date(a.date.replace(/de /g, ''));
                          const dateB = new Date(b.date.replace(/de /g, ''));
                          return dateB - dateA;
                        })
                        .map((course, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm avoid-break course-card">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-semibold text-gray-900 text-xs leading-tight flex-1 pr-2">
                              {course.title}
                            </h5>
                            <span className="text-xs text-gray-600 whitespace-nowrap bg-gray-100 px-2 py-1 rounded">
                              {course.date}
                            </span>
                          </div>
                          
                          <p className="text-orange-700 font-medium text-xs mb-1">
                            {course.institution}
                          </p>
                          
                          <p className="text-gray-600 text-xs leading-relaxed mb-1">
                            {course.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-4 pt-3 border-t border-gray-200 text-center text-xs text-gray-500 print-footer">
              <p>📅 Currículo atualizado em {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-1">📊 Total: {cvData.courses.length} cursos concluídos</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintPage;
