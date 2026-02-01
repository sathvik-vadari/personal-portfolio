import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import TextType from './components/TextType';
import LiquidEther from './components/LiquidEther';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white relative">
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
          colors={['#808080', '#a0a0a0', '#707070']}
          mouseForce={18}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.3}
          autoIntensity={2.0}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            SV
          </button>
          <div className="flex gap-8 text-sm">
            {['work', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:opacity-60 transition-opacity capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-medium mb-4 tracking-tight">
            Sathvik Vadari
          </h1>
          <div className="text-lg md:text-xl text-neutral-400 font-light mb-6 max-w-2xl text-center min-h-[60px] flex items-center justify-center">
            <TextType
              text={[
                "AI Engineer",
                "Didn't even need to prompt this portfolio into existence",
                "(okay maybe just a little)",
                "Building AI systems that sometimes work",
                "Professional Prompt Writer",
                "Makes AI Models, can't make decisions"
              ]}
              typingSpeed={65}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>
          <button
            onClick={() => scrollToSection('work')}
            className="animate-bounce mt-1"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-neutral-500" />
          </button>
        </div>
      </section>

      <section id="work" className="min-h-screen py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extralight mb-16 tracking-tight">Work</h2>

          <div className="space-y-16">
            <div className="border-l-2 border-neutral-700 pl-8 hover:border-white transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light">Founding AI Engineer</h3>
                  <p className="text-neutral-400">8bit.ai</p>
                </div>
                <span className="text-sm text-neutral-500">Oct 2024 – Present</span>
              </div>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  Built <span className="font-medium">Neutrino</span>, a generative AI insights platform driving $1M in leads through
                  LLM-driven analytics and interactive dashboards.
                </p>
                <p>
                  Developed agentic analytics engine with 92% SQL execution accuracy combining Text-to-SQL,
                  RAG pipelines, and multi-agent orchestration.
                </p>
                <p>
                  Engineered automated customer intelligence platform processing 30K+ emails/month
                  and 100+ meetings/month for sentiment analysis and profiling.
                </p>
                <p>
                  Deployed AI voice automation systems handling 40K+ calls/week, reducing support load
                  by 3,500+ man-hours/month for enterprise contact centers.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-neutral-700 pl-8 hover:border-white transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light">Associate Software Developer</h3>
                  <p className="text-neutral-400">Oracle</p>
                </div>
                <span className="text-sm text-neutral-500">Jan 2024 – Oct 2024</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Contributed to modernizing legacy frameworks within Oracle Communications,
                extending Network Integrity with AI-assisted crash node detection and designing
                scalable REST services for enterprise telecom applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extralight mb-16 tracking-tight">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 p-8 hover:shadow-lg transition-shadow border border-neutral-800">
              <h3 className="text-xl font-light mb-4">Neutrino Analytics Platform</h3>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Generative AI platform with Text-to-SQL engine, RAG pipelines, and interactive
                dashboards for enterprise metrics exploration.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'LangChain', 'PostgreSQL', 'RAG', 'LLMs'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-8 hover:shadow-lg transition-shadow border border-neutral-800">
              <h3 className="text-xl font-light mb-4">Voice Automation Pipeline</h3>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                End-to-end AI voice system with Azure Voice Live, CRM integration, and
                telephony workflows handling 40K+ calls/week.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Azure AI', 'FastAPI', 'Telephony', 'OpenAI'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-8 hover:shadow-lg transition-shadow border border-neutral-800">
              <h3 className="text-xl font-light mb-4">Customer Intelligence Platform</h3>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Automated platform processing 30K+ emails and 100+ meetings monthly for
                sentiment analysis and customer profiling.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'NLP', 'Open-source LLMs', 'APIs'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-8 hover:shadow-lg transition-shadow border border-neutral-800">
              <h3 className="text-xl font-light mb-4">ML Ops on Kubernetes</h3>
              <p className="text-neutral-400 mb-4 leading-relaxed">
                Built K8s Operator for automated ML deployments with Prometheus & Grafana
                observability for inventory prediction models.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Python', 'Prometheus', 'Grafana'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extralight mb-8 tracking-tight">Let's Connect</h2>
          <p className="text-neutral-400 mb-12 leading-relaxed">
            Building AI systems that actually work in production. Open to interesting conversations
            about ML infrastructure, LLMs, and the occasional existential crisis about AGI.
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="mailto:sathvikvadari09@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/sathvikvadari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sathvikvadari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="text-sm text-neutral-500">
            <p>Hyderabad, India</p>
            <p className="mt-2">B.E. in AI & Data Science • CBIT • 9.04 CGPA</p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-neutral-800 relative z-10">
        <p>Crafted with minimal effort and maximum procrastination</p>
      </footer>
    </div>
  );
}

export default App;
