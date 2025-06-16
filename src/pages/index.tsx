import React from 'react';
import { ChevronDown, Globe, Users, Calendar, Mail, MapPin, Award, Languages, Mountain } from 'lucide-react';
import Navbar from '@/components/navbar';


interface CountryCardProps {
  country: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, flag }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="text-4xl mb-3 text-center">{flag}</div>
    <h3 className="text-lg font-semibold text-center text-[#153243]">{country}</h3>
  </div>
);

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="w-16 h-16 bg-gradient-to-br from-[#E4B363] to-[#d5a950] rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4 text-[#153243]">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function PyrenMUN() {
  const invitedCountries = [
    { country: "France", flag: "🇫🇷" },
    { country: "Spain", flag: "🇪🇸" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "Italy", flag: "🇮🇹" },
    { country: "United Kingdom", flag: "🇬🇧" },
    { country: "Netherlands", flag: "🇳🇱" },
    { country: "Belgium", flag: "🇧🇪" },
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Portugal", flag: "🇵🇹" },
    { country: "Austria", flag: "🇦🇹" },
    { country: "Poland", flag: "🇵🇱" },
    { country: "Czech Republic", flag: "🇨🇿" }
  ];

  const features = [
    {
      icon: Users,
      title: "International Networking",
      description: "Connect with ambitious students and diplomatic experts from across Europe in an intimate mountain setting."
    },
    {
      icon: Languages,
      title: "Multilingual Experience", 
      description: "Practice diplomacy in multiple languages while developing your cross-cultural communication skills."
    },
    {
      icon: Award,
      title: "Leadership Development",
      description: "Build confidence in public speaking, negotiation, and strategic thinking through immersive simulations."
    },
    {
      icon: Mountain,
      title: "Unique Venue",
      description: "Experience MUN like never before in the breathtaking Pyrenees mountains, combining diplomacy with adventure."
    }
  ];

  return (
    <>
      <div className="bg-[#F5F5F4] text-[#1E1E1E] min-h-screen font-sans">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#153243] via-[#1a3a4a] to-[#0f2832]"></div>
          
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#E4B363] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-[#E4B363] rounded-full animate-ping"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
            <div className="mb-8">
              <span className="inline-block bg-[#E4B363]/20 backdrop-blur-sm border border-[#E4B363]/30 rounded-full px-6 py-2 text-[#E4B363] font-medium mb-6">
                March 3–9, 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              <span className="block">MUN in the</span>
              <span className="block bg-gradient-to-r from-[#E4B363] to-[#F5D982] bg-clip-text text-transparent">
                Pyrenees
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
              Une expérience diplomatique unique au cœur des Pyrénées. 
              Rejoignez les futurs leaders européens pour une semaine inoubliable de débats, culture et aventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#apply"
                className="group bg-gradient-to-r from-[#E4B363] to-[#F5D982] text-[#1E1E1E] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Candidater Maintenant</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              
              <a
                href="mailto:pyrenmun@gmail.com"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
                À PROPOS
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
                Qu&apos;est-ce que le MUN ?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Le Model United Nations (MUN) est une simulation académique des Nations Unies où les étudiants 
                  endossent le rôle de délégués et s&apos;engagent dans des débats diplomatiques authentiques.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 mb-8">
                  C&apos;est un espace privilégié pour développer l&apos;art oratoire, la recherche approfondie, 
                  et la collaboration dans un cadre réaliste qui prépare aux défis de demain.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#E4B363] rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#153243]">Impact Global</h4>
                    <p className="text-gray-600">Abordez les enjeux mondiaux contemporains</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#153243] to-[#1a3a4a] rounded-3xl p-8 text-white shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E4B363]">7</div>
                      <div className="text-sm">Jours Intenses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E4B363]">12</div>
                      <div className="text-sm">Pays Invités</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E4B363]">100+</div>
                      <div className="text-sm">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E4B363]">5</div>
                      <div className="text-sm">Comités</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Participate */}
        <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#F5F5F4] to-[#E8E8E7]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#153243]/10 text-[#153243] px-4 py-2 rounded-full text-sm font-medium mb-4">
                POURQUOI NOUS REJOINDRE
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
                Une Expérience Transformatrice
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Invited Countries */}
        <section id="countries" className="py-24 px-6 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
                PARTICIPANTS INTERNATIONAUX
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
                Pays Invités
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rejoignez des délégués passionnés venus de toute l&apos;Europe pour cette aventure diplomatique unique
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {invitedCountries.map((item, index) => (
                <CountryCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Preview */}
        <section id="schedule" className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#153243] to-[#1a3a4a] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#E4B363]/20 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
                PROGRAMME
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                7 Jours Inoubliables
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Calendar className="w-12 h-12 text-[#E4B363] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Jours 1-2</h3>
                <p className="text-gray-200">Arrivée, formation aux procédures, et cérémonies d&apos;ouverture dans un cadre montagnard exceptionnel.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Users className="w-12 h-12 text-[#E4B363] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Jours 3-5</h3>
                <p className="text-gray-200">Sessions de comités intensives, négociations diplomatiques, et ateliers de développement personnel.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Award className="w-12 h-12 text-[#E4B363] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Jours 6-7</h3>
                <p className="text-gray-200">Assemblée générale, cérémonies de clôture, et activités culturelles dans les Pyrénées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Apply */}
        <section id="contact" className="py-24 px-6 md:px-20 bg-[#F5F5F4]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#E4B363]/10 text-[#E4B363] px-4 py-2 rounded-full text-sm font-medium mb-4">
              CONTACT & CANDIDATURE
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#153243]">
              Prêt à Nous Rejoindre ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E4B363] to-[#F5D982] mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Mail className="w-12 h-12 text-[#E4B363] mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#153243]">Contact Direct</h3>
                <a 
                  href="mailto:pyrenmun@gmail.com"
                  className="text-[#E4B363] hover:underline text-lg font-medium"
                >
                  pyrenmun@gmail.com
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <MapPin className="w-12 h-12 text-[#E4B363] mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#153243]">Localisation</h3>
                <p className="text-gray-600">
                  Pyrénées, France
                  <br />
                  <span className="text-sm">Lieu exact communiqué aux participants</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center" id="apply">
              <a
                href="https://forms.gle/example"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#E4B363] to-[#F5D982] text-[#1E1E1E] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Formulaire de Candidature</span>
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </a>
              
              <a
                href="mailto:pyrenmun@gmail.com?subject=Demande d'information PyrenMUN 2026"
                className="border-2 border-[#153243] text-[#153243] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#153243] hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Questions ?</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#153243] text-white py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="font-serif text-3xl font-bold mb-4">PyrenMUN</div>
            <p className="text-gray-300 mb-6">March 3–9, 2026 • Pyrénées, France</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="mailto:pyrenmun@gmail.com" className="hover:text-[#E4B363] transition-colors">
                Contact
              </a>
              <span>•</span>
              <a href="#apply" className="hover:text-[#E4B363] transition-colors">
                Apply
              </a>
              <span>•</span>
              <span>© 2025 PyrenMUN</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}