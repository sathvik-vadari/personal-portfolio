import { useState, useEffect, useMemo } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  Menu,
  X,
} from "lucide-react";
import TextType from "./components/TextType";
import LiquidEther from "./components/LiquidEther";
import logo from "./assets/personal-logo.png";
import customerIntelImg from "./assets/customer-intelligence.png";
import mlopsImg from "./assets/mlops-preview.svg";
import videogameImg from "./assets/videogame-preview.svg";
import connectplayImg from "./assets/connectplay-preview.svg";
import trashfinderImg from "./assets/trashfinder-preview.svg";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const etherColors = useMemo(() => ["#808080", "#a0a0a0", "#707070"], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white relative overflow-x-hidden w-full max-w-full">
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
          colors={etherColors}
          mouseForce={18}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={4.0}
          takeoverDuration={0.25}
          autoResumeDelay={1500}
          autoRampDuration={0.8}
        />
      </div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
          scrolled ? "bg-black shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-full px-4 sm:px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            <img
              src={logo}
              alt="Sathvik Vadari logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
            />
          </button>
          <div className="hidden md:flex gap-8 text-sm">
            {["research", "work", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:opacity-60 transition-opacity capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800">
            <div className="flex flex-col px-4 py-4 gap-4">
              {["research", "work", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-sm hover:opacity-60 transition-opacity capitalize py-2"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 pt-20 w-full"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium mb-4 tracking-tight text-center w-full">
            Sathvik Vadari
          </h1>
          <div className="text-base sm:text-lg md:text-xl text-neutral-400 font-light mb-6 max-w-2xl w-full text-center min-h-[60px] flex items-center justify-center px-4">
            <TextType
              text={[
                "AI Engineer & Researcher",
                "Didn't even need to prompt this portfolio into existence",
                "(okay maybe just a little)",
                "Building AI systems that sometimes work",
                "Professional Prompt Writer",
                "Makes ML Models, can't make decisions",
                "If it works in prod, it was on purpose",
              ]}
              typingSpeed={65}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={40}
              cursorBlinkDuration={0.5}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>
          <button
            onClick={() => scrollToSection("work")}
            className="animate-bounce mt-1"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-neutral-500" />
          </button>
        </div>
      </section>

      <section
        id="research"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 w-full overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Research
          </h2>

          <div className="group relative rounded-xl overflow-hidden bg-neutral-900/30 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 border border-neutral-600 text-neutral-200">
                  First Author
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 border border-neutral-800 text-neutral-500">
                  arXiv 2605.23918
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 border border-neutral-800 text-neutral-500">
                  Submitted · HotCarbon '26
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-4">
                The Model Parking Tax: Quantifying the Hidden Energy Cost of
                Always-On GPU Model Deployment
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8">
                AI inference systems keep models loaded in GPU memory around the
                clock, treating idle power as a fixed cost of readiness. This
                work decomposes that cost for the first time across three GPU
                architectures — combining 18 days of production telemetry with
                controlled dose-response experiments. The finding: idle power is
                a fixed cost of the{" "}
                <span className="text-white font-medium">CUDA context</span>,
                not model size, and NVIDIA's{" "}
                <span className="text-white font-medium">
                  CUDA_DISABLE_PERF_BOOST
                </span>{" "}
                flag eliminates it with no steady-state latency penalty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 mb-8">
                <div className="bg-neutral-950 px-4 py-5 text-center">
                  <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">
                    26–66 W
                  </div>
                  <div className="text-xs text-neutral-500 leading-snug">
                    Per-GPU idle "parking tax"
                  </div>
                </div>
                <div className="bg-neutral-950 px-4 py-5 text-center">
                  <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">
                    &lt;0.02 W/GB
                  </div>
                  <div className="text-xs text-neutral-500 leading-snug">
                    Marginal VRAM cost — negligible
                  </div>
                </div>
                <div className="bg-neutral-950 px-4 py-5 text-center">
                  <div className="text-2xl sm:text-3xl font-extralight text-white mb-1">
                    92–1,745 GWh
                  </div>
                  <div className="text-xs text-neutral-500 leading-snug">
                    Annual waste at industry scale
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "GPU Energy",
                  "DVFS",
                  "Model Serving",
                  "Sustainability",
                  "Systems",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://arxiv.org/abs/2605.23918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Read on arXiv
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                </a>
                <a
                  href="https://github.com/8bitai/gpu-parking-tax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code &amp; Data
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 border-l-2 border-neutral-700 pl-4 sm:pl-6 md:pl-8">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              <span className="text-white font-medium">Ongoing —</span>{" "}
              Pursuing follow-up papers extending the parking-tax model into
              predictive, traffic-aware GPU energy controllers, alongside new
              directions in efficient and sustainable AI systems.
            </p>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 w-full overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Work
          </h2>

          <div className="space-y-12 sm:space-y-16">
            <div className="border-l-2 border-neutral-700 pl-4 sm:pl-6 md:pl-8 hover:border-white transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light">
                    Founding AI Engineer
                  </h3>
                  <a
                    href="https://8bit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 text-sm sm:text-base hover:text-white transition-colors"
                  >
                    8bit.ai
                  </a>
                </div>
                <span className="text-xs sm:text-sm text-neutral-500">
                  Oct 2024 – Present
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  Built <span className="text-white font-medium">Neutrino</span>
                  , a generative AI insights platform with a Text-to-SQL engine
                  (92% execution accuracy), RAG pipelines, and multi-agent
                  orchestration — driving $1M in pipeline for clients.
                </p>
                <p>
                  Engineered an automated customer intelligence system
                  processing 30K+ emails and 100+ meetings monthly, extracting
                  sentiment and customer profiles using open-source LLMs with
                  zero manual review.
                </p>
                <p>
                  Deployed AI voice automation handling 40K+ calls/week across
                  enterprise contact centers, cutting support load by 3,500+
                  man-hours/month.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4 sm:pl-6 md:pl-8 hover:border-white transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light">
                    Associate Software Developer
                  </h3>
                  <a
                    href="https://www.oracle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 text-sm sm:text-base hover:text-white transition-colors"
                  >
                    Oracle
                  </a>
                </div>
                <span className="text-xs sm:text-sm text-neutral-500">
                  Jan 2024 – Oct 2024
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  Worked within Oracle Communications Global Business Unit to
                  modernize legacy frameworks, extending{" "}
                  <span className="text-white font-medium">
                    Oracle Network Integrity
                  </span>{" "}
                  with AI-assisted crash node detection powered by Oracle 23ai
                  Database.
                </p>
                <p>
                  As an intern, enhanced{" "}
                  <span className="text-white font-medium">
                    Oracle Communications UIM
                  </span>{" "}
                  capabilities and contributed to the design of scalable REST
                  services for enterprise telecom applications.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4 sm:pl-6 md:pl-8 hover:border-white transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light">
                    Automation Intern
                  </h3>
                  <a
                    href="https://www.cloud4c.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 text-sm sm:text-base hover:text-white transition-colors"
                  >
                    Cloud4C
                  </a>
                </div>
                <span className="text-xs sm:text-sm text-neutral-500">
                  Jun 2023 – Oct 2023
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  Automated SOC ticketing workflows and built NLP-based false
                  positive filtering for the Centralized Alert Automation
                  platform. Deployed Tenable and Zabbix monitoring agents across
                  5,000+ customer servers via bulk scripting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 w-full overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-8 sm:mb-12 md:mb-16 tracking-tight">
            Projects
          </h2>

          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <a
                href="https://quickstock-bolna.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  </div>
                  <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                    <span className="text-[10px] text-neutral-600 truncate">
                      quickstock-bolna.vercel.app
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-700 group-hover:text-neutral-400 transition-colors" />
                </div>
                <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-extralight text-neutral-800 tracking-widest select-none">
                      QuickStock
                    </span>
                  </div>
                  <iframe
                    src="https://quickstock-bolna.vercel.app/"
                    title="QuickStock demo"
                    className="absolute top-0 left-0 border-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      width: "200%",
                      height: "200%",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                    }}
                    tabIndex={-1}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
                </div>
              </a>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-light">QuickStock</h3>
                  <a
                    href="https://github.com/sathvik-vadari/quick-stock-bolna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors shrink-0 pt-1"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  AI-powered voice commerce platform that calls nearby stores in
                  parallel using Bolna voice AI, checks product availability and
                  pricing from live phone conversations, and compares results
                  against online deals — delivering ranked options in real time
                  via SSE.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "FastAPI",
                    "Bolna",
                    "Azure OpenAI",
                    "Gemini",
                    "Google Maps",
                    "Next.js",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <a
                href="https://www.8bit.ai/neutrino/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                    <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  </div>
                  <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                    <span className="text-[10px] text-neutral-600 truncate">
                      8bit.ai/neutrino
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neutral-700 group-hover:text-neutral-400 transition-colors" />
                </div>
                <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-extralight text-neutral-800 tracking-widest select-none">
                      Neutrino
                    </span>
                  </div>
                  <iframe
                    src="https://www.8bit.ai/neutrino/"
                    title="Neutrino Analytics"
                    className="absolute top-0 left-0 border-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      width: "200%",
                      height: "200%",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                    }}
                    tabIndex={-1}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
                </div>
              </a>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-light mb-3">
                  Neutrino
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  Enterprise AI analytics platform with a Text-to-SQL engine
                  (92% execution accuracy), RAG pipelines, and multi-agent
                  orchestration — making complex data queryable in plain
                  English.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "LangChain", "PostgreSQL", "RAG", "LLMs"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                  <span className="text-[10px] text-neutral-600 truncate">
                    customer-journeys.8bit.ai/console
                  </span>
                </div>
              </div>
              <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                <img
                  src={customerIntelImg}
                  alt="Customer Intelligence Platform"
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-light mb-3">
                  Customer Intelligence Platform
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  Automated pipeline processing 30K+ emails and 100+ meetings
                  monthly. Extracts sentiment, intent, and customer profiles
                  using open-source LLMs — zero manual review.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "NLP", "Open-source LLMs", "FastAPI"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                  <span className="text-[10px] text-neutral-600 truncate">
                    kubectl get pods -n ml-ops
                  </span>
                </div>
              </div>
              <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                <img
                  src={mlopsImg}
                  alt="ML Ops on Kubernetes"
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-light">
                    ML Ops on Kubernetes
                  </h3>
                  <a
                    href="https://github.com/8bitai/model-operator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors shrink-0 pt-1"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  K8s Operator for automated ML model deployments with
                  Prometheus & Grafana observability. Built for inventory
                  prediction workloads with zero-downtime rollouts.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Python", "Prometheus", "Grafana"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                  <span className="text-[10px] text-neutral-600 truncate">
                    jupyter notebook — sales_analysis.ipynb
                  </span>
                </div>
              </div>
              <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                <img
                  src={videogameImg}
                  alt="Video Game Sales Analysis"
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-light mb-3">
                  Video Game Sales Prediction
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  End-to-end Data Science project exploring the relationship
                  between video game sales and playtime. Followed the full DS
                  lifecycle — data collection, modelling, and analysis — for
                  academic research.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "R", "Data Science", "Research"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                  <span className="text-[10px] text-neutral-600 truncate">
                    connectplay.app
                  </span>
                </div>
              </div>
              <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                <img
                  src={connectplayImg}
                  alt="ConnectPlay"
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-light mb-3">
                  ConnectPlay
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  Platform that connects individuals looking to join team
                  sports. Built full-stack with the MERN stack — matchmaking,
                  team formation, and scheduling in one place.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "Express.js", "React", "Node.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden bg-neutral-900/20 border border-neutral-800 hover:border-neutral-500 transition-all duration-500">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950/60 border-b border-neutral-800/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800/40 flex items-center px-2">
                  <span className="text-[10px] text-neutral-600 truncate">
                    trashfinder.swachhbharat.gov.in
                  </span>
                </div>
              </div>
              <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-neutral-950">
                <img
                  src={trashfinderImg}
                  alt="Trash Finder"
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-light mb-3">
                  Trash Finder
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 mb-5 leading-relaxed">
                  Built under the Swachh Bharat Initiative — a web app that
                  lets anyone pin and report trash locations on a live map,
                  helping municipalities prioritize cleanup.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Google Maps API", "HTML", "CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 border border-neutral-800 text-neutral-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center justify-center relative z-10 w-full overflow-x-hidden"
      >
        <div className="max-w-2xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-extralight mb-6 sm:mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-8 sm:mb-12 leading-relaxed px-4">
            Building AI systems that actually work in production — and
            researching how to make them more efficient. Open to conversations
            about ML infrastructure, GPU energy, LLMs, and the occasional
            existential crisis about AGI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
            <a
              href="mailto:sathvikvadari09@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/sathvikvadari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all text-sm sm:text-base"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sathvik-vadari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 hover:border-white hover:bg-neutral-900 transition-all text-sm sm:text-base"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="text-xs sm:text-sm text-neutral-500 px-4">
            <p>Hyderabad, India</p>
            <p className="mt-2">B.E. in AI & Data Science • CBIT • 9.04 CGPA</p>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-neutral-500 border-t border-neutral-800 relative z-10 px-4">
        <p>Crafted with minimal effort and maximum procrastination</p>
      </footer>
    </div>
  );
}

export default App;
