// src/components/header.tsx (Versão Estática - Header Organizado, Botão SEM AÇÃO)

// Não tem a linha "use client";
import { Sun, Moon, FileText } from 'lucide-react'; 

const Header = () => {
    // A lógica de estado (useState, useEffect, toggleTheme) FOI REMOVIDA
    
    // Configurações estáticas:
    const seuNome = "Leandro de Sousa";
    const linkCV = "leandrodesousa_ios.pdf"; 

    return (
        // As classes de layout e Flexbox estão aqui para organizar
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md">
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* FLEXBOX PRINCIPAL: Deve garantir a organização horizontal */}
                <div className="flex justify-between items-center h-16 w-full"> 
                    
                    {/* Nome (Esquerda) */}
                    <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        {seuNome}
                    </h1>

                    {/* Botões (Direita) */}
                    <div className="flex items-center space-x-4">
                        
                        {/* Botão CV (Link) */}
                        <a
                            href={`/${linkCV}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <FileText className="w-4 h-4 mr-1" />
                            CV
                        </a>

                        {/* Botão de Tema (Apenas o visual, SEM onClick) */}
                        <button
                            // 🔑 AQUI ESTAVA O onClick={toggleTheme} - FOI REMOVIDO!
                            className="p-2 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {/* Você pode escolher o ícone que quer mostrar por padrão */}
                            <Moon className="w-5 h-5" /> 
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Linha Divisória */}
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700"></div>
        </header>
    );
};

export default Header;