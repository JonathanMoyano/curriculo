// src/pages/index.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { cvData } from '@/data/cv-data';
import { Mail, Phone, Linkedin, Github, Briefcase, Target, MapPin } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('pt');

  // Traduções dos textos da interface
  const translations = {
    pt: {
      title: 'Currículo Profissional',
      subtitle: 'Visualize meu currículo completo em múltiplos idiomas',
      viewCV: 'Ver Currículo Completo para Impressão',
      selectLanguage: 'Selecione o idioma',
      summary: 'Sobre Mim',
      objective: 'Objetivo Profissional',
      skills: 'Principais Competências',
      technical: 'Técnicas',
      behavioral: 'Comportamentais',
      stats: {
        experience: 'Anos de experiência',
        courses: 'Cursos concluídos',
        languages: 'Idiomas'
      }
    },
    en: {
      title: 'Professional Resume',
      subtitle: 'View my complete resume in multiple languages',
      viewCV: 'View Full Resume for Printing',
      selectLanguage: 'Select language',
      summary: 'About Me',
      objective: 'Professional Objective',
      skills: 'Key Skills',
      technical: 'Technical',
      behavioral: 'Soft Skills',
      stats: {
        experience: 'Years of experience',
        courses: 'Completed courses',
        languages: 'Languages'
      }
    },
    es: {
      title: 'Currículum Profesional',
      subtitle: 'Visualiza mi currículum completo en múltiples idiomas',
      viewCV: 'Ver Currículum Completo para Impresión',
      selectLanguage: 'Selecciona el idioma',
      summary: 'Sobre Mí',
      objective: 'Objetivo Profesional',
      skills: 'Competencias Principales',
      technical: 'Técnicas',
      behavioral: 'Comportamentales',
      stats: {
        experience: 'Años de experiencia',
        courses: 'Cursos completados',
        languages: 'Idiomas'
      }
    }
  };

  const t = translations[lang];

  // Extrair dados com segurança
  const profileTitle = typeof cvData.profile.title === 'object' 
    ? cvData.profile.title[lang] 
    : cvData.profile.title;

  const profileSummary = typeof cvData.profile.summary === 'object' 
    ? cvData.profile.summary[lang] 
    : cvData.profile.summary;

  const profileObjective = cvData.profile.objective 
    ? (typeof cvData.profile.objective === 'object' 
        ? cvData.profile.objective[lang] 
        : cvData.profile.objective)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Card com Language Selector Integrado */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
            
            {/* Language Selector - Posição Superior Direita */}
            <div className="flex justify-end mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <p className="text-xs font-semibold text-white/80 mb-2 text-center">
                  🌐 {t.selectLanguage}
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setLang('pt')} 
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      lang === 'pt' 
                        ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-400' 
                        : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                    }`}
                  >
                    🇧🇷 PT
                  </button>
                  <button 
                    onClick={() => setLang('en')} 
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      lang === 'en' 
                        ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-400' 
                        : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                  <button 
                    onClick={() => setLang('es')} 
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      lang === 'es' 
                        ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-400' 
                        : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                    }`}
                  >
                    🇪🇸 ES
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <img 
                src={cvData.profile.image} 
                alt={cvData.profile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {cvData.profile.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
                  {profileTitle}
                </h2>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {cvData.contact.map((contact, index) => (
                    <a 
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {contact.type === 'email' && <Mail size={18} />}
                      {contact.type === 'phone' && <Phone size={18} />}
                      {contact.type === 'linkedin' && <Linkedin size={18} />}
                      {contact.type === 'github' && <Github size={18} />}
                      <span className="text-sm font-medium">
                        {contact.displayValue || contact.value}
                        {contact.label && ` (${contact.label})`}
                      </span>
                    </a>
                  ))}
                </div>
                
                {/* Endereço */}
                {cvData.profile.address && (
                  <div className="flex items-center gap-2 text-white/80 mt-3 justify-center md:justify-start">
                    <MapPin size={18} />
                    <span className="text-sm font-medium">{cvData.profile.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sobre Mim */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Briefcase className="text-blue-300" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.summary}</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-justify">
                {profileSummary}
              </p>
            </div>

            {/* Objetivo Profissional */}
            {profileObjective && (
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-400/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Target className="text-purple-300" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.objective}</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-justify">
                  {profileObjective}
                </p>
              </div>
            )}
          </div>

          {/* Botão Principal - Ver Currículo para Impressão */}
          <Link 
            href="/imprimir"
            className="block group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                </h3>
                <p className="text-blue-100 text-base">
                  {lang === 'pt' && 'Clique para visualizar e imprimir o currículo completo com todos os detalhes, experiências e certificações'}
                  {lang === 'en' && 'Click to view and print the complete resume with all details, experiences and certifications'}
                  {lang === 'es' && 'Haz clic para visualizar e imprimir el currículum completo con todos los detalles, experiencias y certificaciones'}
                </p>
              </div>
              <svg 
                className="w-8 h-8 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Skills Preview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span>⚡</span>
              {t.skills}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Competências Técnicas */}
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {t.technical}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.principal.slice(0, 5).map((skill, index) => {
                    const skillText = typeof skill === 'object' ? skill[lang] : skill;
                    return (
                      <span 
                        key={index}
                        className="bg-blue-600/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-600/40 transition-all duration-300 hover:scale-105"
                      >
                        {skillText}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              {/* Competências Comportamentais */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {t.behavioral}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cvData.softSkills.slice(0, 5).map((skill, index) => {
                    const skillText = typeof skill === 'object' ? skill[lang] : skill;
                    return (
                      <span 
                        key={index}
                        className="bg-cyan-600/30 text-cyan-100 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-600/40 transition-all duration-300 hover:scale-105"
                      >
                        {skillText}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-white/80 text-sm font-medium">
                {t.stats.experience}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-green-400 mb-2">{cvData.courses.length}</div>
              <div className="text-white/80 text-sm font-medium">
                {t.stats.courses}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-white/80 text-sm font-medium">
                {t.stats.languages}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-white/60 text-sm">
            <p>
              © 2025 {cvData.profile.name} 
              {' • '}
              {lang === 'pt' ? 'Todos os direitos reservados' : lang === 'en' ? 'All rights reserved' : 'Todos los derechos reservados'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}