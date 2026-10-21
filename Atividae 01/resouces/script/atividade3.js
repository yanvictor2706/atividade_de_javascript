 let jogos = [ "UFC", "Pes 2013", "Roblox",  "Free Fire",  "Fifa mobile"
];

let jogoEscolhido = prompt("Digite o nome de um jogo para verificar se está na lista:");

if (jogos.includes(jogoEscolhido)) {
    console.log(`O jogo "${jogoEscolhido}" está na lista!`);
} else {
    console.log(`O jogo "${jogoEscolhido}" não não está na lista.`);
}
