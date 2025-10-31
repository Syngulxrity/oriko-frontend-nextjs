// src/app/layout.tsx

import './globals.css'; // Importa o arquivo de estilos globais

export const metadata = {
  title: 'Oriko - Agente de Compras com IA',
  description: 'Seu agente de IA para encontrar produtos validados em marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
