// src/pages/imprimir.jsx

import React from 'react';
import { cvData } from '@/data/cv-data';

const PrintStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    @media print {
      body { -webkit-print-color-adjust: exact; font-family: 'Inter', sans-serif; }
      .no-print { display: none !important; }
      @page { size: A4; margin: 1.5cm; }
      a { text-decoration: none; color: #1d4ed8; }
    }
  `}</style>
);

const PrintPage = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <PrintStyles />
      <div className="font-sans text-gray-800 bg-white p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
            <button onClick={handlePrint} className="no-print fixed top-4 right-4 bg-blue-700 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-800 transition-colors z-50">
              Imprimir / Salvar como PDF
            </button>
            
            {/* Cabeçalho */}
            <section className="text-center border-b-2 border-gray-200 pb-4 mb-6">
              <h1 className="text-4xl font-bold text-gray-900">{cvData.profile.name}</h1>
              <h2 className="text-lg text-blue-800 font-semibold">{cvData.profile.title}</h2>
              {/* --- MUDANÇA AQUI --- */}
              <div className="flex justify-center flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 mt-2">
                <a href={cvData.contact.find(c => c.type === 'email').href}>
                  {cvData.contact.find(c => c.type === 'email').value}
                </a>
                <span>•</span>
                <span>{cvData.contact.find(c => c.type === 'phone').value}</span>
                <span>•</span>
                {/* Agora exibe o URL amigável em vez do texto "LinkedIn" */}
                <a href={cvData.contact.find(c => c.type === 'linkedin').href} target="_blank" rel="noopener noreferrer">
                  {cvData.contact.find(c => c.type === 'linkedin').displayValue}
                </a>
                <span>•</span>
                {/* Agora exibe o URL amigável em vez do texto "GitHub" */}
                 <a href={cvData.contact.find(c => c.type === 'github').href} target="_blank" rel="noopener noreferrer">
                  {cvData.contact.find(c => c.type === 'github').displayValue}
                 </a>
              </div>
            </section>

            {/* O resto do seu currículo continua aqui... */}
            <section className="mb-6">
              <h3 className="text-xl font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2">Resumo Profissional</h3>
              <p className="text-gray-700 leading-relaxed text-justify">{cvData.profile.summary}</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2">Experiência Profissional</h3>
              <div className="space-y-4">
                {cvData.experience.map(job => (
                  <div key={job.role} className="break-inside-avoid">
                    <h4 className="text-lg font-semibold">{job.role}</h4>
                    <p className="font-medium text-gray-700">{job.company} | <span className="text-sm text-gray-500">{job.period}</span></p>
                    <ul className="list-disc pl-5 mt-1 text-gray-600">
                      {job.tasks.map(task => <li key={task}>{task}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
             <section className="mb-6">
              <h3 className="text-xl font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2">Formação Acadêmica</h3>
              <div className="space-y-3">
              {cvData.education.map(edu => (
                <div key={edu.degree} className="break-inside-avoid">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="font-medium text-gray-700">{edu.institution} - <span className="font-normal text-gray-600">{edu.status}</span></p>
                </div>
              ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2">Formação Complementar</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {cvData.courses.map(course => (
                  <li key={course.title}>
                    <span className="font-semibold">{course.title}</span> - <span className="italic">{course.institution}</span>
                  </li>
                ))}
              </ul>
            </section>
        </div>
      </div>
    </>
  );
};

export default PrintPage;