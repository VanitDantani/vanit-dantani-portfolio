import { Mail, Globe, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium text-apple-text-light">
          © 2026 Vanit Dantani. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="mailto:vanitdantani05@gmail.com" className="text-apple-text-light hover:text-apple-dark transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vanit-dantani-23b2582b1" target="_blank" rel="noopener noreferrer" className="text-apple-text-light hover:text-apple-dark transition-colors">
            <Globe size={20} />
          </a>
          <a href="[GitHub URL]" className="text-apple-text-light hover:text-apple-dark transition-colors">
            <Code size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
