import { Mail, Globe, Code, ArrowUpRight, Eye } from 'lucide-react';

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


        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 pt-8 border-t border-faang-border/30">
          
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <p className="text-sm font-medium text-faang-text-muted">
              © {new Date().getFullYear()} Vanit Dantani. All rights reserved.
            </p>
          </div>
          
          <div className="flex justify-center order-1 md:order-2">
            <div className="flex items-center gap-1 text-sm font-medium text-faang-text-muted">
              <span>Made with</span>
              <span className="text-red-500 mx-1">❤️</span>
              <span>by Vanit Dantani</span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end order-3 md:order-3">
            <div 
              className="relative flex items-center gap-3 px-4 py-2 rounded-full bg-faang-surface border border-faang-border hover:border-faang-accent/50 hover:shadow-[0_0_15px_rgba(0,112,243,0.15)] transition-all duration-300 group cursor-default"
              title="Total Profile Views"
            >
              <div className="flex items-center text-faang-text-muted group-hover:text-faang-accent transition-colors">
                <Eye size={16} />
              </div>
              
              <div className="h-4 w-px bg-faang-border group-hover:bg-faang-accent/30 transition-colors"></div>
              
              <div className="flex items-center overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
                <img 
                  src="https://komarev.com/ghpvc/?username=vanitdantani-portfolio&label=%20&color=000000&style=for-the-badge" 
                  alt="Visitor Count" 
                  className="h-[22px] -ml-[18px] max-w-none visitor-counter" 
                />
              </div>
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
