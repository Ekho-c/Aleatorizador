
---

# Projeto: Troca de Cor de Fundo e Carregamento de Imagem

Este é um projeto simples de uma página web que contém dois botões. O primeiro botão troca a cor de fundo da página de forma aleatória, e o segundo botão alterna o carregamento e ocultação de uma imagem.

## Funcionalidades

- **Trocar cor de fundo**: O primeiro botão altera a cor de fundo da página para uma cor aleatória.
- **Carregar/Ocultar imagem**: O segundo botão carrega uma imagem (ou a oculta, se já estiver visível) na tela.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização dos elementos e posicionamento dos botões e da imagem.
- **JavaScript**: Lógica de interação, alternando a cor de fundo e o carregamento da imagem.

## Estrutura de Arquivos

```
/
│
├── index.html        # Estrutura HTML da página
├── styles.css        # Arquivo de estilização CSS
└── script.js         # Lógica em JavaScript para interação com os botões
```

## Instruções para Executar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Abrir o arquivo `index.html`**:
   Você pode simplesmente abrir o arquivo `index.html` em um navegador da web para ver o projeto em funcionamento. Não é necessário servidor web, pois o projeto é puramente baseado em front-end.

## Como Funciona

1. **Trocar Cor de Fundo**:
   - Quando o botão "Trocar Cor de Fundo" é clicado, uma função JavaScript gera uma cor hexadecimal aleatória e altera o fundo da página com essa cor.
  
2. **Carregar/Ocultar Imagem**:
   - Quando o botão "Carregar Imagem" é clicado, o script JavaScript verifica se uma imagem já está carregada.
     - Se a imagem não estiver carregada, ela será criada e exibida.
     - Se a imagem já estiver visível, ela será ocultada, alternando a exibição a cada clique.

## Personalização

- **Trocar a imagem**:
  Para substituir a imagem padrão, edite o arquivo `script.js` e substitua o valor da URL da imagem por uma de sua escolha:
  ```javascript
  img.src = 'https://via.placeholder.com/300'; // Substitua pela URL da sua imagem
  ```

- **Ajustar o tamanho da imagem**:
  Você pode ajustar as dimensões da imagem no arquivo `styles.css`, alterando os valores máximos permitidos:
  ```css
  #imageContainer img {
      max-width: 300px;
      max-height: 300px;
  }
  ```

## Exemplo de Uso

Veja o exemplo abaixo do funcionamento da página com os dois botões e suas funções:

1. **Trocar Cor**: Clique no botão "Trocar Cor de Fundo" para alterar a cor de fundo da página.
2. **Carregar Imagem**: Clique no botão "Carregar Imagem" para carregar a imagem no topo da página. Clique novamente para ocultá-la.

## Licença

Este projeto é livre para uso, modificação e distribuição conforme desejar.

---
