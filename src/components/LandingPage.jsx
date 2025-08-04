import React, { useState, useEffect } from 'react';
import { Shield, Zap, Wifi, HardDrive, Users, MessageSquare, Smartphone, CheckCircle, ArrowRight, Star, Menu, X, Play, CreditCard, Building, DollarSign, Radio, Lock, Unlock, Cpu, Code, Rocket, ZapOff } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';
import ImageComparisonCarousel from "./ImageComparisonCarousel";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(mockData.company.whatsappLink, '_blank');
  };

  const IconComponent = ({ iconName, className }) => {
    const icons = {
      Shield, Zap, Wifi, HardDrive, Users, CreditCard, Building, DollarSign, Radio, Smartphone
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
      {/* ... Todo o restante do conteúdo permanece igual ... */}

      {/* Cyber Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* ... conteúdo anterior ... */}
      </section>

      {/* Exemplos de Desbloqueio */}
      <section className="my-16">
        <h2 className="text-center text-2xl font-bold mb-8 text-white">Exemplos de Desbloqueio</h2>
        <ImageComparisonCarousel />
      </section>

      {/* Continuação das outras seções... */}

    </div>
  );
};

export default LandingPage;
