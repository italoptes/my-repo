import React from 'react';
import './index.css';
import { Briefcase, GraduationCap, Code, Mail, Phone, ExternalLink, Server, Monitor, Wrench, Users, Globe, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import profileImg from './assets/profile.jpeg';
import aquatrackImg from './assets/aquatrack.png';
import unistayImg from './assets/unistay.png';
import casiImg from './assets/casi.png';
import ufpbImg from './assets/ufpb.png';
import aytyImg from './assets/ayty.png';
import javaImg from './assets/java.png';
import segurancaImg from './assets/seguranca.jpeg';
import curriculoPdf from './assets/Curriculo_Italo.pdf';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <img src={profileImg} alt="José Ítalo Oliveira de Pontes" className="profile-img" />
          <h1>José Ítalo Oliveira de Pontes</h1>
          <p className="subtitle">Desenvolvedor Full Stack Java | Estudante de Sistemas de Informação</p>
          
          <div className="contact-links">
            <a href="mailto:jose.pontes@dcx.ufpb.br" target="_blank" rel="noopener noreferrer">
              <Mail size={16} /> jose.pontes@dcx.ufpb.br
            </a>
            <a href="https://github.com/italoptes" target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/italopontes" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="tel:+5583981996241">
              <Phone size={16} /> (83) 9 8199-6241
            </a>
          </div>

          <div className="download-section">
            <a href={curriculoPdf} download="Curriculo_Jose_Italo.pdf" className="download-btn">
              <Download size={16} /> Baixar CV (PDF)
            </a>
          </div>
        </header>

        {/* About Section */}
        <section id="about">
          <h2 className="section-title">Sobre Mim</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px' }}>
            Estudante de Sistemas de Informação na UFPB com foco em desenvolvimento back-end Java e aplicações web. 
            Possuo experiência prática em desenvolvimento web, modelagem de sistemas, APIs REST, banco de dados, 
            Docker e versionamento com Git. Atuo em projetos acadêmicos e profissionais envolvendo desenvolvimento 
            Full Stack, configuração de ambientes de desenvolvimento e produção, além da automação de processos de 
            integração e entrega contínua (CI/CD). Busco oportunidade para ampliar minha experiência com 
            desenvolvimento Java, arquitetura de software e soluções baseadas no ecossistema Spring.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title"><Briefcase size={24} /> Experiência Profissional</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={aquatrackImg} alt="AquaTrack" className="experience-logo" />
                <div className="experience-title">
                  <h3>Desenvolvedor Fullstack</h3>
                  <span className="company" style={{ display: 'block' }}>AquaTrack – Sistema Web para Controle de Fazenda de Aquicultura</span>
                  <a href="https://aquatrack.cloud" target="_blank" rel="noopener noreferrer" className="project-link">
                    aquatrack.cloud <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <span className="experience-date">Outubro 2025 – Presente</span>
            </div>
            <ul>
              <li>Desenvolvimento de sistema web voltado à gestão operacional de fazendas de aquicultura;</li>
              <li>Levantamento de requisitos e modelagem de funcionalidades para clientes reais;</li>
              <li>Implementação de funcionalidades back-end e front-end da aplicação;</li>
              <li>Configuração e manutenção dos ambientes de desenvolvimento e produção da aplicação;</li>
              <li>Apoio no processo de deploy e disponibilização contínua de novas versões do sistema.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={unistayImg} alt="UniStay" className="experience-logo" />
                <div className="experience-title">
                  <h3>Desenvolvedor Fullstack</h3>
                  <span className="company" style={{ display: 'block' }}>UniStay — Plataforma de Moradia Universitária</span>
                  <a href="https://unistay.shop" target="_blank" rel="noopener noreferrer" className="project-link">
                    unistay.shop <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <span className="experience-date">Março 2026 – Presente</span>
            </div>
            <ul>
              <li>Desenvolvimento de plataforma web voltada à conexão entre estudantes e moradias universitárias;</li>
              <li>Aplicação de conceitos de arquitetura de software, banco de dados e versionamento com Git;</li>
              <li>Implementação de fluxo de integração e entrega contínua (CI/CD) para automatização do processo de deploy.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <div className="experience-title">
                  <h3>Desenvolvedor Web Freelancer</h3>
                  <span className="company" style={{ display: 'block' }}>Projeto: Website Institucional Jerry Adriane</span>
                  <a href="https://jerry-adriane.com.br" target="_blank" rel="noopener noreferrer" className="project-link">
                    jerry-adriane.com.br <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <span className="experience-date">Março 2026 – Presente</span>
            </div>
            <ul>
              <li>Desenvolvimento de website institucional responsivo para presença digital do cliente;</li>
              <li>Implementação da interface e estruturação visual das páginas;</li>
              <li>Publicação e disponibilização do projeto em ambiente web.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vercel</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={casiImg} alt="CASI" className="experience-logo" />
                <div className="experience-title">
                  <h3>Diretor de Assistência Estudantil</h3>
                  <span className="company">Centro Acadêmico de Sistemas de Informação - CASI (UFPB)</span>
                </div>
              </div>
              <span className="experience-date">Junho 2025 – Presente</span>
            </div>
            <ul>
              <li>Atuo na coordenação de ações voltadas ao apoio estudantil e permanência acadêmica;</li>
              <li>Realizo levantamento de demandas dos alunos e mediação com coordenação e setores da universidade;</li>
              <li>Participo da organização de atividades, projetos e iniciativas voltadas à melhoria da experiência estudantil;</li>
              <li>Desenvolvi habilidades relacionadas à liderança, organização, comunicação e trabalho em equipe.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <div className="experience-title">
                  <h3>Atendente / Auxiliar de Vendas</h3>
                  <span className="company">Trabalho Informal</span>
                </div>
              </div>
              <span className="experience-date">Fevereiro 2022 – Novembro 2023</span>
            </div>
            <ul>
              <li>Atuei no atendimento direto ao público em ambiente comercial;</li>
              <li>Auxiliei em vendas, organização de estoque e suporte aos clientes;</li>
              <li>Realizei recebimento de pagamentos e apoio nas atividades operacionais do estabelecimento;</li>
              <li>Desenvolvi habilidades relacionadas à comunicação e resolução de problemas.</li>
            </ul>
          </div>
        </section>

        {/* Complementary Experience Section */}
        <section id="complementary-experience">
          <h2 className="section-title"><Briefcase size={24} /> Experiência Complementar</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={aytyImg} alt="Ayty UFPB" className="experience-logo" />
                <div className="experience-title">
                  <h3>Aluno Extensionista - Desenvolvedor FullStack</h3>
                  <span className="company" style={{ display: 'block' }}>Lab. de Eng. de Software Aplicada - Ayty UFPB</span>
                  <a href="https://ayty.org/aquatrack" target="_blank" rel="noopener noreferrer" className="project-link">
                    ayty.org/aquatrack <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <span className="experience-date">Junho 2026 – Presente</span>
            </div>
            <ul>
              <li>Responsável pelo desenvolvimento e manutenção de funcionalidades da plataforma AquaTrack, atuando nas camadas de frontend e backend;</li>
              <li>Implementação e manutenção de APIs e interfaces para visualização e gerenciamento dos dados do sistema;</li>
              <li>Desenvolvimento de funcionalidades back-end e front-end da plataforma;</li>
              <li>Participação no levantamento de requisitos, modelagem de soluções e integração entre os módulos da aplicação;</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={ufpbImg} alt="UFPB" className="experience-logo" />
                <div className="experience-title">
                  <h3>Pesquisador Voluntário</h3>
                  <span className="company">Universidade Federal da Paraíba (UFPB)</span>
                </div>
              </div>
              <span className="experience-date">Maio 2026 – Presente</span>
            </div>
            <ul>
              <li>Participação voluntária em projeto de pesquisa sobre o uso de Inteligência Artificial Generativa no ensino de Programação Orientada a Objetos com Java;</li>
              <li>Realizo levantamento bibliográfico e análise de dados relacionados ao tema da pesquisa;</li>
              <li>Produzo documentação e acompanho os resultados da pesquisa.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={javaImg} alt="Java" className="experience-logo" />
                <div className="experience-title">
                  <h3>Monitor de Linguagem de Programação (Java)</h3>
                  <span className="company">Universidade Federal da Paraíba (UFPB)</span>
                </div>
              </div>
              <span className="experience-date">Novembro 2025 – Presente</span>
            </div>
            <ul>
              <li>Atuo como monitor da disciplina de Linguagem de Programação em Java, auxiliando estudantes no entendimento de lógica de programação e Programação Orientada a Objetos;</li>
              <li>Contribuo na correção de atividades e no reforço dos conteúdos trabalhados em sala;</li>
              <li>Auxilio o docente no acompanhamento da turma e na orientação acadêmica dos alunos.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={segurancaImg} alt="Segurança Digital" className="experience-logo" />
                <div className="experience-title">
                  <h3>Ministrante/Palestrante</h3>
                  <span className="company">Oficina: Segurança Digital para Estudantes e Usuários de Tecnologia</span>
                </div>
              </div>
              <span className="experience-date">Junho 2025</span>
            </div>
            <ul>
              <li>Ministrei oficina voltada à introdução de práticas de segurança digital para estudantes e usuários de tecnologia;</li>
              <li>Abordei temas relacionados à proteção de dados, riscos digitais, boas práticas de segurança e navegação segura;</li>
              <li>Fui responsável pela preparação do conteúdo, condução das explicações e orientação dos participantes durante as atividades práticas.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title"><GraduationCap size={24} /> Formação Acadêmica</h2>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={ufpbImg} alt="UFPB" className="experience-logo" />
                <div className="experience-title">
                  <h3>Bacharelado em Sistemas de Informação</h3>
                  <span className="company">Universidade Federal da Paraíba (UFPB)</span>
                </div>
              </div>
              <span className="experience-date">2024 – Presente</span>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses">
          <h2 className="section-title"><GraduationCap size={24} /> Cursos Complementares</h2>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <img src={segurancaImg} alt="Segurança Digital" className="experience-logo" />
                <div className="experience-title">
                  <h3>Curso de Proteção de Dados e Boas Práticas de Segurança Digital</h3>
                </div>
              </div>
              <span className="experience-date">Junho 2025 – Agosto 2025</span>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Conteúdo voltado à conscientização sobre proteção de dados, riscos digitais e práticas seguras no uso de tecnologias.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title"><Code size={24} /> Habilidades (Hard & Soft Skills)</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Server size={18} /> Back-end & Infra</h4>
              <ul>
                <li>Java & Spring Boot</li>
                <li>Spring Security & JWT</li>
                <li>APIs REST</li>
                <li>PostgreSQL & SQL</li>
                <li>Docker</li>
                <li>Linux & Shell Script</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Monitor size={18} /> Front-end</h4>
              <ul>
                <li>React</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Wrench size={18} /> Ferramentas & Outros</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>Python</li>
                <li>Servidores</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={18} /> Soft Skills</h4>
              <ul>
                <li>Comunicação</li>
                <li>Organização</li>
                <li>Trabalho em Equipe</li>
                <li>Resolução de Problemas</li>
                <li>Proatividade & Adaptabilidade</li>
                <li>Aprendizado contínuo</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={18} /> Idiomas</h4>
              <ul>
                <li>Português — Nativo</li>
                <li>Inglês — Técnico básico</li>
                <li>Espanhol — Básico</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} José Ítalo Oliveira de Pontes.</p>
      </footer>
    </div>
  );
}

export default App;
