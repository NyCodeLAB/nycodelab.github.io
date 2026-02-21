import React, { useState } from 'react';
import { profileData, portfolioProjects } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  BookOpen,
  ShoppingBag,
  Trophy,
  Plane,
  Heart,
  CookingPot,
  Book,
  Code,
  Gamepad2,
  Globe,
  Sparkles,
  Github,
  Mail,
  MapPin,
  Video
} from 'lucide-react';

const iconMap = {
  BookOpen,
  ShoppingBag,
  Trophy,
  Plane,
  Heart,
  CookingPot,
  Book,
  Code,
  Gamepad2,
  Globe
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Python', 'Jogo', 'Website'];

  const filteredProjects = activeFilter === 'Todos'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                {profileData.username}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Início</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Sobre Mim</a>
              <a href="#portfolio" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Portfólio</a>
              <Button className="bg-gradient-to-r from-pink-400 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 text-white border-0">
                Contacto
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-2 rounded-3xl">
              <img
                src={profileData.avatar}
                alt={profileData.username}
                className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">{profileData.tagline}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Olá! Sou a{' '}
              <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {profileData.username}
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {profileData.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-pink-500 hover:bg-pink-600 text-white border-0"
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Conhece-me Melhor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descobre mais sobre as minhas paixões e o que gosto de fazer!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Loves */}
            <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-pink-50 to-yellow-50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="w-6 h-6 text-pink-500" />
                  Adoro
                </CardTitle>
                <CardDescription>As coisas que me fazem feliz</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {profileData.interests.loves.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200">
                        {Icon && <Icon className="w-5 h-5 text-pink-500" />}
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
                <Separator className="my-6" />
                <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-4 rounded-lg">
                  <p className="text-center font-semibold text-gray-800">
                    O meu grande sonho é viajar para Nova Iorque!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  O Que Costumo Fazer
                </CardTitle>
                <CardDescription>As minhas atividades favoritas</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {profileData.interests.activities.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors duration-200">
                        {Icon && <Icon className="w-5 h-5 text-yellow-600" />}
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meu <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Portfólio</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Projetos de Python, jogos e websites que desenvolvo na Coders
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  className={activeFilter === category 
                    ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-0' 
                    : 'border-2 border-pink-200 text-gray-700 hover:bg-pink-50'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-2 border-pink-100 hover:border-pink-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {project.image ? (
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-pink-500 text-white">{project.category}</Badge>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-yellow-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      {project.category === 'Python' && <Code className="w-16 h-16 text-pink-400 mx-auto mb-2" />}
                      {project.category === 'Jogo' && <Gamepad2 className="w-16 h-16 text-yellow-500 mx-auto mb-2" />}
                      {project.category === 'Website' && <Globe className="w-16 h-16 text-orange-400 mx-auto mb-2" />}
                      <Badge className="bg-white text-gray-700">{project.category}</Badge>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {project.status === 'live' && project.url ? (
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white border-0"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      {project.category === 'Jogo' && <Gamepad2 className="w-4 h-4 mr-2" />}
                      {project.category === 'Website' && <Globe className="w-4 h-4 mr-2" />}
                      {project.category === 'Python' && <Code className="w-4 h-4 mr-2" />}
                      {project.category === 'Jogo' ? 'Jogar Agora' : project.category === 'Website' ? 'Ver Website' : 'Ver Projeto'}
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50">
                      Em Breve
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Code className="w-5 h-5 text-pink-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  {profileData.username}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Criando projetos incríveis com Python
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-pink-400">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-pink-400">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-gray-800" />
          <p className="text-center text-gray-500 text-sm">
            © 2025 NYCodeLab. Feito com código e criatividade.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
