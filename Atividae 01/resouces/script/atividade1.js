let senha = "senai@"
let recebe = prompt("Digite sua senha");
let tentativas = 3

while (tentativas > 0) {
    tentativas = tentativas - 1;
if (recebe.toLowerCase().trim()) {
    alert("Acesso permitido");
    break;
}
else {
    if (tentativas === 0){
    alert("Número de tentaivas esgotados, acesso negado.");
    break
 }
alert("Senha incorreta, tentativas restantes:".concat(tentativas));
 recebe = prompt("Digite novamente:")
}
}
