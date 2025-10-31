// src/app/page.tsx (Landing Page)

import ChatWindow from '@/components/chat/ChatWindow';

// Esta página será a Landing Page principal, focada no chat central.
// O layout é otimizado para 'computer-only', centralizando o chat.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      {/* Título e Descrição da Landing Page */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Oriko: Seu Agente de Compras Inteligente
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Converse com nossa IA para encontrar produtos validados em marketplaces globais e locais.
        </p>
      </div>

      {/* Container Central do Chat */}
      <div className="w-full max-w-3xl h-[70vh]">
        <ChatWindow />
      </div>

      {/* Footer Simples */}
      <footer className="mt-8 text-sm text-gray-500">
        Desenvolvido com Next.js e TypeScript. © 2025 Oriko.
      </footer>
    </main>
  );
}
