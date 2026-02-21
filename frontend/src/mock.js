// Mock data for NYCodeLab portfolio

export const profileData = {
  username: "NYCodeLab",
  avatar: "https://customer-assets.emergentagent.com/job_0a806fac-d561-4dc4-9e28-0b894c7e6c05/artifacts/yfj3n6r1_pixil-frame-0%20%281%29%20%281%29.png",
  tagline: "Adolescente • Programadora Python • Criadora de Jogos e Sites",
  bio: "Olá! Sou a NYCodeLab e adoro criar coisas incríveis com código Python. Aprendo programação na Coders onde desenvolvo jogos e websites. Quando não estou a programar, gosto de ler, jogar voleibol e sonhar com uma viagem a Nova Iorque!",
  interests: {
    loves: [
      { name: "Ler", icon: "BookOpen" },
      { name: "Ir às Compras", icon: "ShoppingBag" },
      { name: "Jogar Voleibol", icon: "Trophy" },
      { name: "Viajar", icon: "Plane" },
      { name: "Nova Iorque ✨", icon: "Heart" }
    ],
    activities: [
      { name: "Fazer Receitas", icon: "CookingPot" },
      { name: "Ler Livros", icon: "Book" },
      { name: "Aprender Python", icon: "Code" },
      { name: "Criar Jogos", icon: "Gamepad2" },
      { name: "Desenvolver Sites", icon: "Globe" }
    ]
  },
  dream: "O meu grande sonho é viajar para Nova Iorque! 🗽"
};

export const portfolioProjects = [
  {
    id: 1,
    title: "Apanha Pares",
    description: "Um jogo divertido de memória onde tens que apanhar os números pares! Cuidado com os ímpares! Criado com Python.",
    category: "Jogo",
    status: "live",
    image: "https://customer-assets.emergentagent.com/job_nycode-lab/artifacts/hmpqxwi8_Captura%20de%20ecr%C3%A3%202026-02-21%20113353.png",
    url: "https://apanha-pares-ny.lovable.app/",
    tags: ["Python", "Jogo", "Memória"]
  },
  {
    id: 2,
    title: "Natureza em Dia",
    description: "Website sobre as estações do ano em Portugal e as frutas de cada época. Descobre quando é a melhor altura para cada fruta!",
    category: "Website",
    status: "live",
    image: "https://customer-assets.emergentagent.com/job_nycode-lab/artifacts/pu4fdpuj_Captura%20de%20ecr%C3%A3%202026-02-21%20114038.png",
    url: "https://naturezaemdia.netlify.app/",
    tags: ["Website", "Natureza", "Educação"]
  },
  {
    id: 3,
    title: "Aventura Arcade",
    description: "Jogo de aventura estilo retro criado no MakeCode Arcade! Explora o labirinto, evita obstáculos e conquista objetivos!",
    category: "Jogo",
    status: "live",
    image: "https://customer-assets.emergentagent.com/job_nycode-lab/artifacts/vryayee3_Captura%20de%20ecr%C3%A3%202026-02-21%20114532.png",
    url: "https://arcade.makecode.com/S14635-17622-21123-02393",
    tags: ["MakeCode", "Arcade", "Aventura"]
  }
];
