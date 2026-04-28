A gente doa 🤝 - Sistema de Organização de Doações
1 - Apresentação da Ideia
Esse é o meu projeto para o desafio de tecnologia focado em ajuda humanitária. A ideia surgiu a partir do cenário das enchentes no Brasil. Percebi que o maior desafio não é a falta de doações, mas sim a logística de distribuição. Decidi focar no problema de como conectar quem quer ajudar com a necessidade real de cada abrigo.
2 - Problema Escolhido
Escolhi o problema 2 - Organização de Doações. Em situações de calamidade, a mobilização é alta, mas sem organização, ocorre um desequilíbrio: alguns pontos de coleta recebem itens em excesso (gerando desperdício), enquanto outros ficam desassistidos. A ausência de dados em tempo real sobre o que falta em cada local impede que a ajuda seja eficiente e equilibrada.
3 - Solução Proposta
O sistema "A gente doa" funciona como um centralizador de demandas.
•	Transparência: Abrigos cadastram necessidades específicas (ex: "50 kits de higiene").
•	Equilíbrio: O doador visualiza o que ainda falta e onde.
•	Atualização em Tempo Real: Ao registrar uma doação, o sistema abate a quantidade do total necessário, informando aos próximos doadores que aquela demanda está sendo suprida, direcionando-os para outras necessidades urgentes.
4 - Estrutura do Sistema
O projeto foi dividido em três camadas principais para garantir escalabilidade e organização:
•	Front-end: Desenvolvido em React com Vite. A interface foi mantida simples e leve para garantir o carregamento em dispositivos com internet limitada, focando na clareza das informações.
•	Back-end: Construído com Node.js e Express. Ele gerencia as regras de negócio, como o cálculo de saldo de itens e o status das necessidades (pendente, parcial ou concluído).
•	Banco de Dados: Utiliza o PostgreSQL (gerenciado via pgAdmin). A estrutura conta com tabelas relacionadas para locais, necessidades e doacoes, garantindo a integridade dos dados.
