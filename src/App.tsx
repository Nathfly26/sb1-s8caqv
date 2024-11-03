import React from 'react';
import Navbar from './components/Navbar';
import { MapPin, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="accueil" className="pt-20 pb-12 bg-gradient-to-b from-sage-50 to-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-sage-900 sm:text-5xl md:text-6xl">
              Kinésiologie Holistique
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-sage-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Retrouvez l'harmonie entre le corps et l'esprit grâce à la kinésiologie
            </p>
          </div>
          <div className="mt-10">
            <img
              className="rounded-lg shadow-xl mx-auto"
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
              alt="Séance de kinésiologie"
            />
          </div>
        </div>
      </section>

      {/* Soins Section */}
      <section id="soins" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sage-900 text-center mb-12">Nos Soins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-sage-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Gestion du Stress</h3>
              <p className="text-sage-600">Techniques spécifiques pour réduire le stress et l'anxiété, retrouver calme et sérénité.</p>
            </div>
            <div className="bg-sage-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Équilibre Émotionnel</h3>
              <p className="text-sage-600">Harmonisation des émotions et libération des blocages émotionnels.</p>
            </div>
            <div className="bg-sage-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Performance</h3>
              <p className="text-sage-600">Optimisation des capacités physiques et mentales pour atteindre vos objectifs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-16 bg-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sage-900 text-center mb-12">Tarifs</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <span className="text-lg font-medium text-sage-800">Séance Découverte</span>
                  <span className="text-2xl font-bold text-sage-900">60€</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <span className="text-lg font-medium text-sage-800">Séance Standard</span>
                  <span className="text-2xl font-bold text-sage-900">75€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-sage-800">Forfait 5 séances</span>
                  <span className="text-2xl font-bold text-sage-900">325€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section id="zone" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sage-900 text-center mb-12">Zone d'Intervention</h2>
          <div className="bg-sage-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Cabinet et Déplacements</h3>
                <p className="text-sage-600 mb-4">
                  Le cabinet est situé au cœur de [Votre Ville]. Je me déplace également dans un rayon de 20km pour des séances à domicile.
                </p>
                <p className="text-sage-600">
                  Zones couvertes : [Liste des principales villes/zones]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sage-900 text-center mb-12">Contact</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-sage-600" />
                <span className="text-lg text-sage-800">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-sage-600" />
                <span className="text-lg text-sage-800">contact@kinebienetre.fr</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-sage-600" />
                <span className="text-lg text-sage-800">[Votre Adresse Complète]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-sage-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 KinéBienÊtre. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;