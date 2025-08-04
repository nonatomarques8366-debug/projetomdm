// COMPONENTE: ImageComparisonCarousel.jsx
import React, { useEffect, useState } from "react";
import { Lock, Unlock } from "lucide-react";

const imagePairs = [
  {
    before: "URL_DA_IMAGEM_ANTES_1",
    after: "URL_DA_IMAGEM_DEPOIS_1",
  },
  {
    before: "URL_DA_IMAGEM_ANTES_2",
    after: "URL_DA_IMAGEM_DEPOIS_2",
  },
  // Adicione mais pares conforme necessário
];

export default function ImageComparisonCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePairs.length);
    }, 5000); // troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const { before, after } = imagePairs[currentIndex];

  return (
    <div className="relative grid grid-cols-2 gap-8 max-w-lg mx-auto">
      {/* Imagem antes */}
      <div className="relative group">
        <div className="bg-gradient-to-b from-red-600/20 to-red-800/20 p-4 rounded-2xl border border-red-500/30 backdrop-blur-sm overflow-hidden">
          <div className="relative">
            <img src={before} alt="Antes" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <Lock className="w-6 h-6 text-red-500 absolute -top-2 -right-2 bg-red-900/80 rounded-full p-1 shadow-lg" />
            <div className="text-center mt-2">
              <p className="text-red-300 font-bold text-sm">BLOQUEADO</p>
              <p className="text-red-500 text-xs mt-1">MDM Ativo</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-red-400 font-mono bg-gray-900/80 px-2 py-1 rounded">ANTES</div>
      </div>

      {/* Imagem depois */}
      <div className="relative group">
        <div className="bg-gradient-to-b from-green-600/20 to-emerald-800/20 p-4 rounded-2xl border border-green-500/30 backdrop-blur-sm overflow-hidden">
          <div className="relative">
            <img src={after} alt="Depois" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <Unlock className="w-6 h-6 text-green-500 absolute -top-2 -right-2 bg-green-900/80 rounded-full p-1 shadow-lg" />
            <div className="text-center mt-2">
              <p className="text-green-300 font-bold text-sm">DESBLOQUEADO</p>
              <p className="text-green-500 text-xs mt-1">Acesso Total</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-400 font-mono bg-gray-900/80 px-2 py-1 rounded">DEPOIS</div>
      </div>
    </div>
  );
}
