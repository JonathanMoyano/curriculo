import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '@/data/cv-data';
import { CVCard } from '@/components/cv/CVCard';
import { SkillBar } from '@/components/cv/SkillBar';
import { AuroraBackground } from '@/components/background/Aurora';
import { Download, Briefcase, GraduationCap, Award, ExternalLink, BookCopy, Printer, Mail, Phone, Linkedin, Github, User, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

// --- COMPONENTES DE SEÇÃO (REFINADOS) ---

const animationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.6 },
};

// Seção 1: Perfil e Contato (Grid interno)
const ProfileSection = () => (
  <motion.section {...animationProps} className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-2">
      <CVCard className="h-full">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img 
            src={cvData.profile.image} 
            alt={cvData.profile.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500/30 shrink-0"
          />
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{cvData.profile.name}</h1>
            <h2 className="text-md lg:text-lg font-medium text-cyan-400 mt-1">{cvData.profile.title}</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl">{cvData.profile.summary}</p>
          </div>
        </div>
      </CVCard>
    </div>
    <div className="md:col-span-1">
       <CVCard className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
        <div className="space-y-3 flex-1">
          {cvData.contact.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.type} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors">
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.value}</span>
              </a>
            );
          })}
        </div>
      </CVCard>
    </div>
  </motion.section>
);

// Seção 2: Experiência Profissional (Largura total, com acordeão)
const ExperienceSection = () => (
    <motion.section {...animationProps}>
        <CVCard>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Experiência Profissional</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {cvData.experience.map((job, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-800 last:border-b-0">
                  <AccordionTrigger className="hover:no-underline text-left py-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-cyan-400">{job.company}</p>
                    </div>
                    <p className="text-xs text-slate-500 pr-2 whitespace-nowrap">{job.period}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 pt-2 space-y-1 text-sm text-slate-400">
                        {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </CVCard>
    </motion.section>
);

// Seção 3: Competências (Grid interno de 2 colunas)
const SkillsSection = () => (
    <motion.section {...animationProps}>
        <CVCard>
            <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Principais Competências</h2>
            </div>
            <div className="space-y-6">
                {/* Suporte & Hardware */}
                <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">Suporte & Hardware</h3>
                    <div className="flex flex-wrap gap-2">
                        {cvData.skills.principal.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="inline-block bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Sistemas Operacionais */}
                <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">Sistemas Operacionais e ERP</h3>
                    <div className="flex flex-wrap gap-2">
                        {cvData.skills.sistemas.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="inline-block bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Infraestrutura */}
                <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">Infraestrutura & Redes</h3>
                    <div className="flex flex-wrap gap-2">
                        {cvData.skills.infraestrutura.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="inline-block bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Cloud */}
                <div>
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">Tecnologias em Nuvem</h3>
                    <div className="flex flex-wrap gap-2">
                        {cvData.skills.nuvem.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="inline-block bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </CVCard>
    </motion.section>
);

// Seção de Soft Skills
const SoftSkillsSection = () => (
    <motion.section {...animationProps}>
        <CVCard>
            <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-rose-400" />
                <h2 className="text-3xl font-bold text-white">Competências Comportamentais</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {cvData.softSkills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="inline-block bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </CVCard>
    </motion.section>
);

const EducationAndPrintSection = () => (
    <motion.section {...animationProps} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
            <CVCard>
                <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">Formação Acadêmica</h3>
                </div>
                <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                        <p className="text-sm text-cyan-400">{edu.institution} - <span className="text-slate-400 font-medium">{edu.status}</span></p>
                    </div>
                ))}
                </div>
            </CVCard>
        </div>
        <div className="md:col-span-1">
            <CVCard className="flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/80 to-blue-500/80 text-white transition-transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                <Link href="/imprimir" target="_blank" className="text-center w-full h-full flex flex-col items-center justify-center p-4">
                    <Printer className="h-8 w-8 mb-2" />
                    <h3 className="text-md font-bold">Imprimir CV</h3>
                    <p className="text-xs opacity-80">Gerar versão PDF</p>
                </Link>
            </CVCard>
        </div>
    </motion.section>
);

const CourseCard = ({ course }) => (
    <Dialog>
        <DialogTrigger asChild>
            <motion.div 
                className="block group cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="h-full rounded-xl bg-slate-800/50 p-4 border border-transparent group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all flex flex-col justify-between">
                    <div>
                        <Badge variant="outline" className="border-cyan-500/20 text-xs mb-3">{course.category}</Badge>
                        <h4 className="font-semibold text-white text-sm">{course.title}</h4>
                    </div>
                    <p className="text-xs text-cyan-400 mt-2">{course.institution}</p>
                </div>
            </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-slate-900 border-cyan-500/20 text-white">
            <DialogHeader className="text-left">
                <DialogTitle className="text-cyan-400 text-xl">{course.title}</DialogTitle>
                <DialogDescription className="text-slate-400">{course.institution}</DialogDescription>
            </DialogHeader>
            <div className="py-4 text-slate-300 text-sm">
                <p>{course.description}</p>
                {}
                {course.credentialId && (
                    <div className="mt-4 text-xs bg-slate-800 rounded p-3">
                        <p className="text-slate-400 font-semibold tracking-wider uppercase">ID da Credencial</p>
                        <p className="font-mono text-slate-200 mt-1">{course.credentialId}</p>
                    </div>
                )}
            </div>
            <DialogFooter>
                <a href={course.link} target="_blank" rel="noopener noreferrer" className={course.link === '#' ? 'pointer-events-none w-full' : 'w-full'}>
                    <Button type="button" disabled={course.link === '#'} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white disabled:opacity-50">
                        <ExternalLink className="mr-2 h-4 w-4"/> Validar Certificado
                    </Button>
                </a>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);


const CoursesSection = () => (
    <motion.section {...animationProps}>
        <CVCard>
            <div className="flex items-center gap-3 mb-6">
                <BookCopy className="h-8 w-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Formação Complementar</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cvData.courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </CVCard>
    </motion.section>
);



const CVPage = () => {
  return (
    <>
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-8">
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <SoftSkillsSection />
        <EducationAndPrintSection />
        <CoursesSection />
      </div>
    </>
  );
};

export default CVPage;
