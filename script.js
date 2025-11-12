const textoCitacaoEl = document.getElementById('textoCitacao');
const autorCitacaoEl = document.getElementById('autorCitacao');
const btnNovaCitacao = document.getElementById('btnNovaCitacao');

const citacoes = [
    {
        texto: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        autor: "Steve Jobs"
    },
    {
        texto: "A persistência é o caminho do êxito.",
        autor: "Charles Chaplin"
    },
    {
        texto: "Se você pode sonhar, você pode realizar",
        autor: "Walt Disney"
    },
    {
        texto: "O segredo do sucesso é fazer as coisas comuns incomumente bem.",
        autor: "John D. Rockefeller Jr."
    },
    {
        texto: "A imaginação é mais importante que o conhecimento.",
        autor: "Albert Einstein"
    },
    {
        texto: "A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.",
        autor: "Nelson Mandela"
    },
    {
        texto: "Na vitória, você merece Champanhe. Na derrota você precisa dele",
        autor: "Napoleão Bonaparte"
    },
    {
        texto: "A base da sociedade é a justiça.",
        autor: "Aristóteles"
    },
    {
        texto: "Onde não há lei, não há liberdade.",
        autor: "John Locke"
    },
    {
        texto: "O céu estrelado acima de mim e a lei moral dentro de mim.",
        autor: "Immanuel Kant"
    },
    {
        texto: "É melhor ser temido do que amado, se não se pode ser ambos.",
        autor: "Maquiavel"
    },
    {
        texto: "Tente mover o mundo - o primeiro passo será mover a si mesmo",
        autor: "Platão"
    },




   
];

function gerarNovaCitacao() {
    
    const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
    
    const citacaoSorteada = citacoes[indiceAleatorio];

    textoCitacaoEl.textContent = `"${citacaoSorteada.texto}"`;
    autorCitacaoEl.textContent = `— ${citacaoSorteada.autor}`;
}

btnNovaCitacao.addEventListener('click', gerarNovaCitacao);

gerarNovaCitacao();
