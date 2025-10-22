import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { cvData } from '@/data/cv-data';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  FileText, 
  Briefcase,
  Award,
  Code,
  Server,
  Network,
  Shield
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>{cvData.profile?.name || 'Currículo'} - Analista de Infraestrutura de TI</title>
        <meta name="description" content="Currículo profissional de Analista de Infraestrutura de TI especializado em Redes, Servidores e Suporte Técnico N3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {cvData.profile?.image && (
                  <img 
                    src={cvData.profile.image} 
                    alt={cvData.profile?.name || 'Profile'} 
                    className="w-20 h-20 rounded-full border-4 border-blue-600 object-cover"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {cvData.profile?.name || 'Nome'}
                  </h1>
                  <p className="text-lg text-blue-600 font-medium">
                    {cvData.profile?.title?.pt || 'Título Profissional'}
                  </p>
                </div>
              </div>
              
              <Link 
                href="/imprimir"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                <FileText size={20} />
                Ver Currículo Completo
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Server className="text-blue-600" size={24} />
                <h3 className="font-bold text-gray-800">Infraestrutura</h3>
              </div>
              <p className="text-sm text-gray-600">Windows Server, Linux, Hyper-V</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Network className="text-green-600" size={24} />
                <h3 className="font-bold text-gray-800">Redes</h3>
              </div>
              <p className="text-sm text-gray-600">VLANs, Roteamento, Firewall</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="text-red-600" size={24} />
                <h3 className="font-bold text-gray-800">Segurança</h3>
              </div>
              <p className="text-sm text-gray-600">PFSense, Proxy Squid, AD</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Code className="text-purple-600" size={24} />
                <h3 className="font-bold text-gray-800">Suporte N3</h3>
              </div>
              <p className="text-sm text-gray-600">JIRA, Troubleshooting, Mentoria</p>
            </div>
          </div>

          {/* About Section */}
          {cvData.profile?.summary && (
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase size={28} className="text-blue-600" />
                Sobre Mim
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {cvData.profile.summary.pt}
              </p>
            </section>
          )}

          {/* Skills Section */}
          {cvData.skills && (
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award size={28} className="text-blue-600" />
                Competências Técnicas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Competências Principais */}
                {cvData.skills.principal?.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Principais</h3>
                    <div className="space-y-2">
                      {cvData.skills.principal.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{skill.pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sistemas */}
                {cvData.skills.sistemas?.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Sistemas</h3>
                    <div className="space-y-2">
                      {cvData.skills.sistemas.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">{skill.pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Infraestrutura */}
                {cvData.skills.infraestrutura?.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Infraestrutura</h3>
                    <div className="space-y-2">
                      {cvData.skills.infraestrutura.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">{skill.pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cloud */}
                {cvData.skills.nuvem?.length > 0 && (
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Cloud Computing</h3>
                    <div className="space-y-2">
                      {cvData.skills.nuvem.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-gray-700">{skill.pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Experience Highlights */}
          {cvData.experience?.length > 0 && (
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Briefcase size={28} className="text-blue-600" />
                Experiência Profissional
              </h2>
              
              <div className="space-y-6">
                {cvData.experience.slice(0, 3).map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.role?.pt || 'Cargo'}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {exp.company?.pt || exp.company || 'Empresa'} | {exp.period?.pt || 'Período'}
                    </p>
                    {exp.tasks?.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {exp.tasks.slice(0, 3).map((task, taskIndex) => (
                          <li key={taskIndex} className="text-gray-700 text-sm flex gap-2">
                            <span className="text-blue-600 font-bold">▸</span>
                            <span>{task.pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link 
                  href="/imprimir"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Ver experiência completa
                  <span>→</span>
                </Link>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {cvData.contact?.length > 0 && (
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-md p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {cvData.contact.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.type === 'email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition-all"
                  >
                    {item.type === 'email' && <Mail size={20} />}
                    {item.type === 'phone' && <Phone size={20} />}
                    {item.type === 'linkedin' && <Linkedin size={20} />}
                    {item.type === 'github' && <Github size={20} />}
                    <div>
                      <div className="text-xs opacity-80">
                        {item.type === 'email' && 'Email'}
                        {item.type === 'phone' && (item.label || 'Telefone')}
                        {item.type === 'linkedin' && 'LinkedIn'}
                        {item.type === 'github' && 'GitHub'}
                      </div>
                      <div className="font-medium text-sm">
                        {item.displayValue || item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link 
                  href="/imprimir"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  📄 Baixar Currículo Completo
                </Link>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} {cvData.profile?.name || 'Jonathan Souza Moyano'}. 
              Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Desenvolvido com Next.js e React
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
