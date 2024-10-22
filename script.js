const botaoCor = document.getElementById('botaoCor');
const botaoSec = document.getElementById('botaoSec');
const colorText = document.getElementById('colorText');

// Função para gerar uma cor

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para trocar a cor de fundo e atualizar o texto
botaoCor.addEventListener('click', function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorText.textContent = `Cor atual: ${newColor}`;
});

//função para a imagem

botaoSec.addEventListener('click', function() {
    let img = document.querySelector('#imageContainer img');

    // Se a imagem já existe, apenas a mostra; senão, cria uma nova imagem
    if (!img) {
        img = document.createElement('img');
        img.src = './Assets/chaos.png'; // URL da imagem
        img.alt = 'Imagem Carregada';
        imageContainer.appendChild(img);
    img.style.display = 'block'; // Exibe a imagem quando é criada
    } else {
        // Alterna a visibilidade da imagem
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
    }
    
});