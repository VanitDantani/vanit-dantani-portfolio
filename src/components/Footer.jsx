import { Mail, Globe, Code, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-transparent pt-20 pb-10 overflow-hidden border-t border-faang-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-faang-text mb-4">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-faang-accent to-purple-500">
                extraordinary.
              </span>
            </h2>
            <a 
              href="mailto:vanitdantani05@gmail.com" 
              className="inline-flex items-center gap-2 text-lg font-mono text-faang-text-muted hover:text-faang-accent transition-colors group"
            >
              vanitdantani05@gmail.com
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="https://github.com/VanitDantani" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-faang-surface border border-faang-border hover:border-faang-accent text-faang-text-muted hover:text-faang-accent transition-all hover:scale-110 shadow-lg">
              <Code size={24} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 bg-faang-bg border border-faang-border px-3 py-1 rounded text-xs font-mono text-faang-text whitespace-nowrap pointer-events-none shadow-xl">
                GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/vanit-dantani-23b2582b1" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-faang-surface border border-faang-border hover:border-faang-accent text-faang-text-muted hover:text-faang-accent transition-all hover:scale-110 shadow-lg">
              <Globe size={24} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 bg-faang-bg border border-faang-border px-3 py-1 rounded text-xs font-mono text-faang-text whitespace-nowrap pointer-events-none shadow-xl">
                LinkedIn
              </span>
            </a>
            <a href="mailto:vanitdantani05@gmail.com" className="group relative p-3 rounded-full bg-faang-surface border border-faang-border hover:border-faang-accent text-faang-text-muted hover:text-faang-accent transition-all hover:scale-110 shadow-lg">
              <Mail size={24} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 bg-faang-bg border border-faang-border px-3 py-1 rounded text-xs font-mono text-faang-text whitespace-nowrap pointer-events-none shadow-xl">
                Email
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-faang-border/30 gap-6 md:gap-4">
          <p className="text-sm font-medium text-faang-text-muted text-center md:text-left">
            © {new Date().getFullYear()} Vanit Dantani. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center opacity-40 hover:opacity-100 transition-opacity grayscale">
              <img 
                src="https://komarev.com/ghpvc/?username=vanitdantani-portfolio&label=VIEWS&color=27272a&style=flat-square" 
                alt="Visitor Count" 
                className="h-5 rounded-sm shadow-sm" 
              />
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-faang-border"></div>
            
            <div className="flex items-center gap-1 text-sm font-medium text-faang-text-muted">
              <span>Made with</span>
              <span className="text-red-500 mx-1">❤️</span>
              <span>by Vanit Dantani</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Huge Background Text */}
      <div className="absolute bottom-[-1rem] sm:bottom-[-2rem] md:bottom-[-6rem] left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.04] select-none">
        <span className="text-[5rem] sm:text-[8rem] md:text-[18rem] font-bold text-faang-text whitespace-nowrap leading-none tracking-tighter">
          VANIT DANTANI
        </span>
      </div>
    </footer>
  );
}
