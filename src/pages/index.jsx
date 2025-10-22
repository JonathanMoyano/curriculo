// EXEMPLO DE INDEX.JS COM PROTEÇÕES CONTRA UNDEFINED
// Substitua no seu src/pages/index.js

import React from 'react';
import { cvData } from '@/data/cv-data';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>{cvData.profile?.name || 'Nome não disponível'}</h1>
        <p>{cvData.profile?.title?.pt || 'Título não disponível'}</p>
      </header>

      {/* RESUMO - COM PROTEÇÃO */}
      {cvData.profile?.summary && (
        <section>
          <h2>Resumo Profissional</h2>
          <p>{cvData.profile.summary.pt}</p>
        </section>
      )}

      {/* COMPETÊNCIAS - COM PROTEÇÃO CONTRA UNDEFINED */}
      {cvData.skills && (
        <section>
          <h2>Competências</h2>
          
          {/* PROTEÇÃO: Verifica se cada array existe antes de mapear */}
          {cvData.skills.principal?.length > 0 && (
            <div>
              <h3>Principais</h3>
              {cvData.skills.principal.map((skill, index) => (
                <div key={index}>{skill.pt}</div>
              ))}
            </div>
          )}

          {cvData.skills.sistemas?.length > 0 && (
            <div>
              <h3>Sistemas</h3>
              {cvData.skills.sistemas.map((skill, index) => (
                <div key={index}>{skill.pt}</div>
              ))}
            </div>
          )}

          {cvData.skills.infraestrutura?.length > 0 && (
            <div>
              <h3>Infraestrutura</h3>
              {cvData.skills.infraestrutura.map((skill, index) => (
                <div key={index}>{skill.pt}</div>
              ))}
            </div>
          )}

          {cvData.skills.nuvem?.length > 0 && (
            <div>
              <h3>Cloud</h3>
              {cvData.skills.nuvem.map((skill, index) => (
                <div key={index}>{skill.pt}</div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* SOFT SKILLS - COM PROTEÇÃO */}
      {cvData.softSkills?.length > 0 && (
        <section>
          <h2>Habilidades</h2>
          {cvData.softSkills.map((skill, index) => (
            <div key={index}>{skill.pt}</div>
          ))}
        </section>
      )}

      {/* IDIOMAS - COM PROTEÇÃO */}
      {cvData.languages?.length > 0 && (
        <section>
          <h2>Idiomas</h2>
          {cvData.languages.map((lang, index) => (
            <div key={index}>
              {lang.language.pt}: {lang.level.pt}
            </div>
          ))}
        </section>
      )}

      {/* EXPERIÊNCIA - COM PROTEÇÃO */}
      {cvData.experience?.length > 0 && (
        <section>
          <h2>Experiência Profissional</h2>
          {cvData.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.role?.pt || 'Cargo não informado'}</h3>
              <p>{exp.company?.pt || exp.company || 'Empresa não informada'}</p>
              <p>{exp.period?.pt || 'Período não informado'}</p>
              
              {exp.tasks?.length > 0 && (
                <ul>
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task.pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* EDUCAÇÃO - COM PROTEÇÃO */}
      {cvData.education?.length > 0 && (
        <section>
          <h2>Formação Acadêmica</h2>
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree?.pt || 'Curso não informado'}</h3>
              <p>{edu.institution || 'Instituição não informada'}</p>
              <p>{edu.period?.pt || 'Período não informado'}</p>
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICAÇÕES - COM PROTEÇÃO */}
      {cvData.certifications?.length > 0 && (
        <section>
          <h2>Certificações</h2>
          {cvData.certifications.map((cert, index) => (
            <div key={index}>
              {cert.name} - {cert.institution} - {cert.date}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}