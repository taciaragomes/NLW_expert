const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de backend",
        "Uma linguagem de programação de frontend",
        "Uma linguagem de programação de script usada tanto no frontend quanto no backend",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor apenas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é executada imediatamente após ser definida",
        "Uma função que é passada como argumento para outra função e é executada após algum evento",
        "Uma função que só pode ser chamada uma vez",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um formato de arquivo usado para armazenar dados de websites",
        "A Document Object Model, uma representação do conteúdo de uma página web como um objeto",
        "Um método para organizar funções em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Como se referencia um elemento HTML usando JavaScript?",
      respostas: [
        "Usando o seletor de classe",
        "Usando o seletor de ID",
        "Usando o seletor de tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário de linha única",
        "<!-- Este é um comentário de linha única -->",
        "/* Este é um comentário de linha única */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "'==' compara apenas o valor, enquanto '===' compara tanto o valor quanto o tipo",
        "'==' compara tanto o valor quanto o tipo, enquanto '===' compara apenas o valor",
        "'==' e '===' são idênticos em JavaScript",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de iniciar um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 10; i++)",
        "for (i <= 10; i++)",
        "for (i = 0; i <= 10)",
      ],
      correta: 0
    },
  ];
   
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loap ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode('true')
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      } 
           
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  