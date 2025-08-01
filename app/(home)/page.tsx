import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 dark:bg-blue-900 dark:text-blue-200">
              🎓 Plataforma Educativa SENA
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Aprende{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Desarrollo de Software
              </span>
              <br />
              de Forma Estructurada
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Un espacio creado para aprendices del SENA que organiza y preserva materiales de formación, 
              cursos especializados y recursos clave para fortalecer tu aprendizaje en desarrollo de software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Explorar Documentación →
              </a>
              <a 
                href="/docs/cursos/git_curso"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Ver Cursos Disponibles
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400 mb-4 text-4xl">📖</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentación Completa</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Accede a guías detalladas y materiales de formación organizados por competencias.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400 mb-4 text-4xl">💻</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cursos Especializados</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Aprende Git, GitHub, testing y otras tecnologías con cursos prácticos.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-blue-600 dark:text-blue-400 mb-4 text-4xl">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Formación SENA</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Contenido alineado con los programas de Análisis y Desarrollo de Software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Qué quieres aprender hoy?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Busca entre cursos, documentación y guías especializadas
          </p>
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl">🔍</div>
            <input
              type="text"
              placeholder="Buscar cursos, documentación, guías..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contenido de Calidad
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recursos educativos estructurados y actualizados para tu formación profesional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                <div className="text-4xl mb-3">🎓</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">3</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                  Cursos Disponibles
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                <div className="text-4xl mb-3">📖</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-green-600">8</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                  Documentos Técnicos
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                <div className="text-4xl mb-3">📚</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-purple-600">13</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                  Recursos Totales
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                <div className="text-4xl mb-3">⏱️</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-600">50+</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                  Horas de Contenido
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contenido Organizado por Categorías
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora nuestro contenido estructurado en categorías específicas para facilitar tu aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cursos */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cursos Especializados</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cursos prácticos sobre herramientas y tecnologías fundamentales para el desarrollo de software.
            </p>
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-6">
              3 recursos disponibles
            </div>
            <a 
              href="/docs/cursos/git_curso"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Ver Todos los Recursos
            </a>
          </div>

          {/* ADS-SENA */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Análisis y Desarrollo de Software</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Documentación técnica completa del programa ADS del SENA, organizada por competencias.
            </p>
            <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              8 recursos disponibles
            </div>
            <a 
              href="/docs/sena/ads_docs/sistemas-operativos-de-red"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Ver Todos los Recursos
            </a>
          </div>

          {/* Formación Complementaria */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formación Complementaria</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cursos y contenidos adicionales para ampliar conocimientos y habilidades profesionales.
            </p>
            <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-6">
              2 recursos disponibles
            </div>
            <a 
              href="/docs/sena/fc_docs/automatizacion-de-procesos-para-la-eficiencia-organizacional"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Ver Todos los Recursos
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu aprendizaje?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de estudiantes que ya están fortaleciendo sus habilidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Explorar Documentación
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
