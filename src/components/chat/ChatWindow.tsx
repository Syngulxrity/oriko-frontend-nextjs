// src/components/chat/ChatWindow.tsx

import React, { useState, useRef, useEffect } from 'react';

// Tipagem básica para a mensagem
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  // Adicionar campo para cards de produto no futuro
  // products?: ProductCard[]
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou Oriko, seu agente de IA para encontrar produtos validados. Como posso te ajudar hoje?",
      sender: 'ai',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    // Simulação de resposta da IA (será substituído pela chamada ao backend)
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: `Entendi que você disse: "${input}". Em breve, farei a busca de produtos para você!`,
        sender: 'ai',
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-2xl border border-gray-100">
      {/* Header do Chat */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Oriko - Agente de IA</h1>
        <span className="text-sm text-green-500">Online</span>
      </div>

      {/* Área de Mensagens */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl text-white ${
                message.sender === 'user'
                  ? 'bg-blue-500 rounded-br-none'
                  : 'bg-gray-700 rounded-tl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de Mensagem */}
      <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre um produto..."
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition duration-150"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
