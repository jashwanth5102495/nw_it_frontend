import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  hideDock?: boolean;
}

const Header = ({ hideDock = false }: HeaderProps) => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 120);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (hideDock) {
        return null;
    }

    const headerClass = scrolled
      ? 'fixed left-4 right-4 top-2 z-50 transition-all duration-500 ease-out'
      : 'fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out';

    const navClass = scrolled
      ? 'flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl'
      : 'flex items-center justify-between bg-transparent px-6 py-4 border-b border-white/10';

    return (
        <header className={headerClass}>
            {/* Navbar that transforms into floating island on scroll */}
            <nav className={`${navClass} transition-all duration-300 ease-out`}>
                {/* Left - Brand */}
                <div className="flex items-center">
                    <div className="text-white/90 font-bold text-sm">Jasnav It Solutions</div>
                </div>

                {/* Right - Navigation Links */}
                <div className="flex items-center space-x-2">
                    <button onClick={() => navigate('/')} className="inline-flex items-center px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition" title="Home">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="ml-2">Home</span>
                    </button>
                    <button onClick={() => navigate('/about')} className="inline-flex items-center px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition" title="About Us">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="ml-2">About</span>
                    </button>
                    <button onClick={() => { window.location.href = 'https://blunetitservices.in/career'; }} className="inline-flex items-center px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition" title="Career">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0H6a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8m0 0h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m0 0V6" />
                        </svg>
                        <span className="ml-2">Career</span>
                    </button>
                    <button onClick={() => navigate('/projects')} className="inline-flex items-center px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition" title="Projects">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-7 4h8M7 8h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2">Projects</span>
                    </button>
                    <button onClick={() => navigate('/contact')} className="inline-flex items-center px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition" title="Contact">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2">Contact</span>
                    </button>
                    {/* Removed Courses and Student Login */}
                </div>
            </nav>
        </header>
    );
};

export default Header;