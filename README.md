# 🏃‍♂️ Maratona Run4Fun - Aplicação TypeScript

Bem-vindo ao projeto **Maratona Run4Fun**! Este é um sistema de gestão de participantes para maratonas, desenvolvido em TypeScript. Ele permite cadastrar, listar, consultar, atualizar e deletar participantes com informações detalhadas sobre suas maratonas.

## 🚀 Funcionalidades

- 📦 **Cadastrar Participantes**: Adicione novos participantes ao sistema.
- 📋 **Listar Participantes**: Veja todos os participantes cadastrados.
- 🔍 **Consultar Participante por ID**: Encontre um participante específico pelo seu ID.
- 🔄 **Atualizar Participante**: Modifique as informações de um participante existente.
- 🗑️ **Deletar Participante**: Remova participantes do sistema.

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **readline-sync**: Biblioteca para interação com o usuário via terminal.

## 📂 Estrutura de Arquivos

```
Run4Fun/
├── src/
│   ├── model/
│   │   ├── Maratona.ts
|   |   ├── MeiaMaratona.ts
│   │   ├── Participante.ts
│   │   └── ParticipanteController.ts
|   |   └── ParticipanteRepository.ts
│   ├── Util
|   |   |── Colors.ts
├── Menu.ts
├── package.json
└── README.md


```

📈 Estrutura e Explicação dos Arquivos
src/model/

Maratona.ts: Subclasse de Participante que representa os participantes de maratonas.
Participante.ts: Classe abstrata que define as propriedades e métodos comuns para todos os participantes.
ParticipanteRepository.ts: Repositório com as assinaturas dos métodos.
ParticipanteController.ts: Controlador que gerencia a lógica de negócios e a interação com o repositório de participantes.

menu.ts
Contém a função principal que inicializa o sistema, exibe o menu e gerencia a navegação entre as opções.


📞 Contato

Email: fmenezes098@gmail.com

LinkedIn: [Fernanda](https://www.linkedin.com/in/fernanda-menezes-ribeiro/)
