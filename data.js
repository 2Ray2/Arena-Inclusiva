// Base de dados das modalidades adaptadas
const SPORTS_DATA = [
    {
        id: "basquete-cadeira",
        name: "Basquete em Cadeira de Rodas",
        category: "Coletivo",
        disabilityTypes: ["fisica"],
        experienceLevel: "todos",
        description: "Modalidade ágil e dinâmica disputada em quadra oficial com cadeiras adaptadas.",
        history: "Surgiu nos EUA após a Segunda Guerra Mundial para reabilitação de veteranos.",
        rules: "Mesmas dimensões da quadra do basquete tradicional e cesta a 3,05m.",
        equipment: "Cadeira de rodas esportiva com cambagem nas rodas.",
        accessibility: "Pisos planos, rampa de acesso às quadras e vestiários adaptados.",
        benefits: "Fortalecimento dos membros superiores, agilidade e trabalho em equipe."
    },
    {
        id: "volei-sentado",
        name: "Vôlei Sentado",
        category: "Coletivo",
        disabilityTypes: ["fisica", "multipla"],
        experienceLevel: "todos",
        description: "Praticado por atletas sentados no chão com rede em altura reduzida.",
        history: "Criado na Holanda em 1956 combinando voleibol com sitball.",
        rules: "A pelve do jogador deve manter contato com o solo ao tocar na bola.",
        equipment: "Quadra menor (10x6m) e rede baixa (1,15m homens / 1,05m mulheres).",
        accessibility: "Superfície da quadra lisa e sem obstáculos para deslocamento.",
        benefits: "Coordenação motora, resistência aeróbica e inclusão total."
    },
    {
        id: "goalball",
        name: "Goalball",
        category: "Coletivo",
        disabilityTypes: ["visual"],
        experienceLevel: "todos",
        description: "Esporte desenvolvido exclusivamente para pessoas com deficiência visual com bola sonora.",
        history: "Desenvolvido em 1946 pelo austríaco Hanz Lorenzen.",
        rules: "Três jogadores por equipe tentam arremessar a bola rasteira na baliza adversária.",
        equipment: "Bola com guizos internos e vendas faciais para igualar a visão.",
        accessibility: "Linhas da quadra em relevo tátil e silêncio absoluto na torcida durante as jogadas.",
        benefits: "Desenvolvimento da percepção auditiva, orientação espacial e reflexo."
    },
    {
        id: "bocha-paralimpica",
        name: "Bocha Paralímpica",
        category: "Individual/Coletivo",
        disabilityTypes: ["fisica", "multipla"],
        experienceLevel: "todos",
        description: "Esporte de precisão e estratégia praticado por atletas com severo comprometimento motor.",
        history: "Resgatado de jogos gregos antigos e introduzido nos Jogos Paralímpicos em 1984.",
        rules: "Lançar bochas coloridas o mais próximo possível da bocha branca alvo (jack).",
        equipment: "Bochas de couro macio, calhas/rampas e ponteiras de capacete.",
        accessibility: "Uso de calheiros auxiliares orientados pelas instruções do atleta.",
        benefits: "Foco mental, precisão tática e autonomia."
    }
];
