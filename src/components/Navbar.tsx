import React from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-sage-50 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-sage-800 text-xl font-semibold">KinéBienÊtre</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#accueil" className="text-sage-600 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
              <a href="#soins" className="text-sage-600 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium">Soins</a>
              <a href="#tarifs" className="text-sage-600 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium">Tarifs</a>
              <a href="#zone" className="text-sage-600 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium">Zone d'intervention</a>
              <a href="#contact" className="text-sage-600 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sage-600 hover:text-sage-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#accueil" className="text-sage-600 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
            <a href="#soins" className="text-sage-600 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium">Soins</a>
            <a href="#tarifs" className="text-sage-600 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium">Tarifs</a>
            <a href="#zone" className="text-sage-600 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium">Zone d'intervention</a>
            <a href="#contact" className="text-sage-600 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}