//import './style.css'

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const area = document.getElementById('area').value;
  const message = encodeURIComponent(
    `Olá! Me chamo ${name} e trabalho com ${area}. Gostaria de participar do grupo de networking.`
  );
  window.open(`https://api.whatsapp.com/send?phone=5519981009910&text=Ol%C3%A1,%20quero%20entrar%20nos%20grupos!`, '_blank');
}

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-tech-pattern text-white">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 pt-24 pb-32">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow animate-float">
          Comunidade T.I Networking
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Conecte-se com <span class="text-blue-400 font-semibold">profissionais de elite</span> da área de tecnologia e 
          acelere sua carreira através de networking estratégico
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <button onclick="document.getElementById('cadastro').scrollIntoView({behavior: 'smooth'})" 
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Participar Agora
          </button>
          <button onclick="document.getElementById('beneficios').scrollIntoView({behavior: 'smooth'})"
            class="px-8 py-4 bg-white/10 rounded-full text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Conhecer Mais
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-black/30 py-16 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1000+</div>
            <div class="text-gray-400">Membros Ativos</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-purple-400 mb-2">150+</div>
            <div class="text-gray-400">Vagas Exclusivas</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-pink-400 mb-2">10+</div>
            <div class="text-gray-400">Grupos Temáticos</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">24/7</div>
            <div class="text-gray-400">Suporte Ativo</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div id="beneficios" class="py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Por que participar dos nossos grupos?
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="glass-card p-8 rounded-2xl card-hover">
              <div class="text-blue-400 mb-6">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Networking Estratégico</h3>
              <p class="text-gray-400">Conecte-se com profissionais de alto nível e amplie suas oportunidades de carreira através de networking qualificado.</p>
            </div>
            <div class="glass-card p-8 rounded-2xl card-hover">
              <div class="text-purple-400 mb-6">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Vagas Premium</h3>
              <p class="text-gray-400">Acesso antecipado a oportunidades exclusivas de emprego em empresas de tecnologia de primeira linha.</p>
            </div>
            <div class="glass-card p-8 rounded-2xl card-hover">
              <div class="text-pink-400 mb-6">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-4">Mentoria e Suporte</h3>
              <p class="text-gray-400">Aprenda com profissionais experientes através de discussões técnicas e compartilhamento de conhecimento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Groups Preview Section -->
    <div class="py-24 bg-black/30 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Grupos Exclusivos por Especialidade
          </h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div class="glass-card p-6 rounded-2xl card-hover">
                <h3 class="text-xl font-semibold mb-3 text-blue-400">Desenvolvimento</h3>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Frontend & Backend
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Mobile & Web
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Arquitetura de Software
                  </li>
                </ul>
              </div>
              <div class="glass-card p-6 rounded-2xl card-hover">
                <h3 class="text-xl font-semibold mb-3 text-purple-400">DevOps & Cloud</h3>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AWS, Azure & GCP
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Containers & Kubernetes
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    CI/CD & Automação
                  </li>
                </ul>
              </div>
            </div>
            <div class="space-y-8">
              <div class="glass-card p-6 rounded-2xl card-hover">
                <h3 class="text-xl font-semibold mb-3 text-pink-400">Data & AI</h3>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Data Science & Analytics
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Machine Learning
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Big Data & ETL
                  </li>
                </ul>
              </div>
              <div class="glass-card p-6 rounded-2xl card-hover">
                <h3 class="text-xl font-semibold mb-3 text-indigo-400">Gestão & Liderança</h3>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tech Leads & CTOs
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Product Management
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Agile & Scrum
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Registration Section -->
    <div id="cadastro" class="py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="glass-card p-8 rounded-2xl">
            <h2 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Faça parte da nossa comunidade
            </h2>
            <form onsubmit="handleSubmit(event)" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2 text-gray-300">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-white"
                  placeholder="Digite seu nome completo"
                >
              </div>
              <div>
                <label for="area" class="block text-sm font-medium mb-2 text-gray-300">Área de Atuação</label>
                <input
                  type="text"
                  id="area"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-white"
                  placeholder="Ex: Desenvolvimento Frontend, DevOps, Data Science"
                >
              </div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
              >
                Participar dos Grupos
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-black/30 backdrop-blur-sm py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center text-gray-400">
          <p class="mb-4">© 2024 Infotec190. Todos os direitos reservados.</p>
          <p class="text-sm">
            Grupos moderados e focados em networking profissional de qualidade.
          </p>
        </div>
      </div>
    </footer>
  </div>
`

document.querySelector('form').addEventListener('submit', handleSubmit);