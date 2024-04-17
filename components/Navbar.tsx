"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-4 relative">
      <div className="flex items-center">
        <button
          className="text-white focus:outline-none mr-4"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        </button>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } items-center space-x-4`}
        >
          <a
            className={`${
              pathname === '/' ? 'text-white border-b' : ''
            }`}
            href="/"
          >
            Q and A Chat
          </a>
          <a
            className={`${
              pathname === '/structured_output' ? 'text-white border-b' : ''
            }`}
            href="/structured_output"
          >
            Structure Your Output
          </a>
          <a
            className={`${
              pathname === '/agents' ? 'text-white border-b' : ''
            }`}
            href="/agents"
          >
            Agents
          </a>
          <a
            className={`${
              pathname === '/retrieval' ? 'text-white border-b' : ''
            }`}
            href="/retrieval"
          >
            Retrieval
          </a>
          <a
            className={`${
              pathname === '/retrieval_agents' ? 'text-white border-b' : ''
            }`}
            href="/retrieval_agents"
          >
            Retrieval Agents
          </a>
        </div>
      </div>
    </nav>
  );
}


/*
"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/"> Q and A Chat</a>
      <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output"> Structure YourOutput</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">  Agents</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/retrieval">  Retrieval</a>
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/retrieval_agents">  Retrieval Agents</a>
    </nav>
  );
}*/