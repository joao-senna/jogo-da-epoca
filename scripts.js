// Agregar categoria selecionada se usuario não escolher nada
// e atualizar categoria selecionada quando usuario escolher algo
var categoriaSelecionada = document.querySelector('[name="categoria"]:checked').value
function atualizarRadio(){
    categoriaSelecionada = document.querySelector('[name="categoria"]:checked').value
}


function atualizarResultado(categoriaSelecionada){
    verResultado.innerHTML = `Você provavelmente está procurando por ${categoriaSelecionada}!`
}

// Função principal. É chamada no clique do botão "Enviar"
function verificar(){

    // Resgatando elementos no HTML
    let verResultado = document.querySelector('.resultado')
    let anoRecebido = Number(document.querySelector("[name=data]").value)
    let imagem = document.querySelector('.foto')
    
    // Condicional para verificar se valor ano foi número e != 0.
    if (isNaN(anoRecebido) || anoRecebido == 0){
        window.alert('Verifique os dados e tente novamente.')
        imagem.src = "imagens/base.png"
        verResultado.innerHTML = `<em>Aguardando entrada de dados...</em>`

    } else{ // Para valores abaixo de 1972 e maiores que 2020
        if (anoRecebido < 1972 || anoRecebido > 2020){
            imagem.src = "imagens/base.png"
            verResultado.innerHTML = `Detectamos uma época que não existia jogos digitais ou ano mais novo que 2020.`
        } else if (anoRecebido >= 1972 && anoRecebido < 1980){ // Para valores entre 1972 e 1979
            switch(categoriaSelecionada){
                case 'Ação':
                    imagem.src = "imagens/1972-1979/pong.webp"
                    atualizarResultado('Pong')
                    break
                case 'Estratégia':
                    imagem.src = "imagens/1972-1979/lunarlander.jpg"
                    atualizarResultado('Lunar Lander')
                    break
                default:
                    imagem.src = "imagens/1972-1979/asteroids.jpg"
                    atualizarResultado('Asteroids')
            }
        } else if (anoRecebido >= 1980 && anoRecebido < 1990){ // Para valores entre 1980 e 1989
            switch(categoriaSelecionada){
                case 'Ação':
                    imagem.src = "imagens/1980-1989/contra.jpg"
                    atualizarResultado('Contra')
                    break
                case 'Estratégia':
                    imagem.src = "imagens/1980-1989/tetris.jpg"
                    atualizarResultado('Tetris')
                    break
                default:
                    imagem.src = "imagens/1980-1989/zelda.jpg"
                    atualizarResultado('The Legend of Zelda')
            }
        } else if (anoRecebido >= 1990 && anoRecebido < 2000){ // Para valores entre 1990 e 1999
            switch(categoriaSelecionada){
                case 'Ação':
                    imagem.src = "imagens/1990-1999/residentevil.webp"
                    atualizarResultado('Resident Evil')
                    break
                case 'Estratégia':
                    imagem.src = "imagens/1990-1999/dragonquest.png"
                    atualizarResultado('Dragon Quest IV')
                    break
                default:
                    imagem.src = "imagens/1990-1999/halflife.jpg"
                    atualizarResultado('Half-life')
            } 
        } else if (anoRecebido >= 2000 && anoRecebido < 2009){ // Para valores entre 2000 e 2009
            switch(categoriaSelecionada){
                case 'Ação':
                    imagem.src = "imagens/2000-2009/godofwar.png"
                    atualizarResultado('God of War')
                    break
                case 'Estratégia':
                    imagem.src = "imagens/2000-2009/warcraft.jpg"
                    atualizarResultado('Warcraft III')
                    break
                default:
                    imagem.src = "imagens/2000-2009/masseffect.jpg"
                    atualizarResultado('Mass Effect')
            }
        }  else if (anoRecebido >= 2010 && anoRecebido < 2020){ // Para valores entre 2010 e 2019
            switch(categoriaSelecionada){
                case 'Ação':
                    imagem.src = "imagens/2010-2019/fortnite.jpg"
                    atualizarResultado('Fortnite - Battle Royale')
                    break
                case 'Estratégia':
                    imagem.src = "imagens/2010-2019/starcraft.jpg"
                    atualizarResultado('StarCraft II: Wings of Liberty')
                    break
                default:
                    imagem.src = "imagens/2010-2019/minecraft.jpg"
                    atualizarResultado('Minecraft')
            }
        }
    }
    // Função para atualizar resultado dinamicamente, evitando repetições.
    function atualizarResultado(nome){
        verResultado.innerHTML = `O jogo de <strong>${categoriaSelecionada}</strong> dessa época é <strong>${nome}!</strong>`
    }    
}
