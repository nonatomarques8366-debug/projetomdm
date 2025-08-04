{/* Cyber Hero Section */}
<section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        {/* Status Badge */}
        <Badge className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 text-green-300 mb-8 font-mono">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          {mockData.hero.badge}
        </Badge>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {mockData.hero.headline}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-6">
          {mockData.hero.subheadline}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          {mockData.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
          >
            <Rocket className="w-6 h-6 mr-3" />
            {mockData.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-lg border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            View Process
          </Button>
        </div>
      </div>

      {/* Right Animated Icon */}
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-gray-900/90 rounded-full p-2 border border-cyan-500/50">
            <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
